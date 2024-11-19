// src/pages/admin/AdminNavigation.jsx
import React from "react";
import AdminImg from "../../assets/admin.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch if using Redux
import { logout } from "../../features/authSlice"; // Import your logout action if defined

const AdminNavigation = () => {  
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    // Optionally, redirect to login or home after logout
    window.location.href = "/login"; // Redirect to login after logout
  };

  return (
    <div className="space-y-5 bg-white p-8 md: h-[calc(100vh-98px)] flex flex-col justify-between">
      <div>
        {/* Header section */}
        <div className="mb-5">
          <img src={AdminImg} alt="" className="size-14" />
          <p className="font-semibold">Admin</p>
        </div>
        <hr />
        
        {/* Navigation Links in a column */}
        <ul className="space-y-5 pt-5">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
<<<<<<< HEAD
              to="/dashboard/addproject"
              end
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Add Project
            </NavLink>
          </li>
          <li>
            <NavLink
=======
>>>>>>> 18f83c5ed09d32a59168e8a958968d1db14e71d8
              to="/dashboard/handleinvest"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Invest
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageinvest"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Manage-Invest
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/user"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              User
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className="mb-3">
        <hr className="mb-3" />
        <button
          onClick={handleLogout}
          className="text-white bg-red-500 font-medium px-5 py-1 rounded sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavigation;
