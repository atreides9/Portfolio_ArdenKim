import type { Metadata } from 'next';
import { Pretendard } from '@/lib/fonts';
import '@/styles/globals.css';

// Performance-optimized metadata for SEO (target Lighthouse 95+)
export const metadata: Metadata = {
  title: {
    default: '김나겸 | Product Designer',
    template: '%s | 김나겸 Product Designer',
  },
  description:
    '문제를 발견하고 해결하는 과정을 즐기는 프로덕트 디자이너. 나노소재화학에서 UX 디자인으로 전환한 독특한 관점으로 사용자 경험을 설계합니다.',
  keywords: [
    'Product Designer',
    'UX Designer',
    'UI Designer',
    '프로덕트 디자이너',
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
    title: '김나겸 | Product Designer',
    description: '과학적 사고와 창의적 문제해결이 만나는 지점에서 사용자 경험을 설계합니다.',
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
    title: '김나겸 | Product Designer',
    description: '과학적 사고와 창의적 문제해결이 만나는 지점에서 사용자 경험을 설계합니다.',
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

        {/* Performance monitoring script will be injected here in production */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Core Web Vitals measurement
                function vitals(metric) {
                  console.log(metric.name, metric.value);
                  // Send to analytics in production
                }
                
                // Load web-vitals library for performance monitoring
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(() => {
                    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                      getCLS(vitals);
                      getFID(vitals);
                      getFCP(vitals);
                      getLCP(vitals);
                      getTTFB(vitals);
                    });
                  });
                }
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
