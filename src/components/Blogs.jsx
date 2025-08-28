// src/components/BlogSection.jsx
import React from "react";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Capturing Love Stories Through the Lens",
      description:
        "A glimpse into timeless wedding photography moments that tell stories of love and togetherness.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "The Art of Portrait Photography",
      description:
        "Learn how lighting, mood, and expression come together to create powerful portraits.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Behind the Scenes: Creative Shoots",
      description:
        "Take a sneak peek at the creative process that transforms ordinary places into extraordinary visuals.",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Featured Image Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517816428104-797678c7cf0d?auto=format&fit=crop&w=1600&q=80"
          alt="Featured Blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Featured Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Discover inspiring stories, behind-the-scenes creativity, and
            photography tips to level up your visual journey.
          </p>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Latest Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <button className="inline-block px-5 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
