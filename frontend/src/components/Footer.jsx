// Footer.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#272c31] text-white py-6 mt-0.5">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="#"
            className="hover:text-[#22cc5d] transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-[#22cc5d] transition-colors duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-[#22cc5d] transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-[#22cc5d] transition-colors duration-300"
          >
            LinkedIn
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
