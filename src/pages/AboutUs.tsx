import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/AboutHero.png";
import teamworkStructure from "@/assets/teamwork.jpg";
import { Monitor, Lightbulb, Globe } from "lucide-react";
import csrCommunity from "@/assets/communitygrowth.jpg";
import csrPeople from "@/assets/growth.jfif";
import csrGreen from "@/assets/growth1.jfif";
import csrWomen from "@/assets/women.jfif";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="overflow-hidden">
        {/* ---------------------- HERO SECTION ---------------------- */}
        <section className="relative flex items-center h-[70vh] md:h-[90vh] overflow-hidden">
          <img
            src={aboutHero}
            alt="Professional team member"
            className="absolute inset-0 w-full h-50 object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />

          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right max-w-[90%] md:max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#fff4f4]">
              About <span className="text-white">Cineglare</span>
            </h1>
          </div>
        </section>

        {/* ---------------------- COMPANY OVERVIEW ---------------------- */}
        <section className="py-10 bg-background">
          <div className="w-full px-6 md:px-20 text-gray-200 text-base md:text-lg leading-relaxed space-y-6">
            <p>
              <span className="font-semibold text-[#800000]">Cineglare</span> is an ISO 9001:2015 certified company,
              committed to delivering excellence through a robust Quality Management System. It is a proud subsidiary of
              Shield Global Group — a diversified conglomerate with a strong presence across Asia, Africa, and Europe,
              operating actively in over 23 countries.
            </p>
            <p>
              As a dynamic brand and entertainment company, Cineglare specializes in advertising, film production,
              event management, and brand management & promotions — delivering creative excellence powered by global
              expertise and backed by Shield Global Group’s international foundation.
            </p>
            <p>
              With a passionate team of creative strategists, marketers, and event curators, Cineglare turns creativity
              into impactful experiences. From logo design and tagline creation to full-scale product launches, we ensure
              your brand stands out with innovative storytelling and flawless execution.
            </p>
          </div>
        </section>

        {/* ---------------------- VISION & MISSION ---------------------- */}
        <section className="py-1 md:py-20 bg-black">
          <div className="container mx-auto px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
              <div className="flex flex-col space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-[#800000] pl-4">
                  Vision
                </h2>
                <div className="bg-[#8512129c] flex-grow p-6 sm:p-8 rounded-xl shadow-md">
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    “Make every brand a phenomenon and every event a masterpiece.”
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-[#800000] pl-4">
                  Mission
                </h2>
                <div className="bg-[#8512129c] flex-grow p-6 sm:p-8 rounded-xl shadow-md">
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    “Crafting inspiring brand experiences that celebrate excellence.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------- VISIONARIES TREE ---------------------- */}
        <section className="py-16 md:py-20 bg-black text-gray-200 relative">
          <div className="container mx-auto px-6 md:px-20">
            <div className="mb-12 text-left">
              <h2 className="text-4xl font-bold text-white mb-4">Visionaries at Work</h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-5xl">
                At the heart of CineGlare is a passionate team of innovators, creators, and strategists who bring ideas
                to life. With expertise spanning advertising, film production, event management, and brand promotions,
                our team blends creative flair with strategic insight to deliver extraordinary experiences.
              </p>
            </div>

            <div className="relative flex flex-col items-center">
              <div className=" -translate-x-1/2 w-1 bg-[#800000] h-full md:h-[calc(100%-2rem)] z-0" />

              {/* Founder */}
              <div className="relative z-10 bg-gradient-to-br from-[#3b0000] via-[#1a0000] to-black border border-[#800000]/60 p-8 rounded-2xl shadow-xl mb-8 w-full md:w-2/3 text-center">
                <h3 className="text-2xl font-semibold text-white">Ram Vijay Singh</h3>
                <p className="text-gray-300 font-medium">Founder & Managing Director</p>
                <p className="mt-3 text-gray-400 text-base">
                  With visionary leadership and creative foresight, he has built Cineglare into a powerhouse of
                  innovation, crafting stories that resonate globally.
                </p>
              </div>

              {/* Arrow */}
              <div className="my-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffffff" viewBox="0 0 24 24">
                  <path d="M12 21L3 9h6V3h6v6h6z" />
                </svg>
              </div>

              {/* Operations Director */}
              <div className="relative z-10 bg-gradient-to-br from-[#3b0000] via-[#1a0000] to-black border border-[#800000]/60 p-8 rounded-2xl shadow-xl w-full md:w-2/3 text-center">
                <h3 className="text-2xl font-semibold text-white">Manish Kumar Singh</h3>
                <p className="text-gray-300 font-medium">Operations Director</p>
                <p className="mt-3 text-gray-400 text-base">
                  The backbone of execution excellence at Cineglare, ensuring every project is delivered with precision
                  and passion.
                </p>
              </div>
            </div>

            {/* ---------------------- CORE DIVISIONS ---------------------- */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Brand & Marketing",
                  items: [
                    "Brand Strategist",
                    "Copywriter",
                    "Digital Marketing Specialist",
                    "Media Relations Team",
                  ],
                  subSection: {
                    title: "Brand Product Designing (Strategic & Collaborative Partners)",
                    items: [
                      "Product/Model Designer",
                      "Graphic & Visual Designer",
                      "3D & Motion Graphic Artist",
                      "AI/Design Technology Specialist",
                      "UX Researcher/Design Strategist",
                    ],
                  },
                },
                {
                  title: "Corporate & Global Affairs",
                  items: ["International Business Head / Associate", "UAE", "Qatar", "KSA", "UK", "Canada"],
                  subSection: {
                    title: "Corporate Communications Lead",
                    items: [
                      "HR & Talent Manager",
                      "Admin & Legal - Indian Affairs",
                      "Admin & Legal - International Affairs",
                      "Visa & Logistic Team",
                      "AI & R&D Division",
                    ],
                  },
                },
                {
                  title: "AD Film Production (Strategic & Collaborative Partners)",
                  items: [
                    "Line Producer",
                    "Art Director",
                    "Production Team",
                    "Talent & Styling Unit",
                    "Technical & Post-Production",
                    "Creative & Client Support",
                    "Logistics & Operations",
                  ],
                  subSection: {
                    title: "Events & Entertainment",
                    items: ["Client Relations Manager", "Operations Lead", "Celebrity Management Team"],
                  },
                },
              ].map((dept, i) => (
                <div
                  key={i}
                  className="bg-[#356595] p-6 rounded-2xl shadow-md border border-[#1E3A8A]/40 hover:shadow-[#1E3A8A]/30 transition-all"
                >
                  <h4 className="text-xl font-semibold text-white mb-3 border-b border-[#ffffff33] pb-2">
                    {dept.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-200">
                    {dept.items.map((item, j) => (
                      <li key={j} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {dept.subSection && (
                    <div className="mt-5 pt-4 border-t border-[#ffffff22]">
                      <h5 className="text-base font-semibold text-white mb-2">{dept.subSection.title}</h5>
                      <ul className="space-y-2 text-sm text-gray-300">
                        {dept.subSection.items.map((subItem, k) => (
                          <li key={k} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 mt-1" />
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------- ETHICS, VALUE & GOVERNANCE ---------------------- */}
        <section className="py-20 bg-black">
          <div className="w-full flex flex-col lg:flex-row">
            {/* Left Column */}
            <div className="bg-white flex-1 p-8 md:p-16 space-y-12">
              {/* INNOVATION */}
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">INNOVATION</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Powered by <span className="font-semibold">AI and creativity</span>, we craft smarter, faster,
                    and more impactful brand experiences by blending <span className="font-semibold">art, intelligence, and technology</span>.
                  </p>
                </div>
              </div>

              {/* INTEGRITY */}
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">INTEGRITY</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Where creativity meets strategy to build powerful brands and unforgettable experiences driven by{" "}
                    <span className="font-semibold">innovation and global expertise</span>.
                  </p>
                </div>
              </div>

              {/* PASSION */}
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">PASSIONATE</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We pour heart, energy, and imagination into every project — turning passion into powerful brand
                    stories that inspire.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative flex-1 min-h-[320px] lg:min-h-[600px] h-full">
              <img
                src={teamworkStructure}
                alt="Team collaboration structure"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ---------------------- CSR SECTION ---------------------- */}
        <section className="py-20 bg-gradient-to-b from-[#4160a3] to-white">
          <div className="container mx-auto px-6 md:px-20">
            <h2 className="text-4xl font-bold text-white mb-6 text-left">
              Corporate Social Responsibility
            </h2>
            <p className="text-lg text-white max-w-4xl leading-relaxed mb-12 text-left">
              Through our CSR initiatives, we support community growth, sustainability, and education in
              the creative arts — inspiring positive change through every project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[ 
                { src: csrCommunity, title: "Community Growth" },
                { src: csrPeople, title: "Investing in People" },
                { src: csrGreen, title: "Go Green" },
                { src: csrWomen, title: "Empowering Women" },
              ].map((card, i) => (
                <div key={i} className="group relative overflow-hidden">
                  <div className="relative h-80">
                    <img src={card.src} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#3D3D3D] p-6 text-center">
                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  </div>
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
