"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { principles } from "@/lib/content";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import { cn } from "@/lib/utils";

export default function Principles() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section data-theme="light" className="shell py-28 md:py-40">
      <AnimatedHeading
        text={principles.title}
        className="display display-lg"
      />

      {/* accordion is indented ~25% on desktop, like zypsy */}
      <div className="mt-14 md:mt-24 md:pl-[25%]">
        {principles.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.no} className="border-t border-line last:border-b">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full cursor-pointer items-center gap-6 py-8 text-left md:gap-8 md:py-11"
                aria-expanded={isOpen}
              >
                <span className="w-10 shrink-0 text-base font-medium text-ink-soft md:w-16 md:text-lg">
                  {item.no}
                </span>
                <span className="subhead flex-1 transition-colors duration-300">
                  {item.title}
                </span>
                <span className="relative grid h-7 w-7 shrink-0 place-items-center text-ink-soft transition-colors duration-300 group-hover:text-ink">
                  <Plus
                    className={cn(
                      "h-6 w-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen && "rotate-[135deg]",
                    )}
                    strokeWidth={1.25}
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-10 pl-16 text-lg leading-relaxed text-ink-soft md:pl-24">
                      {item.body}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
