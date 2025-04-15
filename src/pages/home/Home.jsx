import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import  anima  from "../../assets/business-growth.json"; 
const Home = () => {

  const [showInvestModal, setShowInvestModal] = useState(false);
  const [investAmount, setInvestAmount] = useState(0);
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState(0);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleInvestClick = () => {
    setShowInvestModal(true);
  };
  const handleRechargeClick = () => {
    setShowRechargeModal(true);
  };
  const handleWithdrawClick = () => {
    setShowWithdrawModal(true);
  };

  const handleInvestSubmit = () => {
    if (investAmount > 0) {
      const investHistory = JSON.parse(localStorage.getItem("investHistory")) || [];
      investHistory.push({
        amount: investAmount,
        date: new Date().toLocaleDateString(),
      });
      localStorage.setItem("investHistory", JSON.stringify(investHistory));
      setInvestAmount(0);
      setShowInvestModal(false);
    }
  };

  const handleRechargeSubmit = () => {
    if (rechargeAmount > 0) {
      const rechargeHistory = JSON.parse(localStorage.getItem("rechargeHistory")) || [];
      rechargeHistory.push({
        amount: rechargeAmount,
        date: new Date().toLocaleDateString(),
      });
      localStorage.setItem("rechargeHistory", JSON.stringify(rechargeHistory));
      setRechargeAmount(0);
      setShowRechargeModal(false);
    }
  };

  const handleWithdrawSubmit = () => {
    if (withdrawAmount > 0) {
      const withdrawHistory = JSON.parse(localStorage.getItem("withdrawHistory")) || [];
      withdrawHistory.push({
        amount: withdrawAmount,
        date: new Date().toLocaleDateString(),
      });
      localStorage.setItem("withdrawHistory", JSON.stringify(withdrawHistory));
      setWithdrawAmount(0);
      setShowWithdrawModal(false);
    }
  };


  return (
    <div>
      {/* Recharge Modal */}
      {showRechargeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Recharge</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Select Amount (BDT)</label>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[500, 1000, 2000, 5000, 10000, 20000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setRechargeAmount(amount)}
                    className={`py-2 px-4 rounded ${
                      rechargeAmount === amount ? "bg-green-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={rechargeAmount}
                onChange={(e) => setRechargeAmount(Number(e.target.value))}
                placeholder="Or enter custom amount"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowRechargeModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleRechargeSubmit}
                disabled={!rechargeAmount}
                className={`px-4 py-2 rounded ${
                  rechargeAmount ? "bg-green-500 text-white" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Recharge
              </button>
            </div>
          </div>
        </div>
      )}

      {showInvestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Invest</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Select Amount (BDT)</label>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[500, 1000, 2000, 5000, 10000, 20000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setInvestAmount(amount)}
                    className={`py-2 px-4 rounded ${
                      investAmount === amount ? "bg-green-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={investAmount}
                onChange={(e) => setInvestAmount(Number(e.target.value))}
                placeholder="Or enter custom amount"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowInvestModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleInvestSubmit}
                disabled={!investAmount}
                className={`px-4 py-2 rounded ${
                  investAmount ? "bg-green-500 text-white" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Invest
              </button>
            </div>
          </div>
        </div>
      )}

{showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Withdraw</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Select Amount (BDT)</label>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[500, 1000, 2000, 5000, 10000, 20000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setWithdrawAmount(amount)}
                    className={`py-2 px-4 rounded ${
                      withdrawAmount === amount ? "bg-green-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                placeholder="Or enter custom amount"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowWithdrawModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleWithdrawSubmit}
                disabled={!withdrawAmount}
                className={`px-4 py-2 rounded ${
                  withdrawAmount ? "bg-green-500 text-white" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Invest
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#32c768] w-full p-8" style={{ backgroundImage: "url('doller.jpg')", backgroundSize: "cover" }}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="w-72 h-40 text-black font-bold bg-orange-800 flex items-center justify-center text-center text-2xl rounded-lg">
              0 ৳
            </div>
          </div>

          <div className="flex flex-col items-end space-y-4">
            <button className="relative bg-[#f3f5f4] text-[#0e0e0e] px-4 py-2 h-12 w-40 flex items-center justify-center rounded font-bold overflow-hidden group"
              onClick={handleInvestClick}
            >
              <span className="relative z-10">Invest</span>
              <span className="absolute inset-0 bg-[#22cc5d] transition-all duration-500 ease-out transform scale-x-0 origin-center group-hover:scale-x-100"></span>
            </button>

            <button
              className="relative bg-[#f3f5f4] text-[#0e0e0e] px-4 py-2 h-12 w-40 flex items-center justify-center rounded font-bold overflow-hidden group"
              onClick={handleRechargeClick}
            >
              <span className="relative z-10">Recharge</span>
              <span className="absolute inset-0 bg-[#22cc5d] transition-all duration-500 ease-out transform scale-x-0 origin-center group-hover:scale-x-100"></span>
            </button>

            <button className="relative bg-[#f3f5f4] text-[#0e0e0e] px-4 py-2 h-12 w-40 flex items-center justify-center rounded font-bold overflow-hidden group"
              onClick={handleWithdrawClick}
            >
              <span className="relative z-10">Withdraw</span>
              <span className="absolute inset-0 bg-[#22cc5d] transition-all duration-500 ease-out transform scale-x-0 origin-center group-hover:scale-x-100"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f9f4] w-full p-8 border-t-4 border-t-green-400">
        <div>
          <p className="text-[#22cc5d] text-5xl mb-9 text-center font-semibold">
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
        <div>
          <p className="text-[#22cc5d] text-5xl mb-9 text-center font-semibold">
            <br />
           Choose The Right Path Now
          </p>
        </div>
        <div className="bg-[#f2f9f4] py-16 flex justify-center items-center">
        <div className="w-1/2 max-w-lg">
          <Player
            autoplay
            loop
            src= {anima} // Adjust the path as needed
            style={{ height: "300px", width: "300px" }}
          />
          <h3 className="text-center text-2xl font-semibold mt-6 text-gray-800">
            Grow Your Business with Us!
          </h3>
          <p className="text-center text-gray-600 mt-2">
            We provide the best investment opportunities to accelerate your
            financial growth and achieve your business goals.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
