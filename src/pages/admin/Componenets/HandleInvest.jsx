import React from "react";

const HandleInvest = () => {
  // Example data for demonstration purposes
  const investmentData = [
    {
      id: 1,
      userName: "Mahedi Hasan",
      amount: 10000,
      projectName: "Green Farming",
      date: "2025-04-01",
    },
    {
      id: 2,
      userName: "Paul Smith",
      amount: 20000,
      projectName: "Gold Investment",
      date: "2025-04-10",
    },
    {
      id: 3,
      userName: "Ali Khan",
      amount: 15000,
      projectName: "Tech Startup",
      date: "2025-04-15",
    },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Investment Details</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">User Name</th>
            <th className="border border-gray-300 px-4 py-2">Amount Invested</th>
            <th className="border border-gray-300 px-4 py-2">Project Name</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {investmentData.map((investment) => (
            <tr key={investment.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{investment.userName}</td>
              <td className="border border-gray-300 px-4 py-2">
                ৳ {investment.amount.toLocaleString()} Taka
              </td>
              <td className="border border-gray-300 px-4 py-2">{investment.projectName}</td>
              <td className="border border-gray-300 px-4 py-2">{investment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HandleInvest;
