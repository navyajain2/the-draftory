"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ThumbsUp, MessageCircle, Repeat2 } from "lucide-react";

/** Faux LinkedIn post — the artefact the studio actually produces. */
export default function HeroGraphic() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 40, rotate: 3 }}
      animate={{ opacity: 1, y: 0, rotate: 2.2 }}
      transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[23rem]"
    >
      {/* accent shape behind the card */}
      <div className="absolute -right-6 -top-8 -z-10 h-40 w-40 rounded-full bg-accent blur-[2px]" />
      <div className="absolute -bottom-6 -left-8 -z-10 h-24 w-24 rounded-full border border-line-strong" />

      <motion.div
        whileHover={reduce ? undefined : { rotate: 0, y: -6 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-line bg-paper/90 p-5 text-ink shadow-[0_40px_80px_-30px_rgba(22,20,15,0.55)] backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-semibold text-paper">
            MK
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Maya Kapoor</p>
            <p className="text-xs text-ink-soft">Founder & CEO · 2h</p>
          </div>
        </div>

        <p className="mt-4 text-base leading-relaxed text-ink">
          We almost didn&apos;t build the feature that became our whole company.
          <br />
          <br />
          Here&apos;s the conversation that changed my mind —
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-ink-soft">
          <span className="grid h-4 w-4 place-items-center rounded-full bg-accent text-[8px] text-ink">
            <ThumbsUp className="h-2.5 w-2.5" />
          </span>
          <span className="text-xs">1,284 · 96 comments</span>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-line pt-3 text-xs font-medium text-ink-soft">
          <span className="flex items-center gap-1.5">
            <ThumbsUp className="h-3.5 w-3.5" strokeWidth={1.6} /> Like
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.6} /> Comment
          </span>
          <span className="flex items-center gap-1.5">
            <Repeat2 className="h-3.5 w-3.5" strokeWidth={1.6} /> Repost
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
