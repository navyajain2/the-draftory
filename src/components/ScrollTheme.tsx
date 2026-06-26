"use client";

import { useEffect, useLayoutEffect } from "react";

// useLayoutEffect runs before the browser paints, so the background is corrected
// before the first frame the user sees. Falls back to useEffect during SSR.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

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
  useIsomorphicLayoutEffect(() => {
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

    // Find which section is crossing the viewport's vertical midline.
    // More reliable than IntersectionObserver for fast scrolling because we
    // always read current DOM positions rather than relying on change events
    // that can be batched or skipped between frames.
    //
    // Uses getBoundingClientRect (viewport-relative, transform-aware) rather
    // than offsetTop — sections live inside FooterReveal's transformed wrapper,
    // so offsetTop is measured against that wrapper and shifts with its drift.
    const update = () => {
      const mid = window.innerHeight / 2;
      // The deepest section whose top has crossed above the midline is the one
      // currently covering it (its bottom sits below mid).
      let best: HTMLElement | null = null;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= mid) best = s;
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

    // Re-sync on the moments useEffect/scroll alone miss — otherwise the bg can
    // be left at a stale colour while a section's hardcoded text colour assumes
    // the correct one (dark text on dark bg = invisible):
    //  - `pageshow` fires when the page is restored from the bfcache on a
    //    back/forward navigation, with scroll already at a mid-page position the
    //    mount-time update() never saw.
    //  - `load` covers late layout shifts (web fonts, images) moving sections.
    //  - `resize` covers viewport changes that move the midline.
    const resync = () => update();
    window.addEventListener("pageshow", resync);
    window.addEventListener("load", resync);
    window.addEventListener("resize", resync);

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
      window.removeEventListener("pageshow", resync);
      window.removeEventListener("load", resync);
      window.removeEventListener("resize", resync);
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
