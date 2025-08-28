// src/pages/TraditionalPage.jsx
import React from "react";
import Footer from "./Footer";
export default function TraditionalPage() {
  const features = [
    {
      id: 1,
      title: "Our Heritage",
      description:
        "We take pride in preserving timeless traditions while blending them with modern creativity.",
      image:
        "https://images.unsplash.com/photo-1602872021322-dfceea928f5a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Crafted with Care",
      description:
        "Every service we provide is handled with respect, attention to detail, and cultural authenticity.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Timeless Experience",
      description:
        "A journey that combines traditional values with elegant design and lasting memories.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Featured Image */}
      <div className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1517816428104-797678c7cf0d?auto=format&fit=crop&w=1600&q=80"
          alt="Traditional Page"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Traditional Page
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            A classic layout that blends culture, values, and creativity into
            one elegant experience.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
          <Footer />

    </section>
  );
}
