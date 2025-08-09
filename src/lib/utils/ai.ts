import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import { z } from 'zod';

// Zod schemas for validation
export const ChatMessageSchema = z.object({
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string(),
});

export const ChatRequestSchema = z.object({
  messages: z.array(ChatMessageSchema),
  model: z.enum(['claude-3-5-sonnet-20241022', 'gpt-4', 'gpt-3.5-turbo']).optional(),
  maxTokens: z.number().min(1).max(4000).optional(),
  temperature: z.number().min(0).max(1).optional(),
});

export type ChatMessage = z.infer<typeof ChatMessageSchema>;
export type ChatRequest = z.infer<typeof ChatRequestSchema>;

// Initialize AI clients
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

/**
 * Send a message to Claude 3.5 Sonnet
 */
export async function sendToClaude(
  messages: ChatMessage[],
  options?: {
    maxTokens?: number;
    temperature?: number;
  }
): Promise<string> {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is not configured');
  }

  try {
    const systemMessage = messages.find(m => m.role === 'system');
    const conversationMessages = messages.filter(m => m.role !== 'system');

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: options?.maxTokens || 1000,
      temperature: options?.temperature || 0.7,
      ...(systemMessage?.content && { system: systemMessage.content }),
      messages: conversationMessages.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
    });

    return response.content[0]?.type === 'text' ? response.content[0].text : '';
  } catch (error) {
    console.error('Claude API Error:', error);
    throw new Error('Failed to get response from Claude');
  }
}

/**
 * Send a message to GPT-4
 */
export async function sendToGPT(
  messages: ChatMessage[],
  options?: {
    model?: 'gpt-4' | 'gpt-3.5-turbo';
    maxTokens?: number;
    temperature?: number;
  }
): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured');
  }

  try {
    const response = await openai.chat.completions.create({
      model: options?.model || 'gpt-4',
      max_tokens: options?.maxTokens || 1000,
      temperature: options?.temperature || 0.7,
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to get response from GPT');
  }
}

/**
 * Optimize prompt for better AI responses
 */
export function optimizePrompt(
  userInput: string,
  context?: string
): ChatMessage[] {
  const messages: ChatMessage[] = [
    {
      role: 'system',
      content: `You are an AI assistant helping with a product designer's portfolio. 
      ${context ? `Context: ${context}` : ''}
      
      Provide helpful, accurate, and concise responses. Focus on practical solutions and actionable advice.`,
    },
    {
      role: 'user',
      content: userInput.trim(),
    },
  ];

  return messages;
}

/**
 * Rate limit helper for AI API calls
 */
class RateLimiter {
  private requests: number[] = [];
  private readonly maxRequests: number;
  private readonly timeWindow: number;

  constructor(maxRequests = 10, timeWindowMs = 60000) {
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindowMs;
  }

  async checkRate(): Promise<boolean> {
    const now = Date.now();
    
    // Remove old requests outside the time window
    this.requests = this.requests.filter(
      timestamp => now - timestamp < this.timeWindow
    );

    if (this.requests.length >= this.maxRequests) {
      return false;
    }

    this.requests.push(now);
    return true;
  }
}

export const aiRateLimiter = new RateLimiter(10, 60000); // 10 requests per minute

/**
 * Safe AI call with error handling and rate limiting
 */
export async function safeAICall<T>(
  apiCall: () => Promise<T>,
  fallback?: T
): Promise<T | null> {
  try {
    const canProceed = await aiRateLimiter.checkRate();
    if (!canProceed) {
      console.warn('AI API rate limit exceeded');
      return fallback || null;
    }

    return await apiCall();
  } catch (error) {
    console.error('AI API call failed:', error);
    return fallback || null;
  }
}