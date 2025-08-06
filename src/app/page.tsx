import type { Metadata } from 'next';
import { AboutSection } from '@/components/features/About/AboutSection';
import { ContactSection } from '@/components/features/Contact/ContactSection';
import { HeroSection } from '@/components/features/Hero/HeroSection';
import { ProjectsSection } from '@/components/features/Projects/ProjectsSection';
import { SkillsSection } from '@/components/features/Skills/SkillsSection';
import { Footer } from '@/components/layouts/Footer/Footer';

// Page-specific metadata for better SEO
export const metadata: Metadata = {
  title: '김나겸 | Product Designer Portfolio',
  description:
    '과학적 사고와 창의적 문제해결이 만나는 지점에서 사용자 경험을 설계하는 프로덕트 디자이너 김나겸의 포트폴리오입니다.',
  openGraph: {
    title: '김나겸 | Product Designer Portfolio',
    description: '과학적 사고와 창의적 문제해결이 만나는 지점에서 사용자 경험을 설계합니다.',
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
