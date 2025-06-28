import { useState } from "react";
import {
  FaUser,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/aveoblack.png"; // Make sure this image exists

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["HOME", "SHIRT", "SHOP", "SHORTCODES", "BLOG", "CONTACT US"];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md font-inter">
      {/* 🔔 Offer Marquee Banner */}
      <div className="bg-yellow-100 text-red-600 text-xs font-semibold py-2 text-center">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          Limited Time Offer: Get Flat 50% OFF on All T-Shirts & Hoodies — Grab Yours Now!
        </marquee>
      </div>

      {/* 🔳 Main Nav */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* 🍔 Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes
              onClick={() => setIsOpen(false)}
              className="text-xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setIsOpen(true)}
              className="text-xl cursor-pointer"
            />
          )}
        </div>

        {/* 🧭 Desktop Nav Left */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.slice(0, 3).map((link, idx) => (
            <li
              key={idx}
              className="hover:text-gray-500 cursor-pointer transition-colors duration-200"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* 🖼️ Logo Centered */}
        <img src={logo} alt="Aveo Logo" className="h-8 md:h-10 mx-auto" />

        {/* 🔘 Right Icons */}
        <div className="flex items-center gap-4 text-lg">
          <FaSearch className="cursor-pointer hover:text-gray-600" />
          <FaUser className="cursor-pointer hover:text-gray-600" />
          <div className="relative">
            <FaShoppingBag className="cursor-pointer hover:text-gray-600" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>

      {/* 📱 Fullscreen Mobile Nav */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center space-y-6 text-xl font-semibold transition-all duration-300">
          {navLinks.map((link, idx) => (
            <div
              key={idx}
              className="hover:text-gray-500 cursor-pointer"
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
