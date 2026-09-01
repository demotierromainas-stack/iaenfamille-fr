import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

/**
 * Reprend le sigle « IA » en médaillon des maquettes, puis « en famille ».
 * Version vectorielle : reste nette et s'adapte au fond clair ou sombre.
 */
export function Logo({
  variant = "light",
  className,
}: {
  /** `light` = posé sur fond sombre, `dark` = posé sur fond clair */
  variant?: "light" | "dark";
  className?: string;
}) {
  const onDark = variant === "light";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — accueil`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 shrink-0 place-items-center">
        <span
          aria-hidden
          className="absolute inset-0 rounded-[11px] bg-gradient-to-br from-brand-cyan via-brand-indigo to-brand-purple opacity-90 transition-transform duration-300 group-hover:scale-105"
        />
        <span
          aria-hidden
          className="absolute inset-[1.5px] rounded-[9.5px] bg-navy-950"
        />
        <span className="relative text-[13px] font-extrabold tracking-tight text-white">
          IA
        </span>
      </span>
      <span
        className={cn(
          "font-display text-[19px] font-bold tracking-tight",
          onDark ? "text-white" : "text-ink",
        )}
      >
        en famille
      </span>
    </Link>
  );
}
