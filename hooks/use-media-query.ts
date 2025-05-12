"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Initial check
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    // Add listener for subsequent changes
    const listener = () => setMatches(media.matches);
    
    // Modern way of adding the listener
    media.addEventListener("change", listener);
    
    // Initial check and setup done, now return the cleanup function
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  
  return matches;
}

// Predefined breakpoints based on Tailwind CSS defaults
export function useBreakpoint() {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  return { isMobile, isTablet, isDesktop };
}