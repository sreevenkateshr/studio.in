import React from "react";
import KidsNavbar from "./KidsNavbar";

export default function Gallery() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <KidsNavbar />

      <div className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1603201667230-bd3d3edba0c1?auto=format&fit=crop&w=1600&q=80"
          alt="Kids Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Kids Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Browse through playful memories captured indoors and outdoors.
          </p>
        </div>
      </div>
    </section>
  );
}
