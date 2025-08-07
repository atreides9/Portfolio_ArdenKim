'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseSmartHeaderOptions {
  hideDelay?: number;
  topZone?: number;
  scrollThreshold?: number;
}

export function useSmartHeader(options: UseSmartHeaderOptions = {}) {
  const {
    hideDelay = 3000,
    topZone = 100,
    scrollThreshold = 50
  } = options;

  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);

  // Throttle function for performance
  const throttle = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    let lastExecTime = 0;
    
    return (...args: any[]) => {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      }
    };
  }, []);

  // Clear hide timer
  const clearHideTimer = useCallback(() => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      setHideTimer(null);
    }
  }, [hideTimer]);

  // Show header immediately
  const showHeader = useCallback(() => {
    setIsVisible(true);
    clearHideTimer();
  }, [clearHideTimer]);

  // Hide header with delay
  const hideHeaderWithDelay = useCallback(() => {
    clearHideTimer();
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, hideDelay);
    setHideTimer(timer);
  }, [hideDelay, clearHideTimer]);

  // Handle scroll events
  const handleScroll = useCallback(throttle(() => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > scrollThreshold);

    // At top of page - always show
    if (currentScrollY <= scrollThreshold) {
      showHeader();
      setLastScrollY(currentScrollY);
      return;
    }

    // Scrolling up - show immediately
    if (currentScrollY < lastScrollY) {
      showHeader();
    } 
    // Scrolling down - hide with delay
    else if (currentScrollY > lastScrollY) {
      hideHeaderWithDelay();
    }

    setLastScrollY(currentScrollY);
  }, 16), [lastScrollY, scrollThreshold, showHeader, hideHeaderWithDelay, throttle]);

  // Handle mouse move events
  const handleMouseMove = useCallback(throttle((e: MouseEvent) => {
    if (e.clientY <= topZone) {
      showHeader();
    }
  }, 100), [topZone, showHeader, throttle]);

  // Setup event listeners
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearHideTimer();
    };
  }, [handleScroll, handleMouseMove, clearHideTimer]);

  return {
    isVisible,
    isScrolled,
    showHeader,
    hideHeader: () => setIsVisible(false)
  };
}