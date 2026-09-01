import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-2xl font-bold tracking-tight sm:text-[28px]",
          onDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-[15px] leading-relaxed",
            onDark ? "text-white/60" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
