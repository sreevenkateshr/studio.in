import { useState } from "react";
import {
  FaUser,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/aveoblack.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md font-inter">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Aveo Logo" className="h-8 md:h-14" />
        </div>

        {/* Nav Center */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold mx-auto relative">
          <li>
            <Link to="/" className="hover:text-gray-500 transition">
              HOME
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="hover:text-gray-500 cursor-pointer">
              APPAREL
            </span>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg py-2 w-40 z-50">
                <Link
                  to="/collection#tshirt"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  T-Shirt
                </Link>
                <Link
                  to="/collection#shirt"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Shirt
                </Link>
                <Link
                  to="/collection#hoodie"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Hoodie
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/lookbook" className="hover:text-gray-500 transition">
              LOOKBOOK
            </Link>
          </li>
          <li>
            <Link to="/our-story" className="hover:text-gray-500 transition">
              OUR STORY
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-gray-500 transition">
              BLOGS
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-500 transition">
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Icons + Mobile Toggle */}
        <div className="flex items-center gap-4 text-lg">
          <FaSearch className="cursor-pointer hover:text-gray-600" />
          <FaUser className="cursor-pointer hover:text-gray-600" />
          <div className="relative">
            <FaShoppingBag className="cursor-pointer hover:text-gray-600" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">
              0
            </span>
          </div>
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold transition-all duration-300">
          <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="/collection#tshirt" onClick={() => setIsOpen(false)}>T-Shirt</Link>
          <Link to="/collection#shirt" onClick={() => setIsOpen(false)}>Shirt</Link>
          <Link to="/collection#hoodie" onClick={() => setIsOpen(false)}>Hoodie</Link>
          <Link to="/lookbook" onClick={() => setIsOpen(false)}>LOOKBOOK</Link>
          <Link to="/our-story" onClick={() => setIsOpen(false)}>OUR STORY</Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)}>BLOGS</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
        </div>
      )}
    </div>
  );
}
