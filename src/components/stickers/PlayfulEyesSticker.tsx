import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PlayfulEyesStickerProps {
  className?: string;
}

export const PlayfulEyesSticker: React.FC<PlayfulEyesStickerProps> = ({ className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch / mobile
    const checkTouch = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    setIsTouchDevice(checkTouch());

    if (checkTouch()) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;
      const distance = Math.hypot(deltaX, deltaY);

      // Max radius for pupil travel is ~4px
      const maxRadius = 4.5;
      const angle = Math.atan2(deltaY, deltaX);
      const radius = Math.min(distance / 25, maxRadius);

      setPupilOffset({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex flex-col items-center select-none cursor-pointer group ${className}`}
    >
      <div className="flex items-center gap-2 p-2 rounded-2xl bg-[#0B132B]/80 border border-[#D4AF37]/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-[#D4AF37]/60">
        {/* Left Eye */}
        <div className="relative w-8 h-8 rounded-full bg-[#F8FAFC] border-2 border-[#D4AF37] flex items-center justify-center overflow-hidden shadow-inner">
          <motion.div
            style={{
              transform: !isTouchDevice
                ? `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`
                : 'translate(0px, 0px)'
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-4 h-4 rounded-full bg-[#080D1A] flex items-center justify-center relative"
          >
            {/* Pupil Iris detail in PRISM Blue */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#080D1A]" />
            </div>
            {/* Catchlight spark */}
            <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-white" />
          </motion.div>
        </div>

        {/* Right Eye */}
        <div className="relative w-8 h-8 rounded-full bg-[#F8FAFC] border-2 border-[#D4AF37] flex items-center justify-center overflow-hidden shadow-inner">
          <motion.div
            style={{
              transform: !isTouchDevice
                ? `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`
                : 'translate(0px, 0px)'
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-4 h-4 rounded-full bg-[#080D1A] flex items-center justify-center relative"
          >
            {/* Pupil Iris detail in PRISM Blue */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#080D1A]" />
            </div>
            {/* Catchlight spark */}
            <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-white" />
          </motion.div>
        </div>
      </div>

      {/* Hover reaction text */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="absolute -bottom-8 px-2.5 py-0.5 rounded-md text-[11px] font-semibold text-[#FEF08A] bg-[#0F172A]/95 border border-[#D4AF37]/50 shadow-md whitespace-nowrap pointer-events-none z-20"
          >
            Yep. We see you.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
