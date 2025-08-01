'use client';

import { motion, useTime, useTransform } from 'framer-motion';
import { useMemo } from 'react';

interface AtomProps {
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

function Atom({ x, y, size, color, delay }: AtomProps) {
  const time = useTime();

  // GPU-optimized transforms for 60fps performance
  const rotateX = useTransform(time, [0, 4000], [0, 360]);
  const rotateY = useTransform(time, [0, 6000], [0, 360]);
  const scale = useTransform(time, [0, 2000], [0.8, 1.2], { clamp: false });

  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      className="gpu-accelerated drop-shadow-lg"
      style={{
        rotateX,
        rotateY,
        scale,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: delay,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      filter="url(#molecular-glow)"
    />
  );
}

interface BondProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

function Bond({ x1, y1, x2, y2, delay }: BondProps) {
  const time = useTime();
  const opacity = useTransform(time, [0, 3000], [0.6, 1], { clamp: false });

  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="currentColor"
      strokeWidth="2"
      className="text-primary-400 dark:text-primary-500"
      style={{ opacity }}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.7 }}
      transition={{
        delay: delay,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}

export function MolecularAnimation() {
  // Optimized molecular structure data
  const molecularData = useMemo(
    () => ({
      atoms: [
        { x: 120, y: 100, size: 12, color: '#3B82F6', delay: 0 }, // Primary blue
        { x: 280, y: 80, size: 10, color: '#10B981', delay: 0.2 }, // Emerald
        { x: 400, y: 140, size: 14, color: '#8B5CF6', delay: 0.4 }, // Purple
        { x: 200, y: 220, size: 11, color: '#F59E0B', delay: 0.6 }, // Amber
        { x: 340, y: 260, size: 13, color: '#EF4444', delay: 0.8 }, // Red
        { x: 160, y: 320, size: 9, color: '#06B6D4', delay: 1.0 }, // Cyan
        { x: 300, y: 180, size: 8, color: '#84CC16', delay: 1.2 }, // Lime
      ],
      bonds: [
        { x1: 120, y1: 100, x2: 280, y2: 80, delay: 0.3 },
        { x1: 280, y1: 80, x2: 400, y2: 140, delay: 0.5 },
        { x1: 200, y1: 220, x2: 340, y2: 260, delay: 0.7 },
        { x1: 120, y1: 100, x2: 200, y2: 220, delay: 0.9 },
        { x1: 280, y1: 80, x2: 300, y2: 180, delay: 1.1 },
        { x1: 300, y1: 180, x2: 340, y2: 260, delay: 1.3 },
        { x1: 160, y1: 320, x2: 200, y2: 220, delay: 1.5 },
      ],
    }),
    []
  );

  const time = useTime();

  // Container rotation for dynamic effect
  const rotate = useTransform(time, [0, 20000], [0, 360]);
  const containerScale = useTransform(time, [0, 8000], [0.9, 1.1], { clamp: false });

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background circle for visual emphasis */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-100/50 to-purple-100/50 dark:from-primary-900/20 dark:to-purple-900/20 blur-xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.svg
        viewBox="0 0 500 400"
        className="w-full h-auto relative z-10 gpu-accelerated"
        style={{
          rotate,
          scale: containerScale,
        }}
        role="img"
        aria-label="분자 구조 애니메이션"
      >
        {/* SVG Filters for glow effects */}
        <defs>
          <filter id="molecular-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="atomGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </radialGradient>
        </defs>

        {/* Render bonds first (behind atoms) */}
        <g className="bonds">
          {molecularData.bonds.map((bond, index) => (
            <Bond key={`bond-${index}`} {...bond} />
          ))}
        </g>

        {/* Render atoms */}
        <g className="atoms">
          {molecularData.atoms.map((atom, index) => (
            <Atom key={`atom-${index}`} {...atom} />
          ))}
        </g>

        {/* Orbital paths for added scientific authenticity */}
        <g className="orbitals opacity-30">
          {molecularData.atoms.slice(0, 3).map((atom, index) => (
            <motion.circle
              key={`orbital-${index}`}
              cx={atom.x}
              cy={atom.y}
              r={atom.size * 2.5}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2,4"
              className="text-primary-300 dark:text-primary-600"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 15 + index * 3,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />
          ))}
        </g>
      </motion.svg>

      {/* Floating particles for ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}
