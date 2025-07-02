import React from "react";
import heroImage from "../assets/hero2.jpg"; // replace with your image path

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* LEFT big vertical text */}
      <div className="flex md:w-1/5 w-full justify-center items-center bg-white">
        <h1 className="text-6xl md:text-[10rem] font-bold tracking-wider md:-rotate-90">
          AEVO
        </h1>
      </div>

      {/* RIGHT hero image */}
      <div className="flex-1 h-[70vh] md:h-full relative">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-3xl md:text-5xl font-serif">2035/<i>Spring</i></h2>
          <p className="mt-2 text-lg md:text-xl">Collection</p>
          <button className="mt-4 border px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
