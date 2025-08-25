import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/images/tenlogo.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#3f5660] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="text-xl font-semibold flex items-center gap-2">
          <img
            src={logo}
            alt="AI Academy Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white text-2xl sm:text-3xl font-bold">
            AI-Academy
          </span>
        </div>

        {/* Navigation Links */}
        <div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[#ef5f66] 
          font-medium text-base sm:text-lg text-center"
        >
          <Link to="/courses" className="hover:underline">
            Courses
          </Link>
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/" className="hover:underline">
            About
          </Link>
          <Link to="/" className="hover:underline">
            Playground
          </Link>
          <Link to="/join" className="hover:underline">
            Join
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 sm:gap-6 text-white text-lg sm:text-xl">
          <a href="#" className="hover:text-[#ef5f66]">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#ef5f66]">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#ef5f66]">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[#ef5f66]">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-[#ef5f66]">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
