import React from "react";

const Home = () => {
  return (
    <div
      className="bg-[#32c768]  container mx-auto mt-8 p-8  "
      style={{
        backgroundImage: "url('doller.jpg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      {/** grid style */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Side - Box */}
        <div>
          <div className="w-72 h-40 text-black font-bold bg-gray-400 flex items-center justify-center text-center text-2xl rounded-lg">
            $NULL
          </div>
          {/* 20px x 20px box */}
        </div>

        {/* Right Side - Buttons */}
        <div className="flex flex-col items-end space-y-4">
          <button className="bg-[#22cc5d] text-[#0e0e0e] px-4 py-2 h-12 w-40 flex items-center justify-center rounded hover:bg-[#0e0e0e] hover:text-[#22cc5d] font-bold transform transition-transform duration-300 hover:scale-105">
            Invest
          </button>
          <button className="bg-[#22cc5d] text-[#0e0e0e] px-4 py-2 h-12 w-40 flex items-center justify-center rounded hover:bg-[#0e0e0e] hover:text-[#22cc5d] font-bold transform transition-transform duration-300 hover:scale-105">
            Withdraw
          </button>
          <button className="bg-[#22cc5d] text-[#0e0e0e] px-4 py-2 h-12 w-40 flex items-center justify-center rounded hover:bg-[#0e0e0e] hover:text-[#22cc5d] font-bold transform transition-transform duration-300 hover:scale-105">
            Recharge
          </button>
        </div>
      </div>
      {/**grid style */}
    </div>
  );
};
export default Home;
