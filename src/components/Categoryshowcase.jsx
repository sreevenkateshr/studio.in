import React from "react";

const categories = {
  women: [
    {
      title: "T-Shirts & Jean",
      subtitle: "SUMMER COLLECTION",
      image: "https://images.unsplash.com/photo-1602810318363-0e5a03e9c709?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Office fashion",
      subtitle: "SALE OFF 20% FOR ALL",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "All accessories",
      subtitle: "AUTUMN SET FOR YOU",
      image: "https://images.unsplash.com/photo-1618354691373-daa9f5cb0f09?auto=format&fit=crop&w=800&q=80",
      overlay: true,
    },
    {
      title: "BIG SALE 50% OFF",
      subtitle: "NITAN COLLECTION",
      image: "https://images.unsplash.com/photo-1601342630910-bb55ec519b06?auto=format&fit=crop&w=800&q=80",
      wide: true,
      badge: true,
    },
  ],
  men: [
    {
      title: "AUTUMN FASHION",
      subtitle: "SALE OFF 30%",
      image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
      wide: true,
    },
    {
      title: "V NECK OEM MENS",
      subtitle: "CHINA FASHION STYLISH",
      image: "https://images.unsplash.com/photo-1618354691084-83d80c6ed4f0?auto=format&fit=crop&w=800&q=80",
      overlay: true,
    },
    {
      title: "Office Mens",
      subtitle: "MEN BROWN SUPER SLIM",
      image: "https://images.unsplash.com/photo-1536520002442-39764a41e19b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Men accessories",
      subtitle: "ALL ACCESSORIES FOR BOSS",
      image: "https://images.unsplash.com/photo-1598032894781-471d824a4376?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export default function Categories() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-8">
        {/* WOMEN */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold border-b pb-2">WOMEN’S CATEGORIES</h2>
          <div className="grid grid-cols-3 gap-4">
            {categories.women.slice(0, 3).map((cat, i) => (
              <CategoryCard key={i} {...cat} />
            ))}
          </div>
          <div>
            <CategoryCard {...categories.women[3]} />
          </div>
        </div>

        {/* MEN */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold border-b pb-2">MEN’S CATEGORIES</h2>
          <div>
            <CategoryCard {...categories.men[0]} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {categories.men.slice(1).map((cat, i) => (
              <CategoryCard key={i} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ image, title, subtitle, overlay, wide, badge }) {
  return (
    <div
      className={`relative group overflow-hidden ${
        wide ? "col-span-3 md:col-span-1 w-full" : ""
      }`}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition bg-black bg-opacity-0 group-hover:bg-opacity-70 text-white px-4">
        {overlay && (
          <>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm mt-2">{subtitle}</p>
            <button className="mt-4 px-4 py-1 border hover:bg-white hover:text-black transition">
              SEE MORE
            </button>
          </>
        )}
      </div>
      {!overlay && (
        <div className="absolute bottom-4 left-4 text-black group-hover:scale-105 transition">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs">{subtitle}</p>
        </div>
      )}
      {badge && (
        <div className="absolute top-4 left-4 w-20 h-20 bg-white text-center flex items-center justify-center rounded-full font-bold text-red-600 text-xl shadow-lg">
          50% OFF
        </div>
      )}
    </div>
  );
}
