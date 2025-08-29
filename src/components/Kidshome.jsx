import React from "react";
import KidsNavbar from "../components/Kidsnavbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function KidsHome() {
  return (
    <section className="bg-gray-50 min-h-screen font-sans">
      {/* Navbar */}
      <KidsNavbar />

      {/* Hero Section */}
      <div className="relative h-[90vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1603201667230-bd3d3edba0c1?auto=format&fit=crop&w=1600&q=80"
          alt="Kids Home"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Kids Studio Moments
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Capture the innocence, laughter, and colorful world of your child —
            where every photo tells a story.
          </motion.p>
          <motion.button
            className="mt-8 px-10 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore Gallery
          </motion.button>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Why Choose Our Kids Studio?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {[
            {
              title: "Playful Environment",
              desc: "A kid-friendly studio with toys and props to make sessions fun and natural.",
              img: "https://images.unsplash.com/photo-1544388964-6e341bb7e4c6?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Creative Concepts",
              desc: "From fairy tales to superheroes, we design magical photo sessions.",
              img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Memories for a Lifetime",
              desc: "High-quality photos and albums that you’ll cherish forever.",
              img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
          A Peek Into Our Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <motion.img
              key={num}
              src={`https://source.unsplash.com/600x600/?kids,photography,${num}`}
              alt={`Kids Gallery ${num}`}
              className="rounded-xl object-cover h-60 w-full cursor-pointer hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          What Parents Say
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {[
            {
              name: "Anita Sharma",
              review:
                "The studio session was magical! My son enjoyed every moment, and the photos turned out beyond my expectations.",
            },
            {
              name: "Rahul Mehta",
              review:
                "Amazing concepts and very professional team. My daughter felt so comfortable, and the photos are priceless!",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 italic">“{t.review}”</p>
              <h4 className="mt-4 font-bold text-gray-800">— {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to Capture Beautiful Memories?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Book your child’s photoshoot today and let us turn every smile into
          timeless art.
        </p>
        <button className="px-10 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
          Book a Session
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </section>
  );
}
