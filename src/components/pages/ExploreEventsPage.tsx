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
import { Clock, MapPin, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

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
        return <PrismSpark size={18} color="#B3CFE5" />;
    }
  };

  const renderEventCard = (event: EventItem, isFlagship: boolean = false) => {
    const isExpanded = !!expandedCardIds[event.id];

    return (
      <div
        key={event.id}
        onClick={() => toggleCard(event.id)}
        className={`group relative rounded-2xl bg-[#1A3D63]/85 transition-all duration-300 border overflow-hidden cursor-pointer select-none ${
          isFlagship
            ? 'p-6 sm:p-8 min-h-[300px]'
            : 'p-6 min-h-[230px]'
        } ${
          isExpanded
            ? 'border-[#B3CFE5] shadow-[0_12px_32px_rgba(74,127,167,0.35)] ring-1 ring-[#B3CFE5]/50'
            : isFlagship
            ? 'border-[#4A7FA7] hover:border-[#B3CFE5] shadow-xl hover:-translate-y-1'
            : 'border-[#1A3D63] hover:border-[#4A7FA7] shadow-lg hover:-translate-y-1'
        }`}
      >
        {/* Background glow on expanded */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#1A3D63] via-[#0A1931]/95 to-[#0A1931] transition-opacity duration-300 pointer-events-none ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Card Content Wrapper */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          
          {/* Top Bar: Track & Sticker */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border bg-[#0A1931] text-[#B3CFE5] border-[#4A7FA7]/50">
                {event.track || 'Track'}
              </span>
              <div className="shrink-0 h-9 w-9 flex items-center justify-center">
                {renderSticker(event.id)}
              </div>
            </div>

            {/* Event Name */}
            <h3 className={`font-display font-extrabold tracking-tight transition-colors ${
              isFlagship ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } ${
              isExpanded ? 'text-[#F6FAFD]' : 'text-[#F6FAFD] group-hover:text-[#B3CFE5]'
            }`}>
              {event.name}
            </h3>

            {/* Default State: One-Liner Description */}
            {!isExpanded ? (
              <div className="mt-2.5 space-y-4">
                <p className="text-xs sm:text-sm text-[#B3CFE5] leading-relaxed">
                  {event.oneLiner}
                </p>
                
                {/* "Click to explore" prompt */}
                <div className="pt-3 border-t border-[#1A3D63] flex items-center justify-between text-xs text-[#B3CFE5] group-hover:text-[#F6FAFD] transition-colors">
                  <span className="font-bold tracking-wide">Click to explore</span>
                  <ChevronRight className="w-4 h-4 text-[#4A7FA7] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ) : (
              /* Expanded State */
              <div className="mt-4 space-y-4 transition-all duration-300">
                {/* Time & Location Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3 rounded-xl bg-[#0A1931]/95 border border-[#1A3D63] text-xs">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#4A7FA7] mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-[#B3CFE5] uppercase">TIME</span>
                      <span className="text-[#F6FAFD] font-medium text-[11px] leading-tight block">{event.time}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#B3CFE5] mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-[#B3CFE5] uppercase">LOCATION</span>
                      <span className="text-[#F6FAFD] font-bold text-[12px] leading-tight block">
                        Auditorium
                      </span>
                    </div>
                  </div>
                </div>

                {/* Important Details */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F6FAFD] block">
                    Important Details & Guidelines:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#B3CFE5]">
                    {event.importantThings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7FA7] mt-0.5 shrink-0" />
                        <span className="leading-snug text-[11px] sm:text-xs text-[#B3CFE5]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extra Flagship Round 1 & Round 2 info */}
                {isFlagship && event.rounds && (
                  <div className="pt-2 border-t border-[#1A3D63] grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-[#0A1931]/80 border border-[#1A3D63]">
                      <span className="font-bold text-[#F6FAFD] block">Round 1 (10 AM - 12 PM)</span>
                      <span className="text-[#B3CFE5]">Auditorium · Idea Pitch & PPT</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#0A1931]/80 border border-[#1A3D63]">
                      <span className="font-bold text-[#B3CFE5] block">Round 2 (1 PM - 3 PM)</span>
                      <span className="text-[#B3CFE5]">Auditorium · Prototype / Final Defense</span>
                    </div>
                  </div>
                )}

                {/* Click to collapse indicator & direct register action */}
                <div className="pt-3 border-t border-[#1A3D63] flex items-center justify-between text-[11px]">
                  <span className="text-[#B3CFE5] italic">Location: Auditorium</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#B3CFE5] hover:text-[#F6FAFD] transition-colors">Click to collapse</span>
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#4A7FA7] hover:bg-[#1A3D63] text-[#F6FAFD] font-extrabold text-[11px] tracking-wide transition-colors border border-[#B3CFE5]/30 shadow-sm"
                    >
                      <span>REGISTER</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Corner accent */}
          <div
            className={`absolute top-0 right-0 w-8 h-8 rounded-tr-2xl transition-opacity duration-300 ${
              isExpanded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'radial-gradient(circle at top right, rgba(74,127,167,0.4) 0%, transparent 70%)'
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A1931] text-[#F6FAFD] py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3D63] border border-[#4A7FA7]/60 text-[#B3CFE5] text-xs font-bold tracking-widest uppercase shadow-sm">
          <PrismSpark size={12} color="#B3CFE5" />
          <span>OFFICIAL FESTIVAL TRACKS</span>
          <PrismSpark size={12} color="#4A7FA7" />
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F6FAFD] tracking-tight">
          EXPLORE PRISM'26 TRACKS
        </h1>
        <p className="text-xs sm:text-sm text-[#B3CFE5] max-w-xl mx-auto leading-relaxed">
          Click on any event card below to explore its schedule, location (Auditorium), and key guidelines.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Flagships */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B3CFE5]">
            <Sparkles className="w-3.5 h-3.5 text-[#4A7FA7]" />
            <span>Flagship Competitions · Auditorium</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {renderEventCard(SOCIOTHON_EVENT, true)}
            {renderEventCard(IDEATHON_EVENT, true)}
          </div>
        </div>

        {/* All Other Events */}
        <div className="space-y-4 pt-4 border-t border-[#1A3D63]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B3CFE5]">
            <PrismSpark size={12} color="#4A7FA7" />
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
