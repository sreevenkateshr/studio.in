import React from "react";

const imageCount = 18;

export default function SelectedWorks() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white font-spectral text-center">
      <h2 className="text-xl text-gray-500 text-sm tracking-wider uppercase mb-8">
        Selected works
      </h2>

      {/* Masonry-style responsive grid */}
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
        {[...Array(imageCount)].map((_, index) => (
          <img
            key={index}
            src={`https://picsum.photos/seed/${index + 1}/500/700`}
            alt={`photo-${index}`}
            className="w-full rounded-lg object-cover mb-4 break-inside-avoid shadow"
          />
        ))}
      </div>

      {/* Button */}
      <div className="mt-12">
        <button className="px-6 py-2 border border-black rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition duration-300">
          View Portfolio
        </button>
      </div>
    </section>
  );
}
