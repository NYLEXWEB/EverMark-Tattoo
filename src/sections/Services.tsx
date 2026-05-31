"use client";

import { motion } from "framer-motion";
import { Sparkles, Scissors, ShieldAlert } from "lucide-react";

export default function Services() {
  const categories = [
    {
      id: "01",
      icon: <Sparkles className="w-6 h-6 text-accent" />,
      title: "ALL TYPE OF TATTOOS",
      image: "https://images.unsplash.com/photo-1590246814883-57a511fbc9f2?q=80&w=800&auto=format&fit=crop",
      description: "Custom experiences crafted by professional artists representing diverse modern and traditional styles.",
      items: [
        "Portrait Tattoos",
        "Realism Tattoos",
        "Traditional Tattoos",
        "Blackwork Tattoos",
        "Geometric Tattoos",
        "Cover Up Tattoos",
        "Sleeve Tattoos",
        "Custom Tattoos",
      ],
    },
    {
      id: "02",
      icon: <ShieldAlert className="w-6 h-6 text-accent" />,
      title: "ALL TYPE OF PIERCING",
      image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop",
      description: "Professional, hygienic, and precise body piercing services in a sterile, comforting environment.",
      items: [
        "Ear Piercing",
        "Nose Piercing",
        "Lip Piercing",
        "Eyebrow Piercing",
        "Body Piercing",
      ],
    },
    {
      id: "03",
      icon: <Scissors className="w-6 h-6 text-accent" />,
      title: "PREMIUM MEN'S MAKEOVER",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
      description: "High-end salon services and premium body treatments for the modern gentleman seeking perfection.",
      items: [
        "Hair Styling",
        "Beard Grooming",
        "Facial Treatments",
        "Hair Spa",
        "Massage Chair Service",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#111111] relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent mb-4 block">
              // STUDIO OFFERINGS
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-white leading-none">
              Services <br />
              <span className="text-stroke">Crafted for</span> You
            </h2>
          </div>
          <p className="text-muted-text max-w-sm mt-6 md:mt-0 font-light text-sm md:text-base leading-relaxed">
            At Evermark, we blend artistic precision with ultimate grooming luxury, ensuring you leave with confidence.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group bg-[#1A1A1A] border border-[#2A2A2A] hover:border-accent/40 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                {/* Image Header with Index */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 z-20 font-display font-bold text-lg text-accent">
                    {cat.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    {cat.icon}
                    <h3 className="font-display font-bold text-xl tracking-wider text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-muted-text text-sm font-light mb-8 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="w-full h-[1px] bg-[#2A2A2A] mb-8" />

                  {/* List of sub-services */}
                  <ul className="space-y-4">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-sm font-medium text-white/80 hover:text-accent transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-accent/50 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-8 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-accent group/btn hover:text-white transition-colors duration-300 mt-8"
                >
                  <span>Inquire Now</span>
                  <span className="transform translate-x-0 group-hover/btn:translate-x-1.5 transition-transform duration-300">
                    &rarr;
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
