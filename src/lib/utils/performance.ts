// Performance monitoring utilities for AI-augmented portfolio

export interface PerformanceData {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  pathname: string;
  timestamp: number;
  userAgent: string;
}

export interface AIMetrics {
  apiCalls: number;
  responseTime: number;
  successRate: number;
  errorRate: number;
  timestamp: number;
}

/**
 * Track Core Web Vitals
 */
export function trackWebVitals(metric: any) {
  const data: PerformanceData = {
    [metric.name.toLowerCase()]: metric.value,
    pathname: window.location.pathname,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
  };

  // Send to analytics (Vercel Analytics, Google Analytics, etc.)
  if (typeof window !== 'undefined') {
    // For demo purposes, we'll use console.log
    // In production, you'd send this to your analytics service
    console.log('Performance Metric:', {
      name: metric.name,
      value: metric.value,
      path: window.location.pathname,
    });

    // Example: Send to Vercel Analytics
    // if (window.va) {
    //   window.va('track', 'Performance', data);
    // }
  }
}

/**
 * Track AI API performance
 */
export class AIPerformanceTracker {
  private static metrics: AIMetrics = {
    apiCalls: 0,
    responseTime: 0,
    successRate: 0,
    errorRate: 0,
    timestamp: Date.now(),
  };

  static startTimer() {
    return performance.now();
  }

  static endTimer(startTime: number, success: boolean = true) {
    const endTime = performance.now();
    const responseTime = endTime - startTime;

    AIPerformanceTracker.metrics.apiCalls++;
    AIPerformanceTracker.metrics.responseTime =
      (AIPerformanceTracker.metrics.responseTime * (AIPerformanceTracker.metrics.apiCalls - 1) +
        responseTime) /
      AIPerformanceTracker.metrics.apiCalls;

    if (success) {
      AIPerformanceTracker.metrics.successRate =
        (AIPerformanceTracker.metrics.successRate * (AIPerformanceTracker.metrics.apiCalls - 1) +
          1) /
        AIPerformanceTracker.metrics.apiCalls;
    } else {
      AIPerformanceTracker.metrics.errorRate =
        (AIPerformanceTracker.metrics.errorRate * (AIPerformanceTracker.metrics.apiCalls - 1) + 1) /
        AIPerformanceTracker.metrics.apiCalls;
    }

    AIPerformanceTracker.metrics.timestamp = Date.now();

    // Log AI performance metrics
    console.log('AI API Performance:', {
      responseTime: Math.round(responseTime),
      averageResponseTime: Math.round(AIPerformanceTracker.metrics.responseTime),
      totalCalls: AIPerformanceTracker.metrics.apiCalls,
      successRate: Math.round(AIPerformanceTracker.metrics.successRate * 100) + '%',
    });

    return responseTime;
  }

  static getMetrics(): AIMetrics {
    return { ...AIPerformanceTracker.metrics };
  }
}

/**
 * Monitor resource loading performance
 */
export function monitorResourceLoading() {
  if (typeof window === 'undefined') return;

  // Monitor AI Lab section loading
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'largest-contentful-paint') {
        trackWebVitals({
          name: 'LCP',
          value: entry.startTime,
        });
      }
    });
  });

  try {
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    // Fallback for older browsers
    console.warn('Performance Observer not supported');
  }
}

/**
 * Track user interactions with AI features
 */
export function trackAIInteraction(action: string, details?: Record<string, any>) {
  const data = {
    action,
    timestamp: Date.now(),
    pathname: window.location.pathname,
    ...details,
  };

  console.log('AI Interaction:', data);

  // In production, send to analytics
  // Example: Google Analytics 4
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', 'ai_interaction', {
  //     action_name: action,
  //     custom_parameters: details,
  //   });
  // }
}

/**
 * Monitor bundle size and loading performance
 */
export function monitorBundlePerformance() {
  if (typeof window === 'undefined') return;

  // Track when the page becomes interactive
  document.addEventListener('DOMContentLoaded', () => {
    const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    const metrics = {
      domContentLoaded: navTiming.domContentLoadedEventEnd - navTiming.fetchStart,
      fullyLoaded: navTiming.loadEventEnd - navTiming.fetchStart,
      firstByte: navTiming.responseStart - navTiming.fetchStart,
    };

    console.log('Bundle Performance:', metrics);
  });
}

/**
 * Initialize all performance monitoring
 */
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  monitorResourceLoading();
  monitorBundlePerformance();

  // Set up Web Vitals tracking
  if ('requestIdleCallback' in window) {
    requestIdleCallback(async () => {
      try {
        const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals');

        onCLS(trackWebVitals);
        onINP(trackWebVitals); // INP replaced FID in web-vitals v4
        onFCP(trackWebVitals);
        onLCP(trackWebVitals);
        onTTFB(trackWebVitals);
      } catch (error) {
        console.warn('Web Vitals could not be loaded:', error);
      }
    });
  }
}
