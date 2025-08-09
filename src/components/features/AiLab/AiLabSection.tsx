'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AI_PROJECTS, getTotalAiToolUsage } from '@/lib/constants/aiProjects';
import { cn } from '@/lib/utils/cn';

export function AiLabSection() {
  const [totalUsage, setTotalUsage] = useState(0);

  useEffect(() => {
    setTotalUsage(getTotalAiToolUsage());
  }, []);

  return (
    <section
      id="ai-lab"
      className="section bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20"
      aria-labelledby="ai-lab-title"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="ai-lab-title" className="heading-2 text-gray-900 dark:text-white mb-4">
            AI Lab 🧪
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            실제로 작동하는 AI 도구들을 직접 만들고 운영합니다. 
            아이디어부터 구현, 배포, 사용자 피드백까지 전 과정을 경험합니다.
          </p>
          
          {/* Live Usage Counter */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-sm font-medium text-green-700 dark:text-green-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>{totalUsage.toLocaleString()}+ 명이 사용 중</span>
          </div>
        </motion.div>

        {/* AI Tools Grid */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {AI_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className={cn(
                "relative p-6 rounded-2xl border-2 transition-all duration-300",
                "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
                "group-hover:border-primary-300 dark:group-hover:border-primary-600",
                "group-hover:shadow-xl group-hover:-translate-y-2"
              )}>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    project.status === 'live' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                    project.status === 'beta' && "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
                    project.status === 'coming-soon' && "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                  )}>
                    {project.status === 'live' && '🟢 Live'}
                    {project.status === 'beta' && '🟡 Beta'}
                    {project.status === 'coming-soon' && '⏳ Coming Soon'}
                  </span>
                </div>

                {/* Project Icon and Gradient */}
                <div className={cn(
                  "w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-2xl",
                  `bg-gradient-to-br ${project.gradient}`
                )}>
                  {project.icon}
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    AI APIs:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.apiUsage.map((api) => (
                      <span
                        key={api}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded"
                      >
                        {api}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg text-center text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      라이브 데모
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-center text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </Link>
                  )}
                </div>

                {/* Usage Count */}
                {project.usageCount && project.usageCount > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="mr-2">👥</span>
                      {project.usageCount.toLocaleString()}명 사용
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            AI-Augmented Workflow
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "AI 도구 개발",
                description: "Claude, GPT-4 등 최신 LLM을 활용해 실제 문제를 해결하는 도구를 만듭니다",
                icon: "🛠️"
              },
              {
                step: "02", 
                title: "실시간 배포",
                description: "Vercel을 통해 즉시 배포하고 실사용자의 피드백을 받습니다",
                icon: "🚀"
              },
              {
                step: "03",
                title: "데이터 기반 개선",
                description: "사용자 데이터와 피드백을 분석해 지속적으로 도구를 개선합니다",
                icon: "📊"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-2">
                  STEP {item.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12"
          >
            <Link
              href="/ai-tools"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>전체 AI 도구 보기</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}