// src/pages/Home.tsx
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Storkstone } from '../components/Storkstone';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export function Home() {
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
