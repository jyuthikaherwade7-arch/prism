import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PrismSpark } from './PrismSpark';

interface BrainStickerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const BrainSticker: React.FC<BrainStickerProps> = ({
  className = '',
  size = 'md',
  showLabel = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const dimension = size === 'sm' ? 68 : size === 'lg' ? 120 : 90;

  return (
    <motion.div
      className={`relative inline-flex flex-col items-center select-none cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        y: [0, -5, 0],
        scale: [1, 1.02, 1]
      }}
      transition={{
        duration: 4.8,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <svg
          width={dimension}
          height={dimension}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          <defs>
            <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Synapse Pulse */}
          <circle cx="50" cy="50" r="36" fill="url(#brainGlow)" />

          {/* Left Hemisphere stylized folds */}
          <motion.path
            d="
              M 48 30
              C 44 24, 34 24, 30 30
              C 24 30, 20 36, 22 44
              C 18 48, 18 56, 22 62
              C 20 70, 26 76, 34 74
              C 38 78, 46 76, 48 70
              Z
            "
            fill="#0F172A"
            stroke={isHovered ? '#FEF08A' : '#D4AF37'}
            strokeWidth="2"
            className="transition-colors duration-300"
          />

          {/* Right Hemisphere stylized folds */}
          <motion.path
            d="
              M 52 30
              C 56 24, 66 24, 70 30
              C 76 30, 80 36, 78 44
              C 82 48, 82 56, 78 62
              C 80 70, 74 76, 66 74
              C 62 78, 54 76, 52 70
              Z
            "
            fill="#0F172A"
            stroke={isHovered ? '#38BDF8' : '#D4AF37'}
            strokeWidth="2"
            className="transition-colors duration-300"
          />

          {/* Internal Synapse pathways */}
          <path
            d="M32 40 Q 40 45 46 38"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M28 54 Q 38 52 46 60"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M68 40 Q 60 45 54 38"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M72 54 Q 62 52 54 60"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Center Corpus Callosum fissure */}
          <line x1="50" y1="28" x2="50" y2="72" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Pulsing Synapse Dots */}
          <motion.circle
            cx="40"
            cy="46"
            r={isHovered ? 3.5 : 2.5}
            fill="#FEF08A"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <motion.circle
            cx="60"
            cy="46"
            r={isHovered ? 3.5 : 2.5}
            fill="#38BDF8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 0.4 }}
          />
        </svg>
      </div>

      {showLabel && (
        <div className="mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#0B132B]/90 border border-[#D4AF37]/30 text-[#E2E8F0] shadow-sm whitespace-nowrap">
          {isHovered ? 'Synapse Active' : 'Ideas & Insight'}
        </div>
      )}
    </motion.div>
  );
};
