"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useCarousel(slideCount: number, intervalMs = 6000) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const start = useCallback(() => {
    clear();
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slideCount);
    }, intervalMs);
  }, [clear, intervalMs, slideCount]);

  useEffect(() => {
    start();
    return clear;
  }, [start, clear]);

  const goTo = useCallback(
    (i: number) => {
      setActive(i);
      start(); // reset the autoplay timer on manual interaction
    },
    [start],
  );

  const next = useCallback(
    () => goTo((active + 1) % slideCount),
    [active, goTo, slideCount],
  );
  const prev = useCallback(
    () => goTo((active - 1 + slideCount) % slideCount),
    [active, goTo, slideCount],
  );

  return { active, goTo, next, prev };
}
