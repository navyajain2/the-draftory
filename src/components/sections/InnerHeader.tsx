"use client";

import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import { cn } from "@/lib/utils";

type Props = {
  /** "ink" for light/cream pages, "paper" for dark pages. */
  tone?: "ink" | "paper";
  /** Right-side link — defaults to Contact. */
  action?: { label: string; href: string };
};

/**
 * Minimal fixed header for inner pages (blog, article).
 * Wordmark returns home; a single link sits on the right.
 * Mirrors the contact page's stripped-back masthead.
 */
export default function InnerHeader({
  tone = "ink",
  action = { label: "Contact", href: "/contact" },
}: Props) {
  const fg = tone === "paper" ? "text-paper" : "text-ink";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell flex items-center justify-between py-5 md:py-6">
        <Link
          href="/"
          className={cn("text-[1.875rem] transition-colors", fg)}
        >
          <Wordmark />
        </Link>
        <Link
          href={action.href}
          className={cn(
            "rule-link cursor-pointer text-lg tracking-[-0.01em] transition-colors hover:text-accent",
            fg,
          )}
        >
          {action.label}
        </Link>
      </div>
    </header>
  );
}
