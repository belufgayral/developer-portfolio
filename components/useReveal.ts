"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const revealOnScroll = () => {
      const { top, bottom } = element.getBoundingClientRect();
      const activationLine = window.innerHeight * 0.86;

      if (top <= activationLine && bottom > 0) {
        setIsVisible(true);
        window.removeEventListener("scroll", revealOnScroll);
        window.removeEventListener("resize", revealOnScroll);
      }
    };

    window.addEventListener("scroll", revealOnScroll, { passive: true });
    window.addEventListener("resize", revealOnScroll);
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("resize", revealOnScroll);
    };
  }, []);

  return { elementRef, isVisible };
}