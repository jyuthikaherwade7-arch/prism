import React, { useState } from 'react';
import { THREE_REGISTER_OPTIONS, RegisterOptionItem } from '../../data/eventsData';
import { TicketSticker } from '../stickers/TicketSticker';
import { PrismSpark } from '../stickers/PrismSpark';
import { LightbulbSticker } from '../stickers/LightbulbSticker';
import { GlobeSticker } from '../stickers/GlobeSticker';
import { TheatreMasksSticker } from '../stickers/TheatreMasksSticker';
import { ExternalLink, AlertCircle } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Return corresponding sticker for the 3 options
  const renderOptionSticker = (id: string) => {
    switch (id) {
      case 'ideathon':
        return <LightbulbSticker size="sm" showLabel={false} />;
      case 'sociothon':
        return <GlobeSticker size="sm" showLabel={false} />;
      case 'more-events':
        return <TheatreMasksSticker size="sm" showLabel={false} />;
      default:
        return <PrismSpark size={20} color="#D4AF37" />;
    }
  };

  const getButtonText = (item: RegisterOptionItem, isHovered: boolean) => {
    if (isHovered) {
      return "LET'S DO THIS →";
    }
    return item.buttonLabel || 'REGISTER →';
  };

  return (
    <div className="min-h-screen bg-[#080D1A] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Header Section with PRISM Ticket Sticker */}
      <div className="max-w-5xl mx-auto text-center space-y-6 pt-4 pb-14">
        
        {/* Ticket Sticker */}
        <div className="flex justify-center mb-4">
          <TicketSticker size="md" />
        </div>

        {/* Hero Text */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1527] border border-[#D4AF37]/30 text-[#FEF08A] text-xs font-bold tracking-widest uppercase">
          <PrismSpark size={12} color="#D4AF37" />
          <span>YOUR PASS TO PRISM'26</span>
          <PrismSpark size={12} color="#D4AF37" />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          CHOOSE YOUR EVENT
        </h1>

        <p className="text-lg sm:text-xl text-[#CBD5E1] font-medium max-w-2xl mx-auto">
          Your PRISM'26 journey starts here.
        </p>

        <p className="text-sm text-slate-400 max-w-lg mx-auto">
          Choose what you want to be part of. Select from the 3 official registration categories below.
        </p>

        {/* Informational Callout */}
        <div className="max-w-xl mx-auto p-3.5 rounded-xl bg-[#0D1527]/90 border border-[#D4AF37]/35 flex items-center justify-center gap-3 text-xs text-slate-300 shadow-sm">
          <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>
            <strong className="text-white">Notice:</strong> Different event = different registration link. Select your category below.
          </span>
        </div>
      </div>

      {/* EXACTLY THREE OPTIONS GRID */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {THREE_REGISTER_OPTIONS.map((item) => {
            const isHovered = hoveredCardId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCardId(item.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-[#0D1527] transition-all duration-300 border ${
                  isHovered
                    ? '-translate-y-2 border-[#D4AF37] shadow-[0_12px_32px_rgba(212,175,55,0.2)]'
                    : 'border-slate-800 hover:border-slate-700 shadow-lg'
                }`}
              >
                {/* Top Row: Track & Illustrated Mini-Sticker */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                      {item.track}
                    </span>
                    <div className="shrink-0 h-10 w-10 flex items-center justify-center">
                      {renderOptionSticker(item.id)}
                    </div>
                  </div>

                  {/* Event Name */}
                  <h3 className={`font-display text-2xl font-bold tracking-tight mb-2 transition-colors ${
                    isHovered ? 'text-[#FEF08A]' : 'text-white'
                  }`}>
                    {item.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {item.oneLiner}
                  </p>

                  {/* Specific parameters */}
                  {item.teamSize && (
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pb-5 mb-5 border-b border-slate-800/80">
                      <span>{item.teamSize}</span>
                      {item.eligibility && (
                        <>
                          <span aria-hidden="true" className="text-slate-600">·</span>
                          <span className="truncate max-w-[190px]">{item.eligibility}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom Section: Dedicated Direct Registration Link */}
                <div className="space-y-3 pt-2">
                  <a
                    href={item.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                      isHovered
                        ? 'bg-[#D4AF37] text-[#080D1A] shadow-[0_0_16px_rgba(212,175,55,0.4)] font-extrabold'
                        : 'bg-[#131E38] text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#080D1A]'
                    }`}
                  >
                    <span>{getButtonText(item, isHovered)}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Direct Link Attribution */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                    <span className="truncate max-w-[170px] text-slate-400">
                      Portal:{' '}
                      <span className="font-mono text-slate-300">
                        {item.id === 'more-events' ? 'vierp.in' : 'unstop.com'}
                      </span>
                    </span>
                    <a
                      href={item.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#38BDF8] hover:text-[#7DD3FC] hover:underline transition-colors shrink-0"
                    >
                      <span>Direct Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Decorative gold hairline corner indicator */}
                <div
                  className={`absolute top-0 right-0 w-8 h-8 rounded-tr-2xl transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(212,175,55,0.4) 0%, transparent 70%)'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiet Help / FAQ reassurance */}
      <div className="max-w-3xl mx-auto mt-16 p-6 rounded-2xl bg-[#0D1527]/70 border border-slate-800 text-center space-y-2">
        <h4 className="text-sm font-bold text-white">
          Social Welfare & Development Committee (SWD)
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed">
          Vishwakarma Institute of Technology, Pune (Bibwewadi & Kondhwa Campuses) — 411037.<br />
          Email: <a href="mailto:vitswd@vit.edu" className="text-[#38BDF8] underline">vitswd@vit.edu</a> · 
          Instagram: <span className="text-slate-300">@vitsocials</span> · 
          Website: <a href="https://www.swd.vit.edu" target="_blank" rel="noopener noreferrer" className="text-[#38BDF8] underline">www.swd.vit.edu</a>
        </p>
      </div>
    </div>
  );
};
