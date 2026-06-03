"use client";

import { motion } from "framer-motion";

export default function PricingFactors() {
  const factors = [
    {
      num: "01",
      title: "Design Complexity",
      description:
        "Intricate realism, dotwork mandalas, or detailed portraiture require advanced artistic precision and prolonged execution, directly scaling with execution effort.",
    },
    {
      num: "02",
      title: "Tattoo Size",
      description:
        "From minimalist wrist inscriptions to complete sleeve and back-canvas works, proportions and scale dictate the ink quantity and session length required.",
    },
    {
      num: "03",
      title: "Placement Area",
      description:
        "Highly contoured, delicate, or sensitive locations require special equipment and painstaking techniques, ensuring safety and optimal healing outcomes.",
    },
  ];

  return (
    <section className="py-24 bg-[#EAEAEA] text-black relative overflow-hidden select-none">
      {/* Background Concrete Texture Lines */}
      <div className="absolute inset-0 premium-grid-bg opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center space-x-2.5 mb-4">
            <img 
              src="/EverMArk-logo.png" 
              alt="EVERMARK Brand Icon" 
              className="h-5 w-auto object-contain filter drop-shadow(0px 1px 2px rgba(0,0,0,0.5))"
            />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-accent block">
              TRANSPARENT VALUES
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight leading-none text-black">
            What Affects <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px #000" }}>The Tattoo</span> Pricing?
          </h2>
        </div>

        {/* 3 Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 border-t border-black/10">
          {factors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group p-8 md:p-12 bg-[#F2F2F2] hover:bg-white transition-all duration-500 border-b lg:border-b-0 lg:border-r border-black/10 last:border-r-0 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                {/* Number */}
                <div className="font-display font-extrabold text-5xl md:text-6xl text-black/10 group-hover:text-accent transition-colors duration-500 mb-8">
                  {factor.num}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-black mb-4">
                  {factor.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-zinc-600 font-light leading-relaxed">
                  {factor.description}
                </p>
              </div>

              {/* Decorative Detail */}
              <div className="w-8 h-[2px] bg-black/10 group-hover:bg-accent transition-colors duration-500 mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
