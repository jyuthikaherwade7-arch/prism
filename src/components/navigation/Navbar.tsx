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
    <header className="sticky top-0 z-50 w-full bg-[#0A1931]/90 backdrop-blur-md border-b border-[#1A3D63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Wordmark */}
        <button
          onClick={() => handleSelect('home')}
          className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A7FA7] rounded-lg py-1"
          aria-label="PRISM'26 Home"
        >
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F6FAFD] group-hover:text-[#B3CFE5] transition-colors">
            PRISM'26
          </span>
          <PrismSpark size={15} color="#B3CFE5" className="opacity-90 group-hover:rotate-45 transition-transform" />
        </button>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-[#B3CFE5]">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleSelect(item.page)}
                className={`relative py-1 transition-colors hover:text-[#F6FAFD] ${
                  isActive ? 'text-[#F6FAFD]' : 'text-[#B3CFE5]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A7FA7] rounded-full shadow-[0_0_8px_#4A7FA7]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary action - REGISTER Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleSelect('register')}
            onMouseEnter={() => setRegisterHovered(true)}
            onMouseLeave={() => setRegisterHovered(false)}
            className={`px-6 py-2.5 text-xs font-bold tracking-wider rounded-lg transition-all duration-200 border whitespace-nowrap shadow-md ${
              currentPage === 'register'
                ? 'bg-[#4A7FA7] text-[#F6FAFD] border-[#B3CFE5] shadow-[0_0_18px_rgba(74,127,167,0.4)]'
                : 'bg-[#1A3D63] hover:bg-[#4A7FA7] text-[#F6FAFD] border-[#4A7FA7] shadow-[0_0_14px_rgba(26,61,99,0.5)] hover:scale-102'
            }`}
          >
            {registerHovered ? "LET'S DO THIS →" : "REGISTER"}
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#B3CFE5] hover:text-[#F6FAFD] rounded-lg border border-[#4A7FA7] bg-[#1A3D63]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1931] border-b border-[#1A3D63] px-4 pt-3 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleSelect(item.page)}
              className={`block w-full text-left py-2.5 px-3 rounded-md text-sm font-semibold tracking-wider ${
                currentPage === item.page
                  ? 'bg-[#1A3D63] text-[#F6FAFD] border-l-2 border-[#4A7FA7]'
                  : 'text-[#B3CFE5] hover:bg-[#1A3D63]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleSelect('register')}
              className="w-full py-3 text-center text-xs font-bold tracking-wider rounded-lg bg-[#4A7FA7] text-[#F6FAFD] hover:bg-[#1A3D63] border border-[#B3CFE5]/30 transition-colors shadow-md"
            >
              REGISTER NOW →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
