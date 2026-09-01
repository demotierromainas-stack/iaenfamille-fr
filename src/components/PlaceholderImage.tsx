import { cn } from "@/lib/cn";

/**
 * Visuel de remplacement en attendant les photos du client.
 *
 * C'EST LE POINT DE REMPLACEMENT UNIQUE : le jour où les vrais fichiers
 * arrivent, on branche <Image> ici et tout le site en bénéficie. Le `label`
 * décrit la photo attendue — il sert aussi de brief pour le client.
 */

export type Tone =
  | "brand" // bleu / indigo / violet — usage général
  | "warm" // scènes de famille, intérieurs chaleureux
  | "kids" // parcours enfants, multicolore
  | "france" // lavande, pierre, ocre
  | "maurice" // lagon turquoise
  | "dubai" // nuit dorée, skyline
  | "night"; // fond sombre technologique

const tones: Record<Tone, { from: string; via: string; to: string; ink: string }> = {
  brand: { from: "#3b82f6", via: "#6366f1", to: "#a855f7", ink: "#ffffff" },
  warm: { from: "#fcd9b8", via: "#e8b98f", to: "#b98a67", ink: "#3b2a1d" },
  kids: { from: "#fbbf24", via: "#f472b6", to: "#818cf8", ink: "#3b1d4a" },
  france: { from: "#c7b8f0", via: "#8b8fd6", to: "#c99a5b", ink: "#2c2340" },
  maurice: { from: "#5eead4", via: "#22d3ee", to: "#0ea5e9", ink: "#04343f" },
  dubai: { from: "#fcd34d", via: "#f59e0b", to: "#4c1d95", ink: "#2b1a03" },
  night: { from: "#131a3d", via: "#312e81", to: "#0a0e2a", ink: "#e0e7ff" },
};

/** Décale le motif selon le label pour que deux placeholders voisins diffèrent. */
function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 1000;
  return h;
}

export function PlaceholderImage({
  label,
  tone = "brand",
  className,
  showLabel = true,
  children,
}: {
  /** Ce que la photo définitive devra montrer. */
  label: string;
  tone?: Tone;
  className?: string;
  showLabel?: boolean;
  children?: React.ReactNode;
}) {
  const t = tones[tone];
  const h = hash(label);
  const x1 = 15 + (h % 40);
  const y1 = 10 + (h % 30);
  const x2 = 60 + (h % 30);
  const y2 = 55 + (h % 35);

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative isolate overflow-hidden bg-navy-800",
        className,
      )}
      style={{
        backgroundImage: `
          radial-gradient(55% 60% at ${x1}% ${y1}%, ${t.from}, transparent 70%),
          radial-gradient(60% 65% at ${x2}% ${y2}%, ${t.to}, transparent 70%),
          linear-gradient(135deg, ${t.via}, ${t.from} 45%, ${t.to})`,
      }}
    >
      {/* trame fine : donne une texture de photo plutôt qu'un aplat plat */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 7px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10"
      />

      {children}

      {showLabel && (
        <span
          className="pointer-events-none absolute bottom-2 left-2 max-w-[calc(100%-1rem)] truncate rounded-md bg-black/25 px-2 py-1 text-[10px] font-medium tracking-wide text-white/85 backdrop-blur-sm"
          aria-hidden
        >
          {label}
        </span>
      )}
    </div>
  );
}
