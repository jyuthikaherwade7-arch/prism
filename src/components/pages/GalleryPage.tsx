import React, { useState } from 'react';
import { PageId, GalleryItem } from '../../types';
import { GALLERY_DATA } from '../../data/galleryData';
import { PrismSpark } from '../stickers/PrismSpark';
import { TheatreMasksSticker } from '../stickers/TheatreMasksSticker';
import { X, ZoomIn } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  // Group items
  const prismHighlights = GALLERY_DATA.find((item) => item.id === 'prism-highlights');
  const otherMoments = GALLERY_DATA.filter((item) => item.id !== 'prism-highlights');

  return (
    <div className="min-h-screen bg-[#080D1A] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-[#0D1527] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 text-slate-300 hover:text-white transition-colors border border-slate-700"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative max-h-[75vh] overflow-hidden bg-black flex items-center justify-center p-2">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[72vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-6 bg-[#0D1527] border-t border-slate-800">
              <div className="flex items-center gap-2 mb-1.5 text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                <span>{activeLightboxItem.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400 font-normal">{activeLightboxItem.year}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                {activeLightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header Container */}
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-12">
        <div className="flex items-center justify-center gap-3">
          <TheatreMasksSticker size="sm" showLabel={false} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1527] border border-[#D4AF37]/30 text-[#FEF08A] text-xs font-bold tracking-widest uppercase">
            <span>GALLERY ARCHIVES</span>
            <PrismSpark size={12} color="#D4AF37" />
          </div>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          GLIMPSES OF PRISM
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Official moments and photographic archives from the Social Welfare & Development Committee, Vishwakarma Institute of Technology, Pune.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Featured Card: PRISM Highlights */}
        {prismHighlights && (
          <div
            key={prismHighlights.id}
            onClick={() => setActiveLightboxItem(prismHighlights)}
            className="group relative rounded-3xl bg-[#0D1527] border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={prismHighlights.image}
                alt={prismHighlights.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[460px] object-contain sm:object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1527] via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity pointer-events-none" />
              
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#080D1A]/85 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-[#D4AF37]/40 shadow-lg">
                <ZoomIn className="w-5 h-5 text-[#FEF08A]" />
              </div>
            </div>

            <div className="p-6 sm:p-7 bg-[#0D1527] border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs text-[#FEF08A] font-bold uppercase tracking-wider mb-2">
                <span className="bg-[#D4AF37]/20 px-2.5 py-0.5 rounded border border-[#D4AF37]/40">
                  {prismHighlights.category}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-300 font-medium">{prismHighlights.year}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-[#FEF08A] transition-colors mb-2">
                {prismHighlights.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {prismHighlights.caption}
              </p>
            </div>
          </div>
        )}

        {/* 3-Card Grid for:
            1. Glimpse of Vishwa Aakhyan
            2. Glimpses of Conclave
            3. Glimpses of Ideathon
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {otherMoments.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl bg-[#0D1527] border border-slate-800 hover:border-[#D4AF37]/60 overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative w-full aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1527] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />
                
                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#080D1A]/85 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-[#D4AF37]/40">
                  <ZoomIn className="w-4 h-4 text-[#FEF08A]" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-[#0D1527] border-t border-slate-800/80">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-[#FEF08A] font-bold uppercase tracking-wider mb-2">
                    <span className="bg-[#D4AF37]/20 px-2 py-0.5 rounded border border-[#D4AF37]/40">
                      {item.category}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400 font-medium">{item.year}</span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#FEF08A] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Committee Attribution */}
      <div className="max-w-3xl mx-auto mt-16 p-6 rounded-2xl bg-[#0D1527] border border-slate-800 text-center space-y-3">
        <h4 className="font-display text-xl font-bold text-white">
          Social Welfare & Development Committee
        </h4>
        <p className="text-xs text-slate-400">
          Vishwakarma Institute of Technology, Pune (Bibwewadi & Kondhwa Campuses) — 411037
        </p>
      </div>
    </div>
  );
};
