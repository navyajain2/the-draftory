"use client";

import { footer, brand } from "@/lib/content";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";
import NewsletterSignup from "@/components/blog/NewsletterSignup";

export default function Footer() {
  return (
    <footer
      data-theme="dark"
      className="relative overflow-hidden bg-noir text-paper"
    >
      <div className="shell pt-28 md:pt-40">
        {/* Top band — newsletter signup (left) + link columns (right) */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-24">
          <div className="max-w-xl">
            <AnimatedHeading
              text={"Sign up for our\nnewsletter"}
              className="display display-lg text-paper"
            />
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-paper/55">
                We partner with founders and operators, turning raw ideas into
                writing that earns attention, trust, and lasting momentum.
              </p>
              <div className="mt-10 max-w-md">
                <NewsletterSignup />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-8 lg:justify-items-end lg:pt-3">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <p className="text-sm text-paper/40">{col.heading}</p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="cursor-pointer text-lg text-paper/70 transition-colors hover:text-paper"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Bottom band — giant wordmark (left) + legal stack (right), aligned to
          the baseline, exactly like the zypsy footer lockup. */}
      <div className="shell mt-24 flex flex-col gap-8 pb-10 md:mt-32 md:flex-row md:items-end md:justify-between">
        <div
          className="text-[10vw] font-semibold leading-[0.85] tracking-[-0.03em] text-paper/[0.13] select-none md:text-[clamp(3rem,7vw,7rem)]"
          aria-hidden="true"
        >
          The Draftory
        </div>

        <div className="shrink-0 text-sm text-paper/45 md:text-right">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 md:justify-end">
            <a href="#" className="cursor-pointer transition-colors hover:text-paper">
              Privacy Policy
            </a>
            <a href="#" className="cursor-pointer transition-colors hover:text-paper">
              Terms of Service
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="cursor-pointer transition-colors hover:text-paper"
            >
              {brand.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
