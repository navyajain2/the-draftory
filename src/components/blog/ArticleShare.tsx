"use client";

import { useState } from "react";
import { Twitter, Linkedin, Link2, Check } from "lucide-react";
import { blog } from "@/lib/content";

/**
 * "Share this article" row with circular icon buttons — X/Twitter, LinkedIn,
 * and copy-link. Mirrors zypsy's end-of-article share block.
 */
export default function ArticleShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== "undefined" ? window.location.href : "";

  const open = (href: string) =>
    window.open(href, "_blank", "noopener,noreferrer,width=600,height=540");

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const circle =
    "grid h-11 w-11 place-items-center rounded-full border border-line-inv text-paper/70 transition-colors duration-300 hover:border-paper hover:text-paper cursor-pointer";

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line-inv pt-8">
      <p className="text-lg text-paper">{blog.shareLabel} this article</p>

      <div className="flex items-center gap-3">
        <button
          aria-label="Share on X"
          onClick={() =>
            open(
              `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                title,
              )}&url=${encodeURIComponent(url)}`,
            )
          }
          className={circle}
        >
          <Twitter className="h-4 w-4" strokeWidth={1.6} />
        </button>

        <button
          aria-label="Share on LinkedIn"
          onClick={() =>
            open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                url,
              )}`,
            )
          }
          className={circle}
        >
          <Linkedin className="h-4 w-4" strokeWidth={1.6} />
        </button>

        <button
          aria-label="Copy link"
          onClick={onCopy}
          className={circle}
        >
          {copied ? (
            <Check className="h-4 w-4 text-accent" strokeWidth={2} />
          ) : (
            <Link2 className="h-4 w-4" strokeWidth={1.6} />
          )}
        </button>
      </div>
    </div>
  );
}
