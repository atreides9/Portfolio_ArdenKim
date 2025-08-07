'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Skill } from '@/lib/types';

const skillsData: Skill[] = [
  // Design Tools (최우선)
  {
    name: 'Figma',
    level: 95,
    category: 'design-tools',
    description: '고급 컴포넌트 시스템, 프로토타이핑, Auto Layout',
  },
  {
    name: 'Adobe XD',
    level: 90,
    category: 'design-tools',
    description: '인터랙션 디자인, 프로토타이핑, 협업',
  },
  {
    name: 'Sketch',
    level: 85,
    category: 'design-tools',
    description: '심볼 라이브러리, 플러그인 에코시스템',
  },
  {
    name: 'Adobe Creative Suite',
    level: 80,
    category: 'design-tools',
    description: 'Photoshop, Illustrator, After Effects',
  },
  {
    name: 'ProtoPie',
    level: 75,
    category: 'design-tools',
    description: '고급 인터랙션 프로토타이핑',
  },
  {
    name: 'Framer',
    level: 70,
    category: 'design-tools',
    description: '코드 기반 프로토타이핑',
  },

  // Research & Strategy (두 번째 우선순위)
  {
    name: 'User Research',
    level: 90,
    category: 'research',
    description: '사용자 인터뷰, 관찰 조사, 에스노그래피',
  },
  {
    name: 'Usability Testing',
    level: 88,
    category: 'research',
    description: '테스크 기반 테스트, 휴리스틱 평가',
  },
  {
    name: 'A/B Testing',
    level: 80,
    category: 'research',
    description: '실험 설계, 통계적 분석, 인사이트 도출',
  },
  {
    name: 'Data Analysis',
    level: 85,
    category: 'research',
    description: 'Google Analytics, Mixpanel, 사용자 행동 분석',
  },
  {
    name: 'Information Architecture',
    level: 85,
    category: 'research',
    description: '카드 소팅, 사이트맵, 사용자 플로우',
  },

  // Collaboration (세 번째 우선순위)
  {
    name: 'Design System',
    level: 88,
    category: 'collaboration',
    description: 'Atomic Design, 컴포넌트 라이브러리, 토큰화',
  },
  {
    name: 'Cross-functional Team',
    level: 95,
    category: 'collaboration',
    description: '개발자, PM, 마케팅 팀과의 협업',
  },
  {
    name: 'Agile & Scrum',
    level: 85,
    category: 'collaboration',
    description: 'Sprint Planning, Daily Standup, Retrospective',
  },
  {
    name: 'Stakeholder Communication',
    level: 90,
    category: 'collaboration',
    description: '디자인 의사결정 설득, 워크샵 진행',
  },
  {
    name: 'Jira & Notion',
    level: 80,
    category: 'collaboration',
    description: '프로젝트 관리, 문서화, 이슈 트래킹',
  },

  // Development (보조 스킬)
  {
    name: 'HTML/CSS',
    level: 85,
    category: 'development',
    description: '시맨틱 마크업, 반응형 디자인',
  },
  {
    name: 'JavaScript',
    level: 70,
    category: 'development',
    description: '프로토타이핑, 디자인 검증',
  },
  {
    name: 'React',
    level: 65,
    category: 'development',
    description: '디자이너-개발자 협업 이해',
  },
];

const skillCategories = [
  { id: 'design-tools', name: 'Design Tools', icon: '🎨', color: 'bg-blue-500' },
  { id: 'research', name: 'Research & Strategy', icon: '🔍', color: 'bg-purple-500' },
  { id: 'collaboration', name: 'Collaboration', icon: '🤝', color: 'bg-orange-500' },
  { id: 'development', name: 'Development', icon: '💻', color: 'bg-green-500' },
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
            skill.category === 'design-tools'
              ? 'bg-blue-500'
              : skill.category === 'development'
                ? 'bg-green-500'
                : skill.category === 'research'
                  ? 'bg-purple-500'
                  : 'bg-orange-500'
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
            Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            전문 디자인 도구부터 사용자 리서치까지, 
            UX/UI 디자이너가 갖춰야 할 핵심 역량들입니다.
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
                    className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center text-white mr-3`}
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
              { value: '6+', label: '디자인 도구', desc: 'Figma부터 ProtoPie까지' },
              { value: '5+', label: '리서치 방법', desc: '정량/정성 조사 경험' },
              { value: '90%', label: '팀 협업 점수', desc: '크로스펑셔널 팀 경험' },
              { value: '3+', label: '완료 프로젝트', desc: 'End-to-end 디자인' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
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
