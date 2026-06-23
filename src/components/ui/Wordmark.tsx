import { cn } from "@/lib/utils";
import Mark from "@/components/ui/Mark";

/** Asterisk mark + wordmark, echoing the zypsy logo lockup. */
export default function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 leading-none", className)}>
      <Mark className={markClassName} />
      <span className="font-semibold tracking-[-0.02em]">The Draftory</span>
    </span>
  );
}
