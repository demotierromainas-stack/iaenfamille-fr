import { Hero } from "@/components/home/Hero";
import { Offers } from "@/components/home/Offers";
import { Activites } from "@/components/home/Activites";
import { Engagements } from "@/components/home/Engagements";
import { DonneesStructurees } from "@/components/DonneesStructurees";
import { metadonneesDe } from "@/lib/metadonnees";
import { organisation } from "@/lib/donnees-structurees";

export const metadata = metadonneesDe("/");

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
