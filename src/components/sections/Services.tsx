import { CheckCircle2, Cpu, Users, Code, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function Services() {
  const services = [
    {
      title: "AI Development",
      plan: "AI Solutions",
      description: "Intelligent solutions to automate and optimize your business processes.",
      icon: Cpu,
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots",
      ],
      color: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
      border: "hover:border-blue-500/50",
      popular: true,
    },
    {
      title: "IT Staff Augmentation",
      plan: "Team Scaling",
      description: "On-demand tech talent, when you need it.",
      icon: Users,
      features: [
        "Dedicated Developers",
        "Flexible Engagement Models",
        "Pre-vetted Professionals",
        "Seamless Integration",
        "Cost-effective Scaling",
      ],
      color: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400",
      border: "hover:border-indigo-500/50",
    },
    {
      title: "Custom Software",
      plan: "Development",
      description: "Your vision, our code. Tailor-made software solutions.",
      icon: Code,
      features: [
        "Web Applications",
        "Mobile Applications",
        "Enterprise Software",
        "API Development",
        "Cloud Architecture",
      ],
      color: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
      border: "hover:border-purple-500/50",
    },
  ];

  return (
    <section id="services" className="py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Core Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            We Create Meaningful Experiences
          </h3>
          <p className="text-xl text-muted-foreground">
            From AI development to IT staff augmentation, we provide comprehensive solutions to drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-card border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 ${service.border}`}
            >
              {service.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-primary/30">
                  Core Focus
                </div>
              )}
              
              <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-8 ${service.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <service.icon className="h-8 w-8" />
              </div>
              
              <div className="mb-8">
                <div className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  {service.plan}
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="h-px w-full bg-border/50 mb-8"></div>

              <ul className="space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${service.color.split(' ')[1]}`} />
                    <span className="text-foreground/80 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={service.popular ? "default" : "outline"}
                className={`w-full h-12 rounded-xl group/btn ${service.popular ? 'shadow-lg shadow-primary/25' : ''}`}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
