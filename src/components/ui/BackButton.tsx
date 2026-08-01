"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="rule-link cursor-pointer text-lg tracking-[-0.01em] text-white"
    >
      Back
    </button>
  );
}
