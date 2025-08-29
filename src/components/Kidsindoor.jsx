// src/pages/KidsIndoor.jsx
import React from "react";
import Kidsnavbar from "../components/Kidsnavbar"; // adjust path as needed
import Footer from "../components/Footer"

export default function KidsIndoor() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Kidsnavbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1603201667230-bd3d3edba0c1?auto=format&fit=crop&w=1600&q=80"
          alt="Kids Indoor Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Kids Indoor Photography
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Capturing joyful smiles, playful moments, and timeless indoor memories
            with little ones.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Playful Memories Indoors
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Indoor photography sessions for kids are full of color, laughter, and
          innocence. Be it birthdays, cake smashes, or casual family portraits,
          we create a safe and fun environment where kids can freely express
          themselves while we capture their cutest moments.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Birthday Celebrations</h3>
            <p className="text-gray-600">
              From blowing candles to unwrapping gifts, every birthday moment
              becomes a memory for life.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Creative Setups</h3>
            <p className="text-gray-600">
              Fun indoor backdrops with balloons, fairy lights, and props to make
              kids feel special and comfortable.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Family Portraits</h3>
            <p className="text-gray-600">
              Indoor family photography sessions that capture love, bonding, and
              togetherness with kids.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
