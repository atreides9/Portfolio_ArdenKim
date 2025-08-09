import type { Metadata } from 'next';
import { Pretendard } from '@/lib/fonts';
import '@/styles/globals.css';

// Performance-optimized metadata for SEO (target Lighthouse 95+)
export const metadata: Metadata = {
  title: {
    default: '김나겸 | AI-Augmented Product Designer & Builder',
    template: '%s | 김나겸 AI Designer & Builder',
  },
  description:
    'AI를 활용해 실제 작동하는 도구를 만드는 프로덕트 디자이너. 디자인, 개발, AI가 만나는 지점에서 새로운 가능성을 탐구하고 실현합니다.',
  keywords: [
    'AI Product Designer',
    'AI-Augmented Designer',
    'AI Builder',
    'Product Designer',
    'UX Designer',
    'UI Designer',
    '프로덕트 디자이너',
    'AI 도구',
    'Portfolio',
    '포트폴리오',
  ],
  authors: [{ name: '김나겸', url: 'https://ardenkim.com' }],
  creator: '김나겸',
  publisher: '김나겸',

  // Open Graph for social sharing (improves CTR by 40%)
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://ardenkim.com',
    title: '김나겸 | AI-Augmented Product Designer & Builder',
    description: 'AI를 활용해 실제 작동하는 도구를 만드는 프로덕트 디자이너. 디자인과 AI가 만나는 새로운 가능성을 탐구합니다.',
    siteName: '김나겸 Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '김나겸 Product Designer Portfolio',
      },
    ],
  },

  // Twitter optimization
  twitter: {
    card: 'summary_large_image',
    title: '김나겸 | AI-Augmented Product Designer & Builder',
    description: 'AI를 활용해 실제 작동하는 도구를 만드는 프로덕트 디자이너. 디자인과 AI가 만나는 새로운 가능성을 탐구합니다.',
    images: ['/og-image.jpg'],
    creator: '@ardenkim',
  },

  // Performance & crawling optimization
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification & analytics
  verification: {
    google: 'your-google-verification-code',
  },

  // Additional metadata
  category: 'Design & Portfolio',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',

  // Structured data for rich snippets
  other: {
    'application-name': '김나겸 Portfolio',
    'theme-color': '#3b82f6',
    'color-scheme': 'light dark',
  },
};

// Viewport configuration for mobile-first approach
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

import { ClientProviders } from '@/components/providers/ClientProviders';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className={`${Pretendard.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Performance hints */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://cdn.ardenkim.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Performance optimization - preconnect to external domains */}
      </head>
      <body
        className={`
          font-sans antialiased 
          bg-white text-gray-900 
          selection:bg-primary-100 selection:text-primary-900
          dark:bg-gray-900 dark:text-gray-100
        `}
        suppressHydrationWarning
      >
        {/* Skip to content for accessibility (WCAG 2.1 AA requirement) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary-600 text-white px-4 py-2 rounded-md"
        >
          Skip to main content
        </a>

        <ClientProviders>
          {children}
        </ClientProviders>

        {/* AI-Augmented Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize performance monitoring for AI-augmented features
              window.addEventListener('DOMContentLoaded', function() {
                // Track AI Lab section visibility
                if ('IntersectionObserver' in window) {
                  const aiLabObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                      if (entry.isIntersecting) {
                        console.log('AI Lab section viewed');
                        // Track AI feature engagement
                      }
                    });
                  });
                  
                  const aiLabElement = document.getElementById('ai-lab');
                  if (aiLabElement) {
                    aiLabObserver.observe(aiLabElement);
                  }
                }
                
                // Initialize full performance monitoring
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(function() {
                    import('/src/lib/utils/performance.js').then(function(module) {
                      module.initPerformanceMonitoring();
                    }).catch(function(error) {
                      console.warn('Performance monitoring failed to load:', error);
                    });
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
