import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.jpg";

const highlights = [
  "Star Influence",
  "Global Reach",
  "Creative Strategy",
  "Cinematic Production",
  "Impactful Promotions",
  "Flawless Execution",
  "Custom Solutions",
  "Innovation First",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={aboutImage}
                alt="Cineglare team celebrating"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              About Cineglare
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Crafting vision into realitty
            </h2>
            <p className="text-md text-muted-foreground mb-6 leading-relaxed">
              Cineglare is a creative powerhouse driving brands into the
              spotlight through star influence, cinematic storytelling, and
              unforgettable experiential events. With global reach and
              industry-leading expertise, we turn brand visions into iconic
              moments. Where creativity meets execution — excellence takes
              center stage.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="mt-8">
                <Button variant="default" size="lg">
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="bg-card border border-border bg-white p-6 inline-block">
                <div className="text-center">
                  <p className="text-5xl font-bold text-primary text-black mb-2">
                    17+
                  </p>
                  <p className="text-muted-foreground text-black">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
