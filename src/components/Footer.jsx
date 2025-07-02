import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../assets/aveo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm font-light px-6 md:px-16 lg:px-28 py-20 font-inter">
      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-16">
        {/* Logo + Contact */}
        <div className="space-y-6 w-full lg:w-1/4">
          <img src={logo} alt="Aveo Logo" className="w-500 h-500" />
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <span>Kanyakumari, Telangana - 500073</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>+91 6374926377 </span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>hey@aveo.in</span>
            </div>
          </div>
        </div>

        {/* Shop Links */}
        <div className="w-full lg:w-1/4">
          <h3 className="uppercase text-gray-400 font-semibold mb-4 text-sm">Shop</h3>
          <ul className="text-gray-300 space-y-2 columns-2 gap-x-12">
            <li>Shop By Season</li>
            <li>Summer</li>
            <li>Autumn/Winter</li>
            <li>Top Wear</li>
            <li>Tees</li>
            <li>Shirts</li>
            <li>Hoodies</li>
            <li>Tanks</li>
            <li>Sweatshirts</li>
            <li>Kurtas</li>
            <li>Bomber Jackets</li>
            <li>Co-ord Sets</li>
            <li>Bottom Wear</li>
            <li>Jeans</li>
            <li>Trousers</li>
            <li>Joggers</li>
            <li>Sweatpants</li>
            <li>Accessories</li>
            <li>Caps</li>
            <li>Bottles</li>
            <li>Socks</li>
            <li>Umbrellas</li>
          </ul>
        </div>

        {/* Company Info + Social */}
        <div className="space-y-10 w-full lg:w-1/4">
          <div>
            <h3 className="uppercase text-gray-400 font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-gray-400 font-semibold mb-4 text-sm">Follow Us</h3>
            <div className="flex gap-4 text-white text-lg">
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
              <FaPinterestP />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-gray-500 text-xs text-center mt-20 border-t border-gray-800 pt-6">
        ©2025 Aveo. All rights reserved.
      </div>
    </footer>
  );
}
