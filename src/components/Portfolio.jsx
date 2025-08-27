import React from "react";
import wedding1 from "../assets/wedding1.jpg";
import wedding2 from "../assets/wedding2.jpg";
import wedding3 from "../assets/wedding3.jpg";
import wedding4 from "../assets/wedding4.jpg";
import wedding5 from "../assets/wedding5.jpg";
import tee10 from "../assets/tee10.jpg";
import Footer from "../components/Footer";

export default function Portfolio() {
  const portfolioItems = [
    { title: "Portraits", img: wedding1, link: "/portfolio/portraits" },
    { title: "Pre Weddings", img: wedding2, link: "/portfolio/preweddings" },
    { title: "Tamil Weddings", img: wedding3, link: "/portfolio/tamil" },
    { title: "Telugu Weddings", img: wedding4, link: "/portfolio/telugu" },
    { title: "Christian Weddings", img: wedding5, link: "/portfolio/christian" },
    { title: "Hindu Weddings", img: tee10, link: "/portfolio/hindu-wedding" },
  ];

  return (
    <>
      <section className="bg-gray-100 py-20 px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="uppercase tracking-widest text-gray-500 text-sm md:text-base mb-6">
            Where Every Frame Tells a Story
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Discover the artistry of Zero Vision Photography through our curated portfolio.
            From Tamil, Telugu, Christian, Muslim, and Indian weddings to pre-weddings shoots
            and cinematic wedding films, our work reflects creativity and attention to detail.
            Explore our stunning visuals that capture love, joy, and traditions in every frame.
            Let our portfolio inspire your dream wedding photography experience.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-300"></div>
                <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>

              {/* Button below each card */}
              <div className="p-4 text-center">
                <a
                  href={item.link}
                  className="inline-block px-8 py-2 border border-black rounded-full text-black text-sm font-medium tracking-widest transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Three Buttons Section */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-20 text-center">
          {/* About Us */}
          <div className="flex flex-col items-center">
            <a
              href="#about"
              className="inline-block px-10 py-3 border border-black rounded-full text-black text-base font-medium tracking-widest transition-colors duration-300 hover:bg-black hover:text-white"
            >
              ABOUT US
            </a>
            <p className="mt-3 italic text-gray-700 text-base">Get to know us</p>
          </div>

          {/* Wedding Films */}
          <div className="flex flex-col items-center">
            <a
              href="#wedding"
              className="inline-block px-10 py-3 border border-black rounded-full text-black text-base font-medium tracking-widest transition-colors duration-300 hover:bg-black hover:text-white"
            >
              WEDDING FILMS
            </a>
            <p className="mt-3 italic text-gray-700 text-base">Explore our Work</p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center">
            <a
              href="#contact"
              className="inline-block px-10 py-3 border border-black rounded-full text-black text-base font-medium tracking-widest transition-colors duration-300 hover:bg-black hover:text-white"
            >
              CONTACT US
            </a>
            <p className="mt-3 italic text-gray-700 text-base">Get in Touch</p>
          </div>
        </div>
      </section>

      {/* Footer outside section */}
      <Footer />
    </>
  );
}
