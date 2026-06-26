"use client";

import { useEffect } from "react";

/**
 * Drives a single fixed background layer (#page-bg) from the section currently
 * crossing the viewport's middle. Because the colour changes *in place* on one
 * shared layer — with a CSS transition — the whole page appears to cross-fade
 * light↔dark for a beat as you scroll, instead of hard section edges sliding by.
 *
 * Sections opt in with `data-theme="dark|light|amber"`.
 */
const THEMES: Record<string, { bg: string; fg: string }> = {
  dark: { bg: "#100f0d", fg: "#f3f0e8" },
  light: { bg: "#f3f0e8", fg: "#16140f" },
  amber: { bg: "#e9b53b", fg: "#16140f" },
};

export default function ScrollTheme() {
  useEffect(() => {
    const bgEl = document.getElementById("page-bg");
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-theme]"),
    );
    if (!bgEl || sections.length === 0) return;

    let current = "";
    const apply = (theme: string) => {
      const t = THEMES[theme];
      if (!t || theme === current) return;
      current = theme;
      bgEl.style.backgroundColor = t.bg;
      document.documentElement.style.setProperty("--page-fg", t.fg);
    };

    // Find which section is at (or just above) the viewport midpoint.
    // More reliable than IntersectionObserver for fast scrolling because we
    // always read current DOM positions rather than relying on change events
    // that can be batched or skipped between frames.
    const midpoint = () => window.innerHeight / 2 + window.scrollY;

    const update = () => {
      const mid = midpoint();
      // Walk sections in reverse so the last one whose top ≤ mid wins
      // (i.e. the deepest section that has already started)
      let best: HTMLElement | null = null;
      for (const s of sections) {
        if (s.offsetTop <= mid) best = s;
        else break;
      }
      if (best) apply(best.dataset.theme || "light");
    };

    // Run on scroll with rAF throttle so we never miss a frame
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Also observe section entries so the colour updates even without scrolling
    // (e.g. on page load or after layout shifts)
    const observer = new IntersectionObserver(
      () => update(),
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));

    update(); // apply immediately on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
