import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/** Pastille d'icône colorée reprise partout dans les maquettes. */
export function IconBadge({
  icon: Icon,
  tone = "indigo",
  size = "md",
  className,
}: {
  icon: LucideIcon;
  tone?: "indigo" | "violet" | "orange" | "cyan" | "pink" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const tones = {
    indigo: "bg-gradient-to-br from-brand-blue to-brand-indigo text-white",
    violet: "bg-gradient-to-br from-brand-violet to-brand-purple text-white",
    orange: "bg-gradient-to-br from-brand-orange to-brand-pink text-white",
    cyan: "bg-gradient-to-br from-brand-cyan to-brand-blue text-white",
    pink: "bg-gradient-to-br from-brand-pink to-brand-purple text-white",
    light: "bg-brand-indigo/10 text-brand-indigo",
    dark: "border border-white/15 bg-white/10 text-white",
  } as const;

  const sizes = {
    sm: "size-8 rounded-lg [&>svg]:size-4",
    md: "size-11 rounded-xl [&>svg]:size-5",
    lg: "size-14 rounded-2xl [&>svg]:size-6",
  } as const;

  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center",
        tones[tone],
        sizes[size],
        className,
      )}
    >
      <Icon aria-hidden />
    </span>
  );
}
