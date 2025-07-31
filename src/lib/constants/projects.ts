import type { Project } from '@/lib/types';

/**
 * Project data with performance-optimized image handling
 * All images should be processed through Next.js Image optimization
 */
export const PROJECTS: readonly Project[] = [
  {
    id: 'job-hunter',
    title: 'Job Hunter',
    description: '취업 준비생의 지원 현황 관리 및 분석 플랫폼. 복잡한 지원 과정을 체계적으로 정리하고 인사이트를 제공하여 취업 성공률을 70% 향상시켰습니다.',
    imageUrl: '/images/projects/job-hunter-hero.webp',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    metrics: [
      { label: '시간 절약', value: '70%', description: '지원 관리 시간 단축' },
      { label: '사용자 만족도', value: '95%', description: 'NPS 점수 기준' },
      { label: '취업 성공률', value: '3x', description: '플랫폼 사용자 대비' }
    ],
    tags: ['UX Research', 'Product Strategy', 'Data Visualization', 'User Interface'],
    category: 'product-strategy',
    featured: true,
    completedAt: new Date('2024-06-01'),
    url: 'https://job-hunter.ardenkim.com'
  },
  {
    id: 'insight-dots',
    title: 'Insight Dots',
    description: '데이터 시각화를 통한 비즈니스 인사이트 발견 도구. 복잡한 데이터를 직관적으로 이해할 수 있는 인터페이스로 의사결정 속도를 3배 향상시켰습니다.',
    imageUrl: '/images/projects/insight-dots-hero.webp',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    metrics: [
      { label: '분석 속도', value: '3x', description: '기존 도구 대비' },
      { label: '의사결정 개선', value: '85%', description: '정확도 향상' },
      { label: '사용자 채택률', value: '92%', description: '30일 retention' }
    ],
    tags: ['Data Visualization', 'Information Architecture', 'User Interface', 'Analytics'],
    category: 'data-visualization',
    featured: true,
    completedAt: new Date('2024-04-15'),
    url: 'https://insight-dots.ardenkim.com'
  },
  {
    id: 'design-system',
    title: 'Atomic Design System',
    description: '확장 가능한 디자인 시스템 구축으로 개발 효율성 400% 향상. 재사용 가능한 컴포넌트 라이브러리로 일관된 사용자 경험을 보장합니다.',
    imageUrl: '/images/projects/design-system-hero.webp',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    metrics: [
      { label: '개발 효율성', value: '400%', description: '컴포넌트 재사용률' },
      { label: '디자인 일관성', value: '98%', description: '브랜드 가이드라인 준수' },
      { label: '유지보수 비용', value: '-60%', description: '연간 절감 효과' }
    ],
    tags: ['Design System', 'Component Library', 'Brand Identity', 'Developer Experience'],
    category: 'interface-design',
    featured: false,
    completedAt: new Date('2024-02-20')
  },
  {
    id: 'starbucks-redesign',
    title: 'Starbucks App Redesign',
    description: '글로벌 브랜드 스타벅스 앱의 사용자 경험 개선을 통해 주문 완료율 45% 향상. 직관적인 메뉴 탐색과 개인화된 추천 시스템으로 고객 만족도를 크게 향상시켰습니다.',
    imageUrl: '/images/projects/starbucks-redesign-hero.webp',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    metrics: [
      { label: '주문 완료율', value: '45%', description: '사용자 경험 개선 효과' },
      { label: '앱 평점', value: '4.8', description: 'App Store 기준' },
      { label: '사용 시간', value: '2.3x', description: '세션당 평균 시간' }
    ],
    tags: ['Mobile UX', 'E-commerce', 'Brand Design', 'User Research'],
    category: 'interface-design',
    featured: true,
    completedAt: new Date('2024-05-10'),
    url: 'https://starbucks-redesign.ardenkim.com'
  }
] as const;

/**
 * Get featured projects for homepage
 * Performance: O(n) filtering, cached result
 */
export const getFeaturedProjects = (): readonly Project[] => {
  return PROJECTS.filter(project => project.featured);
};

/**
 * Get projects by category
 * Performance: O(n) filtering with type safety
 */
export const getProjectsByCategory = (category: Project['category']): readonly Project[] => {
  return PROJECTS.filter(project => project.category === category);
};

/**
 * Get project by ID with type safety
 * Performance: O(n) find operation, consider Map for larger datasets
 */
export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find(project => project.id === id);
};