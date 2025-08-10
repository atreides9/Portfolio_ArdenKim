'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Skill } from '@/lib/types';

const skillsData: Skill[] = [
  // AI Integration (최우선)
  {
    name: 'Claude 3.5 Sonnet',
    level: 95,
    category: 'ai-integration',
    description: '코드 생성, 디자인 분석, 자연어 처리 API 활용',
  },
  {
    name: 'GPT-4 & OpenAI APIs',
    level: 90,
    category: 'ai-integration',
    description: '텍스트 생성, 이미지 분석, 함수 호출 최적화',
  },
  {
    name: 'Prompt Engineering',
    level: 95,
    category: 'ai-integration',
    description: '최적화된 프롬프트 설계, Chain-of-Thought',
  },
  {
    name: 'AI-Assisted Design',
    level: 88,
    category: 'ai-integration',
    description: 'AI 기반 디자인 자동화, 워크플로우 최적화',
  },
  {
    name: 'LangChain & AI Agents',
    level: 80,
    category: 'ai-integration',
    description: 'AI 워크플로우 구축, 멀티 에이전트 시스템',
  },

  // Full-Stack Development (두 번째 우선순위)
  {
    name: 'Next.js 14',
    level: 90,
    category: 'development',
    description: 'App Router, Server Actions, 최적화',
  },
  {
    name: 'TypeScript',
    level: 88,
    category: 'development',
    description: '타입 안전성, 대규모 애플리케이션 설계',
  },
  {
    name: 'React & Modern JS',
    level: 85,
    category: 'development',
    description: 'Hooks, Context, 상태 관리, 성능 최적화',
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    category: 'development',
    description: '유틸리티 퍼스트 CSS, 커스텀 디자인 시스템',
  },
  {
    name: 'Database & APIs',
    level: 75,
    category: 'development',
    description: 'Supabase, PostgreSQL, REST/GraphQL',
  },

  // AI-Augmented UX (세 번째 우선순위)
  {
    name: 'AI-Powered Research',
    level: 92,
    category: 'ai-research',
    description: '자동 인사이트 추출, 패턴 분석, 페르소나 생성',
  },
  {
    name: 'Data-Driven Design',
    level: 85,
    category: 'ai-research',
    description: '사용자 행동 예측, A/B 테스트 자동화',
  },
  {
    name: 'Natural Language UX',
    level: 80,
    category: 'ai-research',
    description: 'ChatGPT 스타일 인터페이스, 대화형 UI',
  },
  {
    name: 'AI Ethics & Bias',
    level: 78,
    category: 'ai-research',
    description: 'AI 편향성 분석, 윤리적 AI 설계',
  },

  // Traditional Design (보완 스킬)
  {
    name: 'Figma',
    level: 95,
    category: 'design-tools',
    description: '고급 프로토타이핑, AI 플러그인 활용',
  },
  {
    name: 'Design Systems',
    level: 90,
    category: 'design-tools',
    description: 'AI 생성 컴포넌트, 자동화된 디자인 토큰',
  },
  {
    name: 'User Research',
    level: 88,
    category: 'design-tools',
    description: 'AI 보조 인터뷰 분석, 자동 리포트 생성',
  },
  {
    name: 'Prototyping',
    level: 85,
    category: 'design-tools',
    description: 'AI 기반 인터랙션, 코드 프로토타입',
  },
];

const skillCategories = [
  {
    id: 'ai-integration',
    name: 'AI Integration',
    icon: '🤖',
    color: 'bg-gradient-to-br from-blue-500 to-purple-600',
  },
  {
    id: 'development',
    name: 'Full-Stack Development',
    icon: '⚡',
    color: 'bg-gradient-to-br from-green-500 to-teal-600',
  },
  {
    id: 'ai-research',
    name: 'AI-Augmented UX',
    icon: '🧠',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
  },
  {
    id: 'design-tools',
    name: 'Design Foundation',
    icon: '🎨',
    color: 'bg-gradient-to-br from-orange-500 to-red-500',
  },
];

interface SkillBarProps {
  skill: Skill;
  index: number;
}

function SkillBar({ skill, index }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
          {skill.level}%
        </span>
      </div>

      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full rounded-full ${
            skill.category === 'ai-integration'
              ? 'bg-gradient-to-r from-blue-500 to-purple-600'
              : skill.category === 'development'
                ? 'bg-gradient-to-r from-green-500 to-teal-600'
                : skill.category === 'ai-research'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600'
                  : 'bg-gradient-to-r from-orange-500 to-red-500'
          }`}
        />

        {/* Shine effect */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={isInView ? { x: '100%' } : {}}
          transition={{ delay: index * 0.1 + 1.3, duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </div>

      {skill.description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {skill.description}
        </p>
      )}
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section bg-gray-50 dark:bg-gray-900"
      aria-labelledby="skills-title"
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
          <h2 id="skills-title" className="heading-2 text-gray-900 dark:text-white mb-4">
            AI × Design × Code
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            🤖 <strong>AI API 활용</strong>부터 <strong>풀스택 개발</strong>까지, 실제로 작동하는
            도구를 만드는 AI-Augmented Builder의 역량입니다.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skillsData.filter((skill) => skill.category === category.id);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  delay: categoryIndex * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card p-6 h-fit"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center text-white mr-3 shadow-lg`}
                  >
                    <span className="text-lg">{category.icon}</span>
                  </div>
                  <h3 className="heading-3 text-gray-900 dark:text-white">{category.name}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '5+', label: 'AI APIs', desc: 'Claude, GPT-4, OpenAI', icon: '🤖' },
              { value: '3+', label: 'Live AI 도구', desc: '실제 사용자 2,100+명', icon: '⚡' },
              { value: '95%', label: 'AI 정확도', desc: 'Prompt Engineering', icon: '🎯' },
              { value: '10+', label: '기술 스택', desc: 'Next.js, TypeScript 등', icon: '🛠️' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
