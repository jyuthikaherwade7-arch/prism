import React from 'react';
import { motion } from 'motion/react';

interface PrismSparkProps {
  className?: string;
  size?: number;
  delay?: number;
  color?: string;
}

export const PrismSpark: React.FC<PrismSparkProps> = ({
  className = '',
  size = 20,
  delay = 0,
  color = '#B3CFE5'
}) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      animate={{
        scale: [0.85, 1.15, 0.85],
        opacity: [0.7, 1, 0.7],
        rotate: [0, 90, 180]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    >
      <path
        d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
        fill={color}
      />
    </motion.svg>
  );
};
