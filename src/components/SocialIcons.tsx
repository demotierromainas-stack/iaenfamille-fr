/**
 * lucide-react ne fournit plus les logos de marque : on les garde en SVG
 * inline ici plutôt que d'ajouter une dépendance d'icônes supplémentaire.
 */

type Props = { className?: string };

export function FacebookIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6A22 22 0 0 0 14.3 4.5c-2.4 0-4 1.45-4 4.12v2.28H7.6V14h2.7v8z" />
    </svg>
  );
}

export function InstagramIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.9c2.95 0 3.3.01 4.47.06 1.08.05 1.66.23 2.05.38.51.2.88.44 1.27.83s.63.76.83 1.27c.15.39.33.97.38 2.05.05 1.17.06 1.52.06 4.47s-.01 3.3-.06 4.47c-.05 1.08-.23 1.66-.38 2.05-.2.51-.44.88-.83 1.27s-.76.63-1.27.83c-.39.15-.97.33-2.05.38-1.17.05-1.52.06-4.47.06s-3.3-.01-4.47-.06c-1.08-.05-1.66-.23-2.05-.38-.51-.2-.88-.44-1.27-.83s-.63-.76-.83-1.27c-.15-.39-.33-.97-.38-2.05C2.91 15.3 2.9 14.95 2.9 12s.01-3.3.06-4.47c.05-1.08.23-1.66.38-2.05.2-.51.44-.88.83-1.27s.76-.63 1.27-.83c.39-.15.97-.33 2.05-.38C8.7 2.91 9.05 2.9 12 2.9m0 4.75a4.35 4.35 0 1 0 0 8.7 4.35 4.35 0 0 0 0-8.7m0 7.17a2.82 2.82 0 1 1 0-5.64 2.82 2.82 0 0 1 0 5.64m5.54-7.34a1.02 1.02 0 1 1-2.03 0 1.02 1.02 0 0 1 2.03 0" />
    </svg>
  );
}

export function YoutubeIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8M10 15.1V8.9l5.2 3.1z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0M3.3 8.98h3.34V20H3.3zM9.2 8.98h3.2v1.5h.05c.45-.84 1.54-1.73 3.17-1.73 3.39 0 4.02 2.2 4.02 5.07V20h-3.34v-5.5c0-1.31-.03-3-1.85-3-1.85 0-2.14 1.42-2.14 2.9V20H9.2z" />
    </svg>
  );
}
