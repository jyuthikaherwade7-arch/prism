import React from 'react';
import { PageId } from '../../types';
import { PrismSpark } from '../stickers/PrismSpark';
import { CONTACT_INFO } from '../../data/eventsData';
import { Mail, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0A1931] border-t border-[#1A3D63] text-[#B3CFE5] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Wordmark, Full Form & Committee */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-extrabold tracking-tight text-[#F6FAFD]">
                PRISM'26
              </span>
              <PrismSpark size={14} color="#B3CFE5" />
            </div>
            <p className="text-[#B3CFE5] font-semibold text-xs tracking-wide">
              Public Reforms, Innovation, Sustainability & Management
            </p>
            <p className="text-[#B3CFE5]/80 text-xs leading-relaxed max-w-md">
              {CONTACT_INFO.organization} <br />
              {CONTACT_INFO.institution} <br />
              {CONTACT_INFO.campus}
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs">
              <span className="font-bold text-[#4A7FA7] text-base">13,400+</span>
              <span className="text-[#B3CFE5]">Students, NGOs, Institutions & Leaders</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F6FAFD]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#F6FAFD] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-[#F6FAFD] transition-colors"
                >
                  Explore Events (All Tracks)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#F6FAFD] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('register')}
                  className="text-[#4A7FA7] hover:text-[#F6FAFD] hover:underline transition-colors font-semibold"
                >
                  Registration Hub →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F6FAFD]">
              Contact Us
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#4A7FA7]" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#B3CFE5] hover:text-[#F6FAFD] hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#B3CFE5]" />
                <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noreferrer" className="text-[#B3CFE5] hover:text-[#F6FAFD] hover:underline">
                  {CONTACT_INFO.website}
                </a>
              </div>
              <p className="text-[11px] text-[#B3CFE5]/70 pt-1">
                Instagram: {CONTACT_INFO.social}
              </p>
              <div className="pt-2 text-[11px] text-[#B3CFE5] space-y-1">
                {CONTACT_INFO.contacts.map((c, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span>{c.name}:</span>
                    <a href={`tel:${c.phone}`} className="font-mono text-[#F6FAFD] hover:text-[#B3CFE5] ml-2">
                      +91 {c.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-[#1A3D63] flex flex-col sm:flex-row items-center justify-between text-xs text-[#B3CFE5]/70 gap-4">
          <p>© 2026 PRISM'26. Social Welfare & Development Committee, VIT Pune.</p>
          <div className="flex items-center gap-4">
            <span>Bibwewadi & Kondhwa Campuses</span>
            <span aria-hidden="true">·</span>
            <span>Pune — 411037</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
