'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils/cn';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Performance-optimized scroll animations
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const handleScrollToAiLab = () => {
    const aiLabSection = document.getElementById('ai-lab');
    if (aiLabSection) {
      aiLabSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
      aria-labelledby="hero-title"
    >
      {/* Background gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-gray-900/50" />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex min-h-screen items-center"
      >
        <div className="container">
          <div className="flex justify-center items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-medium text-blue-700 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300"
              >
                <span className="mr-2">🤖</span>
                AI-Augmented Product Designer & Builder
              </motion.div>

              {/* Main Title */}
              <div className="space-y-4">
                <motion.h1
                  id="hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
                >
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    AI × Design × Build
                  </span>
                  <span className="block text-2xl font-medium text-gray-600 dark:text-gray-300 sm:text-3xl lg:text-4xl mt-2">
                    디자인하고, AI로 구현하고, 실제로 작동하는
                    <strong className="text-gray-900 dark:text-white"> 도구를 만드는 빌더</strong>
                    입니다
                  </span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl"
              >
                화학자에서 디자이너, 그리고 AI 빌더로.
                <strong className="text-gray-900 dark:text-white"> Claude, GPT-4와 함께</strong>
                단순히 디자인만 하는 것이 아니라 실제로 사람들이 사용하는
                <strong className="text-blue-600 dark:text-blue-400">
                  {' '}
                  AI 도구를 직접 만들고 운영
                </strong>
                합니다.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <button
                  onClick={handleScrollToAiLab}
                  className={cn(
                    'group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white',
                    'hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    'transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg',
                    'font-medium'
                  )}
                  aria-label="AI Lab 섹션으로 이동"
                >
                  <span className="relative z-10 flex items-center">
                    🧪 AI Lab 체험하기
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </button>

                <button
                  onClick={handleScrollToProjects}
                  className={cn(
                    'rounded-lg border-2 border-gray-300 px-8 py-4 text-gray-700 dark:border-gray-600 dark:text-gray-300',
                    'hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700',
                    'dark:hover:border-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-300',
                    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    'transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md',
                    'font-medium'
                  )}
                  aria-label="프로젝트 섹션으로 이동"
                >
                  포트폴리오 보기
                </button>
              </motion.div>

              {/* AI Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                {[
                  { value: '3', label: 'Live AI 도구', icon: '🚀' },
                  { value: '2,100+', label: '실사용자', icon: '👥' },
                  { value: '95%', label: 'AI 정확도', icon: '🎯' },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                      className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center justify-center gap-1">
                      <span>{stat.icon}</span>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
