import { useEffect, useState } from 'react';

/**
 * Tracks whether the page has been scrolled past a threshold.
 * Used by the header to switch between its transparent and solid states.
 *
 * @param {number} threshold - Scroll distance in pixels before returning true.
 * @returns {boolean} Whether the page is scrolled past the threshold.
 */
export function useScrollPosition(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
