// src/pages/PreWedding.jsx
import React from "react";
import Footer from "../components/Footer"
export default function PreWedding() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80"
          alt="Pre Wedding Shoot"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Pre-Wedding Photography
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Turning love stories into timeless memories before the big day
            arrives — candid, romantic, and unforgettable.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Celebrate Your Journey Together
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Pre-wedding shoots are more than just pictures — they’re about
          capturing the chemistry, laughter, and love between two people before
          stepping into a new chapter of life. We craft cinematic frames, candid
          portraits, and dreamy backdrops to narrate your love story
          beautifully.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Romantic Concepts</h3>
            <p className="text-gray-600">
              Creative themes, mood lighting, and personalized concepts to bring
              your love story to life.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Candid Moments</h3>
            <p className="text-gray-600">
              Natural, unscripted shots that reflect your true bond and unique
              chemistry together.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Scenic Locations</h3>
            <p className="text-gray-600">
              From beaches to mountains, we choose breathtaking backdrops to
              make your photos cinematic and magical.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
