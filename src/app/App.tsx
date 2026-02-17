import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { ResearchSection } from '@/app/components/ResearchSection';
import { ProjectsSection } from '@/app/components/ProjectsSection';
import { TeamSection } from '@/app/components/TeamSection';
import { PublicationsSection } from '@/app/components/PublicationsSection';
import { FacilitiesSection } from '@/app/components/FacilitiesSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // The order here should match the rendered order for accurate scroll spying
      const sections = [
        'home',
        'about',
        'research',
        'projects',
        'facilities',
        'publications',
        'team',
        'contact',
      ];

      // Offset to account for fixed header
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
      setActiveSection('home');
      return;
    }

    let element = document.getElementById(section);

    // If exact ID (subsection) not found, try finding parent section
    if (!element && section.includes('-')) {
      const parentSection = section.split('-')[0];
      element = document.getElementById(parentSection);
    }

    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      // We don't necessarily update activeSection here, let the scroll spy do it
      // Or we can update it immediately for responsiveness
      setActiveSection(section);
    } else {
      // If checking for subsection (e.g. 'about-bio'), check if parent exists
      // This is mainly for safety, though IDs should match
      console.warn(`Section element not found: ${section}`);
    }
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
        <FacilitiesSection />
        <PublicationsSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
