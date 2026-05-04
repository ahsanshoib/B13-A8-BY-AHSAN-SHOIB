import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a3557] text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
        
        {/* Left: Footer Info & Social */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold"></h2>
          <p className="text-gray-300 text-sm max-w-xs">
            Discover premium tiles for every space. Quality craftsmanship, timeless designs.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <Link href="" target="_blank" aria-label="Facebook">
              <FaFacebook className="text-2xl  transition-colors cursor-pointer" />
            </Link>
            <Link href="" target="_blank" aria-label="Instagram">
              <FaInstagram className="text-2xl transition-colors cursor-pointer" />
            </Link>
            <Link href="" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl transition-colors cursor-pointer" />
            </Link>
            <Link href="" target="_blank" aria-label="YouTube">
              <FaYoutube className="text-2xl transition-colors cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Right: Contact Us Form */}
        {/* <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <input
            type="text"
            placeholder="Name"
            className="input input-sm bg-white text-gray-800 placeholder-gray-400 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-sm bg-white text-gray-800 placeholder-gray-400 w-full"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="textarea textarea-sm bg-white text-gray-800 placeholder-gray-400 w-full resize-none"
          />
          <div className="flex justify-end">
            <button className="btn btn-sm bg-white text-[#1a3557] font-semibold hover:bg-gray-100 border-none">
              Send
            </button>
          </div>
        </div> */}

      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800 mt-10 pt-4 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} LoveTiles. All rights reserved.
      </div>
    </footer>
  );
}