import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../assets/aveo.png"; // Update path if different

export default function Footer() {
  return (
    <footer className="bg-black text-white text-xs font-light px-6 md:px-16 lg:px-24 py-14 font-inter">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section - Logo + Address */}
        <div className="space-y-5 w-full lg:w-1/4">
          <img src={logo} alt="Aveo Logo" className="w-100 h-200" />
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1" />
            <span>Hyderabad Telangana 500073</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt />
            <span>+91 9120223335/6/7</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope />
            <span>hey@rwdy.in</span>
          </div>
        </div>

        {/* Middle Section - SHOP */}
        <div className="grid grid-cols-2 gap-8 w-full lg:w-1/2">
          <div>
            <h3 className="uppercase text-gray-400 font-semibold mb-3 text-[13px]">Shop</h3>
            <ul className="space-y-1 text-gray-300">
              <li>SHOP BY SEASON</li>
              <li>SUMMER</li>
              <li>AUTUMN/WINTER</li>
              <li>TOP WEAR</li>
              <li>TEES</li>
              <li>SHIRTS</li>
              <li>HOODIES</li>
              <li>TANKS</li>
              <li>SWEATSHIRTS</li>
              <li>KURTAS</li>
              <li>BOMBER-JACKETS</li>
              <li>CO-ORD SETS</li>
              <li>BOTTOM WEAR</li>
              <li>JEANS</li>
              <li>TROUSERS</li>
              <li>JOGGERS</li>
              <li>SWEATPANTS</li>
              <li>ACCESSORIES</li>
              <li>CAPS</li>
              <li>BOTTLES</li>
              <li>SOCKS</li>
              <li>UMBRELLAS</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 text-gray-300 mt-10 lg:mt-12"></ul>
          </div>
        </div>

        {/* Right Section - COMPANY + SOCIALS */}
        <div className="space-y-10 w-full lg:w-1/4">
          <div>
            <h3 className="uppercase text-gray-400 font-semibold mb-3 text-[13px]">Company</h3>
            <ul className="space-y-1 text-gray-300">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-gray-400 font-semibold mb-3 text-[13px]">Follow Us On</h3>
            <div className="flex gap-4 text-white text-base">
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
              <FaPinterestP />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-gray-500 text-[11px] text-center mt-14">
        ©2025 aveo. All rights reserved
      </div>
    </footer>
  );
}
