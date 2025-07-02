import { useEffect, useState } from "react";

export default function Collection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to fetch:", err));
  }, []);

  return (
    <div className="p-8 pt-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Collection</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 && (
          <p className="col-span-full text-center text-gray-500">Loading products...</p>
        )}

        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-4"
            />
            <h2 className="text-md font-semibold mb-1">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2">${product.price}</p>
            <button className="mt-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
