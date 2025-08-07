'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/constants/projects';
import { useDeviceDetect } from '@/lib/hooks/useDeviceDetect';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { prefersReducedMotion } = useDeviceDetect();
  const project = PROJECTS.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>돌아가기</span>
            </Link>
            
            {/* {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>라이브 보기</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )} */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.6 }}
          className="mb-12"
        >
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{project.completedAt.toLocaleDateString('ko-KR')}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Tag className="w-4 h-4" />
              <span>{project.category}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

          {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
          className="mb-16"
        >
          {/* web Image - Starbucks specific */}
          {project.id === 'starbucks-redesign' && (
            <div className="relative mb-8">
              <div className="relative w-full">
                <Image
                  src="/images/projects/web2.png"
                  alt="Starbucks 앱 리디자인 - 모바일 세로형 화면"
                  width={1200}
                  height={2400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: prefersReducedMotion ? 0 : 0.4 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                프로젝트 개요
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {project.id === 'starbucks-redesign' && (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      주요 개선 사항
                    </h3>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                      <li>• 직관적인 메뉴 탐색 시스템으로 주문 과정 단순화</li>
                      <li>• 개인화된 추천 시스템을 통한 사용자 경험 향상</li>
                      <li>• 모바일 최적화된 인터페이스 디자인</li>
                      <li>• 빠른 재주문 기능으로 사용자 편의성 증대</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      디자인 철학
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      사용자의 일상 속에서 자연스럽게 스며드는 디자인을 추구했습니다. 
                      스타벅스의 브랜드 아이덴티티를 유지하면서도 현대적이고 직관적인 
                      사용자 경험을 제공하는 것이 목표였습니다.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Metrics */}
              {project.metrics && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    프로젝트 성과
                  </h3>
                  <div className="space-y-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index}>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Info */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  프로젝트 정보
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">완료일</div>
                    <div className="text-gray-900 dark:text-white">{project.completedAt.toLocaleDateString('ko-KR')}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">카테고리</div>
                    <div className="text-gray-900 dark:text-white">{project.category}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">기술 스택</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: prefersReducedMotion ? 0 : 0.6 }}
          className="border-t border-gray-200 dark:border-gray-800 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>다른 프로젝트 보기</span>
            </Link>
            
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>라이브 사이트 방문</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}