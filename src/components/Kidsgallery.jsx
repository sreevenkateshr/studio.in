import React from "react";
import KidsNavbar from "./Kidsnavbar";
import Footer from "./Footer";

export default function Gallery() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1603201667230-bd3d3edba0c1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503457574464-6e271e3a5d20?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531927557220-dc2f41f1bb07?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <KidsNavbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1603201667230-bd3d3edba0c1?auto=format&fit=crop&w=1600&q=80"
          alt="Kids Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Kids Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Browse through playful memories captured indoors and outdoors.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Colorful Moments
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`Kids Gallery ${idx + 1}`}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-500">
                <p className="text-white text-lg font-semibold">View Photo</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
