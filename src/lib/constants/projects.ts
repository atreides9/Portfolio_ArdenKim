import type { Project } from '@/lib/types';

/**
 * Project data with performance-optimized image handling
 * All images should be processed through Next.js Image optimization
 */
export const PROJECTS: readonly Project[] = [
  {
    id: 'job-hunter-ai',
    title: 'Job Hunter 2.0 - AI Enhanced',
    description: 'Claude API를 활용하여 자기소개서를 자동으로 최적화하고, GPT-4로 면접 질문을 예측하는 AI 기반 취업 관리 플랫폼입니다.',
    imageUrl: '/images/projects/job-hunter-hero.webp',
    blurDataURL:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    metrics: [
      { label: '지원서 작성 시간', value: '80% 감소' },
      { label: '서류 통과율', value: '3x 향상' },
      { label: 'AI 정확도', value: '94.2%' }
    ],
    aiFeatures: [
      'Claude 기반 맞춤형 자기소개서 생성',
      'AI 면접 질문 예측 및 답변 가이드',
      '실시간 채용공고 분석 및 매칭',
      'CV 최적화 점수링 시스템'
    ],
    tags: ['AI/ML', 'UX Research', 'Product Strategy', 'SaaS'],
    category: 'product-strategy',
    featured: true,
    completedAt: new Date('2024-07-15'),
    url: 'https://job-hunter-ai.ardenkim.com',
  },
  {
    id: 'insight-dots-ai',
    title: 'Insight Dots - AI Integration',
    description:
      '기존 데이터 시각화 프로젝트에 AI 분석 기능을 추가하여, GPT-4로 데이터 인사이트를 자동 추출하고 Claude로 비즈니스 권장사항을 생성합니다.',
    imageUrl: '/images/projects/insight-dots-hero.webp',
    blurDataURL:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    metrics: [
      { label: '분석 속도', value: '10x', description: 'AI 기반 자동화' },
      { label: '인사이트 정확도', value: '95%', description: '전문가 평가' },
      { label: 'ROI', value: '250%', description: '프로젝트 수익률' },
    ],
    aiEnhancements: {
      'GPT-4 기반 데이터 인사이트 자동 추출': true,
      'Claude를 활용한 비즈니스 권장사항 생성': true,
      '자연어 질의를 통한 데이터 탐색': true,
      '예측 분석 및 트렌드 예측': true,
    },
    tags: ['AI/ML', 'Data Visualization', 'Analytics', 'B2B'],
    category: 'data-visualization',
    featured: true,
    completedAt: new Date('2024-08-01'),
    url: 'https://insight-dots-ai.ardenkim.com',
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
