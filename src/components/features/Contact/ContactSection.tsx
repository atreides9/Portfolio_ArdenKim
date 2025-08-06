'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    value: 'lovetung18@gmail.com',
    href: 'mailto:lovetung18@gmail.com',
    description: '프로젝트 문의 및 협업 제안',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'linkedin.com/in/Arden-Kim',
    href: 'https://www.linkedin.com/in/arden-kim-12196628b/',
    description: '전문적인 네트워킹',
  },
  {
    icon: '🎨',
    title: 'Behance',
    value: 'behance.net/Arden Kim',
    href: 'https://www.behance.net/lovetung18bbf4',
    description: '더 많은 디자인 작업물',
  },
];

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('lovetung18@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section
      id="contact"
      className="section bg-white dark:bg-gray-800"
      aria-labelledby="contact-title"
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
          <h2 id="contact-title" className="heading-2 text-gray-900 dark:text-white mb-4">
            Contact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            함께 문제를 해결해 나가요. 새로운 프로젝트나 협업 기회가 있으시다면 언제든 연락주세요!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h3 className="heading-3 text-gray-900 dark:text-white mb-8">연락 방법</h3>

              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="card p-6 hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
                        {method.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {method.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          {method.title === 'Email' ? (
                            <button
                              onClick={handleEmailCopy}
                              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1 py-0.5"
                              aria-label="이메일 주소 복사"
                            >
                              {method.value}
                            </button>
                          ) : (
                            <a
                              href={method.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1 py-0.5"
                              aria-label={`${method.title}로 연결`}
                            >
                              {method.value}
                            </a>
                          )}
                          {method.title === 'Email' && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={
                                copiedEmail ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                              }
                              className="text-xs text-green-600 dark:text-green-400 font-medium"
                            >
                              복사됨!
                            </motion.span>
                          )}
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="card p-8 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20"
            >
              <h3 className="heading-3 text-gray-900 dark:text-white mb-6">
                함께 만들어갈 프로젝트
              </h3>

              <div className="space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      title: '사용자 중심 디자인',
                      description: '리서치부터 검증까지 전 과정을 함께 진행합니다.',
                      icon: '🎯',
                    },
                    {
                      title: '디자인 시스템 구축',
                      description: '확장 가능하고 일관된 디자인 시스템을 만들어갑니다.',
                      icon: '🏗️',
                    },
                    {
                      title: '프로덕트 전략',
                      description: '비즈니스 목표와 사용자 니즈를 연결하는 전략을 수립합니다.',
                      icon: '📊',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center text-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="pt-6 border-t border-gray-200 dark:border-gray-600"
                >
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    프로젝트 상담은 언제나 환영입니다.
                    <br className="hidden sm:block" />
                    작은 아이디어라도 함께 발전시켜 나가요! ✨
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:lovetung18@gmail.com?subject=프로젝트 협업 문의"
                      className="btn btn-primary text-center"
                    >
                      프로젝트 문의하기
                    </a>
                    <a
                      href="https://calendly.com/Arden-kim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary text-center"
                    >
                      30분 화상회의 예약
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Response Time Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800"
        >
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <span className="font-medium">⚡ 빠른 응답:</span>
            일반적으로 24시간 이내에 답변드립니다. 급한 문의사항은 이메일에 [긴급] 표시를 해주세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
