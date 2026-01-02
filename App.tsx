import React, { useState, useEffect } from 'react';
import SEO from './components/SEO';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import { CONTACT_LINKS, PROFILE } from './constants';
import { Menu, X, ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative">
      <SEO />
      
      {/* Sticky Navigation / Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            MINN<span className="text-accent">.DEV</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Experience', 'Projects', 'Skills'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-300'}`}
              >
                {item}
              </a>
            ))}
            <a 
              href={`mailto:${PROFILE.email}`}
              className="px-5 py-2 bg-accent hover:bg-sky-600 text-white rounded-full text-sm font-semibold transition-all"
            >
              Contact Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col gap-4">
             {['Experience', 'Projects', 'Skills'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-slate-700 font-medium py-2 px-4 hover:bg-slate-50 rounded-lg"
              >
                {item}
              </a>
            ))}
             <a 
              href={`mailto:${PROFILE.email}`}
              className="text-accent font-bold py-2 px-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
             {CONTACT_LINKS.slice(0, 4).map((link, idx) => (
               <a 
                key={idx}
                href={link.href}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                aria-label={link.label}
               >
                 <link.icon size={18} />
               </a>
             ))}
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Minn Thway Khaing. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-accent text-white rounded-full shadow-lg hover:bg-sky-600 transition-all z-40 animate-bounce"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default App;