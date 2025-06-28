// src/components/NewsAndTestimonials.jsx
import React from "react";

const newsItems = [
  {
    id: 1,
    category: "Fashion, Gallery, Post Format",
    title: "Duis aliquam mi a mauris aliquet fermentum.",
    date: "Dec.11.15",
    author: "snstheme",
    img: "https://via.placeholder.com/120x80",
  },
  {
    id: 2,
    category: "Collection, Fashion",
    title: "Sed eget quam in nisi luctus semper by the readable.",
    date: "Dec.11.15",
    author: "snstheme",
    img: "https://via.placeholder.com/120x80",
  },
  {
    id: 3,
    category: "Collection, Update and News",
    title: "Morbi molestie est vitae porta lobortis lorem ipsum.",
    date: "Dec.11.15",
    author: "snstheme",
    img: "https://via.placeholder.com/120x80",
  },
];

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    name: "MARIA - Developer",
    avatar: "https://via.placeholder.com/60",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    name: "KOMODO ART - Web designer",
    avatar: "https://via.placeholder.com/60",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    name: "MR. LAURA SANCHI - Web designer",
    avatar: "https://via.placeholder.com/60",
  },
];

export default function NewsAndTestimonials() {
  return (
    <div className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Latest News */}
      <div>
        <h2 className="text-center text-xl font-bold uppercase mb-6 tracking-wide">Latest News</h2>
        <div className="space-y-6">
          {newsItems.map((item) => (
            <div key={item.id} className="flex items-start gap-4 border-b pb-4">
              <img src={item.img} alt="news" className="w-[120px] h-[80px] object-cover" />
              <div>
                <p className="text-[11px] text-gray-400 mb-1">In {item.category}</p>
                <h3 className="text-sm font-semibold leading-tight">{item.title}</h3>
                <p className="text-[11px] text-gray-400 mt-1">
                  {item.date} - By {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="border text-xs px-5 py-2 uppercase tracking-widest hover:bg-black hover:text-white transition">
            View All
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-cover bg-center px-6 py-10 rounded-md" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?fit=crop&w=1200&q=80)` }}>
        <h2 className="text-white text-xl font-bold uppercase text-center mb-10 tracking-wide">What Client Say?</h2>
        <div className="space-y-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/20 border border-white rounded-md p-4 text-white backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={t.avatar}
                  alt="avatar"
                  className="w-[50px] h-[50px] object-cover rounded-full border border-white"
                />
                <p className="text-[12px] font-semibold">{t.name}</p>
              </div>
              <p className="text-xs leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
