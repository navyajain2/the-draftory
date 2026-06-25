"use client";

import { useState } from "react";
import { contactForm as f } from "@/lib/content";
import AnimatedHeading from "@/components/anim/AnimatedHeading";
import Reveal from "@/components/anim/Reveal";
import { cn } from "@/lib/utils";

/* ---- floating-label fields (zypsy style) -------------------------------- */
const reqCls = "text-accent";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-[2rem] font-[350] tracking-[-0.01em] text-white">
      {children}
    </h2>
  );
}

function FloatingLabel({
  htmlFor,
  label,
  required,
}: {
  htmlFor: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor}>
      {label}
      {required && <span className={reqCls}> *</span>}
    </label>
  );
}

/* tracks focus + filled state to toggle the floated label */
function useFloat() {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  return {
    floated: focused || filled,
    handlers: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => setFilled(e.target.value.trim().length > 0),
    },
  };
}

function FloatingInput({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  const { floated, handlers } = useFloat();
  return (
    <div className={cn("field", floated && "is-floated")}>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={
          name === "email" ? "email" : name === "fullName" ? "name" : "off"
        }
        {...handlers}
      />
      <FloatingLabel htmlFor={name} label={label} required={required} />
    </div>
  );
}

function FloatingTextarea({ name, label }: { name: string; label: string }) {
  const { floated, handlers } = useFloat();
  return (
    <div className={cn("field", floated && "is-floated")}>
      <textarea id={name} name={name} rows={4} {...handlers} />
      <FloatingLabel htmlFor={name} label={label} />
    </div>
  );
}

/* select — label sits as placeholder on the line (zypsy style), floats via state */
function Select({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  placeholder?: string;
  options: string[];
}) {
  const [chosen, setChosen] = useState(false);
  return (
    <div className="relative">
      <select
        name={name}
        defaultValue=""
        onChange={() => setChosen(true)}
        className="w-full cursor-pointer appearance-none border-0 border-b border-white/15 bg-transparent pb-3 pt-7 text-lg text-white outline-none transition-colors duration-300 focus:border-accent"
      >
        <option value="" disabled className="bg-black text-white/40" />
        {options.map((o) => (
          <option key={o} value={o} className="bg-black text-white">
            {o}
          </option>
        ))}
      </select>
      {/* floating label — same motion as text field labels */}
      <span
        className="pointer-events-none absolute left-0 transition-all duration-200 ease-in-out"
        style={
          chosen
            ? { top: 0, fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }
            : { top: "1.75rem", fontSize: "1.125rem", color: "rgba(255,255,255,0.4)" }
        }
      >
        {label}
      </span>
      {/* chevron */}
      <span className="pointer-events-none absolute bottom-3 right-0 text-white/40">
        ↓
      </span>
    </div>
  );
}

/* radio group rendered as selectable pills */
function PillGroup({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <fieldset className="flex flex-col gap-2">
      <span className="ui-text text-white/55">{label}</span>
      <div className="mt-1 flex flex-wrap gap-2.5">
        {options.map((o) => {
          const on = active === o;
          return (
            <label
              key={o}
              style={{ borderColor: on ? "var(--color-accent)" : "rgba(255,255,255,0.3)" }}
              className={cn(
                "ui-text cursor-pointer select-none rounded-full border px-5 py-2.5 transition-colors duration-300",
                on ? "bg-accent text-ink" : "text-white/70 hover:text-white",
              )}
            >
              <input
                type="radio"
                name={name}
                value={o}
                className="sr-only"
                onChange={() => setActive(o)}
              />
              {o}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a real endpoint (Formspree / Resend / /api/contact).
    setSent(true);
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
      {/* left: heading */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow mb-6 text-white/45">{f.eyebrow}</p>
        <AnimatedHeading text={f.title} className="display display-lg text-white" />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/55">
            {f.body}
          </p>
        </Reveal>
      </div>

      {/* right: the form (or success state) */}
      <Reveal delay={0.1}>
        {sent ? (
          <div className="flex min-h-[20rem] flex-col justify-center border-t border-white/15 pt-12">
            <h2 className="display display-md text-white">{f.success.title}</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/55">
              {f.success.body}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">

            {/* ── Your info ─────────────────────────────────────────── */}
            <SectionHeading>Your info</SectionHeading>
            {f.fields.slice(0, 4).map((field) => (
              <FloatingInput
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                required={field.required}
              />
            ))}

            {/* ── Company info ───────────────────────────────────────── */}
            <SectionHeading>Company info</SectionHeading>
            {f.fields.slice(4).map((field) => (
              <FloatingInput
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                required={field.required}
              />
            ))}
            <Select {...f.category} />
            <FloatingTextarea
              name={f.productDescription.name}
              label={f.productDescription.label}
            />
            <PillGroup {...f.companySize} />
            <PillGroup {...f.workType} />

            {/* ── Project info ───────────────────────────────────────── */}
            <SectionHeading>Project info</SectionHeading>
            <FloatingTextarea name={f.needs.name} label={f.needs.label} />

            {/* ── Additional info ────────────────────────────────────── */}
            <SectionHeading>Additional info</SectionHeading>
            <Select {...f.hearAbout} />
            <Select {...f.region} />
            <FloatingTextarea name={f.referral.name} label={f.referral.label} />

            {/* consent + newsletter */}
            <div className="mt-2 flex flex-col gap-4">
              <label className="flex cursor-pointer items-start gap-3 text-white/70">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
                />
                <span className="text-base leading-snug">
                  {f.consent} <span className={reqCls}>*</span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 text-white/70">
                <input
                  type="checkbox"
                  name="newsletter"
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
                />
                <span className="text-base leading-snug">{f.newsletter}</span>
              </label>
            </div>

            <button
              type="submit"
              className="group mt-4 inline-flex w-fit items-center gap-3 bg-accent px-9 py-4 text-lg font-medium tracking-[-0.01em] text-ink transition-colors duration-300 hover:bg-accent-deep"
            >
              {f.submit}
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                →
              </span>
            </button>
          </form>
        )}
      </Reveal>
    </div>
  );
}
