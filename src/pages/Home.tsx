// src/pages/Home.tsx
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Ranjith R — Founder, Tech Lead & Brand Creative | STORKSTONE & Sourcebit Innovations</title>
        <meta name="description" content="Ranjith R — Tech founder, engineer, and brand creative. Founder of STORKSTONE (925 silver minimalist jewelry & scented candles) and Sourcebit Innovations Pvt Ltd. Explore portfolio, projects, and design-led tech work." />
        <link rel="canonical" href="https://ranjithr.dev/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ranjithr.dev/" />
        <meta property="og:title" content="Ranjith R — Founder, Tech Lead & Brand Creative | STORKSTONE & Sourcebit Innovations" />
        <meta property="og:description" content="Founder, engineer, and creative lead behind STORKSTONE and Sourcebit Innovations. Exploring brand design, tech systems, and product automation." />
        <meta property="og:image" content="https://ranjithr.dev/assets/images/og-cover.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ranjithr.dev/" />
        <meta name="twitter:title" content="Ranjith R — Founder, Tech Lead & Brand Creative | STORKSTONE & Sourcebit Innovations" />
        <meta name="twitter:description" content="Founder, tech lead & brand creative at STORKSTONE and Sourcebit Innovations Pvt Ltd. Exploring design, automation, and D2C systems." />
        <meta name="twitter:image" content="https://ranjithr.dev/assets/images/og-cover.jpg" />
        
        <meta name="robots" content="index, follow" />
      </Helmet>
      
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
