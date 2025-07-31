module.exports = {
  ci: {
    collect: {
      // URLs to test - will test production build
      url: ['http://localhost:3000'],
      startServerCommand: 'npm run start',
      numberOfRuns: 3, // Run 3 times for average scores
    },
    assert: {
      // Performance targets (aligned with Google's Core Web Vitals)
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }], // 90+ performance score
        'categories:accessibility': ['error', { minScore: 1.0 }], // 100% accessibility (WCAG 2.1 AA)
        'categories:best-practices': ['error', { minScore: 0.95 }], // 95+ best practices
        'categories:seo': ['error', { minScore: 0.95 }], // 95+ SEO score
        
        // Core Web Vitals thresholds
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }], // LCP < 2.5s
        'first-input-delay': ['error', { maxNumericValue: 100 }], // FID < 100ms
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }], // CLS < 0.1
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }], // FCP < 1.8s
        'speed-index': ['error', { maxNumericValue: 3400 }], // SI < 3.4s
        'interactive': ['error', { maxNumericValue: 3800 }], // TTI < 3.8s
        'total-blocking-time': ['error', { maxNumericValue: 200 }], // TBT < 200ms
        
        // Bundle size optimization
        'total-byte-weight': ['warn', { maxNumericValue: 1600000 }], // < 1.6MB total
        'unused-javascript': ['warn', { maxNumericValue: 20000 }], // < 20KB unused JS
        'unused-css-rules': ['warn', { maxNumericValue: 10000 }], // < 10KB unused CSS
        
        // Image optimization
        'modern-image-formats': 'error',
        'efficient-animated-content': 'error',
        'properly-size-images': 'error',
        
        // Accessibility requirements
        'color-contrast': 'error',
        'heading-order': 'error',
        'image-alt': 'error',
        'label': 'error',
        'link-name': 'error',
        'document-title': 'error',
        'html-has-lang': 'error',
        'meta-description': 'error',
        
        // Security & best practices
        'is-on-https': 'error',
        'uses-https': 'error',
        'no-vulnerable-libraries': 'error',
        'csp-xss': 'warn',
      },
    },
    upload: {
      // Store results for CI/CD pipeline
      target: 'temporary-public-storage',
    },
  },
};