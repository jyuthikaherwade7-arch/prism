import React, { useState } from 'react';
import { PageId } from '../../types';
import { Menu, X } from 'lucide-react';
import { PrismSpark } from '../stickers/PrismSpark';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registerHovered, setRegisterHovered] = useState(false);

  const navItems: { label: string; page: PageId }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'EXPLORE EVENTS', page: 'events' },
    { label: 'GALLERY', page: 'gallery' }
  ];

  const handleSelect = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080D1A]/85 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleSelect('home')}
          className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg py-1"
          aria-label="PRISM'26 Home"
        >
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#FEF08A] transition-colors">
            PRISM'26
          </span>
          <PrismSpark size={14} color="#D4AF37" className="opacity-80 group-hover:rotate-45 transition-transform" />
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-slate-300">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleSelect(item.page)}
                className={`relative py-1 transition-colors hover:text-white ${
                  isActive ? 'text-[#FEF08A]' : 'text-slate-300'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary action - REGISTER (Navigates to dedicated /register page) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleSelect('register')}
            onMouseEnter={() => setRegisterHovered(true)}
            onMouseLeave={() => setRegisterHovered(false)}
            className={`px-5 py-2.5 text-xs font-bold tracking-wider rounded-lg transition-all duration-200 border whitespace-nowrap ${
              currentPage === 'register'
                ? 'bg-[#D4AF37] text-[#080D1A] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                : 'bg-[#0D1527] text-white border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#080D1A] hover:border-[#D4AF37] shadow-sm'
            }`}
          >
            {registerHovered ? "LET'S DO THIS →" : "REGISTER"}
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg border border-slate-700/60 bg-[#0D1527]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1120] border-b border-[#D4AF37]/25 px-4 pt-3 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleSelect(item.page)}
              className={`block w-full text-left py-2.5 px-3 rounded-md text-sm font-semibold tracking-wider ${
                currentPage === item.page
                  ? 'bg-[#131E38] text-[#FEF08A] border-l-2 border-[#D4AF37]'
                  : 'text-slate-200 hover:bg-[#131E38]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleSelect('register')}
              className="w-full text-center py-3 px-4 rounded-lg bg-[#D4AF37] text-[#080D1A] font-bold text-xs tracking-wider shadow-lg"
            >
              REGISTER
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
