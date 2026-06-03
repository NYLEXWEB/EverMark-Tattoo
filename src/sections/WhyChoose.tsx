"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Cpu, PenTool, Activity, Users } from "lucide-react";

export default function WhyChoose() {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Experienced Artists",
      description: "Our roster comprises award-winning visual creators with decades of collective studio expertise in varied styles.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "Hygienic Environment",
      description: "We enforce strict medical-grade autoclave sterilization and single-use disposable needles for absolute client safety.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent" />,
      title: "Premium Equipment",
      description: "We utilize industry-leading rotary machines and world-class hypoallergenic vegan inks to secure crisp, vivid healing.",
    },
    {
      icon: <PenTool className="w-6 h-6 text-accent" />,
      title: "Custom Designs",
      description: "We do not replicate templates. Every artwork is co-sketched and tailored from scratch to harmonize with anatomy.",
    },
    {
      icon: <Activity className="w-6 h-6 text-accent" />,
      title: "Piercing Specialists",
      description: "Precise anatomical placement coupled with high-end titanium and gold jewelry for seamless, clean piercing recovery.",
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Grooming Services",
      description: "A complete men's grooming lounge with therapeutic massage chairs, delivering ultimate facial and beard care.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#161616] border-y border-[#2A2A2A] relative overflow-hidden select-none">
      {/* Background visual detail */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-accent/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center space-x-2.5 mb-4">
            <img 
              src="/EverMArk-logo.png" 
              alt="EVERMARK Brand Icon" 
              className="h-5 w-auto object-contain filter drop-shadow(0px 1px 2px rgba(0,0,0,0.5))"
            />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent block">
              UNCOMPROMISING STANDARDS
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-white leading-none">
            Why Choose <br />
            <span className="evermark-logo-style text-4xl md:text-6xl leading-none">Evermark</span> Studio
          </h2>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-accent/40 transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 border border-[#2A2A2A] group-hover:border-accent/40 flex items-center justify-center mb-6 bg-black transition-colors duration-500">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white mb-4">
                {point.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-muted-text font-light leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
