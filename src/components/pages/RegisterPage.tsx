import React, { useState } from 'react';
import { THREE_REGISTER_OPTIONS, RegisterOptionItem } from '../../data/eventsData';
import { PrismSpark } from '../stickers/PrismSpark';
import { LightbulbSticker } from '../stickers/LightbulbSticker';
import { GlobeSticker } from '../stickers/GlobeSticker';
import { TheatreMasksSticker } from '../stickers/TheatreMasksSticker';
import { ExternalLink, AlertCircle, ChevronRight, CheckCircle2 } from 'lucide-react';

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
        return <PrismSpark size={20} color="#B3CFE5" />;
    }
  };

  const getButtonText = (item: RegisterOptionItem, isHovered: boolean) => {
    if (isHovered) {
      return "LET'S DO THIS →";
    }
    return item.buttonLabel || 'REGISTER →';
  };

  const registrationSteps = [
    "Click on the 'Event' tab.",
    "Select Organising Institute.",
    "Select Event",
    "Click on Pay fees.",
    "Select Payment Gateway “PAYTM” and proceed for payment."
  ];

  return (
    <div className="min-h-screen bg-[#0A1931] text-[#F6FAFD] py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Header Section */}
      <div className="max-w-5xl mx-auto text-center space-y-6 pt-4 pb-14">

        {/* Hero Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3D63] border border-[#4A7FA7]/60 text-[#B3CFE5] text-xs font-bold tracking-widest uppercase shadow-sm">
          <PrismSpark size={12} color="#B3CFE5" />
          <span>YOUR PASS TO PRISM'26</span>
          <PrismSpark size={12} color="#4A7FA7" />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F6FAFD] tracking-tight">
          CHOOSE YOUR EVENT
        </h1>

        <p className="text-lg sm:text-xl text-[#B3CFE5] font-medium max-w-2xl mx-auto">
          Your PRISM'26 journey starts here.
        </p>

        <p className="text-sm text-[#B3CFE5]/80 max-w-lg mx-auto">
          Choose what you want to be part of. Select from the 3 official registration categories below.
        </p>

        {/* Informational Callout */}
        <div className="max-w-xl mx-auto p-3.5 rounded-xl bg-[#1A3D63]/90 border border-[#4A7FA7] flex items-center justify-center gap-3 text-xs text-[#B3CFE5] shadow-sm">
          <AlertCircle className="w-4 h-4 text-[#B3CFE5] shrink-0" />
          <span>
            <strong className="text-[#F6FAFD]">Notice:</strong> Different event = different registration link. Select your category below.
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
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-[#1A3D63]/85 transition-all duration-300 border ${
                  isHovered
                    ? '-translate-y-2 border-[#B3CFE5] shadow-[0_12px_32px_rgba(74,127,167,0.4)]'
                    : 'border-[#4A7FA7]/40 hover:border-[#4A7FA7] shadow-lg'
                }`}
              >
                {/* Top Row: Track & Illustrated Mini-Sticker */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#B3CFE5]">
                      {item.track}
                    </span>
                    <div className="shrink-0 h-10 w-10 flex items-center justify-center">
                      {renderOptionSticker(item.id)}
                    </div>
                  </div>

                  {/* Event Name */}
                  <h3 className={`font-display text-2xl font-bold tracking-tight mb-2 transition-colors ${
                    isHovered ? 'text-[#F6FAFD]' : 'text-[#F6FAFD]'
                  }`}>
                    {item.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#B3CFE5] leading-relaxed mb-5">
                    {item.oneLiner}
                  </p>

                  {/* Specific parameters */}
                  {item.teamSize && (
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#B3CFE5] pb-5 mb-5 border-b border-[#0A1931]">
                      <span>{item.teamSize}</span>
                      {item.eligibility && (
                        <>
                          <span aria-hidden="true" className="text-[#4A7FA7]">·</span>
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
                        ? 'bg-[#1A3D63] text-[#F6FAFD] border-2 border-[#B3CFE5] shadow-[0_0_18px_rgba(179,207,229,0.4)] font-extrabold'
                        : 'bg-[#4A7FA7] hover:bg-[#1A3D63] text-[#F6FAFD] border border-[#B3CFE5]/30'
                    }`}
                  >
                    <span>{getButtonText(item, isHovered)}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Direct Link Attribution */}
                  <div className="flex items-center justify-between text-[11px] text-[#B3CFE5] px-1">
                    <span className="truncate max-w-[170px] text-[#B3CFE5]/80">
                      Portal:{' '}
                      <span className="font-mono text-[#F6FAFD]">
                        {item.id === 'more-events' ? 'vierp.in' : 'unstop.com'}
                      </span>
                    </span>
                    <a
                      href={item.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#B3CFE5] hover:text-[#F6FAFD] hover:underline transition-colors shrink-0"
                    >
                      <span>Direct Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Decorative corner indicator */}
                <div
                  className={`absolute top-0 right-0 w-8 h-8 rounded-tr-2xl transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(179,207,229,0.4) 0%, transparent 70%)'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* User Requested: Step Guide to Register More Events for VIT Students / Participants */}
      <div className="max-w-4xl mx-auto mt-14 p-6 sm:p-8 rounded-2xl bg-[#1A3D63]/85 border-2 border-[#4A7FA7]/60 shadow-2xl">
        <div className="space-y-4">
          
          {/* Header */}
          <div className="border-b border-[#0A1931] pb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#0A1931] border border-[#4A7FA7]/50 text-[11px] font-bold uppercase tracking-wider text-[#B3CFE5] mb-2">
              Registration Guide
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#F6FAFD]">
              Follow these steps to register for more events
            </h3>
            <p className="text-xs sm:text-sm text-[#B3CFE5] font-semibold mt-1">
              For VIT students / Participants registration:
            </p>
          </div>

          {/* Login credential instruction */}
          <div className="p-4 rounded-xl bg-[#0A1931]/90 border border-[#4A7FA7]/40 text-xs sm:text-sm text-[#B3CFE5] space-y-1">
            <p>
              Students should login on:{' '}
              <a
                href="https://learner.vierp.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F6FAFD] font-mono font-bold underline hover:text-[#B3CFE5] inline-flex items-center gap-1"
              >
                <span>https://learner.vierp.in</span>
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
            </p>
            <p className="text-xs text-[#B3CFE5]/80">
              using <strong className="text-[#F6FAFD]">PRN No.</strong> as login and password.
            </p>
          </div>

          {/* Steps List */}
          <div className="pt-2 space-y-2.5">
            {registrationSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-[#0A1931]/60 border border-[#1A3D63] text-xs sm:text-sm text-[#F6FAFD] transition-colors hover:bg-[#0A1931]/90"
              >
                <span className="text-[#4A7FA7] font-bold font-mono shrink-0 select-none text-base leading-none pt-0.5">
                  &gt;&gt;
                </span>
                <span className="font-medium text-[#F6FAFD] leading-relaxed">
                  {step}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Committee Reassurance */}
      <div className="max-w-3xl mx-auto mt-14 p-6 rounded-2xl bg-[#1A3D63]/70 border border-[#4A7FA7]/50 text-center space-y-2">
        <h4 className="text-sm font-bold text-[#F6FAFD]">
          Social Welfare & Development Committee (SWD)
        </h4>
        <p className="text-xs text-[#B3CFE5] leading-relaxed">
          Vishwakarma Institute of Technology, Pune (Bibwewadi & Kondhwa Campuses) — 411037.<br />
          Email: <a href="mailto:vitswd@vit.edu" className="text-[#B3CFE5] hover:text-[#F6FAFD] underline">vitswd@vit.edu</a> · 
          Instagram: <span className="text-[#F6FAFD]">@vitsocials</span> · 
          Website: <a href="https://www.swd.vit.edu" target="_blank" rel="noopener noreferrer" className="text-[#B3CFE5] hover:text-[#F6FAFD] underline">www.swd.vit.edu</a>
        </p>
      </div>
    </div>
  );
};
