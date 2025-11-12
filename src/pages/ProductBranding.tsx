import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
import digitalMarketingHero from "@/assets/digital-marketing-hero.jpg";

const ProductBranding = () => {
  const leftServices = [
    "Brand Naming & Tagline",
    "Brand Strategy & Competitive Positioning",
    "Brand Story & Messaging Guideline",
    "Logo Design & Visual Identity System",
    "Packaging Design & Retail Presentation",
  ];

  const rightServices = [
    "Digital Branding(Website/Social/E-com)",
    "Marketing Campaign Concept",
    "AD Production - TV, Radio and Print",
    "Product Launch Promotion & Media Integration",
    "Influencer & Celebrity Collaboration Planning",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        title="Product Branding"
        tagline="We don't just name brands - we create legacies"
        description="We specialize in building brands that inspire trust, sparks emotions and drive engagement through innovative product branding
         to give your product a distinctive voice and Identity."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={digitalMarketingHero}
        imageAlt="Digital marketing visualization"
      />

      {/* Insights & Innovations Section */}
      <InsightsInnovations sectionTwoTitle="Insights & Innovations" sectionThreeTitle="Lets make your brand shine brighter"/>

      <Footer />
    </div>
  );
};

export default ProductBranding;
