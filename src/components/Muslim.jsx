// src/pages/Muslim.jsx
import React from "react";
import Footer from "../components/Footer"

export default function Muslim() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1608245449230-4a60f1a64b51?auto=format&fit=crop&w=1600&q=80"
          alt="Muslim Wedding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Muslim Wedding Photography
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Capturing the sacred Nikah, heartfelt Duas, and vibrant traditions
            of Muslim weddings with beauty and authenticity.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Preserving Sacred Traditions
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Muslim weddings, rooted in faith and tradition, are filled with sacred
          moments of love, family, and community. From the Nikah ceremony to
          Walima celebrations, we capture the essence of these special days with
          respect and artistry. Our photography preserves every prayer,
          blessing, and smile in timeless frames.
        </p>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Nikah Ceremony</h3>
            <p className="text-gray-600">
              Documenting the sacred vows, signing of the Nikahnama, and the
              spiritual beauty of the marriage contract.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Duas & Blessings</h3>
            <p className="text-gray-600">
              Capturing heartfelt prayers, family blessings, and emotional
              moments of love and faith.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Walima Celebrations</h3>
            <p className="text-gray-600">
              Showcasing vibrant receptions filled with traditions, laughter,
              and cherished family gatherings.
            </p>
          </div>
        </div>
      </div>
      <Footer />    
    </section>
  );
}
