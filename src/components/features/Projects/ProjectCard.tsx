'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { type MouseEvent, useRef } from 'react';
import { useDeviceDetect } from '@/lib/hooks/useDeviceDetect';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { isMobile, prefersReducedMotion } = useDeviceDetect();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Disable 3D effects on mobile or if user prefers reduced motion
  const enable3D = !isMobile && !prefersReducedMotion;

  const rotateX = useTransform(mouseY, [-0.5, 0.5], enable3D ? [10, -10] : [0, 0]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], enable3D ? [-10, 10] : [0, 0]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !enable3D) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (!enable3D) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleProjectClick = () => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.article
      ref={cardRef}
      className="group relative h-full cursor-pointer"
      onMouseMove={enable3D ? handleMouseMove : undefined}
      onMouseLeave={enable3D ? handleMouseLeave : undefined}
      onClick={handleProjectClick}
      style={
        enable3D
          ? {
              transformStyle: 'preserve-3d' as const,
              perspective: 1000,
            }
          : {}
      }
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleProjectClick();
        }
      }}
      aria-label={`${project.title} 프로젝트 상세보기`}
    >
      <motion.div
        className="relative h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
        style={
          enable3D
            ? {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d' as const,
              }
            : {}
        }
        whileHover={
          !prefersReducedMotion
            ? {
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
              }
            : {}
        }
      >
        {/* 이미지 컨테이너 */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* 배경 그라디언트 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* 프로젝트 이미지 */}
          <motion.div
            className="relative h-full w-full"
            whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={project.featured}
              placeholder="blur"
              blurDataURL={project.blurDataURL}
            />
          </motion.div>

          {/* 카테고리 뱃지 */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* 호버 시 나타나는 View Project */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            whileHover={!prefersReducedMotion ? { opacity: 1 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            <motion.div
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              whileHover={!prefersReducedMotion ? { y: 0, opacity: 1 } : { opacity: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.3,
                delay: prefersReducedMotion ? 0 : 0.1,
              }}
            >
              <span className="font-medium">View Project</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="p-6 relative" style={enable3D ? { transform: 'translateZ(20px)' } : {}}>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 호버 효과를 위한 광택 오버레이 */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
              transform: 'translateX(-100%)',
            }}
            whileHover={{
              transform: 'translateX(100%)',
              transition: { duration: 0.6, ease: 'easeInOut' },
            }}
          />
        )}
      </motion.div>
    </motion.article>
  );
}
