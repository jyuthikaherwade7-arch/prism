import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PrismSpark } from './PrismSpark';

interface TicketStickerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TicketSticker: React.FC<TicketStickerProps> = ({
  className = '',
  size = 'md'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const width = size === 'sm' ? 180 : size === 'lg' ? 300 : 240;
  const height = size === 'sm' ? 90 : size === 'lg' ? 150 : 120;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -6 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
        rotate: isHovered ? [-2, 2, -2] : [-3, 1, -3]
      }}
      transition={{
        opacity: { duration: 0.6, ease: 'easeOut' },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
      }}
      whileHover={{ scale: 1.06, rotate: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block select-none cursor-pointer group ${className}`}
    >
      {/* Sparks floating around the ticket using requested colors */}
      <div className="absolute -top-3 -left-4 pointer-events-none">
        <PrismSpark size={16} delay={0.2} color="#B3CFE5" />
      </div>
      <div className="absolute -top-4 -right-3 pointer-events-none">
        <PrismSpark size={20} delay={0.8} color="#4A7FA7" />
      </div>
      <div className="absolute -bottom-2 -left-2 pointer-events-none">
        <PrismSpark size={14} delay={1.4} color="#B3CFE5" />
      </div>
      <div className="absolute -bottom-3 right-6 pointer-events-none">
        <PrismSpark size={18} delay={0.5} color="#4A7FA7" />
      </div>

      {/* Halo glow behind ticket on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#4A7FA7]/25 rounded-2xl blur-xl pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Illustrated PRISM Ticket SVG */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 240 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="ticketBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A3D63" />
            <stop offset="60%" stopColor="#0A1931" />
            <stop offset="100%" stopColor="#0A1931" />
          </linearGradient>
          <linearGradient id="foilBand" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B3CFE5" />
            <stop offset="50%" stopColor="#4A7FA7" />
            <stop offset="100%" stopColor="#1A3D63" />
          </linearGradient>
        </defs>

        {/* Ticket Base Path */}
        <path
          d="
            M 12 10
            H 162
            C 162 10, 162 20, 162 20
            A 8 8 0 0 1 178 20
            H 228
            C 234.6 20, 240 25.4, 240 32
            V 88
            C 240 94.6, 234.6 100, 228 100
            H 178
            A 8 8 0 0 1 162 100
            H 12
            C 5.4 100, 0 94.6, 0 88
            V 22
            C 0 15.4, 5.4 10, 12 10
            Z
          "
          fill="url(#ticketBg)"
          stroke={isHovered ? '#B3CFE5' : '#4A7FA7'}
          strokeWidth="2"
          className="transition-colors duration-300"
        />

        {/* Perforated Divider Line */}
        <line
          x1="170"
          y1="22"
          x2="170"
          y2="98"
          stroke="#4A7FA7"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />

        {/* Left Foil Decorative Bar */}
        <rect x="14" y="24" width="4" height="72" rx="2" fill="url(#foilBand)" />

        {/* Brand Lockup */}
        <text
          x="28"
          y="42"
          fill="#F6FAFD"
          fontSize="17"
          fontWeight="800"
          fontFamily="Syne, sans-serif"
          letterSpacing="0.05em"
        >
          PRISM'26
        </text>
        <text
          x="108"
          y="40"
          fill="#B3CFE5"
          fontSize="9"
          fontWeight="700"
          letterSpacing="0.12em"
        >
          VIP ACCESS
        </text>

        {/* Subtext info */}
        <text x="28" y="60" fill="#B3CFE5" fontSize="8.5" fontWeight="500">
          OFFICIAL FESTIVAL ADMIT
        </text>
        <text x="28" y="74" fill="#F6FAFD" fontSize="8.5" fontWeight="600">
          ALL-STAGE CONVERGENCE
        </text>

        {/* Serial Barcode Lines */}
        <g opacity="0.75">
          <line x1="28" y1="84" x2="28" y2="92" stroke="#B3CFE5" strokeWidth="1.5" />
          <line x1="33" y1="84" x2="33" y2="92" stroke="#B3CFE5" strokeWidth="2.5" />
          <line x1="38" y1="84" x2="38" y2="92" stroke="#B3CFE5" strokeWidth="1" />
          <line x1="42" y1="84" x2="42" y2="92" stroke="#B3CFE5" strokeWidth="2" />
          <line x1="48" y1="84" x2="48" y2="92" stroke="#B3CFE5" strokeWidth="1.5" />
          <line x1="53" y1="84" x2="53" y2="92" stroke="#B3CFE5" strokeWidth="3" />
          <line x1="60" y1="84" x2="60" y2="92" stroke="#B3CFE5" strokeWidth="1" />
          <line x1="65" y1="84" x2="65" y2="92" stroke="#B3CFE5" strokeWidth="2" />
          <line x1="72" y1="84" x2="72" y2="92" stroke="#B3CFE5" strokeWidth="1.5" />
          <line x1="78" y1="84" x2="78" y2="92" stroke="#B3CFE5" strokeWidth="2.5" />
          <line x1="84" y1="84" x2="84" y2="92" stroke="#B3CFE5" strokeWidth="1" />
          <line x1="90" y1="84" x2="90" y2="92" stroke="#B3CFE5" strokeWidth="2" />
        </g>
        <text x="96" y="90" fill="#B3CFE5" fontSize="7" fontFamily="monospace">
          #PRISM-2026-X7
        </text>

        {/* Stub Portion Right */}
        <text
          x="180"
          y="48"
          fill="#4A7FA7"
          fontSize="11"
          fontWeight="700"
          fontFamily="Syne, sans-serif"
        >
          STAGE
        </text>
        <text
          x="180"
          y="68"
          fill="#F6FAFD"
          fontSize="18"
          fontWeight="800"
          fontFamily="Syne, sans-serif"
        >
          01
        </text>
        <text x="180" y="86" fill="#B3CFE5" fontSize="7.5" fontWeight="600">
          MARCH 2026
        </text>
      </svg>
    </motion.div>
  );
};
