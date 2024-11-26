// src/pages/admin/UserLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavigation from './UserNavigation';

// Remove user-related imports since we're disabling the check for now
// import { useSelector } from 'react-redux';

const UserLayout = () => {
  // Temporarily disable user check for development
  // const { user } = useSelector((state) => state.auth);
  
  // Disable this block during development
  // if (!user || user.role !== 'user') {
  //   return <Navigate to="/login" />;
  // }
  
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start">
      <header className="lg:w-1/5 sm:w-2/5 w-full">
        <UserNavigation/>
      </header>
      <main className="p-8 bg-white w-full">
        {/* <p>For user content</p> */}
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;