import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice'; // Adjust the path as needed
import { FaUserCircle } from "react-icons/fa"; // Default user icon

const navLists = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Invest", path: "/invest" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userImage, setUserImage] = useState(""); // Holds user image URL
  
  const dispatch = useDispatch(); // Initialize dispatch

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setIsAuthenticated(true);
      setUserImage(userData.profileImage || "https://via.placeholder.com/150");
    } else {
      setIsAuthenticated(false);
    }
  }, []); // Only run on mount

  // Logout function
  const logout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("user");

    // Dispatch to Redux to clear user state
    dispatch(setUser(null));

    // Update state to reflect logout
    setIsAuthenticated(false);

    // Optionally redirect to login page
    window.location.href = "/login";
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#527853] py-3 text-white">
      <nav className="container mx-auto flex justify-between px-5 h-12">
        {/* Logo */}
        <a href="/" className="relative -translate-y-9">
          <img
            src="13.png"
            alt="Logo"
            className="h-32 w-auto object-contain rounded-2xl"
          />
        </a>

        {/* Desktop menu */}
        <ul className="sm:flex hidden items-center gap-8">
          {navLists.map((list, index) => (
            <li key={index}>
              <NavLink
                to={list.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          <li>
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <img
                  src={userImage}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <button onClick={logout} className="text-white">
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>

        {/* Toggle menu for mobile */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-4 bg-[#22cc5d] rounded text-[#0e0e0e] hover:bg-[#0e0e0e] hover:text-[#22cc5d]"
          >
            {isMenuOpen ? (
              <IoClose className="size-6" />
            ) : (
              <MdMenuOpen className="size-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile view of menu items */}
      {isMenuOpen && (
        <ul className="fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-[#22cc5d] text-[#0e0e0e] space-y-5">
          {navLists.map((list, index) => (
            <li key={index}>
              <NavLink
                to={list.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          <li>
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <img
                  src={userImage}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <button onClick={logout} className="text-white">
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
