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

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            apply((entry.target as HTMLElement).dataset.theme || "light");
          }
        }
      },
      // a 0px-tall band across the viewport middle — one section crosses at a time
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return null;
}
