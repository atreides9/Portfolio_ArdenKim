'use client';

import { motion } from 'framer-motion';

const evolutionStory = [
  {
    phase: "화학자 (Phase 1)",
    period: "2020-2024",
    story: "나노 단위의 정밀함으로 문제를 분석하고 해결책을 합성하는 역할을 수행했습니다. 가설 기반의 실험 설계와 데이터 분석을 통해 복잡한 문제의 근본 원인을 찾아내는 능력을 길렀습니다.",
    skills: ["분석적 사고", "실험 설계", "데이터 해석", "문제 해결"]
  },
  {
    phase: "디자이너 (Phase 2)", 
    period: "2024-현재",
    story: "사용자의 마음을 분자처럼 분해하고 새로운 경험으로 재조합하는 프로덕트 디자이너로 전환했습니다. 과학적 방법론을 사용자 리서치와 디자인 프로세스에 적용하여 데이터 기반의 의사결정을 내립니다.",
    skills: ["사용자 리서치", "프로토타이핑", "시각 디자인", "UX/UI 설계"]
  },
  {
    phase: "AI 빌더 (Phase 3)",
    period: "2024-미래",
    story: "AI와 함께 10배 빠르게 아이디어를 현실로 구현하는 빌더로 진화하고 있습니다. 이제는 디자인뿐만 아니라 코드, 데이터, AI 모델을 모두 활용하여 제품을 직접 만들어냅니다.",
    skills: ["Prompt Engineering", "AI Integration", "Rapid Development", "MVP 구축"]
  }
];

export function AboutSection() {
  return (
    <section id="about" className="section bg-white dark:bg-gray-800" aria-labelledby="about-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="about-title" className="heading-2 text-gray-900 dark:text-white mb-4">
            Chemist to AI Builder
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            화학자에서 AI 빌더로, 저의 독특한 성장 여정을 소개합니다.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-green-500" />

          {evolutionStory.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative flex items-center mb-16"
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">{item.period}</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.phase}</h3>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 border-4 border-primary-500 rounded-full" />

              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                <div className="card p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{item.story}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span key={skill} className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}