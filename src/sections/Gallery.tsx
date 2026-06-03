"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = ["ALL", "BLACKWORK", "REALISM", "GEOMETRIC", "MINIMALIST"];

  const items = [
    {
      id: "gal-1",
      src: "/images/SAVE_20260603_113654.jpg",
      category: "REALISM",
      span: "md:col-span-2 md:row-span-2",
      title: "Mahabharata Sleeve Art",
    },
    {
      id: "gal-2",
      src: "/images/SAVE_20260603_113702.jpg",
      category: "BLACKWORK",
      span: "md:col-span-1 md:row-span-1",
      title: "Filigree Concept",
    },
    {
      id: "gal-3",
      src: "/images/SAVE_20260603_113708.jpg",
      category: "BLACKWORK",
      span: "md:col-span-1 md:row-span-2",
      title: "Hand Craft Tattooing",
    },
    {
      id: "gal-4",
      src: "/images/SAVE_20260603_113714.jpg",
      category: "GEOMETRIC",
      span: "md:col-span-1 md:row-span-1",
      title: "Symmetrical Mandala",
    },
    {
      id: "gal-5",
      src: "/images/SAVE_20260603_113720.jpg",
      category: "GEOMETRIC",
      span: "md:col-span-2 md:row-span-1",
      title: "Geometric Alignment",
    },
    {
      id: "gal-6",
      src: "/images/SAVE_20260603_113726.jpg",
      category: "MINIMALIST",
      span: "md:col-span-1 md:row-span-2",
      title: "Trishul & Damru Tattoo",
    },
    {
      id: "gal-7",
      src: "/images/SAVE_20260603_113732.jpg",
      category: "BLACKWORK",
      span: "md:col-span-1 md:row-span-1",
      title: "Custom Mandalas",
    },
    {
      id: "gal-8",
      src: "/images/SAVE_20260603_113738.jpg",
      category: "MINIMALIST",
      span: "md:col-span-1 md:row-span-1",
      title: "Fine-Line Custom piece",
    },
  ];

  const filteredItems =
    activeFilter === "ALL"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#111111] relative select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div>
            <div className="flex items-center space-x-2.5 mb-4">
              <img 
                src="/EverMArk-logo.png" 
                alt="EVERMARK Brand Icon" 
                className="h-5 w-auto object-contain filter drop-shadow(0px 1px 2px rgba(0,0,0,0.5))"
              />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent block">
                VISUAL CURATION
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-white leading-none">
              Tattoo <br />
              <span className="text-stroke">Gallery</span>
            </h2>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-3 mt-8 lg:mt-0 max-w-xl">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold border transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-accent border-accent text-bg-dark"
                    : "border-white/10 text-white/70 hover:border-white hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={img.id}
                onClick={() => setSelectedImage(img.src)}
                className={`group relative overflow-hidden bg-[#1A1A1A] border border-[#2A2A2A] hover:border-accent/40 transition-all duration-500 cursor-pointer ${img.span}`}
              >
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/45">
                  <div className="w-12 h-12 rounded-none border border-accent flex items-center justify-center text-accent transform scale-90 group-hover:scale-100 transition-all duration-300 bg-bg-dark/40">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-6 left-6 z-20 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[8px] tracking-[0.2em] font-bold text-accent uppercase mb-1 block">
                    {img.category}
                  </span>
                  <h3 className="font-display text-sm tracking-widest text-white uppercase font-semibold">
                    {img.title}
                  </h3>
                </div>

                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View on Instagram Footer */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/evermarktattoo?igsh=dGxnamZiejBuYnVv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-extrabold text-accent hover:text-white transition-colors duration-300"
          >
            <span>View More Work on Instagram</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox / Preview Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2"
              aria-label="Close Preview"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden border border-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage}
                alt="Selected Tattoo Piece"
                className="w-full h-auto max-h-[85vh] object-contain mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
