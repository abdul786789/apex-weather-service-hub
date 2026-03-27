/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { Hero } from "@/src/components/sections/Hero";
import { Services } from "@/src/components/sections/Services";
import { Expertise } from "@/src/components/sections/Expertise";
import { Milestones } from "@/src/components/sections/Milestones";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { CTA } from "@/src/components/sections/CTA";
import { WhatsAppButton } from "@/src/components/ui/whatsapp-button";
import { Chatbot } from "@/src/components/ui/Chatbot";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <Milestones />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}
