"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/lib/content";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";

/** Editorial "latest thinking" grid — zypsy-style press/insights section. */
export default function Insights() {
  return (
    <section id="insights" data-theme="light">
      <div className="shell py-28 md:py-40">
        {/* header */}
        <div className="flex items-end justify-between gap-6">
          <AnimatedHeading
            text={insights.title}
            className="display display-lg"
          />
          <Reveal delay={0.1} className="hidden shrink-0 md:block">
            <a
              href={insights.cta.href}
              className="rule-link group whitespace-nowrap text-lg tracking-[-0.01em]"
            >
              {insights.cta.label}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.6}
              />
            </a>
          </Reveal>
        </div>

        {/* grid */}
        <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 md:mt-20 md:grid-cols-3">
          {insights.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <a href={item.href} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-paper-deep">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 30vw"
                    className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <span className="rounded-full bg-ink px-3 py-1 text-xs font-medium text-paper">
                    {item.tag}
                  </span>
                  <span className="text-sm text-ink-faint">{item.date}</span>
                </div>

                <h3 className="mt-3 text-lg leading-[1.4] tracking-[-0.01em] text-ink">
                  {item.title}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>

        {/* mobile CTA */}
        <Reveal className="mt-12 md:hidden">
          <a href={insights.cta.href} className="rule-link text-lg">
            {insights.cta.label}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
