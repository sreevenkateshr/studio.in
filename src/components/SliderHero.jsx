// src/components/SliderHero.jsx
import Slider from "react-slick";
import { motion } from "framer-motion";
import slide1 from "../assets/hero1.jpg";
import slide2 from "../assets/hero2.jpg";

const slides = [
  {
    image: slide1,
    title: "OPENING CEREMONY",
    subtitle: "MEN'S.",
    description:
      "Mens Spring Fashion Scarves Infinity Eternity Cowl Neck Scarves Men Fashion Scarf Men.",
  },
  {
    image: slide2,
    title: "SUMMER COLLECTION",
    subtitle: "WOMEN'S.",
    description: "Elegant & modern fits for the season. New arrivals in stock.",
  },
];

const textAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const SliderHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[90vh] w-full">
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
            <img src={slide.image} alt={`slide-${index}`} className="w-full h-full object-cover" />
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              className="absolute z-20 top-1/3 left-6 md:left-20 text-white max-w-[90%] md:max-w-xl"
            >
              <motion.p
                className="uppercase text-sm tracking-widest mb-2"
                variants={textAnimation}
                custom={1}
              >
                SPRING FOR MEN'S 2019
              </motion.p>
              <motion.h2
                className="text-4xl md:text-6xl font-extrabold leading-tight"
                variants={textAnimation}
                custom={2}
              >
                {slide.title} <br /> {slide.subtitle}
              </motion.h2>
              <motion.p
                className="mt-4 text-sm md:text-base"
                variants={textAnimation}
                custom={3}
              >
                {slide.description}
              </motion.p>
              <motion.button
                className="mt-6 px-6 py-2 bg-white text-black font-medium hover:bg-gray-100 transition"
                variants={textAnimation}
                custom={4}
              >
                SHOP NOW →
              </motion.button>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHero;
