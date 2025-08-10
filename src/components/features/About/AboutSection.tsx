'use client';

import { motion } from 'framer-motion';
import { SkillMolecule } from './SkillMolecule';

const storyItems = [
  {
    icon: '🧪',
    title: '화학자: 분자부터 시작',
    description:
      '나노소재 연구에서 분자 단위의 정밀한 분석과 가설-검증 방법론을 익혔습니다. 복잡한 화학 구조를 이해하는 체계적 사고가 지금의 AI 시스템 설계 능력의 기초가 되었습니다.',
    skills: ['과학적 방법론', '체계적 분석', '가설-검증', '데이터 해석'],
  },
  {
    icon: '🎨',
    title: '디자이너: 사용자 중심으로',
    description:
      '기술과 사람의 접점에서 UX 디자인의 힘을 발견했습니다. 화학 연구의 정밀함을 사용자 리서치에 적용하며, 데이터 기반 디자인 솔루션을 만드는 방법을 익혔습니다.',
    skills: ['사용자 리서치', 'UX 디자인', '프로토타이핑', '데이터 분석'],
  },
  {
    icon: '🤖',
    title: 'AI 빌더: 실제 도구 제작',
    description:
      '2024년, ChatGPT와 Claude의 등장으로 새로운 가능성을 발견했습니다. 디자인만 하는 것이 아니라 AI API를 활용해 실제로 사람들이 사용하는 도구를 직접 만들고 운영하기 시작했습니다.',
    skills: ['AI API 활용', 'Prompt Engineering', 'Full-Stack 개발', 'Live 서비스 운영'],
  },
];

// AI-focused skill molecule configuration
const skillsData = [
  { name: 'AI Integration', level: 95, category: 'tech' as const },
  { name: '시스템 사고', level: 95, category: 'core' as const },
  { name: 'Prompt Engineering', level: 92, category: 'tech' as const },
  { name: '풀스택 개발', level: 88, category: 'tech' as const },
  { name: 'UX 디자인', level: 90, category: 'design' as const },
  { name: '문제 해결', level: 94, category: 'core' as const },
  { name: '데이터 분석', level: 87, category: 'tech' as const },
  { name: 'API 설계', level: 85, category: 'tech' as const },
];

const skillConnections = [
  { from: 0, to: 2, strength: 0.95 }, // AI Integration ↔ Prompt Engineering
  { from: 0, to: 3, strength: 0.8 }, // AI Integration ↔ 풀스택 개발
  { from: 1, to: 5, strength: 0.9 }, // 시스템 사고 ↔ 문제 해결
  { from: 2, to: 7, strength: 0.8 }, // Prompt Engineering ↔ API 설계
  { from: 3, to: 7, strength: 0.9 }, // 풀스택 개발 ↔ API 설계
  { from: 4, to: 5, strength: 0.85 }, // UX 디자인 ↔ 문제 해결
  { from: 1, to: 6, strength: 0.8 }, // 시스템 사고 ↔ 데이터 분석
  { from: 6, to: 0, strength: 0.7 }, // 데이터 분석 ↔ AI Integration
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
            화학자 → 디자이너 → AI 빌더
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            🧪 분자부터 시작해 🎨 사용자 경험을 거쳐 🤖 AI로 실제 도구를 만드는
            <strong className="text-blue-600 dark:text-blue-400">
              {' '}
              독특한 여정과 3가지 핵심 역량
            </strong>
            을 소개합니다.
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
              AI 빌더로서의 3가지 핵심 역량
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              과학자의 체계적 사고 × 디자이너의 사용자 관점 × 개발자의 구현 능력
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'AI 시스템 설계 & 운영',
                description:
                  'Claude 3.5 Sonnet, GPT-4 등 최신 LLM API를 활용해 실제 문제를 해결하는 AI 도구를 설계하고 운영합니다. 단순 활용이 아닌 프롬프트 최적화와 워크플로우 설계로 95% 정확도를 달성합니다.',
                keyPoints: ['LLM API 활용', '프롬프트 엔지니어링', 'AI 워크플로우 설계'],
              },
              {
                icon: '⚡',
                title: '풀스택 개발 & 실현',
                description:
                  '디자인에서 끝나지 않고 Next.js, TypeScript로 직접 구현합니다. 사용자가 실제로 사용할 수 있는 완성된 제품을 만들어 2,100+명이 사용하는 라이브 서비스를 운영하고 있습니다.',
                keyPoints: ['Next.js 14 구현', 'TypeScript 활용', 'Live 서비스 운영'],
              },
              {
                icon: '🔬',
                title: '과학적 검증 & 개선',
                description:
                  '화학 연구의 가설-검증 방법론을 AI 도구 개발에 적용합니다. 사용자 피드백과 사용 데이터를 분석해 지속적으로 개선하며, A/B 테스트로 기능의 효과를 객관적으로 검증합니다.',
                keyPoints: ['사용자 데이터 분석', 'A/B 테스트 설계', '지속적 개선'],
              },
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
                  <h4 className="heading-4 text-gray-900 dark:text-white mb-4">{strength.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {strength.description}
                  </p>
                  <div className="space-y-2">
                    {strength.keyPoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-center text-sm text-primary-600 dark:text-primary-400"
                      >
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
            <h3 className="heading-3 text-gray-900 dark:text-white mb-4">AI 빌더 철학</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  🚀 실제로 작동하는 도구
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  컨셉이나 프로토타입에서 끝나지 않습니다. 실제 사용자가 매일 사용하는 라이브 AI
                  도구를 만들고 운영하며, 진짜 문제를 해결하는 것에 집중합니다.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  🔬 데이터 기반 AI 최적화
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  AI의 응답 품질을 지속적으로 개선합니다. 사용자 피드백과 성능 데이터를 분석해
                  프롬프트를 최적화하고, A/B 테스트로 기능의 효과를 검증합니다.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Story Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="heading-3 text-gray-900 dark:text-white mb-4">
              나의 여정: 화학자 → 디자이너 → AI 빌더
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              분자 구조부터 사용자 경험을 거쳐 AI 시스템까지
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 md:left-1/2 md:-translate-x-0.5" />

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
              AI × Design × Code 시너지
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              AI, 디자인, 개발 스킬들이 서로 연결되어 실제 작동하는 도구를 만드는 힘이 됩니다.
            </p>
          </div>

          <SkillMolecule skills={skillsData} connections={skillConnections} className="mb-16" />
        </motion.div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto card p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <blockquote className="text-xl font-medium text-gray-900 dark:text-white leading-relaxed">
              "디자인만 하지 않습니다. AI를 활용해 실제로 사람들이 사용하는 도구를 만들고,
              <br className="hidden sm:block" />
              2,100+명의 사용자와 함께 더 나은 솔루션을 만들어갑니다."
            </blockquote>
            <cite className="block mt-4 text-blue-600 dark:text-blue-400 font-medium">
              - 김나겸, AI-Augmented Designer & Builder
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
