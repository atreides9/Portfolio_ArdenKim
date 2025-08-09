'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UXResearchPage() {
  const [interviewText, setInterviewText] = useState('');
  const [insights, setInsights] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateInsights = async () => {
    if (!interviewText) {
      alert('Please enter interview text.');
      return;
    }

    setIsLoading(true);
    setInsights('');

    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: `Extract key insights and create an affinity diagram from this user interview: ${interviewText}` }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate insights.');
      }

      const data = await response.json();
      setInsights('// Placeholder for generated insights and affinity diagram');
    } catch (error) {
      console.error(error);
      alert('An error occurred while generating insights.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold">UX Research Automation Tool</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">사용자 인터뷰 텍스트에서 LLM으로 인사이트를 자동 추출하고 Affinity Diagram을 생성합니다.</p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <textarea
          value={interviewText}
          onChange={(e) => setInterviewText(e.target.value)}
          placeholder="Paste user interview text here"
          className="w-full p-3 border rounded-lg mb-4"
          rows={10}
        />
        <button
          onClick={handleGenerateInsights}
          disabled={isLoading}
          className="bg-primary-600 text-white px-6 py-3 rounded-lg disabled:bg-gray-400 w-full"
        >
          {isLoading ? 'Generating Insights...' : 'Generate Insights'}
        </button>

        {insights && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-8"
          >
            <h3 className="text-lg font-semibold mb-2">Generated Insights:</h3>
            <pre className="whitespace-pre-wrap"><code>{insights}</code></pre>
          </motion.div>
        )}
      </div>
    </div>
  );
}
