import { ArrowDown, Github, Linkedin, Mail, X, } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Ranjith R.</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-8 font-light">
            Founder & Tech Lead at STORKSTONE | Automation Engineer & Data Systems Specialist
          </p>
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I love building things that run by themselves - automation workflows, data pipelines, and clean backend systems that make daily operations effortless.
            At STORKSTONE, I lead the tech stack that powers everything from order flow to analytics, combining efficiency with design-driven thinking.
          </p>
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            My focus is simple: turn manual effort into elegant automation and make technology quietly power the business behind the scenes.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 border border-white/20"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ranj1thr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ranj1thr/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/ranj1thhh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Twitter"
            >
              <X size={24} />
            </a>
            <a
              href="mailto:ranjithtweaks@gmail.com"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} className="text-white/70" />
        </button>
      </div>
    </section>
  );
}
