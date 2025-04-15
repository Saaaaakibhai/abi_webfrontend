import React, { useState, useEffect } from "react";

const Userdashboard = () => {
  const [activeTab, setActiveTab] = useState("Recharge");
  const [rechargeHistory, setRechargeHistory] = useState([]);
  const [investHistory, setInvestHistory] = useState([]);
  const [withdrawHistory, setWithdrawHistory] = useState([]);

  useEffect(() => {
    const storedRechargeHistory = JSON.parse(localStorage.getItem("rechargeHistory")) || [];
    const storedInvestHistory = JSON.parse(localStorage.getItem("investHistory")) || [];
    const storedWithdrawHistory = JSON.parse(localStorage.getItem("withdrawHistory")) || [];
    setRechargeHistory(storedRechargeHistory);
    setInvestHistory(storedInvestHistory);
    setWithdrawHistory(storedWithdrawHistory);
  }, []);

  const renderHistory = (history) => {
    return history.length > 0 ? (
      history.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center text-lg border rounded-lg p-4 bg-gray-50 shadow-sm mb-2"
        >
          <div className="font-semibold text-gray-700">{index + 1}.</div>
          <div className="flex-1 text-center">
            <span className="font-semibold">Amount:</span> {item.amount}
          </div>
          <div className="flex-1 text-center">
            <span className="font-semibold">Date:</span> {item.date}
          </div>
        </div>
      ))
    ) : (
      <div className="text-center py-8 text-gray-500">No history found</div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">User Dashboard</h2>

        <div className="flex justify-around mb-6 border-b">
          {["Recharge", "Invest", "Withdrawal"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-lg font-semibold ${
                activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-4">
          {activeTab === "Recharge" && renderHistory(rechargeHistory)}
          {activeTab === "Invest" && renderHistory(investHistory)}
          {activeTab === "Withdrawal" && renderHistory(withdrawHistory)}
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
