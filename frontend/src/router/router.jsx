import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import AboutUs from "../pages/home/miniPage/AboutUs";
import Projects from "../pages/home/miniPage/Projects";
import Contacts from "../pages/home/miniPage/Contacts";
import Invest from "../pages/home/miniPage/Invest";

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
    ],
  },
]);

export default router;
