// Footer.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-[#272c31] text-white py-6 mt-0.5">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="#"
            className="hover:text-[#22cc5d] transition-colors duration-300 flex items-center"
          >
            <FaFacebookF className="mr-1" /> Facebook
          </a>
          <a
            href="#"
            className="hover:text-[#22cc5d] transition-colors duration-300 flex items-center"
          >
            <FaTwitter className="mr-1" /> Twitter
          </a>
          <a
            href="#"
            className="hover:text-[#22cc5d] transition-colors duration-300 flex items-center"
          >
            <FaInstagram className="mr-1" /> Instagram
          </a>
          <a
            href="#"
            className="hover:text-[#22cc5d] transition-colors duration-300 flex items-center"
          >
            <FaLinkedinIn className="mr-1" /> LinkedIn
          </a>
        </div>
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Amanat Business Invest. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
