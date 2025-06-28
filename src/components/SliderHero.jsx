// src/components/SliderHero.jsx
import Slider from "react-slick";
import { motion } from "framer-motion";
import slide1 from "../assets/hero1.jpg";
import slide2 from "../assets/hero2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: slide1,
    title: "T - SHIRT",
    subtitle: "WRESTLING FOR MEN",
    description: "EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT",
  },
  {
    image: slide2,
    title: "T - SHIRT",
    subtitle: "SUMMER STREET LOOK",
    description: "LIMITED STOCK – CLASSIC FIT FOR MODERN MEN",
  },
];

const textAnimation = {
  hidden: { opacity: 0, y: 30 },
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
    <div className="w-full mt-[120px] overflow-hidden z-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[90vh]">
            {/* Background image with zoom-in effect */}
            <motion.img
              src={slide.image}
              alt={`slide-${index}`}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-full h-full object-cover absolute inset-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

            {/* Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="absolute z-20 inset-0 flex flex-col justify-center items-center text-center text-white px-4"
            >
              <motion.p
                className="text-xs md:text-sm tracking-widest mb-2 uppercase"
                variants={textAnimation}
                custom={1}
              >
                {slide.title}
              </motion.p>
              <motion.h2
                className="text-3xl md:text-6xl font-extrabold leading-tight mb-2"
                variants={textAnimation}
                custom={2}
              >
                {slide.subtitle}
              </motion.h2>
              <motion.p
                className="mt-2 text-sm md:text-base text-gray-200 max-w-lg"
                variants={textAnimation}
                custom={3}
              >
                {slide.description}
              </motion.p>
              <motion.button
                className="mt-6 px-6 py-2 border border-white hover:bg-white hover:text-black transition"
                variants={textAnimation}
                custom={4}
              >
                VIEW MORE
              </motion.button>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHero;
