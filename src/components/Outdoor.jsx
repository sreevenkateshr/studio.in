// src/pages/Outdoor.jsx
import React from "react";
import Footer from "../components/Footer"
export default function Outdoor() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80"
          alt="Outdoor Wedding Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Outdoor Wedding Photography
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Celebrating love amidst nature, with vibrant frames that capture the
            beauty of open-air ceremonies.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Nature Meets Love
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Outdoor weddings bring a magical blend of nature and romance. From
          garden setups to beachside vows, we capture every little detail —
          golden sunsets, rustic décor, and candid laughter — framed beautifully
          in the lap of nature.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Golden Hour Portraits</h3>
            <p className="text-gray-600">
              Magical couple portraits under natural sunlight, soft skies, and
              glowing horizons.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Nature & Décor</h3>
            <p className="text-gray-600">
              Beautifully framed shots of the venue, flowers, lights, and rustic
              wedding elements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Candid Emotions</h3>
            <p className="text-gray-600">
              Natural, unposed frames that capture raw love, laughter, and happy
              memories.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
