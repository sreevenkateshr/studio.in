import React from 'react';
import heroImage from '../assets/onepic.avif'; // Replace with actual image name

const SliderHero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white ml-auto mr-10 max-w-lg text-right">
        <h1 className="text-4xl md:text-5xl font-serif leading-snug">
          Shop the Dark <br />
          Tailored Pants <em className="italic">Now!</em>
        </h1>
        <button className="mt-6 px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default SliderHero;
