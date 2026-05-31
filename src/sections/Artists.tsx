"use client";

import { motion } from "framer-motion";
import { Instagram, Send, Star } from "lucide-react";

export default function Artists() {
  const artists = [
    {
      name: "NIKESH",
      role: "Lead Realism Artist",
      experience: "9+ Years Experience",
      specialty: "Hyper-Realism & Portraits",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      instagram: "https://www.instagram.com/evermarktattoo",
    },
    {
      name: "AMAL",
      role: "Geometric Specialist",
      experience: "7+ Years Experience",
      specialty: "Sacred Geometry & Dotwork",
      image: "https://images.unsplash.com/photo-1620122303020-43ec4b6cf7f8?q=80&w=800&auto=format&fit=crop",
      instagram: "https://www.instagram.com/evermarktattoo",
    },
    {
      name: "MISHA",
      role: "Illustrative Specialist",
      experience: "6+ Years Experience",
      specialty: "Custom Fine-Line & Color",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      instagram: "https://www.instagram.com/evermarktattoo",
    },
  ];

  return (
    <section id="artists" className="py-24 md:py-32 bg-[#111111] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent mb-4 block">
              // EXPERT HANDS
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-white leading-none">
              Tattoo <br />
              <span className="text-stroke">Artists</span>
            </h2>
          </div>
          <p className="text-muted-text max-w-sm mt-6 md:mt-0 font-light text-sm md:text-base leading-relaxed">
            Meet the professional visual creators behind Evermark. Transforming ideas into timeless skin masterpieces.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group bg-[#1A1A1A] border border-[#2A2A2A] hover:border-accent/40 transition-all duration-500 overflow-hidden flex flex-col relative h-[500px]"
            >
              {/* Image Block */}
              <div className="relative w-full h-full overflow-hidden">
                {/* Filmic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-black/10 z-10 transition-opacity duration-500 group-hover:opacity-90" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-[1.05]"
                />

                {/* Top Badge: Experience */}
                <div className="absolute top-6 left-6 z-20 flex items-center space-x-1.5 bg-black/60 border border-white/10 px-3 py-1">
                  <Star className="w-3 h-3 text-accent fill-accent" />
                  <span className="text-[9px] tracking-widest text-white uppercase font-bold">
                    {artist.experience}
                  </span>
                </div>

                {/* Bottom Overlay Info (Reveal on Hover / Standard Layout) */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end">
                  <span className="text-[10px] tracking-[0.3em] text-accent font-bold uppercase mb-2">
                    {artist.role}
                  </span>
                  
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-wider uppercase mb-1">
                    {artist.name}
                  </h3>

                  <span className="text-xs text-muted-text font-light mb-6 block">
                    Specialty: {artist.specialty}
                  </span>

                  {/* Social hover connections */}
                  <div className="flex items-center space-x-4 border-t border-[#2A2A2A] pt-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-300"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://wa.me/918590278523"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all duration-300"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
