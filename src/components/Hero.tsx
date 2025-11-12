import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center py-32">
        <p className="text-primary text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
          Crafting vision into reality
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Experience Events<br />Like Never Before.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          We are a team of creative thinkers, strategists, and innovators — delivering impactful and unforgettable experiences.
        </p>
        <Button variant="default" size="lg" className="px-8">
          Our Services
        </Button>
      </div>
    </section>
  );
};

export default Hero;
