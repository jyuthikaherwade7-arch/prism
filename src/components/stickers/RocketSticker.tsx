import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RocketStickerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const RocketSticker: React.FC<RocketStickerProps> = ({
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
        y: [0, -7, 0],
        x: [0, 2, 0],
        rotate: [0, 2, 0]
      }}
      transition={{
        duration: 4.5,
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
            <linearGradient id="rocketFuselage" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="60%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="rocketFin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="rocketNose" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
          </defs>

          {/* Exhaust Flame */}
          <motion.path
            d="M44 68 C 44 80, 50 88, 50 88 C 50 88, 56 80, 56 68 Z"
            fill="#F97316"
            animate={{
              scaleY: isHovered ? [1.1, 1.45, 1.1] : [0.9, 1.15, 0.9],
              opacity: [0.75, 1, 0.75]
            }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
          <motion.path
            d="M47 68 C 47 76, 50 82, 50 82 C 50 82, 53 76, 53 68 Z"
            fill="#FEF08A"
            animate={{
              scaleY: [1, 1.3, 1]
            }}
            transition={{ duration: 0.4, repeat: Infinity }}
          />

          {/* Left Fin */}
          <path
            d="M36 50 L 22 66 C 24 68, 30 68, 36 64 Z"
            fill="url(#rocketFin)"
            stroke="#0B132B"
            strokeWidth="1.2"
          />

          {/* Right Fin */}
          <path
            d="M64 50 L 78 66 C 76 68, 70 68, 64 64 Z"
            fill="url(#rocketFin)"
            stroke="#0B132B"
            strokeWidth="1.2"
          />

          {/* Rocket Fuselage */}
          <path
            d="M50 16 C 40 28, 36 44, 36 64 H 64 C 64 44, 60 28, 50 16 Z"
            fill="url(#rocketFuselage)"
            stroke="#0B132B"
            strokeWidth="1.8"
          />

          {/* Nosecone tip in saffron */}
          <path
            d="M50 16 C 45 22, 43 27, 43 30 H 57 C 57 27, 55 22, 50 16 Z"
            fill="url(#rocketNose)"
          />

          {/* Porthole Window */}
          <circle cx="50" cy="42" r="7.5" fill="#0B132B" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="50" cy="42" r="5" fill="#38BDF8" fillOpacity="0.8" />
          <path d="M47 39 C 48 38, 51 38, 52 39" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

          {/* Thruster Rim */}
          <rect x="42" y="64" width="16" height="4" rx="2" fill="#475569" stroke="#0B132B" strokeWidth="1" />
        </svg>
      </div>

      {showLabel && (
        <div className="mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#0B132B]/90 border border-[#D4AF37]/30 text-[#E2E8F0] shadow-sm whitespace-nowrap">
          {isHovered ? 'Velocity Rising' : 'Innovation'}
        </div>
      )}
    </motion.div>
  );
};
