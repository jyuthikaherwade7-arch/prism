import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PrismSpark } from './PrismSpark';

interface LightbulbStickerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const LightbulbSticker: React.FC<LightbulbStickerProps> = ({
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
        y: [0, -6, 0],
        rotate: [0, 1.5, -1.5, 0]
      }}
      transition={{
        duration: 4.8,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Golden halo glow on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.25 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute top-2 w-24 h-24 rounded-full bg-gradient-to-r from-[#D4AF37]/35 via-[#FDE047]/25 to-[#F97316]/20 blur-xl pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Floating Idea Sparks on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -10, y: 10 }}
              animate={{ opacity: 1, scale: 1, x: -34, y: -18 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute pointer-events-none"
            >
              <PrismSpark size={16} color="#FDE047" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 0, y: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: -26 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="absolute pointer-events-none"
            >
              <PrismSpark size={18} color="#D4AF37" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 10, y: 10 }}
              animate={{ opacity: 1, scale: 1, x: 34, y: -16 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="absolute pointer-events-none"
            >
              <PrismSpark size={14} color="#FDE047" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Illustrated Lightbulb SVG */}
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg transition-transform duration-300"
      >
        <defs>
          <radialGradient id="bulbOff" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0B132B" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id="bulbOn" cx="50%" cy="38%" r="55%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="1" />
            <stop offset="45%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0.75" />
          </radialGradient>
          <linearGradient id="metalBase" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
        </defs>

        {/* Bulb Glass Body */}
        <motion.path
          d="M50 14C33.4 14 20 27.4 20 44C20 54.2 25.1 63.2 33 68.6V76C33 77.1 33.9 78 35 78H65C66.1 78 67 77.1 67 76V68.6C74.9 63.2 80 54.2 80 44C80 27.4 66.6 14 50 14Z"
          fill={isHovered ? 'url(#bulbOn)' : 'url(#bulbOff)'}
          stroke={isHovered ? '#FDE047' : '#D4AF37'}
          strokeWidth="2.5"
          className="transition-colors duration-300"
        />

        {/* Glass reflection highlight */}
        <path
          d="M32 25C26 31 24 38 25 45"
          stroke={isHovered ? '#FFFFFF' : '#94A3B8'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity={isHovered ? '0.7' : '0.4'}
        />

        {/* Internal Filament */}
        <motion.path
          d="M40 54L46 36C47 33 53 33 54 36L60 54"
          stroke={isHovered ? '#FFFFFF' : '#D4AF37'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300"
        />
        {/* Filament coil loop */}
        <motion.circle
          cx="50"
          cy="34"
          r={isHovered ? 4.5 : 3.5}
          fill={isHovered ? '#FFFFFF' : '#D4AF37'}
          className="transition-all duration-300"
        />

        {/* Screw Base / Thread */}
        <rect x="37" y="79" width="26" height="4" rx="2" fill="url(#metalBase)" stroke="#0E172A" strokeWidth="1" />
        <rect x="39" y="84" width="22" height="4" rx="2" fill="url(#metalBase)" stroke="#0E172A" strokeWidth="1" />
        {/* Contact Point */}
        <path d="M43 89H57C57 91.5 54 93.5 50 93.5C46 93.5 43 91.5 43 89Z" fill="#334155" />
      </svg>

      {/* Label Badge */}
      {showLabel && (
        <motion.div
          animate={{
            borderColor: isHovered ? '#D4AF37' : 'rgba(212, 175, 55, 0.25)',
            color: isHovered ? '#FEF08A' : '#E2E8F0'
          }}
          className="mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#0B132B]/90 backdrop-blur-sm border transition-colors duration-200 shadow-sm whitespace-nowrap"
        >
          {isHovered ? 'Idea Sparked!' : 'Got an idea?'}
        </motion.div>
      )}
    </motion.div>
  );
};
