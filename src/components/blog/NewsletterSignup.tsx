"use client";

import { useState } from "react";
import { CornerDownRight, Check } from "lucide-react";
import { blog } from "@/lib/content";

/**
 * Compact dark newsletter form — underline email input + inline submit,
 * matching zypsy's sidebar subscribe block. Front-end only: on submit it
 * swaps to a success line. Wire `onSubmit` to a real list when ready.
 */
export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const { subscribe } = blog;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: POST to newsletter provider
    setDone(true);
  }

  if (done) {
    return (
      <p className="flex items-center gap-2 text-base text-paper/80">
        <Check className="h-4 w-4 text-accent" strokeWidth={2} />
        {subscribe.success}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 border-b border-line-inv pb-2.5"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={subscribe.placeholder}
        aria-label="Your email"
        className="min-w-0 flex-1 bg-transparent text-base text-paper placeholder:text-paper/35 focus:outline-none"
      />
      <button
        type="submit"
        className="group flex shrink-0 cursor-pointer items-center gap-2 text-base text-paper transition-colors hover:text-accent"
      >
        <CornerDownRight
          className="h-[1.1em] w-[1.1em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
          strokeWidth={1.5}
        />
        {subscribe.button}
      </button>
    </form>
  );
}
