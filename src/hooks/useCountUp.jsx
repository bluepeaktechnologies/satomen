// src/hooks/useCountUp.js
import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from start -> end when the element enters the viewport.
 * - Respects prefers-reduced-motion (jumps straight to end).
 * - Triggers once by default (set `once=false` to retrigger on re-entry).
 */
export function useCountUp({
  start = 0,
  end = 0,
  duration = 1200, // ms
  decimals = 0,
  once = true,
  easing = "outCubic",
}) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);
  const startedRef = useRef(false);
  const rafRef = useRef(0);

  // basic easing options
  const easings = {
    linear: (t) => t,
    outCubic: (t) => 1 - Math.pow(1 - t, 3),
    outQuad: (t) => 1 - (1 - t) * (1 - t),
  };
  const ease = easings[easing] || easings.outCubic;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setValue(end);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && (!startedRef.current || !once)) {
          startedRef.current = true;
          const t0 = performance.now();
          const animate = (now) => {
            const t = Math.min(1, (now - t0) / duration);
            const current = start + (end - start) * ease(t);
            setValue(Number(current.toFixed(decimals)));
            if (t < 1) {
              rafRef.current = requestAnimationFrame(animate);
            }
          };
          cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [start, end, duration, decimals, once, easing]);

  return { ref, value };
}
