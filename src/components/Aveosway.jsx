import React, { useRef, useState } from "react";

// Import your 5 local images
import img1 from "../assets/wedding1.jpg";
import img2 from "../assets/wedding2.jpg";
import img3 from "../assets/wedding3.jpg";
import img4 from "../assets/wedding4.jpg";
import img5 from "../assets/wedding5.jpg";

const images = [img1, img2, img3, img4, img5];
const MAX_VISIBLE = 2;

export default function Aveosway({ stats = [], counts = [] }) {
  const sectionRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [deltaX, setDeltaX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(2);

  const handleMouseDown = (e) => setStartX(e.clientX);
  const handleMouseMove = (e) => {
    if (startX !== null) setDeltaX(e.clientX - startX);
  };
  const handleMouseUp = () => {
    if (startX !== null && Math.abs(deltaX) > 50) {
      setActiveIndex((prev) => {
        const newIndex = prev - Math.sign(deltaX);
        return (newIndex + images.length) % images.length; // loop
      });
    }
    setStartX(null);
    setDeltaX(0);
  };

  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => {
    if (startX !== null) setDeltaX(e.touches[0].clientX - startX);
  };
  const handleTouchEnd = () => handleMouseUp();

  const getRelativeIndex = (i) => {
    let diff = i - activeIndex;
    if (diff > images.length / 2) diff -= images.length;
    if (diff < -images.length / 2) diff += images.length;
    return diff;
  };

  return (
    <>
      {/* Wedding Moments Showcase Carousel */}
      <div
        className="relative mb-10 mt-10 overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-[400px] w-full flex items-center justify-center">
          {images.map((src, i) => {
            const offset = getRelativeIndex(i);
            if (Math.abs(offset) > MAX_VISIBLE) return null;

            const scale = 1 - Math.abs(offset) * 0.1;
            const translateX = offset * 140 + (offset === 0 ? deltaX : 0);
            const zIndex = 999 - Math.abs(offset);
            const brightness = offset === 0 ? 1 : 0.9;
            const opacity = 1 - Math.abs(offset) * 0.08;

            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                  filter: `brightness(${brightness})`,
                  zIndex,
                  opacity,
                }}
              >
                <img
                  src={src}
                  alt={`carousel-${i}`}
                  className="w-[300px] h-[400px] object-cover rounded-xl shadow-xl"
                />
                <button className="mt-3 bg-black text-white text-sm px-4 py-1 rounded-full hover:bg-gray-800">
                  Click Here
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Counter Section */}
      <div
        className="py-12 bg-white text-center border-t border-gray-100"
        ref={sectionRef}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array.isArray(stats) && Array.isArray(counts) &&
            stats.map((stat, i) => (
              <div key={i}>
                <h2 className="text-4xl font-bold text-gray-900">
                  {stat.prefix || ""}
                  {counts[i]?.toLocaleString() || 0}
                  {stat.suffix || ""}
                </h2>
                <p className="text-base text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
