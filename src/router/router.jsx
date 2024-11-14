import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AboutUs from "../pages/home/miniPage/AboutUs";
import Projects from "../pages/home/miniPage/Projects";
import Contacts from "../pages/home/miniPage/Contacts";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Invest from "../pages/home/miniPage/Invest";
import HandleInvest from "../pages/admin/Componenets/HandleInvest";
import ManageInvest from "../pages/admin/Componenets/ManageInvest";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import AdminLayout from "../pages/admin/AdminLayout";
import User from "../pages/admin/adminusers/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/project", element: <Projects /> },
      { path: "/contact", element: <Contacts /> },
      { path: "/invest", element: <Invest /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/dashboard",
        element: <AdminLayout />, // Parent layout for all admin pages
        children: [
          { path: "", element: <Dashboard /> },
          { path: "handleinvest", element: <HandleInvest /> },
          { path: "manageinvest", element: <ManageInvest /> },
          { path: "user", element: <User /> },
        ],
      },
    ],
  },
]);

export default router;
