import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { site, LOGO_MODE } from "@/lib/site";

/**
 * Deux rendus possibles, pilotés par LOGO_MODE dans src/lib/site.ts :
 *
 * - "image"  : le médaillon fourni par le client. Fidèle, mais c'est un dessin
 *              au trait fin qui perd sa lisibilité en dessous de ~96 px.
 * - "vector" : sigle « IA » redessiné + « en famille » en texte. Net à toute
 *              taille et cohérent avec les maquettes du site.
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

  if (LOGO_MODE === "image") {
    return (
      <Link
        href="/"
        aria-label={`${site.name} — accueil`}
        className={cn("group inline-flex items-center gap-2.5", className)}
      >
        <Image
          src="/images/brand/logo.png"
          alt=""
          width={46}
          height={46}
          priority
          className="size-11 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-105"
        />
        <span className="sr-only">{site.name}</span>
      </Link>
    );
  }

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
