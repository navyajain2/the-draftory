import { cn } from "@/lib/utils";

/** The Draftory asterisk mark — squared arms with a detached bottom-right.
 *  Sized in `em`, so set font-size (e.g. `text-[88px]`) on a parent to scale. */
export default function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-[1.05em] w-[1.05em]", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2.2V21.8M2.2 12H21.8M20 4L4 20M4 4L12 12M15.4 15.4L20 20"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="butt"
      />
    </svg>
  );
}
