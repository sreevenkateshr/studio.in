import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  { id: 456, name: "Graphity print #456", price: "$78", image: "https://picsum.photos/300/400?random=1" },
  { id: 457, name: "Graphity print #457", price: "$72", image: "https://picsum.photos/300/400?random=2" },
  { id: 443, name: "Graphity print #443", price: "$65", image: "https://picsum.photos/300/400?random=3" },
  { id: 459, name: "Graphity print #459", price: "$82", image: "https://picsum.photos/300/400?random=4" },
];

export default function RecentArrivals() {
  return (
    <div className="w-full py-16 px-6 md:px-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Recent arrivals</h2>
        <button className="text-sm bg-black text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
          Open Store
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="group relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg object-cover"
            />
            <div className="flex justify-between items-center mt-4">
              <div>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
                  <Heart size={16} className="text-gray-700" />
                </button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
                  <ShoppingCart size={16} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
