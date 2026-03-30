import { Hero } from "@/src/components/sections/Hero";
import { Services } from "@/src/components/sections/Services";
import { Expertise } from "@/src/components/sections/Expertise";
import { Milestones } from "@/src/components/sections/Milestones";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { CTA } from "@/src/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Expertise />
      <Milestones />
      <Testimonials />
      <CTA />
    </main>
  );
}
