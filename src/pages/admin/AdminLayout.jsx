import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";
import(useSelector);
const AdminLayout = () => {
  const [logoutUser] = useLogoutMutation();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };
  const { user } = useSelector((state) => state.auth);
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container mx-auto flex md: flex-row gap-4 items-start justify-start">
      <header className="lg:w-1/5 sm:2/5 w-full">admin Navigation</header>
      <main className="p-8 bg-white w-full">
        <p>For admin content</p>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
