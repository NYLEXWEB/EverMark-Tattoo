"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Editorial() {
  return (
    <section className="relative min-h-[600px] md:min-h-[750px] flex items-center bg-[#E5E5E5] overflow-hidden py-16 md:py-24">
      {/* Background Cinematic Artwork on the right side */}
      <div
        className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/images/SAVE_20260603_113732.jpg')`,
        }}
      />
      
      {/* Editorial side gradient split */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E5E5E5] via-[#E5E5E5]/90 to-transparent lg:to-transparent z-10" />
      <div className="absolute inset-0 premium-grid-bg opacity-[0.04] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        {/* Floating Editorial White Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="bg-white text-black p-8 md:p-16 max-w-lg shadow-2xl relative select-none"
        >
          {/* Card Accent Line */}
          <div className="w-12 h-[3px] bg-accent mb-6" />

          {/* Heading */}
          <h2 className="font-display font-extrabold text-3xl md:text-5xl uppercase tracking-tight leading-[1.05] mb-6">
            Priceless Art <br />
            That Lasts <br />
            A Lifetime
          </h2>

          {/* Description */}
          <p className="font-sans text-sm md:text-base text-zinc-700 font-light leading-relaxed mb-10">
            Every tattoo tells a story, uniquely crafted by hands that understand precision, beauty, and personal significance. Our professional artists customize every detail to match your vision.
          </p>

          {/* Buttons inside Floating Card */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="flex items-center space-x-2 bg-black text-white hover:bg-accent hover:text-bg-dark px-6 py-3.5 text-xs uppercase tracking-widest font-bold transition-all duration-300"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            
            <a
              href="https://wa.me/918590278523"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest font-bold text-black hover:text-accent transition-colors duration-300"
            >
              Talk To Us &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
