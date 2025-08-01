import { checkA11y, injectAxe } from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('Accessibility Tests (WCAG 2.1 AA)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await injectAxe(page);
  });

  test('should not have any accessibility violations on homepage', async ({ page }) => {
    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: { html: true },
      axeOptions: {
        rules: {
          // Focus on WCAG 2.1 AA compliance
          'color-contrast': { enabled: true },
          'heading-order': { enabled: true },
          'image-alt': { enabled: true },
          label: { enabled: true },
          'link-name': { enabled: true },
          'document-title': { enabled: true },
          'html-has-lang': { enabled: true },
          'landmark-one-main': { enabled: true },
          'page-has-heading-one': { enabled: true },
          region: { enabled: true },
        },
      },
    });
  });

  test('should be keyboard navigable', async ({ page }) => {
    // Test keyboard navigation through nav items
    await page.keyboard.press('Tab');
    await expect(page.locator('[href="#hero"]')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('[href="#about"]')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('[href="#projects"]')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('[href="#skills"]')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('[href="#contact"]')).toBeFocused();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    const headingLevels = [];

    for (const heading of headings) {
      const tagName = await heading.evaluate((el) => el.tagName.toLowerCase());
      headingLevels.push(parseInt(tagName[1]));
    }

    // Check that we start with h1
    expect(headingLevels[0]).toBe(1);

    // Check that heading levels don't skip (no jumping from h2 to h4)
    for (let i = 1; i < headingLevels.length; i++) {
      const diff = headingLevels[i] - headingLevels[i - 1];
      expect(diff).toBeLessThanOrEqual(1);
    }
  });

  test('should have alt text for all images', async ({ page }) => {
    const images = await page.locator('img').all();

    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt.length).toBeGreaterThan(0);
    }
  });

  test('should have proper form labels and ARIA attributes', async ({ page }) => {
    const buttons = await page.locator('button').all();

    for (const button of buttons) {
      const ariaLabel = await button.getAttribute('aria-label');
      const textContent = await button.textContent();

      // Button should have either text content or aria-label
      expect(ariaLabel || textContent).toBeTruthy();
    }
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await checkA11y(page, null, {
      rules: { 'color-contrast': { enabled: true } },
    });
  });

  test('should support screen readers', async ({ page }) => {
    // Check for proper ARIA landmarks
    await expect(page.locator('[role="banner"]')).toBeVisible(); // Navigation
    await expect(page.locator('[role="main"], main')).toBeVisible(); // Main content
    await expect(page.locator('[role="contentinfo"]')).toBeVisible(); // Footer

    // Check for proper section labeling
    const sections = await page.locator('section[aria-labelledby]').all();
    expect(sections.length).toBeGreaterThan(0);

    for (const section of sections) {
      const labelledBy = await section.getAttribute('aria-labelledby');
      const labelElement = await page.locator(`#${labelledBy}`).first();
      await expect(labelElement).toBeVisible();
    }
  });

  test('should handle focus management properly', async ({ page }) => {
    // Test skip link functionality
    await page.keyboard.press('Tab');
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeFocused();

    await page.keyboard.press('Enter');
    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeFocused();
  });

  test('should be responsive and accessible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE

    // Test mobile menu accessibility
    const mobileMenuButton = page.locator('button[aria-label*="메뉴"]');
    await expect(mobileMenuButton).toBeVisible();

    await mobileMenuButton.click();

    // Check that mobile menu is properly announced
    const expandedState = await mobileMenuButton.getAttribute('aria-expanded');
    expect(expandedState).toBe('true');

    // Run accessibility check on mobile view
    await checkA11y(page);
  });
});
