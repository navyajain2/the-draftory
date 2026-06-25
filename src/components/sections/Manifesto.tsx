"use client";

import { manifesto } from "@/lib/content";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";

export default function Manifesto() {
  return (
    <section id="approach" data-theme="dark" className="text-paper">
      <div className="shell py-28 md:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
          {/* small intro, top-left — appears first */}
          <Reveal>
            <div className="max-w-sm space-y-4 text-lg leading-relaxed text-paper/65">
              <p>{manifesto.body}</p>
              <p>{manifesto.body2}</p>
            </div>
          </Reveal>

          {/* huge statement, right — reveals line-by-line (zypsy line-wipe),
              a beat after the intro; nudged to share the intro's first line */}
          <AnimatedHeading
            text={manifesto.highlight}
            delay={1}
            className="display text-[clamp(2.2rem,6.2vw,4.6rem)] leading-[1.04] text-paper lg:-mt-[0.22em]"
          />
        </div>
      </div>
    </section>
  );
}
