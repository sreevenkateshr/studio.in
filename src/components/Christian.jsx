// src/pages/Christian.jsx
import React from "react";

export default function Christian() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Featured Image */}
      <div className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80"
          alt="Christian Wedding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Christian Wedding Photography
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Elegant, timeless, and heartfelt — capturing the sacred vows and
            celebrations of Christian weddings with grace and detail.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Capturing Sacred Moments
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Christian weddings are filled with solemn vows, heartfelt prayers, and
          joyful celebrations. Our approach is to preserve these moments
          naturally — from the sacred exchange of rings at the altar to the
          joyous smiles at the reception. Every image reflects the purity and
          essence of this special day.
        </p>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Church Ceremonies</h3>
            <p className="text-gray-600">
              From aisle walks to heartfelt vows, we capture the holiness of the
              wedding service in its full glory.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Family Blessings</h3>
            <p className="text-gray-600">
              Preserving emotional blessings, prayers, and cultural rituals with
              authentic storytelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Reception Joy</h3>
            <p className="text-gray-600">
              Documenting laughter, speeches, and first dances that make the
              evening unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
