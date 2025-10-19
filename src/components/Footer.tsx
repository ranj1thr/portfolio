import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold hover:text-blue-400 transition-colors"
          >
            Portfolio
          </button>

          <p className="text-slate-400 text-sm flex items-center gap-1">
            Built with <Heart size={16} className="text-red-500 fill-current" /> using React, TypeScript & Supabase
          </p>

          <p className="text-slate-500 text-sm">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
