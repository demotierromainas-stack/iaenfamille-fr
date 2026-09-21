import { Hero } from "@/components/home/Hero";
import { Offers } from "@/components/home/Offers";
import { Activites } from "@/components/home/Activites";
import { Engagements } from "@/components/home/Engagements";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Offers />
      <Activites />
      <Engagements />
    </>
  );
}
