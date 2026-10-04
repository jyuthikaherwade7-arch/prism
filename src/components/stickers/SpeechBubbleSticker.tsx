import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SpeechBubbleStickerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const SpeechBubbleSticker: React.FC<SpeechBubbleStickerProps> = ({
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
      animate={{
        y: [0, -4, 0]
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
          viewBox="0 0 110 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <defs>
            <linearGradient id="bubbleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B132B" />
            </linearGradient>
            <linearGradient id="bubbleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
          </defs>

          {/* Primary Speech Bubble */}
          <path
            d="M18 20 C 18 13.4, 23.4 8, 30 8 H 78 C 84.6 8, 90 13.4, 90 20 V 50 C 90 56.6, 84.6 62, 78 62 H 38 L 22 74 V 62 H 30 C 23.4 62, 18 56.6, 18 50 Z"
            fill="url(#bubbleGrad1)"
            stroke={isHovered ? '#D4AF37' : '#475569'}
            strokeWidth="2"
            className="transition-colors duration-300"
          />

          {/* Conversation dots inside primary bubble */}
          <circle cx="38" cy="35" r="3.5" fill="#38BDF8" />
          <circle cx="54" cy="35" r="3.5" fill="#D4AF37" />
          <circle cx="70" cy="35" r="3.5" fill="#F8FAFC" />

          {/* Second Speech Bubble that pops in on hover! */}
          <AnimatePresence>
            {isHovered && (
              <motion.g
                initial={{ opacity: 0, scale: 0.6, x: 20, y: 15 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, x: 15, y: 10 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <path
                  d="M48 42 C 48 37.6, 51.6 34, 56 34 H 96 C 100.4 34, 104 37.6, 104 42 V 66 C 104 70.4, 100.4 74, 96 74 H 82 L 72 82 V 74 H 56 C 51.6 74, 48 70.4, 48 66 Z"
                  fill="url(#bubbleGrad2)"
                  stroke="#FEF08A"
                  strokeWidth="1.8"
                />
                {/* Mini dialogue line marks in second bubble */}
                <line x1="58" y1="48" x2="94" y2="48" stroke="#0B132B" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="58" y1="56" x2="84" y2="56" stroke="#0B132B" strokeWidth="2.5" strokeLinecap="round" />
              </motion.g>
            )}
          </AnimatePresence>
        </svg>
      </div>

      {/* Dynamic Label Badge */}
      {showLabel && (
        <motion.div
          animate={{
            borderColor: isHovered ? '#D4AF37' : 'rgba(212, 175, 55, 0.25)',
            color: isHovered ? '#FEF08A' : '#E2E8F0',
            backgroundColor: isHovered ? 'rgba(15, 23, 42, 0.95)' : 'rgba(11, 19, 43, 0.9)'
          }}
          className="mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase backdrop-blur-sm border transition-all duration-200 shadow-sm whitespace-nowrap"
        >
          {isHovered ? "Let's discuss." : 'Got an opinion?'}
        </motion.div>
      )}
    </motion.div>
  );
};
