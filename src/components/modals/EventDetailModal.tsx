import React from 'react';
import { EventItem } from '../../types';
import { X, Clock, MapPin, Users, ArrowRight, Check } from 'lucide-react';
import { PrismSpark } from '../stickers/PrismSpark';

interface EventDetailModalProps {
  event: EventItem | null;
  onClose: () => void;
  onGoToRegister: (event: EventItem) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  onClose,
  onGoToRegister
}) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0D1527] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl text-slate-100 my-8 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#080D1A]/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              {event.track || 'Track'}
            </span>
            <PrismSpark size={12} color="#D4AF37" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            {event.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
            {event.oneLiner}
          </p>
        </div>

        {/* Time and Location info - Location is Auditorium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#080D1A] border border-slate-800 text-xs mb-5">
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
            <div>
              <span className="block text-[10px] font-bold text-slate-400 uppercase">TIME</span>
              <span className="text-white font-medium text-xs">{event.time}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#38BDF8] mt-0.5 shrink-0" />
            <div>
              <span className="block text-[10px] font-bold text-slate-400 uppercase">LOCATION</span>
              <span className="text-white font-bold text-xs text-[#38BDF8]">Auditorium</span>
            </div>
          </div>
        </div>

        {/* Detailed info if Flagship */}
        {event.isFlagshipCompetition && (
          <div className="space-y-5 mb-6 text-xs sm:text-sm">
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#080D1A] border border-slate-800 text-xs">
              <div>
                <span className="text-slate-500 font-bold block mb-0.5">TEAM SIZE</span>
                <span className="text-white font-medium">{event.teamSize}</span>
              </div>
              <div>
                <span className="text-slate-500 font-bold block mb-0.5">ELIGIBILITY</span>
                <span className="text-white font-medium truncate block">{event.eligibility}</span>
              </div>
            </div>

            {event.rounds && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Day 2 Evaluation Rounds:
                </h4>
                {event.rounds.map((rnd) => (
                  <div key={rnd.roundNumber} className="p-3.5 rounded-xl bg-[#080D1A]/80 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#FEF08A]">{rnd.title}</span>
                      <span className="text-slate-400 font-mono text-[11px]">{rnd.time}</span>
                    </div>
                    <p className="text-xs text-slate-300">{rnd.details}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bottom Action */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Dedicated Link: <span className="font-mono text-[#38BDF8]">{event.registrationUrl}</span>
          </div>
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#FEF08A] text-[#080D1A] font-bold text-xs tracking-wider transition-colors shadow-lg"
          >
            <span>PROCEED TO REGISTER</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
