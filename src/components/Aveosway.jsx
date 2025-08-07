import React, { useEffect, useState } from "react";
import img1 from "../assets/wedding1.jpg";
import img2 from "../assets/wedding2.jpg";
import img3 from "../assets/wedding3.jpg";
import img4 from "../assets/wedding4.jpg";
import img5 from "../assets/wedding5.jpg";

const images = [img1, img2, img3, img4, img5];

export default function Aveosway() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-looping carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const result = [];
    for (let i = -3; i <= 3; i++) {
      const index = (activeIndex + i + images.length) % images.length;
      result.push({ index, offset: i });
    }
    return result;
  };

  return (
    <div className="w-full h-[600px] mt-12 mb-12 flex justify-center items-center overflow-hidden relative">
      <div className="relative w-full h-full flex items-center justify-center">
        {getVisibleImages().map(({ index, offset }) => {
          const scale = 1 - Math.abs(offset) * 0.1;
          const translateX = offset * 140;
          const brightness = offset === 0 ? 1 : 0.9;
          const opacity = 1 - Math.abs(offset) * 0.08;
          const zIndex = 999 - Math.abs(offset);

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out"
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                filter: `brightness(${brightness})`,
                zIndex,
                opacity,
              }}
            >
              <div className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src={images[index]}
                  alt={`carousel-${index}`}
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs px-5 py-2 rounded-full shadow-md hover:opacity-90 transition">
                  Click Here
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
