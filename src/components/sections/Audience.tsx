"use client";

import { audience } from "@/lib/content";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";

export default function Audience() {
  return (
    <section id="audience" data-theme="dark" className="text-paper">
      <div className="shell py-28 md:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* left: headline + paragraph */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <AnimatedHeading text={audience.title} className="display display-lg text-paper" />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-paper/55">
                {audience.body}
              </p>
            </Reveal>
          </div>

          {/* right: stacked cards (sharp edges) */}
          <div className="flex flex-col gap-5">
            {audience.items.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.07}>
                <article className="flex min-h-[15rem] flex-col justify-between bg-noir-soft p-8 transition-colors duration-500 hover:bg-[#23211d] md:min-h-[16rem] md:p-10">
                  <span className="display display-sm text-paper">
                    {s.tag}
                  </span>
                  <div className="flex items-end justify-between gap-6">
                    <span className="display display-xl leading-none text-paper/25">
                      {s.no}
                    </span>
                    <p className="max-w-[20rem] text-right text-lg leading-snug text-paper/60">
                      {s.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
