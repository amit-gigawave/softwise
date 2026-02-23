import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { ValueProps } from "@/components/ValueProps";
import { HowWeBuild } from "@/components/HowWeBuild";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <Integrations />
      <ValueProps />
      <HowWeBuild />
      <Contact />
    </main>
  );
}
