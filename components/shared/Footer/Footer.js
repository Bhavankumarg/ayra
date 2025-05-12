// components/Footer.js
import Image from "next/image";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#08245C] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="#"
            className="bg-white p-2 rounded text-black hover:opacity-80"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="bg-white p-2 rounded text-black hover:opacity-80"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="bg-white p-2 rounded text-black hover:opacity-80"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="bg-white p-2 rounded text-black hover:opacity-80"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
        </div>

        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Image src="/arya-logo-2.svg" alt="AYRA Logo" width={120} height={40} />
        </div>

        {/* Terms and Privacy */}
        <div className="text-sm space-x-2">
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
