"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import LiveClocks from "./LiveClocks";

const lineVariants = {
  hidden: { y: "115%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.35 + i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section id="top" data-theme="dark" data-nav="ink" className="relative min-h-[100svh] overflow-hidden">
      {/* full-bleed background video (sits above the shared page-bg layer) */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* subtle white wash to lighten the footage for the black type */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="shell relative z-10 flex min-h-[100svh] flex-col justify-end pb-8 pt-28 text-ink">
        {/* clocks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mb-6 text-ink/80"
        >
          <LiveClocks />
        </motion.div>

        {/* headline — spans full width, two clean lines */}
        <h1 className="display display-xl text-ink">
          {[hero.line1, hero.line2].map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
