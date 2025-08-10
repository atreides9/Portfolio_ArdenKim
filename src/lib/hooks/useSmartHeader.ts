'use client';

import { useEffect, useRef, useState } from 'react';

export function useSmartHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const hideTimer = useRef<NodeJS.Timeout | null>(null);
  const ticking = useRef(false);

  const clearTimer = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  const showHeader = () => {
    setIsVisible(true);
    clearTimer();
  };

  const hideHeaderDelayed = () => {
    clearTimer();
    hideTimer.current = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleScroll = () => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setIsScrolled(currentScrollY > 50);

        // 페이지 최상단에서는 항상 표시
        if (currentScrollY <= 50) {
          showHeader();
        }
        // 스크롤 업 시 즉시 표시
        else if (currentScrollY < lastScrollY.current) {
          showHeader();
        }
        // 스크롤 다운 시 3초 후 숨김
        else if (currentScrollY > lastScrollY.current) {
          hideHeaderDelayed();
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    // 마우스를 상단 100px 영역에 호버 시 헤더 표시
    if (e.clientY <= 100) {
      showHeader();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimer();
    };
  }, []);

  return { isVisible, isScrolled };
}
