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
    <div className="bg-[#0A1931] text-[#F6FAFD] overflow-x-hidden">
      
      {/* ==================================================
          HERO SECTION
          Full Form: Public Reforms, Innovation, Sustainability & Management
          Social Welfare & Development Committee, VIT Pune
          ================================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Backdrop Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_prism_festival_1791146336366.jpg"
            alt="PRISM'26 Festival Stage"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/85 to-[#0A1931]/60" />
        </div>

        {/* Section Animated Sticker: Rocket */}
        <div className="absolute top-12 right-6 sm:right-16 z-10 hidden md:block">
          <RocketSticker size="md" showLabel={true} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-7">
          {/* Institutional Kicker in 5-Color Palette */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A3D63]/90 border border-[#4A7FA7]/60 text-xs font-semibold tracking-wider text-[#B3CFE5] backdrop-blur-md shadow-lg">
            <span className="text-[#F6FAFD] font-bold">Social Welfare & Development Committee</span>
            <span className="hidden sm:inline text-[#4A7FA7]">·</span>
            <span className="text-[#B3CFE5]">Vishwakarma Institute of Technology, Pune</span>
          </div>

          {/* Master PRISM'26 Wordmark & FULL FORM */}
          <div className="space-y-3">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#F6FAFD] leading-none">
              PRISM'26
            </h1>
            
            {/* FULL FORM Title */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#F6FAFD] via-[#B3CFE5] to-[#4A7FA7]">
                Public Reforms, Innovation, Sustainability & Management
              </h2>
            </div>
          </div>

          {/* Annual Flagship Subtitle */}
          <p className="text-sm sm:text-base text-[#B3CFE5] max-w-2xl mx-auto font-normal leading-relaxed">
            Annual flagship platform for Civic Dialogue & Action. Bringing together students, NGOs, 
            government bodies, and young innovators to tackle systemic challenges in education, healthcare, technology, environment, and governance.
          </p>

          {/* Primary Exploration Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onNavigate('events')}
              onMouseEnter={() => setExploreBtnHovered(true)}
              onMouseLeave={() => setExploreBtnHovered(false)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#4A7FA7] hover:bg-[#1A3D63] text-[#F6FAFD] font-extrabold text-xs tracking-wider transition-all duration-200 border border-[#B3CFE5]/30 shadow-[0_0_24px_rgba(74,127,167,0.4)] flex items-center justify-center gap-2"
            >
              <span>{exploreBtnHovered ? 'GO ON →' : 'EXPLORE EVENTS'}</span>
            </button>

            <button
              onClick={() => onNavigate('register')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1A3D63]/90 hover:bg-[#4A7FA7] text-[#F6FAFD] font-bold text-xs tracking-wider border border-[#4A7FA7] transition-all flex items-center justify-center gap-2"
            >
              <span>REGISTER HUB →</span>
            </button>
          </div>

          {/* Metrics using exact palette */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left border-t border-[#1A3D63] text-xs">
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-[#F6FAFD] tabular-nums">13,400+</span>
              <span className="text-[#B3CFE5]">Students & Leaders</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-[#4A7FA7] tabular-nums">2 Days</span>
              <span className="text-[#B3CFE5]">Multi-Track Summit</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-[#F6FAFD] tabular-nums">VIT Pune</span>
              <span className="text-[#B3CFE5]">Bibwewadi & Kondhwa</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-[#B3CFE5] tabular-nums">SWD</span>
              <span className="text-[#B3CFE5]">Social Welfare Committee</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
