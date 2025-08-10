export interface AiProject {
  id: string;
  title: string;
  description: string;
  status: 'live' | 'beta' | 'coming-soon';
  category: 'automation' | 'design' | 'research' | 'development';
  icon: string;
  gradient: string;
  apiUsage: string[];
  metrics: Record<string, string>;
  liveUrl?: string;
  githubUrl?: string;
  usageCount?: number;
  features: string[];
  techStack: string[];
  lastUpdated: Date;
}

export const AI_PROJECTS: AiProject[] = [
  {
    id: 'design-to-code',
    title: 'Design-to-Code Pipeline',
    description:
      '디자인 파일을 실제 작동하는 코드로 자동 변환. Claude 3.5 Sonnet의 비전 API를 활용해 Figma 디자인을 React 컴포넌트로 95% 정확도로 변환합니다.',
    status: 'live',
    category: 'automation',
    icon: '⚡',
    gradient: 'from-blue-500 to-purple-600',
    apiUsage: ['Claude 3.5 Sonnet', 'GPT-4 Vision', 'Figma API'],
    metrics: {
      accuracy: '95%',
      time_saved: '8시간',
      users: '1,200+',
      conversion_rate: '87%',
    },
    liveUrl: 'https://design-to-code.ardenkim.com',
    githubUrl: 'https://github.com/ardenim/design-to-code',
    usageCount: 1247,
    features: [
      'Figma 디자인 자동 분석',
      '실시간 React 코드 생성',
      'Tailwind CSS 최적화',
      '반응형 레이아웃 자동 생성',
    ],
    techStack: ['Next.js 14', 'Claude API', 'Figma API', 'TypeScript'],
    lastUpdated: new Date('2024-08-01'),
  },
  {
    id: 'ux-research-automation',
    title: 'UX Research Automation',
    description:
      '사용자 인터뷰 데이터를 AI로 분석해 페르소나와 여정지도를 자동 생성. 50시간의 분석 작업을 20분으로 단축시키는 도구입니다.',
    status: 'beta',
    category: 'research',
    icon: '🔍',
    gradient: 'from-green-500 to-teal-600',
    apiUsage: ['Claude 3.5 Sonnet', 'OpenAI GPT-4'],
    metrics: {
      time_reduction: '96%',
      insights_generated: '150+',
      beta_users: '89',
      satisfaction: '4.8/5',
    },
    liveUrl: 'https://ux-research.ardenkim.com',
    githubUrl: 'https://github.com/ardenim/ux-research-ai',
    usageCount: 892,
    features: [
      '인터뷰 음성 파일 자동 전사',
      'AI 기반 인사이트 추출',
      '페르소나 자동 생성',
      '여정지도 시각화',
    ],
    techStack: ['Python', 'Whisper API', 'Claude API', 'React'],
    lastUpdated: new Date('2024-07-28'),
  },
  {
    id: 'startup-toolkit',
    title: '1-Person Startup Toolkit',
    description:
      '혼자서도 스타트업을 런칭할 수 있는 AI 도구 모음. 아이디어 검증부터 MVP 제작, 마케팅까지 전 과정을 AI와 함께 진행합니다.',
    status: 'coming-soon',
    category: 'development',
    icon: '🚀',
    gradient: 'from-orange-500 to-red-600',
    apiUsage: ['Claude 3.5 Sonnet', 'GPT-4', 'Midjourney API'],
    metrics: {
      waitlist: '500+',
      tools_planned: '12',
      beta_release: 'Q4 2024',
      interest_score: '4.9/5',
    },
    githubUrl: 'https://github.com/ardenim/startup-toolkit',
    usageCount: 0,
    features: [
      'AI 기반 아이디어 검증',
      '자동 MVP 코드 생성',
      '마케팅 카피 작성',
      '사업계획서 생성',
    ],
    techStack: ['Next.js 14', 'Multiple AI APIs', 'Supabase', 'Stripe'],
    lastUpdated: new Date('2024-08-05'),
  },
];

/**
 * Get total usage count across all AI tools
 */
export const getTotalAiToolUsage = (): number => {
  return AI_PROJECTS.reduce((total, project) => total + (project.usageCount || 0), 0);
};

/**
 * Get projects by status
 */
export const getAiProjectsByStatus = (status: AiProject['status']): AiProject[] => {
  return AI_PROJECTS.filter((project) => project.status === status);
};

/**
 * Get live AI projects
 */
export const getLiveAiProjects = (): AiProject[] => {
  return getAiProjectsByStatus('live');
};
