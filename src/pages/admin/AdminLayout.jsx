// src/pages/admin/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavigation from './AdminNavigation';
// Remove user-related imports since we're disabling the check for now
// import { useSelector } from 'react-redux';

const AdminLayout = () => {
  // Temporarily disable user check for development
  // const { user } = useSelector((state) => state.auth);
  
  // Disable this block during development
  // if (!user || user.role !== 'admin') {
  //   return <Navigate to="/login" />;
  // }
  
  return (
    <>
          <style>
        {`
          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
          .blinking-text {
            animation: blink 1.5s infinite;
          }
        `}
      </style>
    
    <div className="container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start">
      <header className="lg:w-1/5 sm:w-2/5 w-full">
        <AdminNavigation />
      </header>
      <main className="p-8 bg-white w-full">
      <p className="blinking-text">Welcome To Amanat Business Invest Admin Panel</p>
        <Outlet />
      </main>
      </div>
      </>
  );
};

export default AdminLayout;
