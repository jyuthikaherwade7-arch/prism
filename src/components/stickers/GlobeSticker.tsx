import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface GlobeStickerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const GlobeSticker: React.FC<GlobeStickerProps> = ({
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
        rotate: [0, -1, 1, 0]
      }}
      transition={{
        duration: 5.2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Subtle blue/gold glow aura on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.25 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.35 }}
            className="absolute top-2 w-24 h-24 rounded-full bg-gradient-to-r from-[#38BDF8]/25 via-[#2563EB]/20 to-[#D4AF37]/25 blur-xl pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Connection satellite orbital ring & network lines on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.svg
            initial={{ opacity: 0, scale: 0.85, rotate: -20 }}
            animate={{ opacity: 1, scale: 1.15, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.85, rotate: 20 }}
            transition={{ duration: 0.4 }}
            className="absolute top-1 pointer-events-none"
            width={dimension + 26}
            height={dimension + 26}
            viewBox="0 0 120 120"
            fill="none"
          >
            {/* Orbital Arcs */}
            <path
              d="M15 60 C 15 35, 105 35, 105 60 C 105 85, 15 85, 15 60"
              stroke="#38BDF8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeOpacity="0.75"
            />
            {/* Cross Connection Lines */}
            <path
              d="M32 28 Q 60 45 88 28"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              strokeOpacity="0.8"
            />
            <path
              d="M26 88 Q 60 75 94 88"
              stroke="#38BDF8"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              strokeOpacity="0.8"
            />

            {/* Pulsing connection nodes */}
            <circle cx="20" cy="55" r="3" fill="#D4AF37" />
            <circle cx="20" cy="55" r="5" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />

            <circle cx="100" cy="65" r="3" fill="#38BDF8" />
            <circle cx="100" cy="65" r="5" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />

            <circle cx="60" cy="18" r="3.5" fill="#F97316" />
            <circle cx="60" cy="102" r="3" fill="#D4AF37" />
          </motion.svg>
        )}
      </AnimatePresence>

      {/* Illustrated Globe SVG */}
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <defs>
          <radialGradient id="globeOcean" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="60%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#030712" />
          </radialGradient>
          <linearGradient id="landMass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#997A24" />
          </linearGradient>
        </defs>

        {/* Outer Globe Sphere */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="url(#globeOcean)"
          stroke={isHovered ? '#38BDF8' : '#D4AF37'}
          strokeWidth="2.5"
          className="transition-colors duration-300"
        />

        {/* Longitude and Latitude Grid Lines */}
        <ellipse
          cx="50"
          cy="50"
          rx="18"
          ry="38"
          stroke="#38BDF8"
          strokeWidth="1.2"
          strokeOpacity={isHovered ? '0.6' : '0.25'}
          className="transition-opacity duration-300"
        />
        <line
          x1="12"
          y1="50"
          x2="88"
          y2="50"
          stroke="#38BDF8"
          strokeWidth="1.2"
          strokeOpacity={isHovered ? '0.6' : '0.25'}
          className="transition-opacity duration-300"
        />
        <path
          d="M17 32 Q 50 40 83 32"
          stroke="#38BDF8"
          strokeWidth="1"
          strokeOpacity={isHovered ? '0.5' : '0.2'}
        />
        <path
          d="M17 68 Q 50 60 83 68"
          stroke="#38BDF8"
          strokeWidth="1"
          strokeOpacity={isHovered ? '0.5' : '0.2'}
        />

        {/* Stylized Continents / Landmasses in PRISM Gold & Off-White */}
        {/* Eurasia / Asia piece */}
        <path
          d="M48 24C52 23 60 25 64 28C67 31 66 38 61 40C57 41 54 36 50 37C46 38 45 44 40 43C36 42 37 34 40 31C43 28 44 25 48 24Z"
          fill="url(#landMass)"
          stroke="#0F172A"
          strokeWidth="0.8"
        />
        {/* Americas piece */}
        <path
          d="M24 33C27 31 31 34 32 39C33 44 28 47 29 52C30 56 34 60 32 66C30 70 25 68 25 62C24 57 26 53 23 48C21 44 22 36 24 33Z"
          fill="url(#landMass)"
          stroke="#0F172A"
          strokeWidth="0.8"
        />
        {/* Africa / Indian subcontinent piece */}
        <path
          d="M44 47C49 46 54 50 55 56C56 62 51 68 47 70C44 71 43 65 41 62C39 58 40 52 44 47Z"
          fill="url(#landMass)"
          stroke="#0F172A"
          strokeWidth="0.8"
        />

        {/* Active node impact pulse in India / South Asia */}
        <motion.circle
          cx="62"
          cy="42"
          r={isHovered ? 4 : 2.5}
          fill={isHovered ? '#F97316' : '#D4AF37'}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />

        {/* Specular highlight */}
        <path
          d="M22 28C27 20 37 15 48 15"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.4"
        />
      </svg>

      {/* Label Badge */}
      {showLabel && (
        <motion.div
          animate={{
            borderColor: isHovered ? '#38BDF8' : 'rgba(56, 189, 248, 0.25)',
            color: isHovered ? '#38BDF8' : '#E2E8F0'
          }}
          className="mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#0B132B]/90 backdrop-blur-sm border transition-colors duration-200 shadow-sm whitespace-nowrap"
        >
          {isHovered ? 'Connecting Global Impact' : 'Make an impact.'}
        </motion.div>
      )}
    </motion.div>
  );
};
