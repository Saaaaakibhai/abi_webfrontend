import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { useDispatch } from "react-redux"; // Import useDispatch for Redux actions
import { logout } from "../../features/authSlice"; // Import logout action

const UserNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Dispatch the logout action to clear the user state in Redux
    dispatch(logout());

    // Optionally clear any persisted user data (e.g., from localStorage)
    localStorage.removeItem("user"); // Remove user data from localStorage

    // Reload the page to update the Navbar and other components
    window.location.reload(); // Force a page reload

    // After the reload, redirect to login page
    setTimeout(() => {
      window.location.href = "/login"; // Redirect to login after logout and reload
    }, 0);
  };

  return (
    <div className="space-y-5 bg-white p-8 md:h-[calc(100vh-98px)] flex flex-col justify-between">
      <div>
        {/* Header section */}
        <div className="mb-5">
          <p className="font-semibold">User</p>
        </div>
        <hr />

        {/* Navigation Links in a column */}
        <ul className="space-y-5 pt-5">
          <li>
            <NavLink
              to="/userdashboard"
              end
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              User Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/userdashboard/profileinfo"
              end
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              ProfileInfo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/userdashboard/ongoingproject"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Ongoing Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/userdashboard/completedproject"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Completed Project
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

export default UserNavigation;
