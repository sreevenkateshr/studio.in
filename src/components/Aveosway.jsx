import React, { useEffect, useState } from "react";
import img1 from "../assets/wedding1.jpg";
import img2 from "../assets/wedding2.jpg";
import img3 from "../assets/wedding3.jpg";
import img4 from "../assets/wedding4.jpg";
import img5 from "../assets/wedding5.jpg";

const images = [img1, img2, img3, img4, img5];

export default function Aveosway() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-forward carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change slide every 3s
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < images.length; i++) {
      const offset = (i - activeIndex + images.length) % images.length;
      if (offset <= 2 || offset >= images.length - 2) {
        result.push({
          index: i,
          offset: offset > 2 ? offset - images.length : offset,
        });
      }
    }
    return result;
  };

  return (
    <div className="w-full h-[650px] flex justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {getVisibleImages().map(({ index, offset }) => {
          const scale = 1 - Math.abs(offset) * 0.15;
          const translateX = offset * 260; // spacing between images
          const brightness = offset === 0 ? 1 : 0.5;
          const opacity = 1 - Math.abs(offset) * 0.3;
          const zIndex = 50 - Math.abs(offset);

          return (
            <div
              key={index}
              className="absolute transition-transform transition-opacity duration-700 ease-in-out"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                filter: `brightness(${brightness})`,
                zIndex,
                opacity,
              }}
            >
              <div className="relative w-[320px] h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white">
                <img
                  src={images[index]}
                  alt={`carousel-${index}`}
                  className="w-full h-full object-cover"
                />
                {/* CTA button only on active image */}
                {offset === 0 && (
                  <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
                    Click Here
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
