import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';

// Pages
import HomePage from '@/app/pages/Home';
import AboutPage from '@/app/pages/About';
import PublicationsPage from '@/app/pages/Publications';
import ProjectsPage from '@/app/pages/Projects';
import TeamPage from '@/app/pages/Team';
import FacilitiesPage from '@/app/pages/Facilities';

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      } else {
        // If there's no hash, just scroll to top of the new page
        window.scrollTo(0, 0);
      }
    }, 100);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollHandler />
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}
