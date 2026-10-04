import React, { useState } from 'react';
import { PageId, EventItem } from '../../types';
import { RocketSticker } from '../stickers/RocketSticker';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEventDetail?: (event: EventItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [exploreBtnHovered, setExploreBtnHovered] = useState(false);

  return (
    <div className="bg-[#080D1A] text-slate-100 overflow-x-hidden">
      
      {/* ==================================================
          HERO SECTION
          Full Form: Public Reforms, Innovation, Sustainability & Management
          Social Welfare & Development Committee, VIT Pune
          ================================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Cinematic Backdrop Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_prism_festival_1791146336366.jpg"
            alt="PRISM'26 Festival Stage"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-30 filter brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-[#080D1A]/85 to-[#080D1A]/60" />
        </div>

        {/* Section Animated Sticker: Rocket */}
        <div className="absolute top-12 right-6 sm:right-16 z-10 hidden md:block">
          <RocketSticker size="md" showLabel={true} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-7">
          {/* Institutional Kicker from Brochure */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1527]/90 border border-[#D4AF37]/35 text-xs font-semibold tracking-wider text-slate-200 backdrop-blur-md shadow-lg">
            <span className="text-[#FEF08A] font-bold">Social Welfare & Development Committee</span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="text-slate-300">Vishwakarma Institute of Technology, Pune</span>
          </div>

          {/* Master PRISM'26 Wordmark & FULL FORM */}
          <div className="space-y-3">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
              PRISM'26
            </h1>
            
            {/* FULL FORM PROMINENT DISPLAY */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FEF08A] to-[#F97316]">
                Public Reforms, Innovation, Sustainability & Management
              </h2>
            </div>
          </div>

          {/* Annual Flagship Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Annual flagship platform for Civic Dialogue & Action. Bringing together students, NGOs, 
            government bodies, and young innovators to tackle systemic challenges in education, healthcare, technology, environment, and governance.
          </p>

          {/* Primary Exploration Action with required micro-interaction */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onNavigate('events')}
              onMouseEnter={() => setExploreBtnHovered(true)}
              onMouseLeave={() => setExploreBtnHovered(false)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#FEF08A] text-[#080D1A] font-extrabold text-xs tracking-wider transition-all duration-200 shadow-[0_0_24px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2"
            >
              <span>{exploreBtnHovered ? 'GO ON →' : 'EXPLORE EVENTS'}</span>
            </button>

            <button
              onClick={() => onNavigate('register')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0D1527]/90 hover:bg-[#131E38] text-slate-200 hover:text-white font-bold text-xs tracking-wider border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>REGISTER HUB →</span>
            </button>
          </div>

          {/* Brochure Figures: 13,400+ and Campus Details */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left border-t border-slate-800/80 text-xs">
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">13,400+</span>
              <span className="text-slate-400">Students & Community Leaders</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-[#D4AF37] tabular-nums">2 Days</span>
              <span className="text-slate-400">Multi-Track Summit</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">VIT Pune</span>
              <span className="text-slate-400">Bibwewadi & Kondhwa</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-[#38BDF8] tabular-nums">SWD</span>
              <span className="text-slate-400">Social Welfare Committee</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
