"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PriceCTA() {
  return (
    <section className="py-20 bg-[#161616] border-y border-[#2A2A2A] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 premium-grid-bg opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="font-display font-bold text-2xl md:text-4xl uppercase tracking-tight text-white leading-tight">
            Want to know the exact price <br className="hidden md:block" />
            of your next tattoo?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-auto"
        >
          <a
            href="#contact"
            className="group flex items-center justify-center space-x-3 bg-accent text-bg-dark hover:bg-white hover:text-black px-8 py-5 rounded-none text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-xl w-full md:w-auto"
          >
            <span>Get Free Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
