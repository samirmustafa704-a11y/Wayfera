"use client";

import { useEffect } from 'react';

export function PerformanceOptimizer() {
  useEffect(() => {
    // Reduce motion for users who prefer it
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }

    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preconnect';
    preloadLink.href = 'https://images.pexels.com';
    document.head.appendChild(preloadLink);

    // Cleanup
    return () => {
      if (preloadLink.parentNode) {
        preloadLink.parentNode.removeChild(preloadLink);
      }
    };
  }, []);

  return null;
}
