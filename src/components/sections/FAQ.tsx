"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import { cn } from "@/lib/utils";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a.join(" "),
    },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" data-theme="light" className="text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="shell py-28 md:py-40">
        <AnimatedHeading text={faqs.title} className="display display-lg" />

        <div className="mt-14 md:mt-24 md:pl-[25%]">
          {faqs.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-t border-line last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full cursor-pointer items-start gap-6 py-8 text-left md:gap-8 md:py-11"
                  aria-expanded={isOpen}
                >
                  <span className="subhead flex-1 text-ink transition-colors duration-300 group-hover:text-ink-soft">
                    {item.q}
                  </span>
                  <span className="relative mt-1 grid h-7 w-7 shrink-0 place-items-center text-ink-faint transition-colors duration-300 group-hover:text-ink-soft">
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
                      <div className="flex flex-col gap-4 pb-10 text-lg leading-relaxed text-ink-soft">
                        {item.a.map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
