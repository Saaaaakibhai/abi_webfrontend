import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
// navbar all pages
const navLists = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Invest", path: "/invest" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="bg-accent py-6 border">
      {/** container mx-auto flex justify-between px-5 */}
      <nav className="container mx-auto flex justify-between px-5 h-12">
        {/* Logo */}
        <a href="/" className="relative -translate-y-4 ">
          <img
            src="ABI.png"
            alt=""
            className=" h-20 w-auto object-contain  rounded-2xl bg-black "
          />
        </a>
        <ul className="sm:flex hidden items-center gap-8">
          {navLists.map((list, index) => (
            <li>
              <NavLink
                to={`${list.path}`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : ""
                }
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>

        {/*Toggle menu for navbar*/}
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="felx items-center px-3 py-4 bg-[#22cc5d] rounded  text-[#0e0e0e] hover:bg-[#0e0e0e] hover:text-[#22cc5d]  "
          >
            {isMenuOpen ? (
              <IoClose className="size-6" />
            ) : (
              <MdMenuOpen className="size-6" />
            )}
          </button>
        </div>
      </nav>

      {/*mobile view of menu items */}
      {isMenuOpen && (
        <ul className="fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-[#22cc5d] text-[#0e0e0e] font-bold shadow-sm z-50">
          {navLists.map((list, index) => (
            <li className="mt-5 px-4">
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to={`${list.path}`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : ""
                }
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          <li className="mt-5 px-4">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
