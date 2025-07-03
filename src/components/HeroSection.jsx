import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "https://picsum.photos/900/1200?random=1",
    title: "2035/ Spring",
    subtitle: "Collection"
  },
  {
    image: "https://picsum.photos/900/1200?random=2",
    title: "2035/ Summer",
    subtitle: "Edition"
  },
  {
    image: "https://picsum.photos/900/1200?random=3",
    title: "2035/ Fall",
    subtitle: "Trends"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* LEFT vertical text */}
      <div className="flex md:w-1/5 w-full justify-center items-center bg-white">
        <h1 className="text-6xl md:text-[10rem] font-bold tracking-wider md:-rotate-90">
          AEVO
        </h1>
      </div>

      {/* RIGHT slider */}
      <div className="relative flex-1 h-[70vh] md:h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl md:text-5xl font-serif">{slide.title}</h2>
              <p className="mt-2 text-lg md:text-xl">{slide.subtitle}</p>
              <button className="mt-4 border px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full"
        >
          <ArrowLeft className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full"
        >
          <ArrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
}
