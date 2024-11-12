import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AboutUs from "../pages/home/miniPage/AboutUs";
import Projects from "../pages/home/miniPage/Projects";
import Contacts from "../pages/home/miniPage/Contacts";
import Invest from "../pages/home/miniPage/Invest";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import AdminLayout from "../pages/admin/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      { path: "/project", element: <Projects /> },
      { path: "/contact", element: <Contacts /> },
      { path: "/invest", element: <Invest /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "dashboard",
        element: <AdminLayout />, //it will be protected by the admin: use private routes here
        children: [
          {
            path: "",
            element: <DashBoard />,
          },
          {
            path: "Invest",
            element: <Invest />,
          },
          {
            path: "ManageInvest",
            element: <ManageInvest />,
          },
          {
            path: "User",
            element: <User />,
          },
        ],
      },
    ],
  },
]);

export default router;
