'use client';

import { motion } from 'framer-motion';

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/sunmin-kim',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: 'Behance',
    href: 'https://behance.net/sunminkim',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.125 1.074.342 1.495.653.42.31.746.748.977 1.312.23.563.346 1.262.346 2.096 0 .867-.138 1.608-.414 2.224-.276.617-.662 1.08-1.158 1.392v.047c.71.303 1.208.79 1.492 1.465.284.676.426 1.455.426 2.34 0 .912-.17 1.688-.507 2.33-.338.64-.805 1.146-1.402 1.515-.596.37-1.29.625-2.08.767-.79.142-1.65.213-2.583.213H0V4.503h6.938zM2.745 8.98h3.938c.508 0 .795-.138.86-.414.063-.276.095-.565.095-.867 0-.363-.057-.686-.17-.97-.112-.283-.294-.498-.544-.643-.25-.146-.593-.218-1.031-.218H2.745V8.98zm0 5.369h4.359c.367 0 .651-.16.85-.48.199-.319.299-.793.299-1.421 0-.333-.023-.621-.07-.867-.047-.245-.135-.447-.263-.604-.128-.158-.306-.267-.533-.329-.228-.061-.526-.092-.894-.092H2.745v3.793zm14.653-8.855h4.641v1.108h-4.641V5.494zm.271 4.736c.07.676.3 1.174.691 1.493.39.32.837.48 1.34.48.502 0 .922-.16 1.26-.48.337-.32.507-.817.507-1.493h-3.798zm6.42 1.608c0 .781-.111 1.455-.333 2.02-.223.566-.538 1.029-.946 1.389-.408.36-.895.625-1.462.795-.567.17-1.197.255-1.89.255-1.067 0-1.997-.16-2.79-.48s-1.447-.765-1.96-1.329c-.514-.565-.89-1.229-1.131-1.994-.24-.765-.361-1.588-.361-2.469 0-.881.121-1.704.361-2.469.24-.765.617-1.429 1.131-1.994.513-.564 1.167-1.009 1.96-1.329.793-.32 1.723-.48 2.79-.48.85 0 1.628.142 2.333.426.705.284 1.309.703 1.811 1.257.502.554.883 1.239 1.143 2.056.26.817.39 1.757.39 2.82v.526h-8.15c0 .816.23 1.334.691 1.555.461.22.937.33 1.429.33.502 0 .922-.16 1.26-.48.337-.32.507-.817.507-1.555h2.333z"/>
      </svg>
    )
  },
  {
    name: 'Email',
    href: 'mailto:sunmin@example.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

const footerLinks = [
  {
    title: '프로젝트',
    links: [
      { name: 'Job Hunter', href: '#projects' },
      { name: 'Insight Dots', href: '#projects' },
      { name: '모든 프로젝트', href: '#projects' }
    ]
  },
  {
    title: '정보',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white" role="contentinfo">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4">김선민</h3>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                과학적 사고와 창의적 문제해결이 만나는 지점에서 사용자 경험을 설계하는 
                프로덕트 디자이너입니다.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.name !== 'Email' ? '_blank' : undefined}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-primary-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`${social.name}으로 연결`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
              >
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3" role="list">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-0.5"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; {currentYear} 김선민. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-0.5"
                >
                  개인정보처리방침
                </a>
                <span className="text-gray-600">•</span>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-0.5"
                >
                  이용약관
                </a>
              </div>
            </div>

            {/* Built with info */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Built with</span>
              <div className="flex items-center space-x-1">
                <span className="text-blue-400">Next.js</span>
                <span>•</span>
                <span className="text-cyan-400">Tailwind</span>
                <span>•</span>
                <span className="text-purple-400">Framer Motion</span>
              </div>
              <span>•</span>
              <span className="text-green-400">Vercel에서 호스팅</span>
            </div>
          </div>
        </motion.div>

        {/* Performance Notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="pb-4 text-center"
        >
          <p className="text-xs text-gray-500">
            ⚡ 이 사이트는 Lighthouse 95+ 점수로 최적화되었습니다 
            • 
            <span className="text-primary-400"> LCP &lt; 2.5s</span>
            • 
            <span className="text-green-400"> CLS &lt; 0.1</span>
            • 
            <span className="text-blue-400"> 100% 접근성</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}