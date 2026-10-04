import React, { useState } from 'react';
import { motion } from 'motion/react';

interface MicrophoneStickerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const MicrophoneSticker: React.FC<MicrophoneStickerProps> = ({
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
        y: [0, -4, 0],
        rotate: [-1, 2, -1]
      }}
      transition={{
        duration: 4.2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Soundwave lines pulsing outward */}
      <div className="relative">
        <svg
          width={dimension}
          height={dimension}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <defs>
            <linearGradient id="micGrille" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="micBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="50%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B132B" />
            </linearGradient>
          </defs>

          {/* Sound Wave Arc 1 Left */}
          <motion.path
            d="M26 32 C 20 40, 20 52, 26 60"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              opacity: [0.3, 0.9, 0.3],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Sound Wave Arc 2 Left (Far) */}
          <motion.path
            d="M18 24 C 9 36, 9 58, 18 70"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 3"
            animate={{
              opacity: [0.1, 0.7, 0.1]
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3
            }}
          />

          {/* Sound Wave Arc 1 Right */}
          <motion.path
            d="M74 32 C 80 40, 80 52, 74 60"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              opacity: [0.3, 0.9, 0.3],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2
            }}
          />

          {/* Sound Wave Arc 2 Right (Far) */}
          <motion.path
            d="M82 24 C 91 36, 91 58, 82 70"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 3"
            animate={{
              opacity: [0.1, 0.7, 0.1]
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5
            }}
          />

          {/* Microphone Capsule / Head */}
          <rect
            x="38"
            y="18"
            width="24"
            height="38"
            rx="12"
            fill="url(#micGrille)"
            stroke={isHovered ? '#FDE047' : '#D4AF37'}
            strokeWidth="2"
            className="transition-colors duration-300"
          />

          {/* Mesh Grille Lines */}
          <line x1="38" y1="28" x2="62" y2="28" stroke="#334155" strokeWidth="1" />
          <line x1="38" y1="36" x2="62" y2="36" stroke="#334155" strokeWidth="1" />
          <line x1="38" y1="44" x2="62" y2="44" stroke="#334155" strokeWidth="1" />
          <line x1="50" y1="18" x2="50" y2="56" stroke="#334155" strokeWidth="1" />

          {/* Muted Gold Ribbon / Ring */}
          <rect x="36" y="52" width="28" height="5" rx="1.5" fill="#D4AF37" />

          {/* U-Shaped Arm Mount */}
          <path
            d="M32 38 V 54 C 32 64 40 72 50 72 C 60 72 68 64 68 54 V 38"
            stroke="#D4AF37"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Central Stem */}
          <line x1="50" y1="72" x2="50" y2="86" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

          {/* Base Stand */}
          <rect x="34" y="86" width="32" height="5" rx="2.5" fill="url(#micBody)" stroke="#D4AF37" strokeWidth="1.5" />

          {/* Subtle On-Air Glow Dot */}
          <motion.circle
            cx="50"
            cy="60"
            r="2"
            fill={isHovered ? '#F97316' : '#D4AF37'}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Label Badge */}
      {showLabel && (
        <motion.div
          animate={{
            borderColor: isHovered ? '#D4AF37' : 'rgba(212, 175, 55, 0.25)',
            color: isHovered ? '#FEF08A' : '#E2E8F0'
          }}
          className="mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#0B132B]/90 backdrop-blur-sm border transition-colors duration-200 shadow-sm whitespace-nowrap"
        >
          Listen up.
        </motion.div>
      )}
    </motion.div>
  );
};
