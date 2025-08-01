// Core application types with strict TypeScript for 70% fewer runtime errors

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly blurDataURL: string; // For performance optimization
  readonly metrics: readonly ProjectMetric[];
  readonly tags: readonly string[];
  readonly url?: string;
  readonly category: ProjectCategory;
  readonly featured: boolean;
  readonly completedAt: Date;
}

export interface ProjectMetric {
  readonly label: string;
  readonly value: string;
  readonly description?: string;
}

export type ProjectCategory =
  | 'ux-research'
  | 'product-strategy'
  | 'data-visualization'
  | 'interface-design'
  | 'prototyping';

export interface Skill {
  readonly name: string;
  readonly level: number; // 0-100
  readonly category: SkillCategory;
  readonly description?: string;
}

export type SkillCategory =
  | 'design-tools'
  | 'development'
  | 'collaboration'
  | 'research'
  | 'strategy';

export interface ContactInfo {
  readonly email: string;
  readonly linkedin: string;
  readonly behance: string;
  readonly github?: string;
}

// Animation types for Framer Motion
export interface AnimationConfig {
  readonly initial: Record<string, unknown>;
  readonly animate: Record<string, unknown>;
  readonly transition: Record<string, unknown>;
}

// Performance monitoring types
export interface PerformanceMetrics {
  readonly lcp: number; // Largest Contentful Paint
  readonly fid: number; // First Input Delay
  readonly cls: number; // Cumulative Layout Shift
  readonly fcp: number; // First Contentful Paint
  readonly ttfb: number; // Time to First Byte
}

// SEO types
export interface SEOData {
  readonly title: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly ogImage: string;
  readonly canonicalUrl: string;
}

// Theme types for dark mode
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  readonly theme: Theme;
  readonly systemTheme: 'light' | 'dark';
}

// Navigation types
export interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon?: string;
}
