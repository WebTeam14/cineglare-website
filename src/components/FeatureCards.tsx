import { Users, Star, MapPin } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Amiable Team",
    description: "We are a team of creative thinkers, strategists, and innovators — delivering impactful and unforgettable experiences.",
  },
  {
    icon: Star,
    title: "Indelible Experience",
    description: "We turn brand purpose into powerful stories — and experiences that engage, delight, and keep audiences loyal.",
  },
  {
    icon: MapPin,
    title: "Premier Venue",
    description: "Handpicked venues aligned to your brand — crafted into immersive, sensory engagement and unforgettable spaces.",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
