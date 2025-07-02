import React from "react";
import denimImg from "../assets/denim01.avif";
import tshirtImg from "../assets/shirts01..avif";
import pantsImg from "../assets/pants01.avif";
import suitImg from "../assets/jackets01.avif";
import timelessImg from "../assets/timless.avif";

export default function TimelessStaples() {
  return (
    <div className="w-full py-16 px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

        {/* LEFT - 2x2 grid */}
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="relative">
            <img src={denimImg} alt="Denim" className="w-full h-full object-cover" />
            <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-2 py-1 rounded-full">SALE</span>
            <div className="absolute bottom-3 left-3 text-sm bg-white bg-opacity-80 px-2 py-1 rounded">
              <h3 className="font-semibold">Washed Blue Denim Jacket</h3>
              <p>$75.00</p>
            </div>
          </div>

          <div className="relative">
            <img src={tshirtImg} alt="T-shirt" className="w-full h-full object-cover" />
            <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-2 py-1 rounded-full">NEW</span>
            <div className="absolute bottom-3 left-3 text-sm bg-white bg-opacity-80 px-2 py-1 rounded">
              <h3 className="font-semibold">Wide Fit White Cotton T-shirt</h3>
              <p>$28.00</p>
            </div>
          </div>

          <div className="relative">
            <img src={pantsImg} alt="Pants" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 text-sm bg-white bg-opacity-80 px-2 py-1 rounded">
              <h3 className="font-semibold">Tailored Pleated Pants</h3>
              <p>$52.00</p>
            </div>
          </div>

          <div className="relative">
            <img src={suitImg} alt="Blazer" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 text-sm bg-white bg-opacity-80 px-2 py-1 rounded">
              <h3 className="font-semibold">Relaxed Black Blazer</h3>
              <p>$95.00</p>
            </div>
          </div>
        </div>

        {/* RIGHT - Big Image with overlay */}
        <div className="relative">
          <img
            src={timelessImg}
            alt="Timeless Staples"
            className="w-full h-full object-cover lg:min-h-[900px]"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30 text-center p-6">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Timeless Staples</h2>
            <p className="italic text-lg md:text-xl max-w-md">
              Discover your perfect classics that last a lifetime.
            </p>
            <button className="mt-8 px-8 py-3 border border-white hover:bg-white hover:text-black transition rounded-full tracking-wide">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

