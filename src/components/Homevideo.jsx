import React from "react";

export function FullScreenVideoWithOverlay({
  src,
  overlayColor = "#000000",
  overlayOpacity = 0.24,
}) {
  return (
    <div className="relative w-full h-screen">
      {/* Video */}
      <video
        src={src}
        className="w-full h-full object-cover"
        controls={false}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          "--overlay-color": overlayColor,
          "--overlay-opacity": overlayOpacity,
          backgroundColor: "var(--overlay-color)",
          opacity: "var(--overlay-opacity)",
        }}
      />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-black"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <FullScreenVideoWithOverlay
      src="https://weddingbellsstories.com/video_library/three.mp4"
      overlayColor="#000000"
      overlayOpacity={0.24}
    />
  );
}