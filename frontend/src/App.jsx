import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsTicker from "./components/Newsticker";

function App() {
  return (
    <>
      <div className="bg-bgPrimary min-h-screen flex flex-col">
        <Navbar />
        <NewsTicker />
        <div className="flex-grow">
          <Outlet />
        </div>
        <footer className="mt-auto">Footer</footer>
      </div>
    </>
  );
}

export default App;
