'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function StartupToolkitPage() {
  const [idea, setIdea] = useState('');
  const [plan, setPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneratePlan = async () => {
    if (!idea) {
      alert('Please enter your startup idea.');
      return;
    }

    setIsLoading(true);
    setPlan('');

    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: `Generate an MVP plan, tech stack, and roadmap for this startup idea: ${idea}` }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate plan.');
      }

      const data = await response.json();
      setPlan('// Placeholder for generated MVP plan, tech stack, and roadmap');
    } catch (error) {
      console.error(error);
      alert('An error occurred while generating the plan.');
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
        <h1 className="text-4xl font-bold">1-Person Startup Toolkit</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">아이디어를 입력하면 MVP 기획서, 기술 스택, 개발 로드맵을 자동 생성합니다.</p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Enter your startup idea here"
          className="w-full p-3 border rounded-lg mb-4"
          rows={5}
        />
        <button
          onClick={handleGeneratePlan}
          disabled={isLoading}
          className="bg-primary-600 text-white px-6 py-3 rounded-lg disabled:bg-gray-400 w-full"
        >
          {isLoading ? 'Generating Plan...' : 'Generate Plan'}
        </button>

        {plan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-8"
          >
            <h3 className="text-lg font-semibold mb-2">Generated Plan:</h3>
            <pre className="whitespace-pre-wrap"><code>{plan}</code></pre>
          </motion.div>
        )}
      </div>
    </div>
  );
}
