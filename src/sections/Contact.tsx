"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: <Phone className="w-5 h-5 text-accent" />,
      label: "CALL STUDIO",
      value: "+91 92071 12354",
      href: "tel:9207112354",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-accent" />,
      label: "WHATSAPP",
      value: "+91 85902 78523",
      href: "https://wa.me/918590278523",
    },
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      label: "EMAIL ADDRESS",
      value: "evermarktattoo2025@gmail.com",
      href: "mailto:evermarktattoo2025@gmail.com",
    },
    {
      icon: <Instagram className="w-5 h-5 text-accent" />,
      label: "INSTAGRAM",
      value: "@evermarktattoo",
      href: "https://www.instagram.com/evermarktattoo?igsh=dGxnamZiejBuYnVv",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#111111] relative overflow-hidden select-none">
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
              LOCATION & CONTACT
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-white leading-none">
            Get In <br />
            <span className="text-stroke">Touch</span> With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Contact Info + Form */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Studio Title */}
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src="/EverMArk-logo.png" 
                  alt="EVERMARK Logo" 
                  className="h-10 w-auto object-contain"
                />
                <h3 className="evermark-logo-style text-2xl md:text-3xl leading-none">
                  EVERMARK STUDIO
                </h3>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-8">
                Tattoo &bull; Piercing &bull; Grooming &bull; Wellness
              </p>

              {/* Details List */}
              <div className="space-y-6 mb-12">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={detail.label === "INSTAGRAM" || detail.label === "WHATSAPP" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group p-4 border border-[#2A2A2A] bg-[#1A1A1A] hover:border-accent/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-black flex items-center justify-center border border-[#2A2A2A] group-hover:border-accent/20 transition-colors">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="text-[9px] tracking-widest text-muted-text block mb-0.5">
                        {detail.label}
                      </span>
                      <span className="font-sans text-sm font-semibold text-white group-hover:text-accent transition-colors">
                        {detail.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 border border-[#2A2A2A] p-6 bg-[#1A1A1A]">
              <h4 className="text-xs uppercase tracking-widest font-extrabold text-white mb-2">
                Quick Inquiry Form
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black border border-[#2A2A2A] focus:border-accent p-3 text-xs text-white rounded-none outline-none transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-black border border-[#2A2A2A] focus:border-accent p-3 text-xs text-white rounded-none outline-none transition-colors"
                  required
                />
              </div>
              <textarea
                placeholder="What service are you looking for?"
                rows={3}
                className="w-full bg-black border border-[#2A2A2A] focus:border-accent p-3 text-xs text-white rounded-none outline-none transition-colors resize-none"
                required
              />
              <button
                type="submit"
                className="w-full group flex items-center justify-center space-x-2 bg-accent text-bg-dark hover:bg-white hover:text-black py-3 rounded-none text-xs uppercase tracking-widest font-bold transition-all duration-300"
              >
                <span>Send Message</span>
                <Send className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>

          {/* Right: Map Embed */}
          <div className="lg:col-span-6 min-h-[400px] lg:min-h-auto relative overflow-hidden border border-[#2A2A2A] bg-[#1A1A1A] flex flex-col justify-between">
            {/* Dark Styled Map Iframe */}
            <div className="w-full h-full min-h-[350px] relative overflow-hidden flex-1">
              <iframe
                title="Evermark Tattoo Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3902347311746!2d76.2731808!3d9.9840248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d005f77873d%3A0x6b9d6c4d4f82a9db!2sEvermark%20Tattoo%20Studio!5e0!3m2!1sen!2sin!4v1700000000000"
                className="absolute inset-0 w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] grayscale-[80%] brightness-[0.95] contrast-[1.05]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            {/* Map Info Bar */}
            <div className="p-6 border-t border-[#2A2A2A] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <div>
                  <span className="text-[9px] tracking-widest text-muted-text block mb-0.5">
                    STUDIO LOCATION
                  </span>
                  <span className="font-sans text-xs text-white font-medium">
                    Evermark Tattoo, Kochi, Kerala, India
                  </span>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/gbTWFv32HK2RpdxX8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest font-extrabold text-accent hover:text-white transition-colors"
              >
                Open Maps &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
