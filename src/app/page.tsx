import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import PriceCTA from "@/sections/PriceCTA";
import Editorial from "@/sections/Editorial";
import PricingFactors from "@/sections/PricingFactors";
import TattooExamples from "@/sections/TattooExamples";
import YellowFeature from "@/sections/YellowFeature";
import ConsultationStrip from "@/sections/ConsultationStrip";
import GiftCard from "@/sections/GiftCard";
import Artists from "@/sections/Artists";
import Gallery from "@/sections/Gallery";
import WhyChoose from "@/sections/WhyChoose";
import PricingModel from "@/sections/PricingModel";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-[#111111] overflow-hidden">
        <Hero />
        <Services />
        <PriceCTA />
        <Editorial />
        <PricingFactors />
        <TattooExamples />
        <YellowFeature />
        <ConsultationStrip />
        <GiftCard />
        <Artists />
        <Gallery />
        <WhyChoose />
        <PricingModel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
