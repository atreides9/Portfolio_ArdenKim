import { type NextRequest, NextResponse } from 'next/server';
import { ChatRequestSchema, safeAICall, sendToClaude } from '@/lib/utils/ai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request
    const validatedRequest = ChatRequestSchema.parse(body);

    // Call AI with safety wrapper
    const response = await safeAICall(
      () =>
        sendToClaude(validatedRequest.messages, {
          ...(validatedRequest.maxTokens && { maxTokens: validatedRequest.maxTokens }),
          ...(validatedRequest.temperature && { temperature: validatedRequest.temperature }),
        }),
      'Sorry, I am unable to process your request at the moment. Please try again later.'
    );

    if (!response) {
      return NextResponse.json({ error: 'AI service is currently unavailable' }, { status: 503 });
    }

    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('AI Chat API Error:', error);

    if (error instanceof Error && error.message.includes('parse')) {
      return NextResponse.json({ error: 'Invalid request format' }, { status: 400 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Optional: GET endpoint for health check
export async function GET() {
  return NextResponse.json({
    status: 'AI Chat API is running',
    timestamp: new Date().toISOString(),
    models: ['claude-3-5-sonnet-20241022', 'gpt-4'],
  });
}
