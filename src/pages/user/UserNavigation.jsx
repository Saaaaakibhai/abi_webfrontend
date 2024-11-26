import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch if using Redux
import { logout } from "../../features/authSlice";

const UserNavigation = () => {  
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
              {/* <img src={UserImg} alt="" className="size-14" /> */}
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
                  Onging Project
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
    