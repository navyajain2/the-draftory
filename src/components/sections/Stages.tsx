"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { stages } from "@/lib/content";
import Reveal from "@/components/anim/Reveal";
import { cn } from "@/lib/utils";

export default function Stages() {
  // No card is active by default (both charcoal); hovering one turns it amber.
  const [active, setActive] = useState<number | null>(null);

  return (
    <section data-theme="light" className="shell py-28 md:py-40">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {stages.items.map((s, i) => {
          const isActive = active === i;
          return (
            <article
              key={s.title}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={cn(
                "relative flex min-h-[20rem] cursor-default flex-col justify-between overflow-hidden p-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:min-h-[31rem] md:p-10",
                isActive
                  ? "bg-accent text-ink"
                  : "bg-[#1e1c19] text-paper",
              )}
            >
              {/* title */}
              {/* the reserved right gutter is only for the hover-reveal image,
                  which never appears on touch — so drop it below md. */}
              <h3 className="display display-md pr-0 md:pr-[34%]">
                {s.title}
              </h3>

              {/* image zooms in from the top-right corner on hover
                  (matches zypsy: scale(0) -> scale(1), origin top-right) */}
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  scale: { duration: 0.55, ease: [0.165, 0.84, 0.44, 1] },
                  opacity: { duration: 0.35 },
                }}
                style={{ transformOrigin: "100% 0%" }}
                className="pointer-events-none absolute right-8 top-8 aspect-[4/5] w-[42%] overflow-hidden md:right-10 md:top-10 md:w-[27%]"
              >
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 42vw, 18rem"
                  className="object-cover"
                />
              </motion.div>

              {/* description */}
              <p className="max-w-md text-lg leading-relaxed">
                {s.body}
              </p>
            </article>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 max-w-xl space-y-3 text-base text-ink-soft">
          <p>
            <span className="text-ink">{stages.commitment.heading}</span>
            {" "}
            {stages.commitment.subheading}
          </p>
          {stages.commitment.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
