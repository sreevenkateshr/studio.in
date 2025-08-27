import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import studioinlogo from "../assets/studioinlogo.png"; // Replace with your logo path

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Left Menu - Desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {/* Wedding Dropdown */}
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setOpenDropdown("wedding")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1">
              Wedding <ChevronDown size={16} />
            </div>
            {openDropdown === "wedding" && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-44 z-50 animate-fade-in">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/wedding/traditional">Traditional</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/wedding/candid">Candid</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/wedding/destination">Destination</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Kids - Just a Direct Link (NO dropdown) */}
          <li className="hover:text-black">
            <Link to="/kidspage">Kids</Link>
          </li>

          <li className="hover:text-black">
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img
              src={studioinlogo}
              alt="Studio Logo"
              className="h-20 md:h-24 lg:h-28 w-auto max-w-full transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Right Menu - Desktop */}
        <ul className="hidden md:flex space-x-4 items-center text-gray-700 font-medium">
          <li className="hover:text-black">
            <Link to="/Aboutus">About</Link>
          </li>
          <li className="hover:text-black">
            <Link to="/Aboutus">Blogs</Link>
          </li>
          <li className="hover:text-black">
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <button className="px-4 py-2 border border-gray-800 rounded-lg hover:bg-gray-100 transition">
              Get a Quote
            </button>
          </li>
          <li>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Book Now
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-6 shadow-md animate-slide-down">
          <ul className="space-y-4 text-gray-700 font-medium">
            {/* Wedding Accordion */}
            <li>
              <details>
                <summary className="cursor-pointer flex items-center justify-between">
                  Wedding
                </summary>
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/wedding/traditional"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Traditional
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wedding/candid"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Candid
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wedding/destination"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Destination
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Kids Direct Link */}
            <li>
              <Link to="/kidspage" onClick={() => setIsMobileMenuOpen(false)}>
                Kids
              </Link>
            </li>

            <li>
              <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/Aboutus" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/Aboutus" onClick={() => setIsMobileMenuOpen(false)}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/Contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <button className="w-full py-2 border border-gray-800 rounded-lg hover:bg-gray-100 transition">
                Get a Quote
              </button>
            </li>
            <li>
              <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
