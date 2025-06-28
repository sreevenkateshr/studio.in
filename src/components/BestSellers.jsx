import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const tabs = ["LATEST", "BEST SELLER", "TOP RATED"];

export default function NewArrivals() {
  const [activeTab, setActiveTab] = useState("LATEST");
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
        setLoading(false);
      });
  }, []);

  const filterProducts = () => {
    switch (activeTab) {
      case "BEST SELLER":
        return [...allProducts].sort((a, b) => b.stock - a.stock).slice(0, 8);
      case "TOP RATED":
        return [...allProducts].sort((a, b) => b.rating - a.rating).slice(0, 8);
      default:
        return allProducts.slice(0, 8);
    }
  };

  const scroll = (offset) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="w-full py-20 px-4 font-sans bg-white relative">
      {/* Header */}
      <h2 className="text-center text-[22px] font-bold uppercase tracking-wide mb-4">
        New Arrivals
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 text-[12px] font-medium mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`uppercase tracking-widest transition-all ${
              activeTab === tab
                ? "text-black border-b-[2px] border-black font-bold"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Navigation Icons - Always visible */}
      <button
        onClick={() => scroll(-260)}
        className="absolute left-4 top-[55%] -translate-y-1/2 z-10 bg-black text-white w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition duration-300"
      >
        <FaChevronLeft size={16} />
      </button>
      <button
        onClick={() => scroll(260)}
        className="absolute right-4 top-[55%] -translate-y-1/2 z-10 bg-black text-white w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition duration-300"
      >
        <FaChevronRight size={16} />
      </button>

      {/* Product Cards Row */}
      {loading ? (
        <p className="text-center text-gray-400 text-sm">Loading...</p>
      ) : (
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 scrollbar-hide"
        >
          {filterProducts().map((product) => (
            <div
              key={product.id}
              onClick={() => scroll(260)}
              className="min-w-[220px] max-w-[220px] snap-start bg-[#f9f9f9] px-4 py-6 text-center text-[13px] shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
            >
              <p className="uppercase text-[10px] text-gray-400 mb-1 tracking-wider">
                All Accessories
              </p>
              <h3 className="font-semibold leading-tight mb-2 line-clamp-1">
                {product.title}
              </h3>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-[160px] object-contain mx-auto mb-4 transition-transform hover:scale-[1.05]"
              />
              <p className="font-semibold text-[13px] text-black mb-2">
                ${product.price.toFixed(2)}
              </p>
              <div className="text-yellow-500 text-sm">
                {"★".repeat(Math.round(product.rating)) +
                  "☆".repeat(5 - Math.round(product.rating))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
