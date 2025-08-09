'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AI_SKILLS } from '@/lib/constants/skills';

const skillCategories = [
  { id: 'AI Engineering', name: 'AI Engineering', icon: '🤖', color: 'bg-blue-500' },
  { id: 'Design + AI', name: 'Design + AI', icon: '🎨', color: 'bg-purple-500' },
  { id: 'Rapid Prototyping', name: 'Rapid Prototyping', icon: '⚡️', color: 'bg-orange-500' },
];

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

function SkillBar({ name, level, index }: SkillBarProps) {
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
        <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
          {level}%
        </span>
      </div>

      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-blue-500"
        />
        <motion.div
          initial={{ x: '-100%' }}
          animate={isInView ? { x: '100%' } : {}}
          transition={{ delay: index * 0.1 + 1.3, duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </div>
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="skills-title" className="heading-2 text-gray-900 dark:text-white mb-4">
            AI-Centric Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            AI 엔지니어링, AI 기반 디자인, 그리고 빠른 프로토타이핑에 걸친 저의 핵심 역량입니다.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = AI_SKILLS[category.id as keyof typeof AI_SKILLS];

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
                <div className="flex items-center mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center text-white mr-3`}
                  >
                    <span className="text-lg">{category.icon}</span>
                  </div>
                  <h3 className="heading-3 text-gray-900 dark:text-white">{category.name}</h3>
                </div>

                <div className="space-y-6">
                  {Object.entries(categorySkills).map(([name, level], skillIndex) => (
                    <SkillBar key={name} name={name} level={level} index={skillIndex} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}