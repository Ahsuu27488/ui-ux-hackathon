import Browse from "@/components/Browse";
import HeroSection from "@/components/HeroSection";
import OurProducts from "@/components/OurProducts";
import SlideShow from "@/components/SlideShow";
import React from "react";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Browse />
      <OurProducts/>
      <SlideShow/>
    </div>
  );
}
