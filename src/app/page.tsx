import { Hero } from "@/components/home/Hero";
import { Offers } from "@/components/home/Offers";
import { Activites } from "@/components/home/Activites";
import { Engagements } from "@/components/home/Engagements";
import { DonneesStructurees } from "@/components/DonneesStructurees";
import { metadonnees } from "@/lib/metadonnees";
import { organisation } from "@/lib/donnees-structurees";
import { site } from "@/lib/site";

// Titre complet, sans le patron : la marque y est déjà, en tête.
export const metadata = metadonnees({
  titre: `${site.name} — Formations à l'IA pour parents et enfants`,
  titreAbsolu: true,
  description: site.description,
  chemin: "/",
});

export default function HomePage() {
  return (
    <>
      <DonneesStructurees donnees={organisation()} />
      <Hero />
      <Offers />
      <Activites />
      <Engagements />
    </>
  );
}
