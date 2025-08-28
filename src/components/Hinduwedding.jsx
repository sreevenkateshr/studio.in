// src/components/Hinduwedding.jsx
import React from "react";

export default function Hinduwedding() {
  const gallery = [
    { id: 1, img: "/images/hindu1.jpg", couple: "Arjun & Meera" },
    { id: 2, img: "/images/hindu2.jpg", couple: "Rahul & Priya" },
    { id: 3, img: "/images/hindu3.jpg", couple: "Karthik & Ananya" },
    { id: 4, img: "/images/hindu4.jpg", couple: "Suresh & Kavya" },
    { id: 5, img: "/images/hindu5.jpg", couple: "Vikram & Sneha" },
    { id: 5, img: "/images/hindu5.jpg", couple: "Vikram & Sneha" },

  ];

  return (
    <div className="w-full">
      {/* ===== Hero Section ===== */}
      <section className="relative h-[80vh] w-full">
        <img
          src="/images/hindu-cover.jpg" // replace with your featured image
          alt="Hindu Wedding"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Hindu Weddings
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Capturing the vibrant traditions, rituals, and timeless moments of
            love in Hindu weddings.
          </p>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Our Wedding Stories</h2>
        <p className="text-gray-700 leading-relaxed">
          Hindu weddings are filled with colors, culture, and emotional moments.
          From the sacred rituals to the joyful celebrations, each frame tells a
          story of love and togetherness. Here are some of our favorite
          captures.
        </p>
      </section>

      {/* ===== Gallery Section ===== */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative group">
                <img
                  src={item.img}
                  alt={item.couple}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{item.couple}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
