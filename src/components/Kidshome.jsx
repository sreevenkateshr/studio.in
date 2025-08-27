import React from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import slick-carousel CSS (needed for styling)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

export default function KidsSection() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true, // smooth fade transition
  };

  const services = [
    {
      title: "Birthday Photography 🎂",
      desc: "Capture your child’s special day with timeless memories.",
    },
    {
      title: "Indoor Portraits 🏠",
      desc: "Professional indoor setups for cozy, elegant portraits.",
    },
    {
      title: "Outdoor Shoots 🌳",
      desc: "Natural lighting and scenic backdrops for candid clicks.",
    },
    {
      title: "Family Sessions 👨‍👩‍👧",
      desc: "Bring the whole family together for lasting portraits.",
    },
    {
      title: "Creative Themes 🎭",
      desc: "Customized props and themes that make every photo unique.",
    },
    {
      title: "Milestone Memories ⭐",
      desc: "Celebrate growth milestones with beautiful photography.",
    },
  ];

  return (
    <div className="w-full">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Slider */}
        <Slider {...sliderSettings} className="h-screen w-full">
          {[slide1, slide2, slide3].map((img, i) => (
            <div key={i} className="h-screen w-full relative">
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="h-screen w-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </Slider>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Capturing Childhood Magic ✨
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-6 text-gray-200">
            From birthdays 🎂 to candid smiles 😊 — we preserve every little
            moment of your child’s journey.
          </p>
          <button className="bg-purple-600 px-8 py-3 rounded-full shadow-md hover:bg-purple-700 transition">
            Book a Kids Shoot
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="overview"
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Text */}
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            About Studio.in 📸
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
            <span className="text-purple-600 font-semibold">Studio.in</span> is
            a creative photography studio dedicated to capturing the most
            meaningful moments of your life. From{" "}
            <span className="font-medium">weddings 💍</span> and{" "}
            <span className="font-medium">kids’ milestones 🎂</span> to{" "}
            <span className="font-medium">professional portfolios 💼</span>, we
            bring emotions to life through our lenses.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
            Our philosophy is simple:{" "}
            <span className="italic">every picture tells a story</span>. With a
            blend of creativity and professionalism, we make sure your story is
            captured beautifully and remembered forever.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-700 transition">
            Explore Our Work
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={slide2}
            alt="About Studio.in"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Services We Provide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our specialized photography services designed to make every moment
            magical and unforgettable.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition transform"
              >
                <h3 className="text-xl font-bold text-purple-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Recent Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Recent Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Precious Moments Captured In Our Gallery
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[slide1, slide2, slide3, slide1, slide2, slide3].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
