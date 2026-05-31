"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function TattooExamples() {
  const examples = [
    {
      title: "Small Tattoos",
      badge: "Starting Consultation Available",
      price: "Starting from ₹5,000",
      description: "Fine-line work, minimalist scripts, and discrete visual accents crafted with micro-needle precision.",
      image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Medium Tattoos",
      badge: "Custom Pricing",
      price: "Starting from ₹10,000",
      description: "Detailed forearm concepts, intricate floral sprays, and multi-session geometric patterns.",
      image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Large Tattoos",
      badge: "Premium Artwork",
      price: "Starting from ₹35,000",
      description: "High-concept back pieces, expansive chest canvases, and complete arm or leg sleeves.",
      image: "https://images.unsplash.com/photo-1560707303-4e980c876ad2?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Geometric Tattoos",
      badge: "Custom Design Available",
      price: "Starting from ₹20,000",
      description: "Mathematical symmetry, dotwork shading, and intricate sacred geometry aligned to anatomical contours.",
      image: "https://images.unsplash.com/photo-1590246814883-57a511fbc9f2?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-[#111111] relative select-none">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 premium-grid-bg opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent mb-4 block">
            // ARTISTIC CANVASES
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-white leading-none">
            Tattoo <br />
            <span className="text-stroke">Scale &amp;</span> Categories
          </h2>
        </div>

        {/* Stack of Panels (Left: concrete block, Right: image for all rows) */}
        <div className="space-y-12">
          {examples.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex flex-col lg:flex-row items-stretch border border-white/5 overflow-hidden"
            >
              {/* Typographic Concrete Block (Left Side) */}
              <div className="w-full lg:w-[45%] bg-[#E5E5E5] p-8 md:p-14 flex flex-col justify-between relative min-h-[350px]">
                {/* Subtle Concrete BG texture */}
                <div className="absolute inset-0 premium-grid-bg opacity-[0.05] pointer-events-none" />

                <div className="relative z-10">
                  {/* Badge */}
                  <span className="inline-block text-[8px] font-bold tracking-[0.25em] text-accent border border-[#C7A26A]/35 bg-[#C7A26A]/5 px-2.5 py-1 uppercase mb-6 rounded-none">
                    {item.badge}
                  </span>

                  {/* Title & Price */}
                  <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tight text-black mb-4 leading-[0.95] flex flex-col">
                    <span>{item.title}</span>
                    <span className="text-base md:text-xl font-bold text-[#C7A26A] mt-2 tracking-widest lowercase">
                      {item.price}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm text-zinc-700 font-light leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>

                {/* Call Action Link */}
                <div className="relative z-10 mt-8 pt-6 border-t border-black/10">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-extrabold text-black hover:text-accent transition-colors"
                  >
                    <span>Inquire Design</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Cinematic Image Block (Right Side) */}
              <div className="w-full lg:w-[55%] relative min-h-[300px] lg:min-h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E5E5E5]/25 via-transparent to-transparent z-10 pointer-events-none" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover min-h-[350px] lg:min-h-[450px] transition-transform duration-700 hover:scale-105 filter grayscale contrast-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
