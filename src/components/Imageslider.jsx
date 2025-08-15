import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1015/600/600",
    "https://picsum.photos/id/1016/600/600",
    "https://picsum.photos/id/1018/600/600",
    "https://picsum.photos/id/1020/600/600",
    "https://picsum.photos/id/1024/600/600",
    "https://picsum.photos/id/1025/600/600",
  ];

  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* Follow CTA */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="text-xl font-semibold hover:text-pink-500 transition"
        >
          Follow us on Instagram
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-pink-500"
        >
          @ZEROWATTSPHOTOGRAPHY
        </a>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
