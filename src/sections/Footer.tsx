"use client";

import { Instagram, MessageSquare, ArrowUp, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#2A2A2A] pt-20 pb-12 relative overflow-hidden select-none">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 premium-grid-bg opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 pb-16 border-b border-[#2A2A2A]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#home" className="flex flex-col select-none mb-6 w-fit">
                <span className="font-display font-extrabold text-3xl tracking-[0.15em] text-white">
                  EVERMARK
                </span>
                <span className="text-[8px] tracking-[0.4em] text-accent uppercase -mt-0.5 font-sans font-medium">
                  Tattoo &amp; Makeover Studio
                </span>
              </a>
              <p className="text-sm font-light text-muted-text max-w-sm leading-relaxed mb-8">
                Kerala&apos;s luxury destination for high-end custom tattoos, precise body piercings, and premium gentleman makeover treatments. Experience art on your terms.
              </p>
            </div>
            
            {/* Social channels */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/evermarktattoo?igsh=dGxnamZiejBuYnVv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#2A2A2A] hover:border-accent hover:text-accent flex items-center justify-center text-white/70 transition-colors"
                aria-label="Instagram link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918590278523"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#2A2A2A] hover:border-accent hover:text-accent flex items-center justify-center text-white/70 transition-colors"
                aria-label="WhatsApp link"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] tracking-[0.25em] text-white font-extrabold uppercase mb-6">
              // QUICK EXPLORE
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#home" },
                { name: "Services", href: "#services" },
                { name: "Artists", href: "#artists" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-text hover:text-accent transition-colors duration-300 flex items-center space-x-1.5"
                  >
                    <span>&bull;</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings Col */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] tracking-[0.25em] text-white font-extrabold uppercase mb-6">
              // STUDIO OFFERINGS
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] tracking-wider text-accent font-bold uppercase block mb-3">
                  Tattoos
                </span>
                <ul className="space-y-2 text-xs text-muted-text font-light">
                  <li>Realism</li>
                  <li>Portrait</li>
                  <li>Blackwork</li>
                  <li>Geometric</li>
                  <li>Cover Ups</li>
                </ul>
              </div>
              <div>
                <span className="text-[10px] tracking-wider text-accent font-bold uppercase block mb-3">
                  Grooming
                </span>
                <ul className="space-y-2 text-xs text-muted-text font-light">
                  <li>Hair Styling</li>
                  <li>Beard Design</li>
                  <li>Hair Spa</li>
                  <li>Body Piercings</li>
                  <li>Massage Lounge</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 text-center md:text-left">
          <span className="text-xs text-muted-text font-light">
            &copy; {new Date().getFullYear()} EVERMARK TATTOO &amp; GENTS MAKEOVER STUDIO. All Rights Reserved.
          </span>
          <span className="text-xs text-muted-text font-light flex items-center gap-1.5">
            Designed for Excellence <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </span>
        </div>

      </div>

      {/* Dynamic Scroll Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-accent text-bg-dark border border-accent hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
