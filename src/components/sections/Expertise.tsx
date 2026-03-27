import { Code, Users, Cpu, Smartphone, Globe, Search, ShoppingCart, Cloud, Database, LayoutTemplate } from "lucide-react";

export function Expertise() {
  const expertiseList = [
    { name: "AI Development", icon: Cpu, desc: "Intelligent solutions to automate and optimize your business processes.", colSpan: "md:col-span-2 lg:col-span-2", bg: "bg-blue-500/5", color: "text-blue-500" },
    { name: "IT Staff Augmentation", icon: Users, desc: "On-demand tech talent to scale your team quickly and efficiently.", colSpan: "md:col-span-2 lg:col-span-1", bg: "bg-indigo-500/5", color: "text-indigo-500" },
    { name: "IoT Solutions", icon: Cloud, desc: "Connecting devices and systems for smarter data-driven decisions.", colSpan: "md:col-span-1 lg:col-span-1", bg: "bg-emerald-500/5", color: "text-emerald-500" },
    { name: "Mobile App Development", icon: Smartphone, desc: "Native and cross-platform mobile applications for iOS and Android.", colSpan: "md:col-span-2 lg:col-span-2", bg: "bg-purple-500/5", color: "text-purple-500" },
    { name: "Custom App Development", icon: Code, desc: "Tailor-made software solutions designed for your unique requirements.", colSpan: "md:col-span-1 lg:col-span-1", bg: "bg-pink-500/5", color: "text-pink-500" },
    { name: "SEO Services", icon: Search, desc: "Data-driven strategies to improve your search engine rankings and visibility.", colSpan: "md:col-span-2 lg:col-span-1", bg: "bg-orange-500/5", color: "text-orange-500" },
    { name: "WordPress Development", icon: LayoutTemplate, desc: "Custom themes, plugins, and scalable WordPress websites.", colSpan: "md:col-span-1 lg:col-span-1", bg: "bg-sky-500/5", color: "text-sky-500" },
    { name: "eCommerce Solutions", icon: ShoppingCart, desc: "Robust online stores built for high conversion and seamless user experience.", colSpan: "md:col-span-2 lg:col-span-2", bg: "bg-rose-500/5", color: "text-rose-500" },
    { name: "DevOps", icon: Globe, desc: "Streamlining development and operations for faster, reliable deployments.", colSpan: "md:col-span-1 lg:col-span-1", bg: "bg-teal-500/5", color: "text-teal-500" },
    { name: "Microsoft D365", icon: Database, desc: "Expert guidance and implementation for Microsoft Dynamics 365.", colSpan: "md:col-span-2 lg:col-span-2", bg: "bg-cyan-500/5", color: "text-cyan-500" },
  ];

  return (
    <section id="expertise" className="py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Comprehensive IT Services
          </h3>
          <p className="text-xl text-muted-foreground">
            Fueling your business growth and digital transformation with cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {expertiseList.map((item, index) => (
            <div 
              key={index} 
              className={`group relative p-8 rounded-3xl border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${item.bg} ${item.colSpan} overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-150 transform origin-top-right">
                <item.icon className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <div className={`h-14 w-14 rounded-2xl bg-background shadow-sm flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.name}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
