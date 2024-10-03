// eslint-disable-next-line no-unused-vars
import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="bg-[#32c768] container mx-auto p-8  "
        style={{
          backgroundImage: "url('doller.jpg')",
          backgroundSize: "cover",
        }}
      >
        {/** Buttons grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Side - Box */}
          <div>
            <div className="w-72 h-40 text-black font-bold bg-gray-400 flex items-center justify-center text-center text-2xl rounded-lg">
              $NULL
            </div>
          </div>

          {/* Right Box - Buttons */}
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
      </div>
      {/**Our projects container Grid */}
      <div className=" bg-[#272c31] container mx-auto p-8 border-t-4 border-t-green-400">
        <div>
          <p className="text-[#22cc5d] text-5xl mb-9 text-center">
            Our Projects
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/*Project  1*/}
          <div
            className="shadow-lg rounded-lg p-6 text-center opacity-50 group transition-opacity duration-300 hover:opacity-100"
            style={{
              backgroundImage: "url('irani.jpg')",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-[#444444] font-bold text-xl mb-2 transition-opacity duration-300 group-hover:opacity-100">
              Irani Bazar
            </h3>
            <p className="text-[#444444]  transition-opacity duration-300 group-hover:opacity-100 opacity-80">
              Information about card 1 Information about card 1 Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Modi in odit
              repellat, explicabo commodi iste maiores ipsum dolor deserunt
              debitis. In, quam mollitia. Aspernatur quo, illum dolorum
              consequuntur perspiciatis maiores!
            </p>
          </div>

          {/*Project  1*/}
          <div
            className="shadow-lg rounded-lg p-6 text-center opacity-50 group transition-opacity duration-300 hover:opacity-100"
            style={{
              backgroundImage: "url('smart.jpg')",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-[#444444]  font-bold text-xl mb-2 transition-opacity duration-300 group-hover:opacity-100">
              Smart Life
            </h3>
            <p className="text-[#444444] transition-opacity duration-300 group-hover:opacity-100 opacity-80">
              Information about card 1 Information about card 1 Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Modi in odit
              repellat, explicabo commodi iste maiores ipsum dolor deserunt
              debitis. In, quam mollitia. Aspernatur quo, illum dolorum
              consequuntur perspiciatis maiores!
            </p>
          </div>
          {/*Project 2 */}
          <div
            className="shadow-lg rounded-lg p-6 text-center opacity-50 group transition-opacity duration-300 hover:opacity-100"
            style={{
              backgroundImage: "url('money_bangla.jpg')",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-[#444444] font-bold text-xl mb-2 transition-opacity duration-300 group-hover:opacity-100">
              Money BD
            </h3>
            <p className="text-[#444444] transition-opacity duration-300 group-hover:opacity-100 opacity-80">
              Information about card 1 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi in odit repellat, explicabo commodi iste
              maiores ipsum dolor deserunt debitis. In, quam mollitia.
              Aspernatur quo, illum dolorum consequuntur perspiciatis maiores!
            </p>
          </div>

          {/*Project 3 */}
          <div
            className="shadow-lg rounded-lg p-6 text-center opacity-50 group transition-opacity duration-300 hover:opacity-100"
            style={{
              backgroundImage: "url('vertex.jpg')",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-[#444444] font-bold text-xl mb-2 transition-opacity duration-300 group-hover:opacity-100">
              Vertex News
            </h3>
            <p className="text-[#444444]  transition-opacity duration-300 group-hover:opacity-100 opacity-80">
              Information about card 1 Information about card 1 Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Modi in odit
              repellat, explicabo commodi iste maiores ipsum dolor deserunt
              debitis. In, quam mollitia. Aspernatur quo, illum dolorum
              consequuntur perspiciatis maiores!
            </p>
          </div>
          {/*Project 4 */}
          <div
            className="shadow-lg rounded-lg p-6 text-center opacity-50 group transition-opacity duration-300 hover:opacity-100"
            style={{
              backgroundImage: "url('real_estate.jpg')",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-[#444444]  font-bold text-xl mb-2 transition-opacity duration-300 group-hover:opacity-100">
              Real Estate BD
            </h3>
            <p className="text-[#444444]  transition-opacity duration-300 group-hover:opacity-100 opacity-80">
              Information about card 1 Information about card 1 Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Modi in odit
              repellat, explicabo commodi iste maiores ipsum dolor deserunt
              debitis. In, quam mollitia. Aspernatur quo, illum dolorum
              consequuntur perspiciatis maiores!
            </p>
          </div>

          {/*Project 5 */}
          <div
            className="shadow-lg rounded-lg p-6 text-center opacity-50 group transition-opacity duration-300 hover:opacity-100"
            style={{
              backgroundImage: "url('dorkari.png')",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-[#444444]  font-bold text-xl mb-2 transition-opacity duration-300 group-hover:opacity-100">
              Dorkari LTD.
            </h3>
            <p className="text-[#444444]  transition-opacity duration-300 group-hover:opacity-100 opacity-80">
              Information about card 1 Information about card 1 Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Modi in odit
              repellat, explicabo commodi iste maiores ipsum dolor deserunt
              debitis. In, quam mollitia. Aspernatur quo, illum dolorum
              consequuntur perspiciatis maiores!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
