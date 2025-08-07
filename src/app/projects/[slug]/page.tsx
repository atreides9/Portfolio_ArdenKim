'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Hash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/constants/projects';
import { useDeviceDetect } from '@/lib/hooks/useDeviceDetect';
import { useState, useEffect } from 'react';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { prefersReducedMotion } = useDeviceDetect();
  const project = PROJECTS.find((p) => p.id === params.slug);
  const [activeSection, setActiveSection] = useState('');
  const otherProjects = PROJECTS.filter((p) => p.id !== params.slug);

  if (!project) {
    notFound();
  }

  // Starbucks project sections
  const starbucksSections = [
    { id: 'problem', title: 'Problem Statement', icon: Hash },
    { id: 'research', title: 'Research & Discovery', icon: Hash },
    { id: 'design', title: 'Design Process', icon: Hash },
    { id: 'solution', title: 'Solution', icon: Hash },
    { id: 'impact', title: 'Impact & Learning', icon: Hash }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = starbucksSections.map(s => s.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">{/* Add top padding for fixed navigation */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Only for Starbucks project */}
          {project.id === 'starbucks-redesign' && (
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    프로젝트 구성
                  </h3>
                  <nav className="space-y-2">
                    {starbucksSections.map((section) => {
                      const IconComponent = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            activeSection === section.id
                              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span className="text-sm font-medium">{section.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
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
              <h2 id="problem" className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
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

                    <div id="research" className="pt-8">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Research & Discovery
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        사용자 인터뷰와 행동 분석을 통해 기존 앱의 주요 문제점을 도출했습니다. 
                        복잡한 메뉴 구조와 느린 주문 과정이 사용자 이탈의 주요 원인이었습니다.
                      </p>
                    </div>

                    <div id="design" className="pt-8">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Design Process
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        사용자의 일상 속에서 자연스럽게 스며드는 디자인을 추구했습니다. 
                        스타벅스의 브랜드 아이덴티티를 유지하면서도 현대적이고 직관적인 
                        사용자 경험을 제공하는 것이 목표였습니다.
                      </p>
                    </div>

                    <div id="solution" className="pt-8">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Solution
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        개인화된 대시보드와 원터치 재주문 시스템으로 사용자의 주문 시간을 대폭 단축했습니다. 
                        카테고리별 메뉴 재구성으로 탐색 효율성을 크게 개선했습니다.
                      </p>
                    </div>

                    <div id="impact" className="pt-8">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Impact & Learning
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        주문 완료율 45% 향상과 사용 시간 2.3배 증가라는 성과를 달성했습니다. 
                        사용자 중심의 디자인이 비즈니스 성과로 직결됨을 확인했습니다.
                      </p>
                    </div>
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

        {/* Project Image - Now placed after content */}
        {project.id === 'starbucks-redesign' && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: prefersReducedMotion ? 0 : 0.6 }}
            className="mb-16"
          >
            <div className="relative">
              <Image
                src="/images/projects/web3.png"
                alt="Starbucks 앱 리디자인 - 모바일 세로형 화면"
                width={1200}
                height={2400}
                className="w-full h-auto rounded-2xl shadow-2xl"
                sizes="100vw"
              />
            </div>
          </motion.div>
        )}

        {/* Other Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: prefersReducedMotion ? 0 : 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            다른 프로젝트 보기
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((otherProject) => (
              <Link
                key={otherProject.id}
                href={`/projects/${otherProject.id}`}
                className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={otherProject.imageUrl}
                    alt={otherProject.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {otherProject.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {otherProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {otherProject.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 1.0, delay: prefersReducedMotion ? 0 : 1.0 }}
          className="border-t border-gray-200 dark:border-gray-800 pt-8"
        >
          <div className="flex justify-center">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>홈으로 돌아가기</span>
            </Link>
          </div>
        </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}