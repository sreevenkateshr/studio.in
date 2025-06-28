import React from "react";
import Navbar from "./components/Navbar";
import SliderHero from "./components/SliderHero";
import Categoryshowcase from "./components/Categoryshowcase";
import BestSellers from "./components/BestSellers";
import NewsAndTestimonials from "./components/Newsandtestimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white text-black">
      {/* Top Sticky Navigation Bar */}
      <Navbar />

      {/* Fullscreen Hero Image Slider */}
      <SliderHero />

      {/* Product Categories Display */}
      <Categoryshowcase />

      {/* Best Selling Products Showcase */}
      <BestSellers />

      {/* Latest News Section + Client Testimonials */}
      <NewsAndTestimonials />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
