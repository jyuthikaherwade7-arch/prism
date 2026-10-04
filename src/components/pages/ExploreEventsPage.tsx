import React, { useState } from 'react';
import { PageId, EventItem } from '../../types';
import {
  SOCIOTHON_EVENT,
  IDEATHON_EVENT,
  OTHER_EVENTS_ORDERED
} from '../../data/eventsData';
import { GlobeSticker } from '../stickers/GlobeSticker';
import { LightbulbSticker } from '../stickers/LightbulbSticker';
import { TheatreMasksSticker } from '../stickers/TheatreMasksSticker';
import { SpeechBubbleSticker } from '../stickers/SpeechBubbleSticker';
import { PrismSpark } from '../stickers/PrismSpark';
import { Clock, MapPin, CheckCircle2, Sparkles, ChevronRight, X } from 'lucide-react';

interface ExploreEventsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ExploreEventsPage: React.FC<ExploreEventsPageProps> = () => {
  // Store expanded card IDs (clicking toggles exploration)
  const [expandedCardIds, setExpandedCardIds] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCardIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Return sticker icon per event
  const renderSticker = (id: string) => {
    switch (id) {
      case 'sociothon':
        return <GlobeSticker size="sm" showLabel={false} />;
      case 'ideathon':
        return <LightbulbSticker size="sm" showLabel={false} />;
      case 'kala-kriti':
        return <TheatreMasksSticker size="sm" showLabel={false} />;
      case 'conclave':
        return <SpeechBubbleSticker size="sm" showLabel={false} />;
      default:
        return <PrismSpark size={18} color="#D4AF37" />;
    }
  };

  const renderEventCard = (event: EventItem, isFlagship: boolean = false) => {
    const isExpanded = !!expandedCardIds[event.id];

    return (
      <div
        key={event.id}
        onClick={() => toggleCard(event.id)}
        className={`group relative rounded-2xl bg-[#0D1527] transition-all duration-300 border overflow-hidden cursor-pointer select-none ${
          isFlagship
            ? 'p-6 sm:p-8 min-h-[300px]'
            : 'p-6 min-h-[230px]'
        } ${
          isExpanded
            ? 'border-[#D4AF37] shadow-[0_12px_32px_rgba(212,175,55,0.22)] ring-1 ring-[#D4AF37]/50'
            : isFlagship
            ? 'border-[#38BDF8]/40 hover:border-[#D4AF37]/60 shadow-xl hover:-translate-y-1'
            : 'border-slate-800 hover:border-slate-700 shadow-lg hover:-translate-y-1'
        }`}
      >
        {/* Background glow on expanded */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#131E38]/90 via-[#0D1527] to-[#080D1A] transition-opacity duration-300 pointer-events-none ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Card Content Wrapper */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          
          {/* Top Bar: Track & Sticker */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                isFlagship
                  ? 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30'
                  : 'text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/30'
              }`}>
                {event.track || 'Track'}
              </span>
              <div className="shrink-0 h-9 w-9 flex items-center justify-center">
                {renderSticker(event.id)}
              </div>
            </div>

            {/* Event Name */}
            <h3 className={`font-display font-extrabold tracking-tight transition-colors ${
              isFlagship ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } ${isExpanded ? 'text-[#FEF08A]' : 'text-white'}`}>
              {event.name}
            </h3>

            {/* Default State: One-Liner Description (Visible when NOT expanded) */}
            {!isExpanded ? (
              <div className="mt-2.5 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {event.oneLiner}
                </p>
                
                {/* User Requested: "Click to explore" prompt */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-[#D4AF37] group-hover:text-[#FEF08A] transition-colors">
                  <span className="font-bold tracking-wide">Click to explore</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ) : (
              /* Expanded State: Information Revealed on Click */
              <div className="mt-4 space-y-4 transition-all duration-300">
                {/* Time & Location Grid - Location is Auditorium */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3 rounded-xl bg-[#080D1A]/90 border border-slate-800/90 text-xs">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">TIME</span>
                      <span className="text-white font-medium text-[11px] leading-tight block">{event.time}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#38BDF8] mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">LOCATION</span>
                      <span className="text-white font-bold text-[12px] leading-tight block text-[#38BDF8]">
                        Auditorium
                      </span>
                    </div>
                  </div>
                </div>

                {/* Important Details Extracted from Brochure */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FEF08A] block">
                    Important Details & Guidelines:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {event.importantThings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                        <span className="leading-snug text-[11px] sm:text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extra Flagship Round 1 & Round 2 info */}
                {isFlagship && event.rounds && (
                  <div className="pt-2 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-[#080D1A]/80 border border-slate-800">
                      <span className="font-bold text-[#38BDF8] block">Round 1 (10 AM - 12 PM)</span>
                      <span className="text-slate-300">Auditorium · Idea Pitch & PPT</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#080D1A]/80 border border-slate-800">
                      <span className="font-bold text-[#FEF08A] block">Round 2 (1 PM - 3 PM)</span>
                      <span className="text-slate-300">Auditorium · Prototype / Final Defense</span>
                    </div>
                  </div>
                )}

                {/* Click to collapse indicator & direct register action */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 italic">Location: Auditorium</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 hover:text-white transition-colors">Click to collapse</span>
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#FEF08A] text-[#080D1A] font-extrabold text-[11px] tracking-wide transition-colors"
                    >
                      <span>REGISTER</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Hairline Gold accent on corner */}
          <div
            className={`absolute top-0 right-0 w-8 h-8 rounded-tr-2xl transition-opacity duration-300 ${
              isExpanded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'radial-gradient(circle at top right, rgba(212,175,55,0.4) 0%, transparent 70%)'
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#080D1A] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1527] border border-[#D4AF37]/35 text-[#FEF08A] text-xs font-bold tracking-widest uppercase">
          <PrismSpark size={12} color="#D4AF37" />
          <span>OFFICIAL FESTIVAL TRACKS</span>
          <PrismSpark size={12} color="#D4AF37" />
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          EXPLORE PRISM'26 TRACKS
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Click on any event card below to explore its schedule, location (Auditorium), and key guidelines.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ==================================================
            1. FIRST: SOCIOTHON & IDEATHON (THE 2 FLAGSHIPS)
            Location: Auditorium
            "Click to explore" prompt
            ================================================== */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Flagship Competitions · Auditorium</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* 1. FIRST: SOCIOTHON */}
            {renderEventCard(SOCIOTHON_EVENT, true)}

            {/* 2. THEN: IDEATHON */}
            {renderEventCard(IDEATHON_EVENT, true)}
          </div>
        </div>

        {/* ==================================================
            2. THEN: ALL OTHER EVENTS
            Order:
            1. Kala-Kriti
            2. The Youth Floor
            3. NGO Talks
            4. Conclave
            5. Vishwa Aakhyan
            6. Open Mind
            7. TED-x Talks
            8. Tenure Presentations
            Location: Auditorium
            "Click to explore" prompt
            ================================================== */}
        <div className="space-y-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
            <PrismSpark size={12} color="#D4AF37" />
            <span>Cultural, Parliamentary & Dialogue Sessions · Auditorium</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OTHER_EVENTS_ORDERED.map((event) => renderEventCard(event, false))}
          </div>
        </div>

      </div>

    </div>
  );
};
