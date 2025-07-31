'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Skill } from '@/lib/types';

const skillsData: Skill[] = [
  // Design Tools
  { name: 'Figma', level: 95, category: 'design-tools', description: '고급 컴포넌트 시스템 및 프로토타이핑' },
  { name: 'Sketch', level: 85, category: 'design-tools', description: '심볼 라이브러리 및 플러그인 활용' },
  { name: 'Adobe Creative Suite', level: 80, category: 'design-tools', description: 'Photoshop, Illustrator, After Effects' },
  { name: 'Principle', level: 75, category: 'design-tools', description: '인터랙션 프로토타이핑' },

  // Development
  { name: 'HTML/CSS', level: 90, category: 'development', description: '반응형 웹 디자인 및 애니메이션' },
  { name: 'JavaScript', level: 75, category: 'development', description: 'ES6+, DOM 조작, 이벤트 처리' },
  { name: 'React', level: 70, category: 'development', description: '컴포넌트 기반 UI 개발' },
  { name: 'Next.js', level: 65, category: 'development', description: 'SSG, 성능 최적화' },

  // Research & Strategy
  { name: 'User Research', level: 90, category: 'research', description: '인터뷰, 설문조사, 사용성 테스트' },
  { name: 'Data Analysis', level: 85, category: 'research', description: '사용자 행동 분석 및 인사이트 도출' },
  { name: 'A/B Testing', level: 80, category: 'research', description: '실험 설계 및 통계적 검증' },
  { name: 'Information Architecture', level: 85, category: 'research', description: '정보 구조 설계 및 카드 소팅' },

  // Collaboration
  { name: 'Project Management', level: 85, category: 'collaboration', description: 'Agile, Scrum 방법론 적용' },
  { name: 'Cross-functional Team', level: 95, category: 'collaboration', description: '개발자, PM과의 협업 경험' },
  { name: 'Design System', level: 88, category: 'collaboration', description: '확장 가능한 디자인 시스템 구축' },
  { name: 'Stakeholder Communication', level: 90, category: 'collaboration', description: '비즈니스 요구사항 분석 및 제안' },
];

const skillCategories = [
  { id: 'design-tools', name: 'Design Tools', icon: '🎨', color: 'bg-blue-500' },
  { id: 'development', name: 'Development', icon: '💻', color: 'bg-green-500' },
  { id: 'research', name: 'Research & Strategy', icon: '🔍', color: 'bg-purple-500' },
  { id: 'collaboration', name: 'Collaboration', icon: '🤝', color: 'bg-orange-500' },
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
        <h4 className="font-medium text-gray-900 dark:text-white">
          {skill.name}
        </h4>
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
            skill.category === 'design-tools' ? 'bg-blue-500' :
            skill.category === 'development' ? 'bg-green-500' :
            skill.category === 'research' ? 'bg-purple-500' :
            'bg-orange-500'
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
          <h2 
            id="skills-title" 
            className="heading-2 text-gray-900 dark:text-white mb-4"
          >
            Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            디자인과 개발을 아우르는 역량. 사용자 중심의 디자인 사고와 
            기술적 구현 능력을 바탕으로 완성도 높은 솔루션을 제공합니다.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skillsData.filter(skill => skill.category === category.id);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  delay: categoryIndex * 0.1, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="card p-6 h-fit"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center text-white mr-3`}>
                    <span className="text-lg">{category.icon}</span>
                  </div>
                  <h3 className="heading-3 text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={skillIndex} 
                    />
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
              { value: '4+', label: '연구 분야 경험', desc: '나노소재화학 전문성' },
              { value: '15+', label: '디자인 도구', desc: '전문가 수준 활용' },
              { value: '3+', label: '프로젝트 완료', desc: '실제 임팩트 창출' },
              { value: '100%', label: '팀워크', desc: '협업 중심 사고' },
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
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}