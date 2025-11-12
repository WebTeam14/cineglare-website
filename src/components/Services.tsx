import { Package, Users2, Globe, Film, TrendingUp, Calendar } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Product Branding",
    description: "We craft experiences that turn first glances into lifelong loyalty — and elevate your brand globally.",
  },
  {
    icon: Users2,
    title: "Celebrity Management",
    description: "We bring stars who embody your brand's essence — turning every appearance into powerful influence.",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "We turn digital presence into global influence — and measurable business growth.",
  },
  {
    icon: Film,
    title: "Film & AD Production",
    description: "Where creativity meets cinematic excellence. From concept to screen — we deliver stories that inspire global audiences.",
  },
  {
    icon: TrendingUp,
    title: "Film Promotion",
    description: "From teasers to trending — your film gets the spotlight. Strategy + stardom + global reach.",
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "We curate unforgettable events with world-class execution. From concept to curtain call — every moment shines.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service we deliver
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We elevate brands with star-powered influence, unforgettable experiences, and cinematic storytelling — delivering strategic, flawless execution that transforms brands into icons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all group hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
