'use client';

import { motion } from 'framer-motion';

const storyItems = [
  {
    icon: '🧪',
    title: '나노소재화학 연구',
    description: '분자 단위의 정밀한 분석과 체계적인 실험 설계를 통해 과학적 사고력을 기반으로 한 문제 해결 역량을 키웠습니다.',
    skills: ['분석적 사고', '가설 수립', '실험 설계', '데이터 해석']
  },
  {
    icon: '🔄',
    title: '전환점: 기술과 사람의 접점',
    description: '연구 과정에서 사용자 중심의 인터페이스 설계에 관심을 갖게 되었고, 기술과 사람을 연결하는 디자인의 힘을 발견했습니다.',
    skills: ['사용자 리서치', '문제 정의', '아이디어 발굴', '프로토타이핑']
  },
  {
    icon: '🎨',
    title: '프로덕트 디자인으로의 도약',
    description: '과학적 분석력과 창의적 사고를 결합하여 사용자의 문제를 근본적으로 해결하는 디자인 솔루션을 만들어갑니다.',
    skills: ['사용자 경험 설계', '인터랙션 디자인', '비즈니스 임팩트', '팀 협업']
  }
];

export function AboutSection() {
  return (
    <section 
      id="about" 
      className="section bg-white dark:bg-gray-800"
      aria-labelledby="about-title"
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
            id="about-title" 
            className="heading-2 text-gray-900 dark:text-white mb-4"
          >
            About
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            과학에서 디자인으로의 여정. 서로 다른 분야의 만남이 만들어낸 
            독특한 관점과 문제 해결 방식을 소개합니다.
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="max-w-4xl mx-auto">
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
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 w-8 h-8 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center md:left-1/2 md:-translate-x-4 z-10">
                  <span className="text-xl">{item.icon}</span>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'ml-16 md:ml-0 md:pr-16' : 'ml-16 md:ml-0 md:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card p-6 h-full"
                  >
                    <h3 className="heading-3 text-gray-900 dark:text-white mb-4">
                      {item.title}
                    </h3>
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
              "과학의 정확성과 디자인의 창의성이 만나는 지점에서, 
              <br className="hidden sm:block" />
              사용자의 진짜 문제를 해결하는 솔루션을 만들어갑니다."
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