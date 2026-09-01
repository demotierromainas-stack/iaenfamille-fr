import Image from "next/image";
import { PlaceholderImage, type Tone } from "@/components/PlaceholderImage";
import { cn } from "@/lib/cn";

/**
 * Affiche un visuel réel quand on en a un, sinon retombe sur le placeholder
 * dégradé. C'est le seul point d'entrée des images du site : les visuels
 * actuels sont découpés dans les maquettes du client (basse définition), il
 * suffira de déposer les fichiers HD au même chemin pour les remplacer.
 */
export function Media({
  src,
  label,
  tone = "brand",
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  position = "center",
  children,
}: {
  src?: string;
  /** Texte alternatif — décrit aussi la photo attendue si le visuel manque. */
  label: string;
  tone?: Tone;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Point d'ancrage du recadrage (`object-position`). */
  position?: "center" | "top" | "bottom" | "left" | "right";
  children?: React.ReactNode;
}) {
  if (!src) {
    return (
      <PlaceholderImage label={label} tone={tone} className={className}>
        {children}
      </PlaceholderImage>
    );
  }

  const objectPosition = {
    center: "object-center",
    top: "object-top",
    bottom: "object-bottom",
    left: "object-left",
    right: "object-right",
  }[position];

  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <Image
        src={src}
        alt={label}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", objectPosition, imgClassName)}
      />
      {children}
    </div>
  );
}
