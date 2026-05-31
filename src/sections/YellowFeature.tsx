"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function YellowFeature() {
  return (
    <section className="bg-[#E5D21F] text-black py-20 md:py-28 relative overflow-hidden select-none">
      {/* Decorative background grid and shapes */}
      <div className="absolute inset-0 premium-grid-bg opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Floating Content Card */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-14 shadow-2xl relative"
            >
              {/* Gold Top Accent Line */}
              <div className="w-12 h-[3px] bg-[#111111] mb-6" />

              <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tight leading-[1.05] text-[#111111] mb-6">
                Tattoo Now. <br />
                Pay Later.
              </h2>
              
              <p className="font-sans text-sm md:text-base text-zinc-700 font-light leading-relaxed mb-8">
                Flexible appointment booking and customized consultation process designed to suit your schedule and financial preference, ensuring premium art is accessible when you want it.
              </p>

              <a
                href="#contact"
                className="group flex items-center justify-center space-x-2 bg-black text-white hover:bg-accent hover:text-bg-dark px-6 py-4 rounded-none text-xs uppercase tracking-widest font-extrabold transition-all duration-300 w-full sm:w-auto"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Large Collage Sculpture Image */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[450px] overflow-hidden"
            >
              {/* Torn paper texture collage frame */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop"
                alt="Luxury Classic Sculpture Collage"
                className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.9] mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E5D21F]/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Absolute element overlays to look like an high fashion editorial collage */}
            <div className="absolute -top-6 -right-6 font-display font-extrabold text-9xl text-black/5 select-none pointer-events-none hidden md:block">
              ART
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
