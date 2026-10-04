import React from 'react';
import { PageId } from '../../types';
import { PrismSpark } from '../stickers/PrismSpark';
import { CONTACT_INFO } from '../../data/eventsData';
import { MapPin, Mail, Phone, Globe, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050811] border-t border-[#D4AF37]/20 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Wordmark, Full Form & Committee */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                PRISM'26
              </span>
              <PrismSpark size={14} color="#D4AF37" />
            </div>
            <p className="text-[#FEF08A] font-semibold text-xs tracking-wide">
              Public Reforms, Innovation, Sustainability & Management
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {CONTACT_INFO.organization} <br />
              {CONTACT_INFO.institution} <br />
              {CONTACT_INFO.campus}
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs text-slate-300">
              <span className="font-bold text-[#D4AF37]">13,400+</span>
              <span>Students, NGOs, Institutions & Community Leaders</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-white transition-colors"
                >
                  Explore Events (All Tracks)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('register')}
                  className="text-[#FEF08A] hover:underline transition-colors font-semibold"
                >
                  Registration Hub →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact Us
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-300 hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noreferrer" className="text-slate-300 hover:underline">
                  {CONTACT_INFO.website}
                </a>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Instagram: {CONTACT_INFO.social}
              </p>
              <div className="pt-2 text-[11px] text-slate-400 space-y-1">
                {CONTACT_INFO.contacts.map((c, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span>{c.name}:</span>
                    <a href={`tel:${c.phone}`} className="font-mono text-slate-300 hover:text-[#FEF08A] ml-2">
                      +91 {c.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hairline Divider & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
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
