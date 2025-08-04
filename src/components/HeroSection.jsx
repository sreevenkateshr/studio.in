import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "src/assets/slide1.jpg",
    title: "Stories from Zero Watts",
    subtitle: "Premium Wedding Photographer",
  },
  {
    image: "src/assets/slide2.jpg",
    title: "Stories from Zero Watts",
    subtitle: "Premium Wedding Photographer",
  },
  {
    image: "src/assets/slide3.jpg",
    title: "Stories from Zero Watts",
    subtitle: "Premium Wedding Photographer",
  },
  {
    image: "src/assets/slide4.jpg",
    title: "Stories from Zero Watts",
    subtitle: "Premium Wedding Photographer",
  },
  {
    image: "src/assets/slide5.jpg",
    title: "Stories from Zero Watts",
    subtitle: "Premium Wedding Photographer",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center bg-black/30 pb-24">
            <h1 className="text-4xl md:text-6xl font-spectral font-light tracking-wide drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mt-4 tracking-widest uppercase font-spectral drop-shadow-lg">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

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
  );
}
