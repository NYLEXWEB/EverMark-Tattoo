"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ConsultationStrip() {
  return (
    <section className="py-16 bg-[#E0E0E0] border-y border-black/5 relative overflow-hidden select-none">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 premium-grid-bg opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight text-[#111111] leading-none">
            Book a consultation with <br className="hidden md:block" />
            our tattoo experts
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full md:w-auto"
        >
          <a
            href="https://wa.me/918590278523"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center space-x-2 border border-black/20 hover:border-black bg-transparent px-8 py-4 rounded-none text-xs uppercase tracking-widest font-extrabold text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            <span>Talk To Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
