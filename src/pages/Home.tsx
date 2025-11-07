// src/pages/Home.tsx
import { Navigation } from '../components/Navigation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Storkstone } from '../components/Storkstone';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function Home() {
  const location = useLocation();

  // Auto-scroll to section when visiting section-friendly routes
  useEffect(() => {
    const path = location.pathname.replace(/^\/+|\/+$/g, ''); // trim slashes
    const sectionId = ['about', 'projects', 'experience', 'contact'].includes(path)
      ? path
      : null;

    if (sectionId) {
      // Defer to next frame to ensure DOM/sections are mounted
      requestAnimationFrame(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    } else {
      // On non-section routes, ensure we start at the top when Home mounts via these routes
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [location.pathname]);

  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Storkstone />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
