'use client';

import { motion } from 'framer-motion';
import { SkillMolecule } from './SkillMolecule';

const storyItems = [
  {
    icon: '🧪',
    title: '나노소재화학 연구',
    description:
      '분자 단위의 정밀한 분석과 체계적인 실험 설계를 통해 과학적 사고력을 기반으로 한 문제 해결 역량을 키웠습니다.',
    skills: ['분석적 사고', '가설 수립', '실험 설계', '데이터 해석'],
  },
  {
    icon: '🔄',
    title: '전환점: 기술과 사람의 접점',
    description:
      '연구 과정에서 사용자 중심의 인터페이스 설계에 관심을 갖게 되었고, 기술과 사람을 연결하는 디자인의 힘을 발견했습니다.',
    skills: ['사용자 리서치', '문제 정의', '아이디어 발굴', '프로토타이핑'],
  },
  {
    icon: '🎨',
    title: '프로덕트 디자인으로의 도약',
    description:
      '과학적 분석력과 창의적 사고를 결합하여 사용자의 문제를 근본적으로 해결하는 디자인 솔루션을 만들어갑니다.',
    skills: ['사용자 경험 설계', '인터랙션 디자인', '비즈니스 임팩트', '팀 협업'],
  },
];

// Skill molecule configuration
const skillsData = [
  { name: '분석적 사고', level: 95, category: 'core' as const },
  { name: 'UX 리서치', level: 88, category: 'design' as const },
  { name: '프로토타이핑', level: 82, category: 'design' as const },
  { name: '시스템 사고', level: 90, category: 'core' as const },
  { name: '인터랙션 디자인', level: 85, category: 'design' as const },
  { name: '문제 해결', level: 92, category: 'soft' as const },
  { name: '데이터 해석', level: 87, category: 'tech' as const },
  { name: '팀 협업', level: 89, category: 'soft' as const },
];

const skillConnections = [
  { from: 0, to: 3, strength: 0.9 }, // 분석적 사고 ↔ 시스템 사고
  { from: 0, to: 6, strength: 0.8 }, // 분석적 사고 ↔ 데이터 해석
  { from: 1, to: 2, strength: 0.7 }, // UX 리서치 ↔ 프로토타이핑
  { from: 1, to: 4, strength: 0.8 }, // UX 리서치 ↔ 인터랙션 디자인
  { from: 2, to: 4, strength: 0.9 }, // 프로토타이핑 ↔ 인터랙션 디자인
  { from: 3, to: 5, strength: 0.8 }, // 시스템 사고 ↔ 문제 해결
  { from: 5, to: 7, strength: 0.7 }, // 문제 해결 ↔ 팀 협업
  { from: 6, to: 0, strength: 0.6 }, // 데이터 해석 ↔ 분석적 사고
];

export function AboutSection() {
  return (
    <section id="about" className="section bg-white dark:bg-gray-800" aria-labelledby="about-title">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="about-title" className="heading-2 text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            과학자에서 디자이너로 전환한 독특한 여정과 3가지 핵심 강점, 
            그리고 사용자 중심 디자인 철학을 소개합니다.
          </p>
        </motion.div>

        {/* 3가지 핵심 강점 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 text-gray-900 dark:text-white mb-4">
              디자이너로서의 3가지 핵심 강점
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              과학적 배경에서 나온 체계적 사고와 사용자 중심의 문제 해결 능력
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔬',
                title: '가설-검증 방법론',
                description: '화학 연구에서 익힌 가설 설정과 검증 과정을 디자인에 적용합니다. 사용자의 행동과 니즈를 가설로 설정하고, 프로토타입과 테스트를 통해 검증하는 체계적 접근법을 사용합니다.',
                keyPoints: ['사용자 가설 수립', '프로토타입 검증', 'A/B 테스트 설계']
              },
              {
                icon: '🎯',
                title: '문제 분해 & 구조화',
                description: '복잡한 분자 구조를 분석하듯 사용자 문제를 체계적으로 분해합니다. 근본 원인을 찾아내고 우선순위를 정해 단계별로 해결하는 접근 방식으로 명확한 솔루션을 도출합니다.',
                keyPoints: ['근본원인 분석', '문제 우선순위화', '단계별 솔루션']
              },
              {
                icon: '📊',
                title: '데이터 기반 의사결정',
                description: '정량적 데이터와 정성적 인사이트를 균형있게 활용합니다. 사용자 리서치 데이터를 객관적으로 분석하고, 비즈니스 임팩트를 측정 가능한 지표로 제시하여 설득력 있는 디자인 결정을 내립니다.',
                keyPoints: ['정량/정성 분석', '지표 기반 검증', '임팩트 측정']
              }
            ].map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group"
              >
                <div className="card p-6 h-full border-l-4 border-primary-500 hover:border-primary-600 transition-colors">
                  <div className="text-4xl mb-4">{strength.icon}</div>
                  <h4 className="heading-4 text-gray-900 dark:text-white mb-4">
                    {strength.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {strength.description}
                  </p>
                  <div className="space-y-2">
                    {strength.keyPoints.map((point) => (
                      <div key={point} className="flex items-center text-sm text-primary-600 dark:text-primary-400">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></span>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 디자인 철학 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 text-gray-900 dark:text-white mb-4">
              디자인 철학
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  🔍 사용자 중심 사고
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  모든 디자인 결정은 사용자의 실제 니즈와 행동에서 시작됩니다. 
                  가정이 아닌 리서치와 데이터를 바탕으로 사용자의 진짜 문제를 발견하고 해결합니다.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  ⚡ 임팩트 중심 디자인
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  아름다운 디자인보다 비즈니스와 사용자에게 실질적 가치를 주는 디자인을 추구합니다. 
                  측정 가능한 목표를 설정하고 지속적으로 개선해나갑니다.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Story Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="heading-3 text-gray-900 dark:text-white mb-4">
              나의 여정
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              과학에서 디자인으로의 전환 과정
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-green-500 md:left-1/2 md:-translate-x-0.5" />

            {/* Story Items */}
            {storyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 w-12 h-12 bg-white dark:bg-gray-800 border-4 border-primary-500 dark:border-primary-400 rounded-full flex items-center justify-center md:left-1/2 md:-translate-x-6 z-10">
                  <span className="text-3xl">{item.icon}</span>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? 'ml-20 md:ml-0 md:pr-16' : 'ml-20 md:ml-0 md:pl-16'}`}
                >
                  <motion.div whileHover={{ scale: 1.02 }} className="card p-6 h-full">
                    <h3 className="heading-3 text-gray-900 dark:text-white mb-4">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        핵심 역량:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 text-gray-900 dark:text-white mb-4">
              스킬 시너지
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              각 스킬은 독립적이지 않습니다. 서로 연결되고 상호작용하며 더 큰 가치를 만들어냅니다.
            </p>
          </div>
          
          <SkillMolecule 
            skills={skillsData}
            connections={skillConnections}
            className="mb-16"
          />
        </motion.div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto card p-8 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20">
            <blockquote className="text-xl font-medium text-gray-900 dark:text-white leading-relaxed">
              "사용자의 진짜 문제를 과학적으로 분석하고,
              <br className="hidden sm:block" />
              데이터에 기반한 창의적 솔루션으로 비즈니스 임팩트를 만들어냅니다."
            </blockquote>
            <cite className="block mt-4 text-primary-600 dark:text-primary-400 font-medium">
              - 김나겸, Product Designer
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
