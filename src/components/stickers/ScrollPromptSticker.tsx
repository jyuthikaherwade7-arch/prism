import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';

export const ScrollPromptSticker: React.FC = () => {
  const [isInteracted, setIsInteracted] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!hasScrolled) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-6 right-6 z-30 hidden sm:block"
    >
      <button
        onClick={() => setIsInteracted(!isInteracted)}
        onMouseEnter={() => setIsInteracted(true)}
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0A1931]/95 border border-[#4A7FA7]/60 shadow-xl backdrop-blur-md text-xs font-medium text-[#B3CFE5] hover:text-[#F6FAFD] hover:border-[#B3CFE5] transition-all group duration-200"
        aria-label="Scroll encouragement indicator"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A7FA7] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B3CFE5]"></span>
        </span>
        <span className="tracking-wide">
          {isInteracted ? "Good. There's more." : "Still scrolling?"}
        </span>
        {isInteracted ? (
          <Sparkles className="w-3.5 h-3.5 text-[#B3CFE5]" />
        ) : (
          <ArrowDown className="w-3.5 h-3.5 text-[#4A7FA7] group-hover:translate-y-0.5 transition-transform" />
        )}
      </button>
    </motion.div>
  );
};
