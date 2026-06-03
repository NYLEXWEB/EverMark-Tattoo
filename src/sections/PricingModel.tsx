"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingModel() {
  const modelRows = [
    {
      category: "Small Tattoos",
      pricing: "₹5,000+",
      duration: "1 - 2 Hours",
      features: "Ideal for scripts, line-work, and simple motifs. Free consulting included.",
    },
    {
      category: "Medium Sleeves",
      pricing: "₹10,000+",
      duration: "3 - 5 Hours",
      features: "Elaborate arm sprays, mandalas, and dotwork. Custom sketches included.",
    },
    {
      category: "Large Canvas",
      pricing: "₹35,000+",
      duration: "Multi-Session",
      features: "Complete sleeves, detailed chest overlays, and full back masterpieces.",
    },
    {
      category: "Realism Portrait",
      pricing: "₹25,000+",
      duration: "5 - 8 Hours",
      features: "Hyper-realistic portraits and 3D artwork led by Nikesh & Amal.",
    },
  ];

  return (
    <section className="py-24 bg-[#E5E5E5] text-black border-t border-black/10 relative overflow-hidden select-none">
      {/* Concrete Texture overlay */}
      <div className="absolute inset-0 premium-grid-bg opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bold Typography Title */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xs"
            >
              <div className="flex items-center space-x-2.5 mb-4">
                <img 
                  src="/EverMArk-logo.png" 
                  alt="EVERMARK Brand Icon" 
                  className="h-5 w-auto object-contain filter drop-shadow(0px 1px 2px rgba(0,0,0,0.5))"
                />
                <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#C7A26A] block">
                  TRANSPARENT STANDARDS
                </span>
              </div>
              <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tight leading-[0.95] text-black">
                What is the <br />
                industry <br />
                preferred <br />
                tattoo pricing <br />
                model?
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Premium Comparison Table Layout */}
          <div className="lg:col-span-8 w-full border-t border-black/15">
            <div className="flex flex-col">
              {modelRows.map((row, index) => (
                <motion.div
                  key={row.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-6 border-b border-black/15 items-center hover:bg-black/[0.02] px-2 transition-colors duration-300"
                >
                  {/* Category Name */}
                  <div className="sm:col-span-3 font-display font-bold text-lg uppercase tracking-wider text-black">
                    {row.category}
                  </div>

                  {/* Pricing Tier */}
                  <div className="sm:col-span-2 font-display text-base font-black text-[#C7A26A] tracking-wider">
                    {row.pricing}
                  </div>

                  {/* Duration */}
                  <div className="sm:col-span-2 text-xs uppercase tracking-widest text-zinc-600 font-bold">
                    {row.duration}
                  </div>

                  {/* Features & Inclusions */}
                  <div className="sm:col-span-5 text-xs text-zinc-600 font-light leading-relaxed flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#C7A26A] mt-0.5 flex-shrink-0" />
                    <span>{row.features}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Custom Notes */}
            <div className="mt-8 text-[10px] tracking-widest text-zinc-500 uppercase">
              * Hourly touch-ups and specific cover-up designs are calculated on custom artist consultation.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
