import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import AboutUs from "../pages/home/miniPage/AboutUs";
import Projects from "../pages/home/miniPage/Projects";
import Contacts from "../pages/home/miniPage/Contacts";
import Invest from "../pages/home/miniPage/Invest";

const router = createBrowserRouter([
  {
    path: "/abi_webfrontend/", // Include the base URL here
    element: <App />,
    children: [
      {
        path: "/", // Home route (remains the same)
        element: <Home />,
      },
      {
        path: "aboutus", // Removed leading slash
        element: <AboutUs />,
      },
      {
        path: "project", // Removed leading slash
        element: <Projects />,
      },
      {
        path: "contact", // Removed leading slash
        element: <Contacts />,
      },
      {
        path: "invest", // Removed leading slash
        element: <Invest />,
      },
    ],
  },
]);

export default router;
