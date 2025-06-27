// src/components/Navbar.jsx
import { useState } from "react";
import { FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["HOME", "APPAREL", "OUR STORY", "BLOGS", "LOOKBOOK", "CONTACT"];

  return (
  <div className="bg-[#1e1e1e] text-white w-full fixed top-0 left-0 z-50">
      <div className="text-sm text-center py-2 border-b border-gray-700">
        One Purchase = One Plant Planted
      </div>
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        <div className="text-2xl font-bold">AEVO</div>
        <ul className="hidden md:flex space-x-6 text-sm">
          {navLinks.map((link, idx) => (
            <li key={idx} className="hover:text-gray-400 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
        <div className="flex space-x-4 text-lg items-center">
          <FaUser className="cursor-pointer" />
          <FaSearch className="cursor-pointer" />
          <FaShoppingBag className="cursor-pointer" />
          <div className="md:hidden">
            {isOpen ? (
              <FaTimes onClick={() => setIsOpen(false)} className="cursor-pointer" />
            ) : (
              <FaBars onClick={() => setIsOpen(true)} className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#1e1e1e] px-6 py-4 space-y-4 border-t border-gray-700">
          {navLinks.map((link, idx) => (
            <div
              key={idx}
              className="text-sm hover:text-gray-400 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
