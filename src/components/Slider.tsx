import { motion } from "framer-motion";
import p1 from "@/assets/P1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";

const PartnerSlider = () => {
  const logos = [p1, p2, p3, p4, p5];

  return (
    <section className="py-12 bg-gradient-to-r from-[#1a0000] via-black to-[#000000] text-white overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-left-lg sm:text-xl font-medium text-gray-300">
          Our Optimistic Partner & Sponsor:
        </h3>
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-16 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index}`}
              className="h-16 sm:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSlider;
