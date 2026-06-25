"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Zypsy-style footer reveal. The footer is a solid panel sitting one layer
 * *below* the page content (higher z-index, so it paints on top where they
 * overlap). As the footer scrolls into view, the whole content block above it
 * drifts downward and "parks" — lagging behind the scroll — which uncovers the
 * already-solid footer, so it appears to rise into place rather than slide up
 * at scroll speed.
 *
 * The content must live inside this transformed wrapper, but `position: fixed`
 * elements (the nav) must NOT — a transformed ancestor becomes their containing
 * block and they'd scroll away. So the nav is rendered as a sibling, outside.
 */
export default function FooterReveal({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // Content drifts down as the footer passes through the viewport, "parking"
  // while the solid footer is uncovered beneath it. A larger drift than zypsy's
  // 200px makes the reveal read more prominently.
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 280]);

  return (
    <>
      <motion.div style={{ y }} className="relative z-[1]">
        {children}
      </motion.div>
      <div ref={ref} className="relative z-[2]">
        {footer}
      </div>
    </>
  );
}
