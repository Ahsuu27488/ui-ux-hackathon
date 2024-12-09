import Browse from "@/components/Browse";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import OurProducts from "@/components/OurProducts";
import SlideShow from "@/components/SlideShow";
import React from "react";
export default function Home() {
  return (
    <div className="font-poppins overflow-x-clip">
      <HeroSection />
      <Browse />
      <OurProducts />
      <SlideShow />
      <Gallery />
    </div>
  );
}
