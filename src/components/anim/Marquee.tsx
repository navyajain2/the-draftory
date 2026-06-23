"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  speed?: number; // px per second
  className?: string;
};

/**
 * Seamless infinite horizontal marquee. Renders the children twice and
 * loops the x-offset across exactly one copy's width.
 */
export default function Marquee({ children, speed = 38, className }: Props) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (reduce || !trackRef.current) return;
    const half = trackRef.current.scrollWidth / 2;
    if (half === 0) return;
    let next = x.get() - (speed * delta) / 1000;
    if (next <= -half) next += half;
    x.set(next);
  });

  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div ref={trackRef} style={{ x }} className="flex w-max">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
