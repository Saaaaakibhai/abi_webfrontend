import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import AboutUs from "../pages/home/miniPage/AboutUs";
import Projects from "../pages/home/miniPage/Projects";
import Contacts from "../pages/home/miniPage/Contacts";
import Invest from "../pages/home/miniPage/Invest";

const router = createBrowserRouter([
  {
    path: "/abi_webfrontend/", // Base path for the app
    element: <App />,
    children: [
      {
        path: "/", // This is now a relative path
        element: <Home />,
      },
      {
        path: "aboutus", // Relative path
        element: <AboutUs />,
      },
      {
        path: "project", // Relative path
        element: <Projects />,
      },
      {
        path: "contact", // Relative path
        element: <Contacts />,
      },
      {
        path: "invest", // Relative path
        element: <Invest />,
      },
    ],
  },
]);

export default router;
