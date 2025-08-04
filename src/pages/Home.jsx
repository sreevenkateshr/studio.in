import React from "react";
import HeroSection from "../components/HeroSection";
import Homeabout from "../components/Homeabout";
import SelectedWorks from "../components/SelectedWorks"
import Categoryshowcase from "../components/Categoryshowcase";
import RecentArrivals from "../components/RecentArrivals";
import TimelessStaples from "../components/TimelessStaples";
import Aveosway from "../components/Aveosway";   // <== import here
import Midslide from "../components/Midslide"
import Testimonials from "../components/Testimonials";
import BestSellers from "../components/BestSellers";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Homeabout />
      <SelectedWorks /> 
      <Categoryshowcase />
     <TimelessStaples />
     <Aveosway />
       <RecentArrivals />
      <Midslide />
      <Footer />
    </>
  );
}


      // <BestSellers />

      //       <Testimonials />

