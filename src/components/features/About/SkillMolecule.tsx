'use client';

import { motion } from 'framer-motion';
import { useDeviceDetect } from '@/lib/hooks/useDeviceDetect';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'core' | 'design' | 'tech' | 'soft';
}

interface Connection {
  from: number;
  to: number;
  strength: number; // 0-1
}

interface SkillMoleculeProps {
  skills: Skill[];
  connections: Connection[];
  className?: string;
}

const categoryColors = {
  core: '#3b82f6', // blue
  design: '#8b5cf6', // purple  
  tech: '#10b981', // emerald
  soft: '#f59e0b', // amber
};

const getSkillPosition = (index: number, total: number, radius: number) => {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: radius + radius * Math.cos(angle),
    y: radius + radius * Math.sin(angle),
  };
};

export function SkillMolecule({ skills, connections, className = '' }: SkillMoleculeProps) {
  const { prefersReducedMotion } = useDeviceDetect();
  const radius = 120;
  const svgSize = radius * 2 + 40;

  return (
    <div className={`flex justify-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.8 }}
        className="relative"
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="overflow-visible"
        >
          <defs>
            {/* Subtle glow filter */}
            <filter id="skill-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Connection gradient */}
            <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
            </linearGradient>
          </defs>

          {/* Render connections first (behind atoms) */}
          {connections.map((connection, index) => {
            const fromPos = getSkillPosition(connection.from, skills.length, radius);
            const toPos = getSkillPosition(connection.to, skills.length, radius);
            
            return (
              <motion.line
                key={`connection-${index}`}
                x1={fromPos.x + 20}
                y1={fromPos.y + 20}
                x2={toPos.x + 20}
                y2={toPos.y + 20}
                stroke="url(#connection-gradient)"
                strokeWidth={Math.max(1, connection.strength * 2)}
                opacity={0.6}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 1.2,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
              />
            );
          })}

          {/* Render skill atoms */}
          {skills.map((skill, index) => {
            const position = getSkillPosition(index, skills.length, radius);
            const atomRadius = 8 + (skill.level / 100) * 8; // 8-16px based on level
            
            return (
              <g key={skill.name}>
                {/* Atom circle */}
                <motion.circle
                  cx={position.x + 20}
                  cy={position.y + 20}
                  r={atomRadius}
                  fill={categoryColors[skill.category]}
                  filter="url(#skill-glow)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    duration: prefersReducedMotion ? 0.2 : 0.6,
                    delay: prefersReducedMotion ? 0 : index * 0.1,
                  }}
                  whileHover={!prefersReducedMotion ? { 
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  } : {}}
                  className="cursor-pointer"
                />

                {/* Skill label */}
                <motion.text
                  x={position.x + 20}
                  y={position.y + 50}
                  textAnchor="middle"
                  className="text-xs font-medium fill-gray-600 dark:fill-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: prefersReducedMotion ? 0.2 : 0.4,
                    delay: prefersReducedMotion ? 0 : index * 0.1 + 0.3,
                  }}
                >
                  {skill.name}
                </motion.text>

                {/* Level indicator (orbital ring) */}
                <motion.circle
                  cx={position.x + 20}
                  cy={position.y + 20}
                  r={atomRadius + 6}
                  fill="none"
                  stroke={categoryColors[skill.category]}
                  strokeWidth="1"
                  strokeOpacity={skill.level / 100 * 0.3}
                  strokeDasharray={`${skill.level / 100 * 20} ${20 - (skill.level / 100 * 20)}`}
                  initial={{ pathLength: 0, rotate: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  animate={!prefersReducedMotion ? { 
                    rotate: 360,
                  } : {}}
                  transition={{
                    pathLength: {
                      duration: prefersReducedMotion ? 0.2 : 0.8,
                      delay: prefersReducedMotion ? 0 : index * 0.1 + 0.5,
                    },
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: prefersReducedMotion ? 0.2 : 0.6,
            delay: prefersReducedMotion ? 0 : 1,
          }}
          className="mt-8 flex justify-center"
        >
          <div className="flex flex-wrap gap-4 text-xs">
            {Object.entries(categoryColors).map(([category, color]) => (
              <div key={category} className="flex items-center gap-1">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="capitalize text-gray-600 dark:text-gray-400">
                  {category === 'core' ? 'Core' : 
                   category === 'design' ? 'Design' :
                   category === 'tech' ? 'Tech' : 'Soft Skills'}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}