import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import Home from "@/src/pages/Home";
import Projects from "@/src/pages/Projects";
import { WhatsAppButton } from "@/src/components/ui/whatsapp-button";
import { Chatbot } from "@/src/components/ui/Chatbot";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}
