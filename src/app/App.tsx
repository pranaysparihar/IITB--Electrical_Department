import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { ResearchSection } from '@/app/components/ResearchSection';
import { ProjectsSection } from '@/app/components/ProjectsSection';
import { TeamSection } from '@/app/components/TeamSection';
import { PublicationsSection } from '@/app/components/PublicationsSection';
import { NewsSection } from '@/app/components/NewsSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'research',
        'projects',
        'team',
        'publications',
        'news',
        'contact',
      ];
      
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Special case for hero/home section
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed header
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <div id="home">
          <HeroSection onNavigate={handleNavigate} />
        </div>
        <AboutSection />
        <ResearchSection />
        <ProjectsSection />
        <TeamSection />
        <PublicationsSection />
        <NewsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
