"use client";

import { manifesto } from "@/lib/content";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";

export default function Manifesto() {
  return (
    <section id="approach" data-theme="dark" className="text-paper">
      <div className="shell py-28 md:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
          {/* huge statement — first on mobile/tablet, right column on desktop */}
          <AnimatedHeading
            text={manifesto.highlight}
            delay={0.2}
            className="display text-[clamp(2.2rem,6.2vw,4.6rem)] leading-[1.04] text-paper lg:order-2 lg:-mt-[0.22em]"
          />

          {/* small intro — second on mobile/tablet, left column on desktop */}
          <Reveal delay={0.4} className="lg:order-1">
            <div className="max-w-sm space-y-4 text-lg leading-relaxed text-paper/65">
              <p>{manifesto.body}</p>
              <p>{manifesto.body2}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
