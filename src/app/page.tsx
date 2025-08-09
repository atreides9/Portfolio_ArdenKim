import { AiLabSection } from '@/components/features/AiLab/AiLabSection';
import { AboutSection } from '@/components/features/About/AboutSection';
import { ContactSection } from '@/components/features/Contact/ContactSection';
import { HeroSection } from '@/components/features/Hero/HeroSection';
import { SkillsSection } from '@/components/features/Skills/SkillsSection';
import { Footer } from '@/components/layouts/Footer/Footer';

// Page-specific metadata for better SEO
export const metadata: Metadata = {
  title: 'Arden Kim | AI-Augmented Product Designer & Builder',
  description:
    'AGI 시대의 하이브리드 크리에이터 - AI로 디자인하고, 코드로 구현하고, 데이터로 검증합니다.',
  openGraph: {
    title: 'Arden Kim | AI-Augmented Product Designer & Builder',
    description: 'AI와 함께 10배 빠르게 아이디어를 현실로 구현하는 김나겸의 포트폴리오.',
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

        {/* AI Lab section */}
        <AiLabSection />

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
