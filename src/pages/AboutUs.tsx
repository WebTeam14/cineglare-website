import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpeg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="overflow-hidden">
        {/* ---------------------- HERO SECTION ---------------------- */}
        <section className="relative flex items-center h-[60vh] md:h-[70vh]">
          <img
            src={aboutHero}
            alt="Professional team member"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />

          <div className="relative z-10 container mx-auto px-6 md:px-12">
            <h1 className="text-3xl md:text-6xl font-extrabold text-primary drop-shadow-lg">
              About <span className="text-from-[#3b0000]-600">Cineglare</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Where creativity meets strategy — transforming brands into unforgettable experiences.
            </p>
          </div>
        </section>

        {/* ---------------------- COMPANY OVERVIEW ---------------------- */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center md:text-left">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-primary">Cineglare</span> is an ISO 9001:2015 certified company, committed to delivering excellence through a robust
                Quality Management System. It is a proud subsidiary of{" "}
                <span className="font-semibold">Shibol Global Group</span> — a diversified conglomerate with operations across Asia, Africa, and Europe, active in over 73 countries.
              </p>
              <p>
                As a dynamic brands and entertainment company, Cineglare specializes in advertising, film production, event management, and brand promotion. We bring creative excellence powered by global expertise, backed by the robust foundation and presence of the Shibol Global Group.
              </p>
              <p>
                With a passionate team of creative strategists, marketers, and event curators, Cineglare turns creativity into impactful experiences. From logo design and tagline creation to full-scale product launches — we ensure your brand shines across every platform, screen, and stage.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------- VISION & MISSION ---------------------- */}
        <section className="py-20 bg-secondary/40">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-foreground border-l-4 border-primary pl-4">
                Vision
              </h2>
              <div className="bg-primary/90 p-8 rounded-xl shadow-lg">
                <p className="text-primary-foreground text-lg leading-relaxed text-center md:text-left">
                  “Make every brand a phenomenon and every event a masterpiece.”
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-foreground border-l-4 border-primary pl-4">
                Mission
              </h2>
              <div className="bg-primary/90 p-8 rounded-xl shadow-lg">
                <p className="text-primary-foreground text-lg leading-relaxed text-center md:text-left">
                  “Crafting inspiring brand experiences that celebrate excellence.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------- TEAM SECTION ---------------------- */}
        {/* ---------------------- VISIONARIES AT WORK (CLASSIC STYLE) ---------------------- */}
<section className="py-24 bg-black text-gray-300">
  <div className="container mx-auto px-6 md:px-12 max-w-6xl">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 tracking-wider">
        Visionaries at Work
      </h2>
      <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
        At the helm of Cineglare stands a visionary leadership team that merges creativity,
        innovation, and strategy. Their relentless passion drives Cineglare’s mission
        to redefine brand and entertainment experiences across the globe.
      </p>
    </div>

    {/* Leadership Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
  {/* Founder & MD */}
  <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-[#3b0000] via-[#1a0000] to-black border border-[#5c0000]/50 p-8 rounded-2xl shadow-lg hover:shadow-red-900/40 hover:border-red-800/70 transition-all duration-500">
    <div className="text-center md:text-left">
      <h3 className="text-2xl font-semibold text-[#ffffff]">Ram Vijay Singh</h3>
      <p className="text-gray-300 text-sm font-medium">Founder & Managing Director</p>
      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        With visionary leadership and creative foresight, he has built Cineglare into
        a powerhouse of innovation, crafting stories that resonate globally.
      </p>
    </div>
  </div>

  {/* Operations Director */}
  <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-[#3b0000] via-[#1a0000] to-black border border-[#5c0000]/50 p-8 rounded-2xl shadow-lg hover:shadow-red-900/40 hover:border-red-800/70 transition-all duration-500">
    <div className="text-center md:text-left">
      <h3 className="text-xl font-semibold text-[#ffffff]">Manish Kumar Singh</h3>
      <p className="text-gray-300 text-sm font-medium">Operations Director</p>
      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        The backbone of execution excellence at Cineglare, ensuring every project is
        delivered with precision, professionalism, and passion.
      </p>
    </div>
  </div>
</div>


    {/* Department Overview */}
    <div className="text-center mb-12">
  <h3 className="text-3xl font-bold text-[#830202] mb-4">Core Divisions</h3>
  <p className="text-gray-300 max-w-3xl mx-auto text-base leading-relaxed">
    Cineglare’s structure unites creativity and operations through specialized departments
    that uphold our commitment to excellence and innovation.
  </p>
</div>

{/* Departments Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    {
      title: "Brand & Marketing",
      items: [
        "Brand Strategy & Copywriting",
        "Digital Marketing & Media Relations",
        "Creative Campaign Management",
      ],
    },
    {
      title: "Corporate & Global Affairs",
      items: [
        "International Business Partnerships",
        "Corporate Communications",
        "Global HR & Legal Operations",
      ],
    },
    {
      title: "AD Film Production",
      items: [
        "Line Production & Art Direction",
        "Talent & Styling",
        "Creative & Client Support",
      ],
    },
    {
      title: "Events & Entertainment",
      items: [
        "Event Direction & Client Relations",
        "Celebrity Management",
        "Entertainment Coordination",
      ],
    },
  ].map((dept, i) => (
    <div
      key={i}
      className="bg-gradient-to-br from-[#3b0000] via-[#1a0000] to-black border border-[#5c0000]/50 p-6 rounded-2xl shadow-lg hover:shadow-red-900/40 hover:border-red-800/70 transition-all duration-500"
    >
      <h4 className="text-xl font-semibold text-[#ff4d4d] mb-4 border-b border-[#5c0000]/60 pb-2">
        {dept.title}
      </h4>
      <ul className="space-y-2 text-sm text-gray-300">
        {dept.items.map((item, j) => (
          <li key={j} className="flex items-start">
            <span className="w-1.5 h-1.5 bg-[#ff4d4d] rounded-full mr-2 mt-1" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

  </div>
</section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
