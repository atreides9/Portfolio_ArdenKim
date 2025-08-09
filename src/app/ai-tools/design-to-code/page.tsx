'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DesignToCodePage() {
  const [figmaUrl, setFigmaUrl] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateCode = async () => {
    if (!figmaUrl) {
      alert('Please enter a Figma URL.');
      return;
    }

    setIsLoading(true);
    setGeneratedCode('');

    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: `Convert the design from this Figma URL to a React component: ${figmaUrl}` }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate code.');
      }

      const data = await response.json();
      // This is a placeholder, the actual implementation will be more complex
      setGeneratedCode(`// Generated code for ${figmaUrl}\n\nconst MyComponent = () => (\n  <div>Hello, World!</div>\n);\n\nexport default MyComponent;`);
    } catch (error) {
      console.error(error);
      alert('An error occurred while generating the code.');
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
        <h1 className="text-4xl font-bold">Design-to-Code AI Pipeline</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">Figma 디자인을 Claude로 React 컴포넌트 자동 생성</p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={figmaUrl}
            onChange={(e) => setFigmaUrl(e.target.value)}
            placeholder="Enter Figma URL"
            className="flex-grow p-3 border rounded-lg"
          />
          <button
            onClick={handleGenerateCode}
            disabled={isLoading}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg disabled:bg-gray-400"
          >
            {isLoading ? 'Generating...' : 'Generate Code'}
          </button>
        </div>

        {generatedCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Generated Code:</h3>
            <pre className="whitespace-pre-wrap"><code>{generatedCode}</code></pre>
          </motion.div>
        )}
      </div>
    </div>
  );
}