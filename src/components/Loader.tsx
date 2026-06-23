"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Mark from "@/components/ui/Mark";

type Phase = "logo" | "text" | "done";

/** zypsy-style preloader: the mark appears first, lifts away, then the tagline
 *  rises in its place, and finally the curtain reveals the page. */
export default function Loader() {
  const [phase, setPhase] = useState<Phase>("logo");

  useEffect(() => {
    document.documentElement.classList.add("is-loading");
    window.scrollTo(0, 0);
    const toText = setTimeout(() => setPhase("text"), 1600);
    const toDone = setTimeout(() => setPhase("done"), 3200);
    return () => {
      clearTimeout(toText);
      clearTimeout(toDone);
    };
  }, []);

  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(() => {
      document.documentElement.classList.remove("is-loading");
    }, 900);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-noir text-paper"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
        >
          {/* one element at a time: logo, then text */}
          <AnimatePresence mode="wait">
            {phase === "logo" && (
              <motion.div
                key="logo"
                className="text-[5rem] md:text-[6rem]"
                initial={{ opacity: 0, scale: 0.6, rotate: -120 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Mark />
              </motion.div>
            )}

            {phase === "text" && (
              <div key="text" className="overflow-hidden px-6">
                <motion.p
                  className="display display-md text-center text-paper"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  A content team for founders.
                </motion.p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
