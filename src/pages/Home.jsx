import React from "react";
import HeroSection from "../components/HeroSection";
import Categoryshowcase from "../components/Categoryshowcase";
import TimelessStaples from "../components/TimelessStaples";
import Aveosway from "../components/Aveosway";   // <== import here
import Midslide from "../components/Midslide"
import BestSellers from "../components/BestSellers";
import Newsandtestimonials from "../components/Newsandtestimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Categoryshowcase />
     <TimelessStaples />
     <Aveosway />
      <BestSellers />
      <Midslide />
      <Newsandtestimonials />
      <Footer />
    </>
  );
}
