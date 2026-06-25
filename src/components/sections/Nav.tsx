"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import { nav, brand } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [open, setOpen] = useState(false);
  // "dark" sections want light nav text; "light"/"amber" want ink.
  const [theme, setTheme] = useState<"dark" | "light">("light");
  // zypsy concept: expanded inline links on the hero; collapse to a "Menu"
  // button once the user scrolls past the top.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-theme]"),
    );
    if (!sections.length) return;

    let observer: IntersectionObserver;

    // Re-pick the section crossing a thin line just under the header.
    const evaluate = () => {
      const probe = 40;
      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > probe) {
          // `data-nav` lets a section force nav contrast independent of its
          // page-background theme (e.g. the hero's light top area).
          const override = el.dataset.nav;
          if (override === "ink" || override === "paper") {
            setTheme(override === "ink" ? "light" : "dark");
          } else {
            setTheme(el.dataset.theme === "dark" ? "dark" : "light");
          }
          return;
        }
      }
    };

    const build = () => {
      observer?.disconnect();
      // Collapse the root to a 1px band at y=40 so only the section
      // directly under the header triggers.
      observer = new IntersectionObserver(evaluate, {
        rootMargin: `-40px 0px ${41 - window.innerHeight}px 0px`,
      });
      sections.forEach((s) => observer.observe(s));
      evaluate();
    };

    build();
    window.addEventListener("resize", build);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", build);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const fg = open || theme === "dark" ? "text-paper" : "text-ink";
  // On dark sections accent yellow is readable; on light/amber hero it blends
  // into the background, so soften hover to a muted ink instead.
  const hoverCls = theme === "dark" || open ? "hover:text-accent" : "hover:text-ink-soft";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="shell flex items-start justify-between py-5 md:py-6">
          <Link
            href="/"
            className={cn(
              "transition-colors duration-500 text-[1.875rem]",
              fg,
            )}
          >
            <Wordmark />
          </Link>

          {/* right cluster — expanded list and Menu button crossfade in place */}
          <div className="relative flex flex-col items-end">
            {/* expanded inline nav — desktop, hero only */}
            <nav
              aria-hidden={scrolled || open}
              className={cn(
                "hidden flex-col items-end gap-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:flex",
                scrolled || open
                  ? "pointer-events-none -translate-y-2 opacity-0"
                  : "translate-y-0 opacity-100",
              )}
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  tabIndex={scrolled || open ? -1 : 0}
                  className={cn(
                    "cursor-pointer text-lg leading-tight tracking-[-0.01em] transition-colors duration-300",
                    hoverCls,
                    fg,
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Menu button — when scrolled (desktop) or always on tablet/mobile.
                Absolutely placed on desktop so it overlays the expanded list's
                top row for a clean crossfade. */}
            <button
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "group z-50 flex cursor-pointer items-center gap-3 text-lg leading-tight tracking-[-0.01em] transition-all duration-500",
                fg,
                // desktop: fade in only once scrolled (or menu open)
                "lg:absolute lg:right-0 lg:top-0",
                scrolled || open
                  ? "lg:pointer-events-auto lg:opacity-100"
                  : "lg:pointer-events-none lg:opacity-0",
              )}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span>{open ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-noir text-paper"
          >
            <div className="shell flex flex-1 flex-col justify-center gap-2 pt-24">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.18 + i * 0.07,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="display display-md w-fit cursor-pointer text-paper/90 transition-colors hover:text-accent"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <div className="shell flex flex-wrap items-center justify-between gap-4 border-t border-line-inv py-8 text-sm text-paper/60">
              <span>© {new Date().getFullYear()} The Draftory</span>
              <a
                href={`mailto:${brand.email}`}
                className="rule-link cursor-pointer text-paper"
              >
                {brand.email}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
