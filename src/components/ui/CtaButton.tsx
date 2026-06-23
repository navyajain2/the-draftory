"use client";

import { CornerDownRight } from "lucide-react";
import MagneticButton from "@/components/anim/MagneticButton";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  className?: string;
  size?: "md" | "xl";
  tone?: "ink" | "paper";
};

export default function CtaButton({
  href,
  label,
  className,
  size = "md",
  tone = "ink",
}: Props) {
  return (
    <MagneticButton>
      <a
        href={href}
        className={cn(
          "rule-link group cursor-pointer font-medium tracking-[-0.01em]",
          size === "xl"
            ? "text-[clamp(1.75rem,4vw,3rem)]"
            : "text-lg",
          tone === "paper" ? "text-paper" : "text-ink",
          className,
        )}
      >
        <CornerDownRight
          className={cn(
            "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5",
            size === "xl" ? "h-[1em] w-[1em]" : "h-[1.1em] w-[1.1em]",
          )}
          strokeWidth={1.5}
        />
        {label}
      </a>
    </MagneticButton>
  );
}
