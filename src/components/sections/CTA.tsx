"use client";

import { cta } from "@/lib/content";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";
import CtaButton from "@/components/ui/CtaButton";

export default function CTA() {
  return (
    <section id="contact" data-theme="amber" className="text-ink">
      <div className="shell flex flex-col items-center py-32 text-center md:py-48">
        <AnimatedHeading
          text={cta.title}
          className="display display-lg max-w-[16ch]"
        />

        <Reveal delay={0.15}>
          <div className="mt-16">
            <CtaButton href="/contact" label={cta.action} size="xl" />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 text-base text-ink/60">{cta.note}</p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-2 text-sm text-ink/45">{cta.alt}</p>
        </Reveal>
      </div>
    </section>
  );
}
