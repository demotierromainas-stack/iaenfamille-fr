import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { IMAGE_PARTAGE, MODELE_TITRE } from "@/lib/metadonnees";
import { indexingAllowed } from "./robots";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

// Valeurs de repli, pour les pages qui ne passent pas par metadonnees()
// (la 404). Aucune URL ni titre de page ici : hérités tels quels, ils
// donnaient à chaque page l'aperçu de partage de l'accueil.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: MODELE_TITRE,
  },
  description: site.description,
  robots: indexingAllowed ? undefined : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    images: [IMAGE_PARTAGE],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-lift"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
