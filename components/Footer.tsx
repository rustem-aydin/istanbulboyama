import React from 'react';
import { PaintBucket, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <PaintBucket className="h-6 w-6 text-slate-900" />
          <span className="font-bold text-xl tracking-tight text-slate-900">İstanbul Boyama</span>
        </div>

        <div className="text-sm text-slate-500 mb-4 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} İstanbul Boyama. Tüm hakları saklıdır.
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;