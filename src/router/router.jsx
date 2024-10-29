import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AboutUs from "../pages/home/miniPage/AboutUs";
import Projects from "../pages/home/miniPage/Projects";
import Contacts from "../pages/home/miniPage/Contacts";
import Invest from "../pages/home/miniPage/Invest";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";

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
    ],
  },
]);

export default router;
