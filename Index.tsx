import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import About from "@/components/About";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import ProjectHighlights from "@/components/ProjectHighlights";
import InsightsandImpact from "@/components/InsightsandImpact";
import Different from "@/components/Different";
import Slider from "@/components/slider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <About />
        <Services />
        <CTA />
        <Impact />
        <Blog />
        <Slider />
        <ProjectHighlights />
        <Different />
        <InsightsandImpact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
