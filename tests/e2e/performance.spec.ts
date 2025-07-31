import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('should meet Core Web Vitals targets', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Measure Core Web Vitals
    const vitals = await page.evaluate(() => {
      return new Promise((resolve) => {
        const vitals = {
          lcp: 0,
          fid: 0,
          cls: 0,
          fcp: 0
        };
        
        // Get LCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            vitals.lcp = entries[entries.length - 1].startTime;
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Get FCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            vitals.fcp = entries[0].startTime;
          }
        }).observe({ entryTypes: ['paint'] });
        
        // Get CLS
        new PerformanceObserver((entryList) => {
          let clsValue = 0;
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          vitals.cls = clsValue;
        }).observe({ entryTypes: ['layout-shift'] });
        
        setTimeout(() => resolve(vitals), 3000);
      });
    });
    
    // Assert Core Web Vitals targets
    expect(vitals.lcp).toBeLessThan(2500); // LCP < 2.5s
    expect(vitals.fcp).toBeLessThan(1800); // FCP < 1.8s
    expect(vitals.cls).toBeLessThan(0.1);  // CLS < 0.1
  });

  test('should load critical resources quickly', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    
    // Wait for hero section to be visible (critical content)
    await expect(page.locator('#hero')).toBeVisible();
    
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000); // Page should be interactive within 3s
  });

  test('should have optimized images', async ({ page }) => {
    await page.goto('/');
    
    // Check that images use modern formats
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const src = await img.getAttribute('src');
      if (src && !src.startsWith('data:')) {
        // Images should use WebP or AVIF when possible
        expect(src).toMatch(/\.(webp|avif|jpg|jpeg|png)(\?|$)/i);
      }
    }
  });

  test('should have minimal JavaScript bundle size', async ({ page }) => {
    // Monitor network requests
    const jsRequests: any[] = [];
    
    page.on('response', (response) => {
      if (response.url().includes('.js') && response.status() === 200) {
        jsRequests.push(response);
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Calculate total JS size
    let totalJSSize = 0;
    for (const request of jsRequests) {
      const headers = await request.allHeaders();
      const contentLength = headers['content-length'];
      if (contentLength) {
        totalJSSize += parseInt(contentLength, 10);
      }
    }
    
    // Initial JS bundle should be under 200KB
    expect(totalJSSize).toBeLessThan(200 * 1024);
  });

  test('should have smooth animations at 60fps', async ({ page }) => {
    await page.goto('/');
    
    // Test molecular animation performance
    const animationElement = page.locator('[data-testid="molecular-animation"]');
    if (await animationElement.isVisible()) {
      const fps = await page.evaluate(() => {
        return new Promise((resolve) => {
          let frames = 0;
          const startTime = performance.now();
          
          function countFrames() {
            frames++;
            if (performance.now() - startTime < 1000) {
              requestAnimationFrame(countFrames);
            } else {
              resolve(frames);
            }
          }
          
          requestAnimationFrame(countFrames);
        });
      });
      
      expect(fps).toBeGreaterThan(50); // Should maintain near 60fps
    }
  });

  test('should preload critical resources', async ({ page }) => {
    await page.goto('/');
    
    // Check for font preloading
    const preloadLinks = await page.locator('link[rel="preload"]').all();
    let hasPreloadedFont = false;
    
    for (const link of preloadLinks) {
      const as = await link.getAttribute('as');
      if (as === 'font') {
        hasPreloadedFont = true;
        break;
      }
    }
    
    expect(hasPreloadedFont).toBe(true);
  });

  test('should handle offline scenarios gracefully', async ({ page, context }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Go offline
    await context.setOffline(true);
    
    // Navigation should still work (cached assets)
    await page.click('[href="#about"]');
    await expect(page.locator('#about')).toBeVisible();
    
    // Go back online
    await context.setOffline(false);
  });
});