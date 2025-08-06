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
                className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
              >
                <span className="mr-2">🧪</span>
                화학에서 디자인으로
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
                  <span className="block text-primary-600 dark:text-primary-400">
                    Product Designer
                  </span>
                  <span className="block text-2xl font-medium text-gray-600 dark:text-gray-300 sm:text-3xl lg:text-4xl mt-2">
                    화학 연구에서 배운 체계적 사고로
                    복잡한 사용자 문제를 분자 단위로 분해하고
                    새로운 결합을 통해 솔루션을 설계합니다
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
                나노소재화학에서 프로덕트 디자인으로. 과학적 사고와 창의적 문제해결이 만나는
                지점에서
                <strong className="text-gray-900 dark:text-white"> 사용자 경험을 설계</strong>
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
                  onClick={handleScrollToProjects}
                  className={cn(
                    'group relative overflow-hidden rounded-lg bg-primary-600 px-8 py-4 text-white',
                    'hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                    'transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg',
                    'font-medium'
                  )}
                  aria-label="프로젝트 섹션으로 이동"
                >
                  <span className="relative z-10 flex items-center">
                    프로젝트 보기
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>

                <button
                  onClick={handleScrollToContact}
                  className={cn(
                    'rounded-lg border-2 border-gray-300 px-8 py-4 text-gray-700 dark:border-gray-600 dark:text-gray-300',
                    'hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700',
                    'dark:hover:border-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-300',
                    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                    'transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md',
                    'font-medium'
                  )}
                  aria-label="연락처 섹션으로 이동"
                >
                  연락하기
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                {[
                  { value: '3+', label: '프로젝트' },
                  { value: '95%', label: '사용자 만족도' },
                  { value: '70%', label: '효율성 개선' },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                      className="text-2xl font-bold text-primary-600 dark:text-primary-400"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 dark:text-gray-500"
        >
          <span className="text-sm mb-2">Scroll</span>
          <div className="w-0.5 h-8 bg-current opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
