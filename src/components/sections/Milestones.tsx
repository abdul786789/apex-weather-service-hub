import { motion } from "motion/react";

export function Milestones() {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "150+", label: "Expert Developers" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Track Record</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Achieving New Milestones Consistently
          </h3>
          <p className="text-xl text-background/70">
            We deliver excellence in every project, backed by data and proven results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="text-center relative"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-background to-background/50 mb-4">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-background/80 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
