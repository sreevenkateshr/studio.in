// src/pages/Engagement.jsx
import React from "react";
import Footer from "../components/Footer"
export default function Engagement() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1601297183305-6df6c8e30d54?auto=format&fit=crop&w=1600&q=80"
          alt="Engagement Ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Engagement Photography
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Capturing the promise of togetherness, family traditions, and
            heartfelt emotions from your special day.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          The Beginning of Forever
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Engagement is the first step into a new chapter of love and
          commitment. From exchanging rings to candid family moments, we
          preserve every emotion, detail, and celebration with timeless frames.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Ring Exchange</h3>
            <p className="text-gray-600">
              Close-up shots of the rings, capturing the beauty and symbolism of
              the promise made.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Family Joy</h3>
            <p className="text-gray-600">
              Documenting laughter, tears of joy, and warm blessings from loved
              ones.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Candid Moments</h3>
            <p className="text-gray-600">
              Natural frames that showcase the bond, chemistry, and happiness of
              the couple.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
