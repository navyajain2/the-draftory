"use client";

import { footer, brand } from "@/lib/content";
import Wordmark from "@/components/ui/Wordmark";
import AnimatedHeading from "@/components/anim/AnimatedHeading";

export default function Footer() {
  return (
    <footer data-theme="dark" className="text-paper">
      <div className="shell pb-12 pt-24 md:pt-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <AnimatedHeading
              text={footer.big}
              className="display display-lg text-paper"
            />
            <p className="mt-10 max-w-md text-lg leading-relaxed text-paper/60">
              {footer.blurb}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <p className="text-sm text-paper/40">{col.heading}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="rule-link cursor-pointer text-lg text-paper/85 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-line-inv pt-8 text-sm text-paper/45 md:flex-row md:items-center">
          <Wordmark className="text-paper" />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
            <a href={`mailto:${brand.email}`} className="cursor-pointer hover:text-paper">
              {brand.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
