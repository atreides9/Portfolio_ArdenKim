import type { Metadata } from 'next';
import { AboutSection } from '@/components/features/About/AboutSection';
import { AiLabSection } from '@/components/features/AiLab/AiLabSection';
import { ContactSection } from '@/components/features/Contact/ContactSection';
import { HeroSection } from '@/components/features/Hero/HeroSection';
import { ProjectsSection } from '@/components/features/Projects/ProjectsSection';
import { SkillsSection } from '@/components/features/Skills/SkillsSection';
import { Footer } from '@/components/layouts/Footer/Footer';

// Page-specific metadata for better SEO
export const metadata: Metadata = {
  title: '김나겸 | AI-Augmented Product Designer & Builder',
  description:
    'AI를 활용해 실제 작동하는 도구를 만드는 프로덕트 디자이너. 디자인과 개발, AI 기술이 만나는 지점에서 새로운 가능성을 탐구합니다.',
  openGraph: {
    title: '김나겸 | AI-Augmented Product Designer & Builder',
    description:
      'AI를 활용해 실제 작동하는 도구를 만드는 프로덕트 디자이너. 디자인과 AI가 만나는 새로운 가능성을 탐구합니다.',
    url: 'https://ardenkim.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Main content with semantic structure for accessibility */}
      <main id="main-content" className="overflow-x-hidden">
        {/* Hero section with molecular animation - GPU accelerated */}
        <HeroSection />

        {/* AI Lab section - showcasing working AI tools */}
        <AiLabSection />

        {/* About section with scroll-triggered animations */}
        <AboutSection />

        {/* Projects section with lazy-loaded images */}
        <ProjectsSection />

        {/* Skills section with animated progress bars */}
        <SkillsSection />

        {/* Contact section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
