"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string; // use "\n" to force line breaks
  className?: string;
  delay?: number;
  once?: boolean;
};

/**
 * Reveals a heading line-by-line with a clipped "wipe up" per line —
 * the signature zypsy display entrance.
 */
export default function AnimatedHeading({
  text,
  className,
  delay = 0,
  once = true,
}: Props) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");

  if (reduce) {
    return (
      <h2 className={cn("display", className)}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    );
  }

  return (
    <motion.h2
      className={cn("display", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em]">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "110%" },
              visible: { y: "0%" },
            }}
            transition={{
              duration: 0.95,
              delay: delay + i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
