'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils/cn';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleProjectClick = () => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.article
      className={cn(
        'card group cursor-pointer overflow-hidden',
        'transform-gpu transition-all duration-300',
        'hover:shadow-card-hover hover:-translate-y-2',
        'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2'
      )}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleProjectClick}
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
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
        {!imageError ? (
          <>
            {/* Blur placeholder to prevent CLS */}
            <div 
              className={cn(
                'absolute inset-0 bg-gray-200 dark:bg-gray-700',
                'animate-pulse transition-opacity duration-300',
                imageLoaded ? 'opacity-0' : 'opacity-100'
              )}
            />
            
            <Image
              src={project.imageUrl}
              alt={`${project.title} 프로젝트 미리보기`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                'object-cover transition-all duration-500',
                'group-hover:scale-105',
                imageLoaded ? 'opacity-100' : 'opacity-0'
              )}
              placeholder="blur"
              blurDataURL={project.blurDataURL}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              priority={project.featured}
            />
          </>
        ) : (
          /* Fallback for failed image load */
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
            <div className="text-4xl">🎨</div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-gray-900/90 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm">
            {project.category === 'product-strategy' && '📋 Product Strategy'}
            {project.category === 'data-visualization' && '📊 Data Visualization'}
            {project.category === 'interface-design' && '🎨 Interface Design'}
            {project.category === 'ux-research' && '🔍 UX Research'}
            {project.category === 'prototyping' && '⚡ Prototyping'}
          </span>
        </div>

        {/* External link indicator */}
        {project.url && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-6">
        {/* Title and Description */}
        <div className="space-y-3">
          <h3 className="heading-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {project.metrics.slice(0, 3).map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="text-center group/metric"
            >
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 group-hover/metric:scale-110 transition-transform duration-200">
                {metric.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Completion Date */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {project.completedAt.toLocaleDateString('ko-KR', { 
            year: 'numeric', 
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
    </motion.article>
  );
}