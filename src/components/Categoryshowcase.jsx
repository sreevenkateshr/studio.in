import React from "react";
import shirtsImg from "../assets/shirts.avif";
import pantsImg from "../assets/pants.avif";
import jacketsImg from "../assets/jackets.avif";
import denimImg from "../assets/denim.avif";

export default function Categoryshowcase() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20">
      <h2
        className="text-center text-4xl md:text-4xl mb-16"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Shop By Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* SHIRTS */}
        <div className="flex flex-col items-center group">
          <img
            src={shirtsImg}
            alt="Shirts"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <button className="mt-6 px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
            SHIRTS
          </button>
        </div>

        {/* PANTS */}
        <div className="flex flex-col items-center group">
          <img
            src={pantsImg}
            alt="Pants"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <button className="mt-6 px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
            PANTS
          </button>
        </div>

        {/* JACKETS */}
        <div className="flex flex-col items-center group">
          <img
            src={jacketsImg}
            alt="Jackets"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <button className="mt-6 px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
            JACKETS
          </button>
        </div>

        {/* DENIM */}
        <div className="flex flex-col items-center group">
          <img
            src={denimImg}
            alt="Denim"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <button className="mt-6 px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
            DENIM
          </button>
        </div>
      </div>
    </div>
  );
}
