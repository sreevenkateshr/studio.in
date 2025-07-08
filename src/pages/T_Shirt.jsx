import React from 'react';
import shirt1 from '../assets/T_Shirt_1.jpg';
import shirt2 from '../assets/T_Shirt_2.jpg';
import shirt3 from '../assets/T_Shirt_3.jpg';
import shirt4 from '../assets/T_Shirt_4.jpg';
import shirt5 from '../assets/T_Shirt_5.jpg';
import shirt6 from '../assets/T_Shirt_6.jpg';
import Footer from '../components/Footer';
import cartIcon from '../assets/cart.jpg'; // Make sure this icon is in your assets folder

const products = [
  { id: 1, name: 'Dark Blue Cotton T-Shirt', price: '₹25.00', image: shirt1 },
  { id: 2, name: 'Wide Fit White Cotton T-Shirt', price: '₹28.00', image: shirt2 },
  { id: 3, name: 'Buttoned Down Lilac T-Shirt', price: '₹60.00', image: shirt3 },
  { id: 4, name: 'Slim Fit Black T-Shirt', price: '₹45.00', image: shirt4 },
  { id: 5, name: 'Classic Plaid T-Shirt', price: '₹50.00', image: shirt5 },
  { id: 6, name: 'Soft Blue Denim T-Shirt', price: '₹55.00', image: shirt6 },
];

export default function TshirtsPage() {
  return (
    <>
      <div className="min-h-screen bg-white font-sans">
        {/* Navbar */}
        <nav className="flex items-center justify-between p-6 border-b">
          <div className="text-xl font-bold">
            ROON<span className="font-light">APPAREL</span>
          </div>
          <ul className="hidden md:flex space-x-8 text-gray-700">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer border-b-2 border-black">T-Shirts</li>
            <li className="hover:text-black cursor-pointer">Pants</li>
            <li className="hover:text-black cursor-pointer">Jackets</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="hover:text-black">Log In</button>
            <button className="hover:text-black text-xl">🛒</button>
          </div>
        </nav>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row p-6">
          {/* Sidebar */}
          <aside className="md:w-1/4 mb-6 md:mb-0 md:pr-8 border-r">
            <h2 className="font-bold mb-4">Browse by</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-black cursor-pointer">All Products</li>
              <li className="hover:text-black cursor-pointer">Jackets</li>
              <li className="hover:text-black cursor-pointer">Jeans</li>
              <li className="hover:text-black cursor-pointer font-bold">T-Shirts</li>
              <li className="hover:text-black cursor-pointer">Timeless Staples</li>
            </ul>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">Filter by Price</h3>
              <input type="range" min="25" max="60" className="w-full" />
              <div className="flex justify-between text-sm mt-1 text-gray-500">
                <span>₹25</span>
                <span>₹60</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Color</h3>
              <p className="text-gray-500">+ Choose</p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Size</h3>
              <p className="text-gray-500">+ Choose</p>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg hover:shadow-lg transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover mb-4 rounded-md"
                />
                <h3 className="font-semibold mb-1">{product.name}</h3>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-600">{product.price}</p>
                  <button className="flex items-center bg-black text-white text-xs px-3 py-1 rounded hover:bg-gray-800">
                    <img src={cartIcon} alt="Cart" className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
