import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Farhan Sajid",
      role: "Client",
      content: "Aciano Technologies provided exceptional IT staff augmentation. Their developers seamlessly integrated with our team and delivered high-quality code.",
      rating: 5,
    },
    {
      name: "Fatima Ali",
      role: "Client",
      content: "The AI development solutions they built for us completely transformed our operations. Highly recommend their expertise.",
      rating: 5,
    },
    {
      name: "Jacob Reyes",
      role: "Client",
      content: "Their custom software development team took our vision and turned it into a robust, scalable application. Fantastic communication throughout.",
      rating: 5,
    },
    {
      name: "Ira Craig (Urban)",
      role: "Client",
      content: "We needed reliable SEO services and WordPress development. Aciano delivered on both fronts, significantly improving our online presence.",
      rating: 5,
    },
    {
      name: "Imran Salahuddin",
      role: "Client",
      content: "The IoT solutions provided by Aciano helped us connect our devices efficiently. Their technical knowledge is top-notch.",
      rating: 5,
    },
    {
      name: "Muzammil Ahmad",
      role: "Client",
      content: "Great experience working with them on our eCommerce platform. They are professional, responsive, and deliver great results.",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Client Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our IT Services Through the Lens of Our Clients
          </h3>
          <p className="text-xl text-muted-foreground">
            See what our clients have to say about our IT staff augmentation and AI development services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <Quote className="absolute top-8 right-8 h-10 w-10 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
