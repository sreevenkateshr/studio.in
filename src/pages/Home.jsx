import React from "react";
import HeroSection from "../components/HeroSection";
import Homeabout from "../components/Homeabout";
import SelectedWorks from "../components/SelectedWorks"
import Homeservices from "../components/Homeservices";
import RecentArrivals from "../components/RecentArrivals";
import TimelessStaples from "../components/TimelessStaples";
// import Aveosway from "../components/Aveosway"; 
import Midslide from "../components/Midslide"
import Homevideo from "../components/Homevideo"
import Homebookus from "../components/Homebookus";
import Testimonials from "../components/Testimonials";
import Ourprocess from "../components/Ourprocess"
import BestSellers from "../components/BestSellers";
import Imageslider from "../components/Imageslider"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Homeabout />
      <SelectedWorks /> 
      <Homeservices />
     <TimelessStaples />
     {/* <Aveosway /> */}
       <RecentArrivals />
      <Midslide />
      <Testimonials />
      <Ourprocess />
      <Homevideo />
      <Homebookus />
      <Imageslider />
      <Footer />
    </>
  );
}


      // <BestSellers />


