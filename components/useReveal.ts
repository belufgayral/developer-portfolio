"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>(triggerSelector?: string) {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    const triggerElement = triggerSelector
      ? document.querySelector<HTMLElement>(triggerSelector)
      : element;
    if (!element || !triggerElement) return;

    const revealOnScroll = () => {
      const { top, bottom } = triggerElement.getBoundingClientRect();
      const activationLine = window.innerHeight * 0.86;

      if (top <= activationLine && bottom > 0) {
        setIsVisible(true);
        window.removeEventListener("scroll", revealOnScroll);
        window.removeEventListener("resize", revealOnScroll);
      }
    };

    window.addEventListener("scroll", revealOnScroll, { passive: true });
    window.addEventListener("resize", revealOnScroll);

    // Check the restored scroll position after the first layout has settled.
    const initialCheck = window.requestAnimationFrame(revealOnScroll);

    return () => {
      window.cancelAnimationFrame(initialCheck);
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("resize", revealOnScroll);
    };
  }, [triggerSelector]);

  return { elementRef, isVisible };
}