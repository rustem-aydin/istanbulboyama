import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, PaintBucket } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Anasayfa', href: '#home' },
  { name: 'Hizmetler', href: '#services' },
  { name: 'Nasıl Çalışır', href: '#process' },
  { name: 'Neden Biz', href: '#why-us' },
  { name: 'Fiyatlar', href: '#pricing' },
  { name: 'İletişim', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within the viewport (with some offset)
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for sticky header
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/95 backdrop-blur-sm border-slate-200 shadow-sm py-4" : "bg-white py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <PaintBucket className="h-6 w-6 text-slate-900" />
          <span className="font-bold text-xl tracking-tight text-slate-900">İstanbul Boyama</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-slate-900",
                activeSection === item.href.substring(1) ? "text-slate-900 font-semibold" : "text-slate-500"
              )}
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="ml-4" 
            size="sm"
            onClick={(e) => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }}
          >
            Teklif Al
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors",
                    activeSection === item.href.substring(1) ? "text-slate-900" : "text-slate-500"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full mt-4" size="lg" onClick={(e) => {
                  const el = document.getElementById('contact');
                  if (el) {
                    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }
                }}>
                Teklif Al
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;