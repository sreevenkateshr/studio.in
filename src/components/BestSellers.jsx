import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function BestSellers() {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12&select=title,price,images")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(console.error);
  }, []);

  const scroll = (offset) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  if (!products.length) {
    return <p className="text-center text-white py-20">Loading...</p>;
  }

  return (
    <section className="relative bg-[#2b2b2b] text-white py-16 px-4 md:px-10 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold uppercase">Best Sellers</h2>
        <button className="text-sm font-medium hover:underline">SHOP NOW →</button>
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll(-320)}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white text-black hover:bg-gray-200 p-2 rounded-full shadow-lg"
      >
        <FaChevronLeft size={16} />
      </button>
      <button
        onClick={() => scroll(320)}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white text-black hover:bg-gray-200 p-2 rounded-full shadow-lg"
      >
        <FaChevronRight size={16} />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] p-4 rounded-md flex-shrink-0 min-w-[250px] max-w-[250px] snap-start hover:shadow-xl transition-all duration-300"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-[280px] object-cover rounded mb-4"
            />
            <div className="text-center">
              <h3 className="text-base font-semibold truncate">{product.title}</h3>
              <p className="text-sm text-gray-400 mt-1">Rs. {(product.price * 75).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

