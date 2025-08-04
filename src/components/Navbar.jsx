import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/aveoblack.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [weddingOpen, setWeddingOpen] = useState(false);
  const [kidsOpen, setKidsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md font-spectral">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Aveo Logo" className="h-8 md:h-14" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold mx-auto relative">
          <li><Link to="/" className="hover:text-gray-500 transition">HOME</Link></li>
          <li><Link to="/about" className="hover:text-gray-500 transition">ABOUT US</Link></li>

          {/* Wedding Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setWeddingOpen(true)}
            onMouseLeave={() => setWeddingOpen(false)}
          >
            <span className="hover:text-gray-500 cursor-pointer">WEDDING</span>
            {weddingOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg py-2 w-48 z-50">
                <Link to="/wedding/hindu" className="block px-4 py-2 hover:bg-gray-100">Hindu</Link>
                <Link to="/wedding/christian" className="block px-4 py-2 hover:bg-gray-100">Christian</Link>
                <Link to="/wedding/muslim" className="block px-4 py-2 hover:bg-gray-100">Muslim</Link>
                <Link to="/wedding/pre" className="block px-4 py-2 hover:bg-gray-100">Pre Wedding</Link>
                <Link to="/wedding/post" className="block px-4 py-2 hover:bg-gray-100">Post Wedding</Link>
                <Link to="/wedding/outdoor" className="block px-4 py-2 hover:bg-gray-100">Outdoor</Link>
              </div>
            )}
          </li>

          {/* Kids Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setKidsOpen(true)}
            onMouseLeave={() => setKidsOpen(false)}
          >
            <span className="hover:text-gray-500 cursor-pointer">KIDS</span>
            {kidsOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg py-2 w-40 z-50">
                <Link to="/kids/birthday" className="block px-4 py-2 hover:bg-gray-100">Birthday</Link>
                <Link to="/kids/indoor" className="block px-4 py-2 hover:bg-gray-100">Indoor</Link>
                <Link to="/kids/outdoor" className="block px-4 py-2 hover:bg-gray-100">Outdoor</Link>
              </div>
            )}
          </li>

          <li><Link to="/blogs" className="hover:text-gray-500 transition">BLOGS</Link></li>
          <li><Link to="/gallery" className="hover:text-gray-500 transition">GALLERY</Link></li>
          <li><Link to="/contact" className="hover:text-gray-500 transition">CONTACT US</Link></li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="border px-4 py-1 rounded hover:bg-gray-100 text-sm">Get a Quote</button>
          <button className="bg-black text-white px-4 py-1 rounded text-sm hover:bg-gray-800">Book Now</button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes onClick={() => setIsOpen(false)} className="text-xl cursor-pointer" />
          ) : (
            <FaBars onClick={() => setIsOpen(true)} className="text-xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center space-y-6 text-xl font-semibold font-spectral">
          <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link>
          <details className="text-center">
            <summary className="cursor-pointer">WEDDING</summary>
            <div className="flex flex-col gap-2 mt-2">
              <Link to="/wedding/hindu" onClick={() => setIsOpen(false)}>Hindu</Link>
              <Link to="/wedding/christian" onClick={() => setIsOpen(false)}>Christian</Link>
              <Link to="/wedding/muslim" onClick={() => setIsOpen(false)}>Muslim</Link>
              <Link to="/wedding/pre" onClick={() => setIsOpen(false)}>Pre Wedding</Link>
              <Link to="/wedding/post" onClick={() => setIsOpen(false)}>Post Wedding</Link>
              <Link to="/wedding/outdoor" onClick={() => setIsOpen(false)}>Outdoor</Link>
            </div>
          </details>
          <details className="text-center">
            <summary className="cursor-pointer">KIDS</summary>
            <div className="flex flex-col gap-2 mt-2">
              <Link to="/kids/birthday" onClick={() => setIsOpen(false)}>Birthday</Link>
              <Link to="/kids/indoor" onClick={() => setIsOpen(false)}>Indoor</Link>
              <Link to="/kids/outdoor" onClick={() => setIsOpen(false)}>Outdoor</Link>
            </div>
          </details>
          <Link to="/blogs" onClick={() => setIsOpen(false)}>BLOGS</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>GALLERY</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
          <button className="border px-6 py-2 rounded hover:bg-gray-100">Get a Quote</button>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Book Now</button>
        </div>
      )}
    </div>
  );
}
