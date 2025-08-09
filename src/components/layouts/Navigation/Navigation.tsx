'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/lib/types';
import { cn } from '@/lib/utils/cn';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useSmartHeader } from '@/lib/hooks/useSmartHeader';

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'ai-lab', label: 'AI Lab', href: '#ai-lab' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const { setTheme, resolvedTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isHomePage = pathname === '/';
  const isProjectPage = pathname.startsWith('/projects/');
  
  // 홈페이지에서만 스마트 헤더 적용
  const smartHeader = useSmartHeader();
  
  // 홈페이지가 아니면 항상 표시, 홈페이지면 스마트 헤더 로직 사용
  const isVisible = isHomePage ? smartHeader.isVisible : true;
  const isScrolled = isHomePage ? smartHeader.isScrolled : false;

  // Handle active section based on scroll position
  useEffect(() => {
    if (!isHomePage) return;
    
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
  }, [isHomePage]);

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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-transparent'
      )}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
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
        <div className="flex-shrink-0">
          <a
            href={isProjectPage ? '/' : '#hero'}
            onClick={(e) => handleSmoothScroll(e, 'hero')}
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            aria-label="홈으로 이동"
          >
            김나겸
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.id} className="relative">
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
                <div className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10" />
              )}
            </div>
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
          <div className="w-6 h-6 relative">
            <span
              className={cn(
                "absolute top-1 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-200",
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span
              className={cn(
                "absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-200",
                isMobileMenuOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={cn(
                "absolute top-5 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-200",
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
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
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}