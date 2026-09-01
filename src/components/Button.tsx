import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-light" | "white";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-brand text-white shadow-[0_8px_24px_-8px_rgb(99_102_241/0.7)] hover:shadow-[0_12px_32px_-8px_rgb(99_102_241/0.85)] hover:brightness-110",
  // sur fond sombre
  "outline-light":
    "border border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/50 hover:bg-white/10",
  // sur fond clair
  outline:
    "border border-line bg-white text-ink hover:border-brand-indigo/40 hover:text-brand-indigo",
  white: "bg-white text-ink shadow-card hover:shadow-lift",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = "arrow",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  /** `arrow` glisse au survol, `none` masque l'icône, ou passe ton propre nœud */
  icon?: "arrow" | "none" | React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
      {icon === "arrow" ? (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      ) : icon === "none" ? null : (
        icon
      )}
    </Link>
  );
}
