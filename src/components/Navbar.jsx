import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 10px scroll triggers solid navbar
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between md:justify-center relative">
        
        {/* Left Menu - Desktop */}
        <ul className="hidden md:flex space-x-6 absolute left-4 text-gray-700 font-medium">
          <li className="group relative cursor-pointer">
            Wedding
            <ul className="absolute top-8 left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-40 z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Traditional</li>
              <li className="px-4 py-2 hover:bg-gray-100">Candid</li>
              <li className="px-4 py-2 hover:bg-gray-100">Destination</li>
            </ul>
          </li>
          <li className="group relative cursor-pointer">
            Kids
            <ul className="absolute top-8 left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-40 z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Birthday</li>
              <li className="px-4 py-2 hover:bg-gray-100">Newborn</li>
              <li className="px-4 py-2 hover:bg-gray-100">Outdoor</li>
            </ul>
          </li>
          <li>Portfolio</li>
        </ul>

        {/* Center Logo */}
        <div className="text-2xl font-extrabold tracking-tight text-gray-900">studio.in</div>

        {/* Right Menu - Desktop */}
        <ul className="hidden md:flex space-x-4 absolute right-4 items-center text-gray-700 font-medium">
          <li>About</li>
          <li>Contact</li>
          <li>
            <button className="px-3 py-1.5 border border-gray-800 rounded hover:bg-gray-100">Get a Quote</button>
          </li>
          <li>
            <button className="px-3 py-1.5 bg-black text-white rounded hover:bg-gray-800">Book Now</button>
          </li>
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-6 shadow-md">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li>
              <details>
                <summary className="cursor-pointer">Wedding</summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li>Traditional</li>
                  <li>Candid</li>
                  <li>Destination</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer">Kids</summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li>Birthday</li>
                  <li>Newborn</li>
                  <li>Outdoor</li>
                </ul>
              </details>
            </li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <button className="w-full py-2 border border-gray-800 rounded hover:bg-gray-100">Get a Quote</button>
            </li>
            <li>
              <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">Book Now</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
