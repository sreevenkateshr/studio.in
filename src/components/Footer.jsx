import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaPinterestP 
} from "react-icons/fa";
import studioinlogo from "../assets/studioinlogo.png"; // Your logo

export default function Footer() {
  return (
    <footer className="bg-black text-white font-inter text-sm px-6 md:px-16 lg:px-28 py-16">
      <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-16">

        {/* Logo + Contact */}
        <div className="w-full lg:w-1/4 space-y-6">
          <img src={studioinlogo} alt="Studio Logo" className="w-56 h-auto" />
          <div className="space-y-3 text-gray-400">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-red-500" />
              <span>Kanyakumari, Tamil Nadu - 629001</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              <span>+91 6374926377</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <span>contact@myphotography.com</span>
            </div>
          </div>
        </div>

        {/* Weddings Section */}
        <div className="w-full lg:w-1/4">
          <h3 className="uppercase text-gray-300 font-semibold mb-4 tracking-wide">Weddings</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/wedding-photography/outdoor" className="hover:text-pink-400 transition">Outdoor Wedding Photography</a></li>
            <li><a href="/wedding-photography/muslim" className="hover:text-pink-400 transition">Muslim Wedding Photography</a></li>
            <li><a href="/wedding-photography/christian" className="hover:text-pink-400 transition">Christian Wedding Photography</a></li>
            <li><a href="/wedding-photography/brahmin" className="hover:text-pink-400 transition">Brahmin Wedding Photography</a></li>
            <li><a href="/wedding-photography/telugu" className="hover:text-pink-400 transition">Telugu Wedding Photography</a></li>
            <li><a href="/wedding-photography/hindu" className="hover:text-pink-400 transition">Hindu Wedding Photography</a></li>
            <li><a href="/wedding-photography/engagement" className="hover:text-pink-400 transition">Engagement Photography</a></li>
          </ul>
        </div>

        {/* Gallery & Outdoor Section */}
        <div className="w-full lg:w-1/4 space-y-8">
          <div>
            <h3 className="uppercase text-gray-300 font-semibold mb-4 tracking-wide">Gallery</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/gallery" className="hover:text-pink-400 transition">Gallery Home</a></li>
              <li><a href="/gallery-photos/bridal-portraits" className="hover:text-pink-400 transition">Bridal Portraits</a></li>
              <li><a href="/gallery-photos/couple-portraits" className="hover:text-pink-400 transition">Couple Portraits</a></li>
              <li><a href="/gallery-photos/groom-portraits" className="hover:text-pink-400 transition">Groom Portraits</a></li>
              <li><a href="/gallery-photos/rituals" className="hover:text-pink-400 transition">Rituals</a></li>
              <li><a href="/gallery-photos/candid-moments" className="hover:text-pink-400 transition">Candid Moments</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-gray-300 font-semibold mb-4 tracking-wide">Outdoor</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/outdoor-photography/pre-wedding" className="hover:text-pink-400 transition">Pre-wedding Photography</a></li>
              <li><a href="/outdoor-photography/post-wedding" className="hover:text-pink-400 transition">Post-wedding Photography</a></li>
            </ul>
          </div>
        </div>

        {/* Video + Blog + Locations Section */}
        <div className="w-full lg:w-1/4 space-y-8">
          <div>
            <h3 className="uppercase text-gray-300 font-semibold mb-4 tracking-wide">Video</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/wedding-films/candid" className="hover:text-pink-400 transition">Candid Wedding Films</a></li>
              <li><a href="/wedding-films/outdoor" className="hover:text-pink-400 transition">Outdoor Wedding Films</a></li>
              <li><a href="/wedding-films/shortstories" className="hover:text-pink-400 transition">Short Stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-gray-300 font-semibold mb-4 tracking-wide">Latest Blog</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/blog/malayali-wedding-locations" className="hover:text-pink-400 transition">Best Locations for Malayali Weddings</a></li>
              <li><a href="/blog/natural-light-tips" className="hover:text-pink-400 transition">How to Use Natural Light</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-gray-300 font-semibold mb-4 tracking-wide">Locations</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/locations/nagercoil" className="hover:text-pink-400 transition">Nagercoil</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-12 justify-center text-white text-2xl">
        <a href="#" className="hover:text-blue-500 transition transform hover:scale-110"><FaFacebookF /></a>
        <a href="#" className="hover:text-pink-500 transition transform hover:scale-110"><FaInstagram /></a>
        <a href="#" className="hover:text-red-500 transition transform hover:scale-110"><FaYoutube /></a>
        <a href="#" className="hover:text-rose-400 transition transform hover:scale-110"><FaPinterestP /></a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-sm">©2025 StudioIn. All rights reserved.</p>
        <p className="text-sm mt-2 md:mt-0">
          Developed by{" "}
          <a 
            href="https://sreevenkatesh.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent  hover:animate-pulse"
          >
            Sree Venkatesh 
          </a>
        </p>
      </div>
    </footer>
  );
}
