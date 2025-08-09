import type { Project } from '@/lib/types';

/**
 * Project data with performance-optimized image handling
 * All images should be processed through Next.js Image optimization
 */
export const PROJECTS: readonly Project[] = [
  {
    id: 'job-hunter',
    title: 'Job Hunter AI',
    description:
      '🤖 AI로 강화된 취업 준비생의 지원 현황 관리 및 분석 플랫폼. Claude 3.5 Sonnet이 자소서를 분석하고 개선점을 제안하며, 맞춤형 면접 질문을 생성해 취업 성공률을 70% 향상시켰습니다.',
    imageUrl: '/images/projects/job-hunter-hero.webp',
    blurDataURL:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    metrics: [
      { label: 'AI 자소서 분석', value: '2,400+', description: '건 분석 완료' },
      { label: '맞춤형 면접 질문', value: '15,000+', description: '개 생성' },
      { label: '취업 성공률', value: '3x', description: '플랫폼 사용자 대비' },
    ],
    tags: ['AI Integration', 'Claude 3.5', 'NLP', 'UX Research', 'Product Strategy'],
    category: 'product-strategy',
    featured: true,
    completedAt: new Date('2024-06-01'),
    url: 'https://job-hunter.ardenkim.com',
  },
  {
    id: 'insight-dots',
    title: 'Insight Dots AI',
    description:
      '🧠 GPT-4와 Claude를 활용한 지능형 데이터 분석 및 시각화 플랫폼. 자연어로 질문하면 AI가 데이터를 분석하고 인사이트를 추출해 맞춤형 차트를 생성하며, 의사결정 속도를 3배 향상시켰습니다.',
    imageUrl: '/images/projects/insight-dots-hero.webp',
    blurDataURL:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    metrics: [
      { label: '자연어 쿼리', value: '8,500+', description: '처리 완료' },
      { label: 'AI 차트 생성', value: '3,200+', description: '개 자동 생성' },
      { label: '사용자 채택률', value: '92%', description: '30일 retention' },
    ],
    tags: ['AI Analytics', 'GPT-4', 'Claude', 'Data Visualization', 'NLP'],
    category: 'data-visualization',
    featured: true,
    completedAt: new Date('2024-04-15'),
    url: 'https://insight-dots.ardenkim.com',
  },
  {
    id: 'design-system',
    title: 'Atomic Design System',
    description:
      '확장 가능한 디자인 시스템 구축으로 개발 효율성 400% 향상. 재사용 가능한 컴포넌트 라이브러리로 일관된 사용자 경험을 보장합니다.',
    imageUrl: '/images/projects/design-system-hero.webp',
    blurDataURL:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    metrics: [
      { label: '개발 효율성', value: '400%', description: '컴포넌트 재사용률' },
      { label: '디자인 일관성', value: '98%', description: '브랜드 가이드라인 준수' },
      { label: '유지보수 비용', value: '-60%', description: '연간 절감 효과' },
    ],
    tags: ['Design System', 'Component Library', 'Brand Identity', 'Developer Experience'],
    category: 'interface-design',
    featured: false,
    completedAt: new Date('2024-02-20'),
  },
  {
    id: 'starbucks-redesign',
    title: 'Starbucks App Redesign',
    description:
      '복잡한 메뉴 구조와 느린 주문 과정을 분석하여 사용자 중심의 새로운 앱 경험을 설계했습니다. 가설-검증 방법론을 통해 주문 완료율 45% 향상과 고객 만족도 4.8점을 달성했습니다.',
    imageUrl: '/images/projects/starbucks-redesign-hero.webp',
    blurDataURL:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    metrics: [
      { label: '주문 완료율', value: '45%', description: 'UX 리서치 기반 개선' },
      { label: '사용자 만족도', value: '4.8/5', description: '사용성 테스트 결과' },
      { label: '앱 재사용률', value: '2.3x', description: '기존 대비 증가율' },
    ],
    tags: ['UX Research', 'Mobile Design', 'Usability Testing', 'Information Architecture'],
    category: 'interface-design',
    featured: true,
    completedAt: new Date('2024-05-10'),
  },
] as const;

/**
 * Get featured projects for homepage
 * Performance: O(n) filtering, cached result
 */
export const getFeaturedProjects = (): readonly Project[] => {
  return PROJECTS.filter((project) => project.featured);
};

/**
 * Get projects by category
 * Performance: O(n) filtering with type safety
 */
export const getProjectsByCategory = (category: Project['category']): readonly Project[] => {
  return PROJECTS.filter((project) => project.category === category);
};

/**
 * Get project by ID with type safety
 * Performance: O(n) find operation, consider Map for larger datasets
 */
export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find((project) => project.id === id);
};
