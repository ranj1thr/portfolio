import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'storkstone', label: 'STORKSTONE' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.id), 150);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Keep nav visible if page is not the home route, even when at top (scrollY === 0).
      setIsScrolled(window.scrollY > 50 || location.pathname !== '/');
    };

    // Initialize scrolled state on mount.
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    // If Blog is a separate page, navigate to that route
    if (sectionId === 'blog') {
      navigate('/blog');
      setIsMobileMenuOpen(false);
      return;
    }
    // If Storkstone is a separate page, navigate to that route
    if (sectionId === 'storkstone') {
      // If already on storkstone route, scroll to id if present
      if (location.pathname === '/storkstone') {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/storkstone');
      }
      setIsMobileMenuOpen(false);
      return;
    }

    // For other sections: if not on home, navigate home first then scroll
    const doScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    };

    if (location.pathname !== '/') {
      navigate('/');
      // small delay to allow DOM to mount
      setTimeout(doScroll, 120);
    } else {
      doScroll();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-xl md:text-2xl font-bold transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            Portfolio
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isRouteActive = location.pathname.startsWith('/blog') && item.id === 'blog';
              const isActive = activeSection === item.id || isRouteActive;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors relative group ${
                    isScrolled ? 'text-slate-700' : 'text-white/90'
                  } ${isActive ? (isScrolled ? 'text-blue-600' : 'text-white') : ''} hover:${isScrolled ? 'text-blue-600' : 'text-white'}`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => {
              const isRouteActive = location.pathname.startsWith('/blog') && item.id === 'blog';
              const isActive = activeSection === item.id || isRouteActive;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
