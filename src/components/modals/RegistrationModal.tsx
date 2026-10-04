import React, { useState } from 'react';
import { EventItem } from '../../types';
import { X, CheckCircle, ExternalLink, Users, Calendar, MapPin } from 'lucide-react';
import { PrismSpark } from '../stickers/PrismSpark';

interface RegistrationModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    institution: '',
    phone: '',
    teamSize: '4',
    teamName: '',
    projectConcept: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0D1527] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header Lockup */}
            <div className="border-b border-slate-800 pb-5 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  {event.track || 'Track'}
                </span>
                <PrismSpark size={12} color="#D4AF37" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {event.name} REGISTRATION
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                {event.oneLiner}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Dedicated Portal:{' '}
                <code className="text-[#38BDF8] bg-slate-900 px-1.5 py-0.5 rounded font-mono text-[11px]">
                  {event.registrationUrl}
                </code>
              </p>
            </div>

            {/* Event Key Info Grid */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#080D1A] border border-slate-800/80 mb-6 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Day 2 (March 2026)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="w-4 h-4 text-[#F97316]" />
                <span>{event.teamSize || 'Team / Delegate'}</span>
              </div>
            </div>

            {/* Quick action: Open external registration link directly */}
            <div className="mb-6 p-3 bg-gradient-to-r from-[#131E38] to-[#0D1527] border border-[#D4AF37]/30 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">External Portal Entry</p>
                <p className="text-[11px] text-slate-400">Direct registration link for {event.name}.</p>
              </div>
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4AF37] text-[#080D1A] font-bold text-xs hover:bg-[#FEF08A] transition-colors shrink-0"
              >
                <span>OPEN PORTAL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Lead Delegate Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ananya Sen"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080D1A] border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ananya@college.edu"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080D1A] border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Institution / University *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. VIT Pune"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080D1A] border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080D1A] border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Team Name
                  </label>
                  <input
                    type="text"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    placeholder="e.g. Team Synergy"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080D1A] border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Team Size
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={event.teamSize || 'As per track guidelines'}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080D1A] border border-slate-800 text-slate-400 text-xs"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg border border-slate-700 text-xs font-medium text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#FEF08A] text-[#080D1A] font-bold text-xs tracking-wider transition-all duration-200 shadow-lg disabled:opacity-50"
                >
                  {loading ? 'CONFIRMING ENTRY...' : "COMPLETE REGISTRATION →"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto text-[#FEF08A]">
              <CheckCircle className="w-9 h-9 text-[#D4AF37]" />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-white">
              REGISTRATION RECORDED
            </h3>
            <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
              Your registration slot for <strong className="text-[#FEF08A]">{event.name}</strong> ({event.track || 'Track'}) has been recorded by the Social Welfare & Development Committee.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#FEF08A] text-[#080D1A] font-bold text-xs tracking-wider transition-colors shadow-md"
              >
                RETURN TO HUB
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
