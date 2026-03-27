import { ArrowRight, Code, Users, Cpu, ChevronRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { motion } from "motion/react";
import { ContactForm } from "@/src/components/ui/ContactForm";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-80"
          style={{ pointerEvents: 'none' }}
        >
          <source src="https://res.cloudinary.com/dz3f5jqja/video/upload/v1774636127/Untitled_design_mafvnr.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-indigo-950/40 to-slate-950/70"></div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] opacity-70 mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/30 blur-[150px] opacity-50 mix-blend-screen" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <a href="#services" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-white">IT Staff Augmentation & AI</span>
                <ChevronRight className="h-4 w-4 text-white/70" />
              </a>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white mb-6"
            >
              AI Development That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Moves Your Business Forward
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl"
            >
              Aciano Technologies offers premium AI development, IT staff augmentation, and custom software solutions designed to scale your enterprise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-full group shadow-lg shadow-primary/25">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 rounded-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 text-white hover:text-white">
                View Our Expertise
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <ContactForm />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
