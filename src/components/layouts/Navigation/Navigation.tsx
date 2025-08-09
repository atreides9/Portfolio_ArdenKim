'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/lib/types';
import { cn } from '@/lib/utils/cn';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useSmartHeader } from '@/lib/hooks/useSmartHeader';
import Link from 'next/link';

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', href: '/#hero' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'ai-lab', label: 'AI Lab', href: '/#ai-lab' },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    href: '#',
    children: [
      { id: 'design-to-code', label: 'Design-to-Code', href: '/ai-tools/design-to-code' },
      { id: 'ux-research', label: 'UX Research', href: '/ai-tools/ux-research' },
      { id: 'startup-toolkit', label: 'Startup Toolkit', href: '/ai-tools/startup-toolkit' },
    ],
  },
  { id: 'skills', label: 'Skills', href: '/#skills' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

export function Navigation() {
  const { setTheme, resolvedTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  const smartHeader = useSmartHeader();

  const isVisible = isHomePage ? smartHeader.isVisible : true;
  const isScrolled = isHomePage ? smartHeader.isScrolled : false;

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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(2);
    if (isHomePage) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    } else {
        window.location.href = href;
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
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            aria-label="홈으로 이동"
          >
            김나겸
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.id} className="relative group">
              <Link
                href={item.href}
                onClick={(e) => item.href.startsWith('/#') && handleSmoothScroll(e, item.href)}
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
              </Link>

              {item.children && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.children.map(child => (
                    <Link key={child.id} href={child.href} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}

              {activeSection === item.id && isHomePage && (
                <div className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="다크 모드 토글"
          >
            {resolvedTheme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label="메뉴 열기/닫기"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-6 h-6 relative">
            <span className={cn("absolute top-1 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-200", isMobileMenuOpen ? "rotate-45 translate-y-2" : "")} />
            <span className={cn("absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-200", isMobileMenuOpen ? "opacity-0" : "")} />
            <span className={cn("absolute top-5 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-200", isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "")} />
          </div>
        </button>
      </nav>

      <div className={cn("md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300", isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0")}>
        <div className="container py-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
                item.children ? (
                    <div key={item.id}>
                        <span className="block px-4 py-3 rounded-lg font-medium text-gray-400">{item.label}</span>
                        <div className="flex flex-col space-y-2 pl-4">
                            {item.children.map(child => (
                                <Link key={child.id} href={child.href} className="block px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-gray-700 dark:text-gray-300">
                                    {child.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <Link
                        key={item.id}
                        href={item.href}
                        onClick={(e) => item.href.startsWith('/#') && handleSmoothScroll(e, item.href)}
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
                    </Link>
                )
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
