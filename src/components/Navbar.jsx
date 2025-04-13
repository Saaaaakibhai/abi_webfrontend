import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";

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
  const [userImage, setUserImage] = useState("https://via.placeholder.com/150");
  const dispatch = useDispatch();

  useEffect(() => {
    const profileImageFromCookie = Cookies.get("profileImage");
    const userFromLocalStorage = localStorage.getItem('user');
    if (profileImageFromCookie || userFromLocalStorage) {
      setIsAuthenticated(true);
      const userData = JSON.parse(userFromLocalStorage);
      setUserImage(userData?.profileImage || profileImageFromCookie);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    Cookies.remove("profileImage");
    localStorage.removeItem('user');
    dispatch(setUser(null)); // Dispatch a logout action to Redux store
    setIsAuthenticated(false);
    setUserImage("https://via.placeholder.com/150");
    window.location.href = '/login'; // Redirect to the login page
  };

  return (
    <header className="bg-[#185519] py-3 text-white">
      <nav className="container mx-auto flex justify-between px-5 h-12">
        <a href="/" className="relative -translate-y-9">
          <img
            src="13.png"
            alt="Logo"
            className="h-32 w-auto object-contain rounded-2xl"
          />
        </a>

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
              <div className="flex items-center space-x-4">
                <NavLink to="/userdashboard">
                  <img
                    src={userImage}
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover cursor-pointer"
                  />
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/login" className="text-sm hover:underline">
                Login
              </NavLink>
            )}
          </li>
        </ul>

        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-4 bg-[#22cc5d] rounded text-[#0e0e0e] hover:bg-[#0e0e0e] hover:text-[#22cc5d]"
          >
            {isMenuOpen ? <IoClose className="size-6" /> : <MdMenuOpen className="size-6" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
