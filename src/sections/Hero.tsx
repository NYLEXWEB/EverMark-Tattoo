"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Cinematic Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />

      {/* Dark overlay & filmic gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/85 to-black/40 z-10" />

      {/* Background Accent Grid */}
      <div className="absolute inset-0 premium-grid-bg opacity-15 pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 relative z-20">
        <div className="max-w-4xl flex flex-col items-start text-left">
          {/* Logo Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mb-6"
          >
            <img 
              src="/EverMArk-logo.png" 
              alt="EVERMARK Crown Logo" 
              className="h-16 md:h-20 w-auto object-contain filter drop-shadow(0px 4px 12px rgba(254, 211, 48, 0.25))"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center space-x-2 border border-accent/20 bg-accent/5 px-3 py-1 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] font-semibold text-accent uppercase">
              The Ultimate Atelier in Kerala
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-extrabold text-5xl md:text-8xl tracking-tight leading-[0.95] text-white uppercase mb-8"
          >
            The Art <br />
            <span className="text-stroke">Of Self</span> <br />
            <span className="text-accent">Expression</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-base md:text-xl text-muted-text max-w-xl font-light leading-relaxed mb-10"
          >
            Premium Tattoo Studio, Piercing Services, Men&apos;s Grooming &amp; Wellness Experience. Crafted by experts, tailored to you.
          </motion.p>

          {/* Buttons & Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto"
          >
            {/* CTA 1 */}
            <a
              href="#contact"
              className="group flex items-center justify-center space-x-2 bg-white text-black hover:bg-accent hover:text-bg-dark px-8 py-4 rounded-none text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-lg"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* CTA 2 */}
            <a
              href="https://wa.me/918590278523"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-2 border border-white/20 hover:border-accent bg-black/40 hover:bg-accent/5 px-8 py-4 rounded-none text-xs uppercase tracking-widest font-bold transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-accent transition-colors" />
              <span>WhatsApp Now</span>
            </a>
          </motion.div>

          {/* Live Studio Details in Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.2em] font-medium uppercase text-muted-text"
          >
            <div>
              <span className="text-accent mr-1">//</span> CALL: 9207112354
            </div>
            <div>
              <span className="text-accent mr-1">//</span> WHATSAPP: 8590278523
            </div>
            <div>
              <span className="text-accent mr-1">//</span> KERALA, IN
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute right-12 bottom-12 z-20 hidden lg:flex flex-col items-center space-y-4">
        <span className="text-[10px] tracking-[0.4em] font-semibold text-accent uppercase transform rotate-90 my-8">
          SCROLL
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
