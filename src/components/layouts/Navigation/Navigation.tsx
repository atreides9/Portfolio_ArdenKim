'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/lib/types';
import { cn } from '@/lib/utils/cn';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useSmartHeader } from '@/lib/hooks/useSmartHeader';

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isProjectPage = pathname.startsWith('/projects/');
  const isHomePage = pathname === '/';
  
  // Use smart header only on homepage, always visible on other pages
  const { isVisible, isScrolled } = useSmartHeader({
    hideDelay: 3000,
    topZone: 100,
    scrollThreshold: 50
  });
  
  // For non-homepage, always show header
  const shouldShowHeader = !isHomePage || isVisible;
  const shouldShowScrollEffect = isHomePage ? isScrolled : false;

  // Handle active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const navItem = navItems[i];
        if (section && navItem && section.offsetTop <= scrollPosition) {
          setActiveSection(navItem.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // If we're on a project page, navigate to home first
    if (isProjectPage) {
      if (sectionId === 'hero') {
        window.location.href = '/';
      } else {
        window.location.href = `/#${sectionId}`;
      }
      setIsMobileMenuOpen(false);
      return;
    }
    
    // Normal smooth scroll behavior for homepage
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: shouldShowHeader ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300',
        shouldShowScrollEffect
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-transparent'
      )}
      style={{
        transform: shouldShowHeader ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out'
      }}
      role="banner"
    >
      <nav
        className="container flex items-center justify-between h-20"
        role="navigation"
        aria-label="메인 네비게이션"
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
          <a
            href={isProjectPage ? '/' : '#hero'}
            onClick={(e) => handleSmoothScroll(e, 'hero')}
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            aria-label="홈으로 이동"
          >
            김나겸
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.div key={item.id} className="relative">
              <a
                href={isProjectPage ? (item.id === 'hero' ? '/' : `/#${item.id}`) : item.href}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className={cn(
                  'relative px-4 py-2 rounded-lg font-medium transition-all duration-200',
                  'hover:text-primary-600 dark:hover:text-primary-400',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                  activeSection === item.id && isHomePage
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300'
                )}
                aria-current={activeSection === item.id && isHomePage ? 'page' : undefined}
              >
                {item.label}
              </a>

              {/* Active indicator */}
              {activeSection === item.id && isHomePage && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="다크 모드 토글"
          >
            {resolvedTheme === 'dark' ? (
              // Sun icon for light mode
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label="메뉴 열기/닫기"
          aria-expanded={isMobileMenuOpen}
        >
          <motion.div animate={isMobileMenuOpen ? 'open' : 'closed'} className="w-6 h-6 relative">
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              className="absolute top-1 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-200"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-200"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
              className="absolute top-5 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-200"
            />
          </motion.div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: {
            height: 'auto',
            opacity: 1,
            transition: {
              height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.2, delay: 0.1 },
            },
          },
          closed: {
            height: 0,
            opacity: 0,
            transition: {
              height: { duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
              opacity: { duration: 0.2 },
            },
          },
        }}
        className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <div className="container py-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={false}
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: index * 0.1 + 0.2,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                  closed: {
                    y: -10,
                    opacity: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              >
                <a
                  href={isProjectPage ? (item.id === 'hero' ? '/' : `/#${item.id}`) : item.href}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className={cn(
                    'block px-4 py-3 rounded-lg font-medium transition-all duration-200',
                    'hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
                    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                    activeSection === item.id && isHomePage
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300'
                  )}
                  aria-current={activeSection === item.id && isHomePage ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
