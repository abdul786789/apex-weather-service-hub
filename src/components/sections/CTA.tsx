import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function CTA() {
  return (
    <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-widest text-primary-foreground/80 uppercase mb-4">Ready to Start?</h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            Fuel Your Business <br />with Our IT Services
          </h3>
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Let's discuss your project requirements and how Aciano Technologies can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base h-14 px-8 text-primary font-bold rounded-full shadow-xl shadow-black/10 hover:scale-105 transition-transform">
              Get InTouch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground rounded-full backdrop-blur-sm">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
