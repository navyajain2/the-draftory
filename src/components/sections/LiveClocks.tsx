"use client";

import { useEffect, useState } from "react";
import { hero } from "@/lib/content";

function timeIn(tz: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: tz,
  }).format(new Date());
}

export default function LiveClocks() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000 * 15);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm font-medium tabular-nums">
      {hero.clocks.map((c) => (
        <span key={c.label} className="flex items-baseline gap-2">
          <span>{timeIn(c.tz)}</span>
          <span className="opacity-55">{c.label}</span>
        </span>
      ))}
    </div>
  );
}
