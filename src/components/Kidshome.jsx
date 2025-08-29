import React from "react";
import KidsNavbar from "../components/Kidsnavbar";
import Footer from "./Footer";

export default function KidsHome() {
  return (
    <section className="bg-gray-50 min-h-screen font-sans">
      {/* Navbar */}
      <KidsNavbar />

      {/* Hero Section */}
      <div className="relative h-[85vh] w-full">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1603201667230-bd3d3edba0c1?auto=format&fit=crop&w=1600&q=80"
          alt="Kids Home"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fadeInUp">
            Kids Studio Moments
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mt-4 leading-relaxed animate-fadeInUp delay-200">
            Capture the innocence, laughter, and colorful world of your child —
            where every photo tells a story.
          </p>

          {/* CTA Button */}
          <button className="mt-8 px-10 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300 animate-fadeInUp delay-300">
            Explore Gallery
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
