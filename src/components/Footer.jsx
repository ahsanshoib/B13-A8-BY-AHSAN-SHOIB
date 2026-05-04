import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a3557] text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Footer Info & Social */}
        <div className="flex flex-col items-center gap-4">
          {/* যদি লোগো বা নাম দিতে চান এখানে দিতে পারেন */}
          <h2 className="text-2xl font-bold"></h2> 
          
          <p className="text-gray-300 text-sm max-w-xs">
            Discover premium tiles for every space. Quality craftsmanship, timeless designs.
          </p>

          <div className="flex justify-center gap-4 mt-2">
            <Link href="#" target="_blank" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-blue-500 transition-colors cursor-pointer" />
            </Link>
            <Link href="#" target="_blank" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-pink-500 transition-colors cursor-pointer" />
            </Link>
            <Link href="#" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl hover:text-blue-400 transition-colors cursor-pointer" />
            </Link>
            <Link href="#" target="_blank" aria-label="YouTube">
              <FaYoutube className="text-2xl hover:text-red-600 transition-colors cursor-pointer" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Border & Copyright */}
      <div className="border-t border-blue-800 mt-10 pt-4 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} LoveTiles. All rights reserved.
      </div>
    </footer>
  );
}