import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TheatreMasksStickerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const TheatreMasksSticker: React.FC<TheatreMasksStickerProps> = ({
  className = '',
  size = 'md',
  showLabel = true
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const dimension = size === 'sm' ? 76 : size === 'lg' ? 130 : 98;

  return (
    <motion.div
      className={`relative inline-flex flex-col items-center select-none cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      {/* Saffron & Gold subtle glow behind masks */}
      <div className="relative">
        <svg
          width={dimension}
          height={dimension}
          viewBox="0 0 110 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          <defs>
            {/* Gold mask gradient */}
            <linearGradient id="goldMaskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="40%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            {/* Saffron / Cultural mask gradient */}
            <linearGradient id="saffronMaskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FB923C" />
              <stop offset="50%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#7C2D12" />
            </linearGradient>
            {/* Dark inner cavity */}
            <radialGradient id="innerEye" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="100%" stopColor="#030712" />
            </radialGradient>
          </defs>

          {/* Mask 1 (Left / Comedy / Saffron) - Alternating motion */}
          <motion.g
            animate={{
              y: [0, -4, 0],
              rotate: [-5, -2, -5]
            }}
            transition={{
              duration: 4.6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {/* Base Mask Face */}
            <path
              d="M22 28 C 14 38, 14 62, 26 76 C 36 86, 44 86, 50 78 C 58 64, 58 40, 50 30 C 42 20, 28 20, 22 28 Z"
              fill="url(#saffronMaskGrad)"
              stroke="#FDBA74"
              strokeWidth="1.5"
            />
            {/* Crown / Tilak cultural crest */}
            <path
              d="M32 20 L 36 28 L 28 28 Z"
              fill="#D4AF37"
            />
            {/* Happy eyes */}
            <path
              d="M24 42 C 27 38, 33 38, 36 42"
              stroke="#0B132B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M40 42 C 43 38, 47 38, 49 42"
              stroke="#0B132B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Smiling mouth */}
            <path
              d="M26 58 C 34 68, 44 68, 48 58"
              stroke="#0B132B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M28 59 C 34 65, 42 65, 46 59 Z"
              fill="#0B132B"
            />
            {/* Cheek highlight */}
            <circle cx="23" cy="50" r="3" fill="#FED7AA" fillOpacity="0.4" />
          </motion.g>

          {/* Mask 2 (Right / Contemplative & Expressive / Gold) - Alternating motion opposite */}
          <motion.g
            animate={{
              y: [-3, 2, -3],
              rotate: [8, 5, 8]
            }}
            transition={{
              duration: 4.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.8
            }}
          >
            {/* Base Mask Face */}
            <path
              d="M58 26 C 50 36, 50 60, 62 74 C 72 84, 82 84, 88 76 C 96 62, 96 38, 88 28 C 80 18, 66 18, 58 26 Z"
              fill="url(#goldMaskGrad)"
              stroke="#FEF08A"
              strokeWidth="1.5"
            />
            {/* Crest */}
            <path
              d="M72 18 L 76 26 L 68 26 Z"
              fill="#EA580C"
            />
            {/* Expressive theatrical arched eyes */}
            <ellipse cx="66" cy="42" rx="4" ry="5.5" fill="url(#innerEye)" stroke="#1E293B" strokeWidth="1" />
            <ellipse cx="80" cy="42" rx="4" ry="5.5" fill="url(#innerEye)" stroke="#1E293B" strokeWidth="1" />
            <path
              d="M62 35 C 65 32, 69 34, 70 36"
              stroke="#78350F"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M76 36 C 77 34, 81 32, 84 35"
              stroke="#78350F"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* O-shaped dramatic singing / monologue mouth */}
            <ellipse cx="73" cy="62" rx="5" ry="7" fill="url(#innerEye)" stroke="#78350F" strokeWidth="1.5" />
          </motion.g>

          {/* Connecting Ribbon in PRISM Teal/Blue */}
          <motion.path
            d="M44 65 C 50 60, 56 60, 62 65"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="3 3"
            animate={{ opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Label Badge */}
      {showLabel && (
        <motion.div
          animate={{
            borderColor: isHovered ? '#F97316' : 'rgba(249, 115, 22, 0.25)',
            color: isHovered ? '#FED7AA' : '#E2E8F0'
          }}
          className="mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#0B132B]/90 backdrop-blur-sm border transition-colors duration-200 shadow-sm whitespace-nowrap"
        >
          Express. Perform. Be you.
        </motion.div>
      )}
    </motion.div>
  );
};
