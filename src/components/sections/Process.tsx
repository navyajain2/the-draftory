"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import {
  CalendarClock,
  ThumbsUp,
  MessageCircle,
  ListChecks,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { process as processContent } from "@/lib/content";
import AnimatedHeading from "@/components/anim/AnimatedHeading";

/* short right-hand meta per step, fuel-style "© 2025" slot */
const META = ["2 calls", "1 form", "2 calls", "ongoing", "ongoing"];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = processContent.items.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
    setActiveIndex(i);
  });

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="process" data-theme="light" className="shell pt-28 md:pt-40">
      {/* header — full-width, like the principles section */}
      <div className="flex items-end justify-between gap-6">
        <AnimatedHeading
          text={"How the work\nactually happens"}
          className="display display-lg"
        />
        <span className="hidden whitespace-nowrap font-mono text-sm tracking-[0.18em] text-ink-faint tabular-nums md:block">
          {pad(activeIndex + 1)} — {pad(total)}
        </span>
      </div>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
        A deliberate sequence — every step traces back to your story, your
        goals, and how you actually think.
      </p>

      {/* stacking cards — single centred column */}
      <div ref={trackRef} className="mt-12 md:mt-16">
        {processContent.items.map((item, i) => (
          <ProcessCard
            key={item.no}
            item={item}
            index={i}
            meta={META[i]}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function ProcessCard({
  item,
  index,
  meta,
  activeIndex,
}: {
  item: (typeof processContent.items)[number];
  index: number;
  meta: string;
  activeIndex: number;
}) {
  const reduce = useReducedMotion();

  // how many cards are stacked on top of this one
  const depth = Math.max(0, activeIndex - index);
  const scale = reduce ? 1 : Math.max(0.82, 1 - depth * 0.05);
  const translateY = reduce ? 0 : -depth * 16;

  return (
    <div className="sticky top-0 flex min-h-screen items-center justify-center py-6 md:py-10">
      <div
        className="mx-auto w-full max-w-2xl origin-center"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* card surface */}
        <div className="overflow-hidden rounded-[1.75rem] border border-line bg-paper-deep shadow-[0_40px_90px_-50px_rgba(22,20,15,0.55)]">
          {/* stage */}
          <div className="grid min-h-[52vh] place-items-center px-6 py-12">
            <div className="w-full max-w-[24rem]">
              <StepVisual index={index} />
            </div>
          </div>

          {/* caption row */}
          <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4 border-t border-line px-6 py-6 md:px-10">
            <span className="font-mono text-sm text-ink-faint tabular-nums">
              ({item.no})
            </span>
            <div className="text-center">
              <p className="display display-sm">{item.title}</p>
              <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </div>
            <span className="whitespace-nowrap font-mono text-sm text-ink-faint">
              {meta}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Faux artefact cards — one per step                                 */
/* ------------------------------------------------------------------ */

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full">
      {/* tinted backing panel */}
      <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-accent/45" />
      <div className="relative rounded-2xl border border-line bg-white p-5 shadow-[0_30px_60px_-35px_rgba(22,20,15,0.45)]">
        {children}
      </div>
    </div>
  );
}

function WindowDots() {
  return (
    <div className="mb-4 flex gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
      <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
      <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
    </div>
  );
}

function StepVisual({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <DiscoveryCard />;
    case 1:
      return <FormCard />;
    case 2:
      return <VoiceCard />;
    case 3:
      return <PostCard />;
    default:
      return <IterationCard />;
  }
}

/* 01 — Discovery: two scheduled deep-dive sessions */
function DiscoveryCard() {
  return (
    <Frame>
      <WindowDots />
      <div className="flex items-center gap-2 text-ink-soft">
        <CalendarClock className="h-4 w-4" strokeWidth={1.6} />
        <span className="text-xs font-medium uppercase tracking-[0.14em]">
          Discovery calls
        </span>
      </div>
      <div className="mt-4 space-y-2.5">
        {[
          { t: "Your story so far", d: "Mon · 2 hrs" },
          { t: "Where you're headed", d: "Thu · 2 hrs" },
        ].map((s) => (
          <div
            key={s.t}
            className="flex items-center justify-between rounded-xl border border-line bg-paper/60 px-3.5 py-3"
          >
            <span className="text-sm font-medium text-ink">{s.t}</span>
            <span className="rounded-full bg-ink px-2.5 py-1 text-xs font-medium text-paper">
              {s.d}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* 02 — A short form: a few sharp questions */
function FormCard() {
  return (
    <Frame>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-ink-soft">
          <ListChecks className="h-4 w-4" strokeWidth={1.6} />
          <span className="text-xs font-medium uppercase tracking-[0.14em]">
            A few questions
          </span>
        </div>
        <span className="text-xs text-ink-faint">3 / 8</span>
      </div>
      <div className="mt-4 space-y-3.5">
        <div>
          <p className="text-sm font-medium text-ink">
            What do you want to be known for?
          </p>
          <div className="mt-2 h-8 rounded-lg border border-line bg-paper/60" />
        </div>
        <div>
          <p className="text-sm font-medium text-ink">
            A topic you could talk about for hours
          </p>
          <div className="mt-2 h-8 rounded-lg border border-line bg-paper/60" />
        </div>
      </div>
      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-line">
        <div className="h-full w-[38%] rounded-full bg-accent" />
      </div>
    </Frame>
  );
}

/* 03 — Finding your voice: tone profile */
function VoiceCard() {
  const tones = ["Direct", "Warm", "A little contrarian"];
  return (
    <Frame>
      <div className="flex items-center gap-2 text-ink-soft">
        <Sparkles className="h-4 w-4" strokeWidth={1.6} />
        <span className="text-xs font-medium uppercase tracking-[0.14em]">
          Your voice
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tones.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line bg-paper/60 px-3 py-1 text-xs font-medium text-ink"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-4 border-l-2 border-accent pl-3 text-base italic leading-relaxed text-ink">
        “Sounds like you on your sharpest day — not a press release.”
      </p>
    </Frame>
  );
}

/* 04 — Writing, then posting: the artefact itself */
function PostCard() {
  return (
    <Frame>
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-ink text-xs font-semibold text-paper">
          MK
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-ink">Maya Kapoor</p>
          <p className="text-xs text-ink-soft">Founder &amp; CEO · 2h</p>
        </div>
      </div>
      <p className="mt-3.5 text-base leading-relaxed text-ink">
        We almost didn&apos;t build the feature that became our whole company.
        Here&apos;s the conversation that changed my mind —
      </p>
      <div className="mt-3.5 flex items-center justify-between border-t border-line pt-3 text-xs font-medium text-ink-soft">
        <span className="flex items-center gap-1.5">
          <ThumbsUp className="h-3.5 w-3.5" strokeWidth={1.6} /> 1,284
        </span>
        <span className="flex items-center gap-1.5">
          <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.6} /> 96
        </span>
      </div>
    </Frame>
  );
}

/* 05 — Iteration: what's resonating */
function IterationCard() {
  const bars = [40, 58, 47, 72, 90];
  return (
    <Frame>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-ink-soft">
          <TrendingUp className="h-4 w-4" strokeWidth={1.6} />
          <span className="text-xs font-medium uppercase tracking-[0.14em]">
            What&apos;s resonating
          </span>
        </div>
        <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-ink">
          +38%
        </span>
      </div>
      <div className="mt-5 flex h-24 items-end gap-2.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 origin-bottom rounded-t-md bg-ink"
            style={{ height: `${h}%` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
    </Frame>
  );
}
