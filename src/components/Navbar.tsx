import React, { useState, useEffect } from 'react';
import { STUDIO_CONFIG } from '../data/studioData';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626] py-3.5 sm:py-4 shadow-2xl'
          : 'bg-[#0A0A0A]/70 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo only (without blinking dot) */}
          <a
            href="#"
            className="flex items-center group focus:outline-none"
            aria-label="Abarr Tattoo Página Inicial"
          >
            <span className="font-syne text-2xl sm:text-3xl font-extrabold tracking-widest text-[#E60000] drop-shadow-[0_2px_10px_rgba(230,0,0,0.35)]">
              {STUDIO_CONFIG.name}
            </span>
          </a>

          {/* Right Action: Orçamento Gratuito only for PC/Tablet, hidden on mobile */}
          <div className="hidden sm:block">
            <button
              onClick={onOpenQuote}
              className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs uppercase font-syne font-extrabold tracking-widest text-white border-2 border-white hover:border-[#E60000] hover:bg-[#E60000] transition-all duration-200 cursor-pointer shadow-lg shadow-black/40"
            >
              Orçamento Gratuito
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
