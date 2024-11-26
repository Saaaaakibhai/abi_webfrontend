import React, { useState } from 'react';

const Userdashboard = () => {
  const [activeTab, setActiveTab] = useState('Recharge'); // Default tab

  // Dummy data for demonstration
  const data = {
    Recharge: {
      amount: '5000 BDT',
      projectName: 'Cow and Milk',
      date: '10-10-2024',
    },
    Invest: {
      amount: '5000 BDT',
      projectName: 'Cow and Milk',
      date: '10-10-2024',
    },
    Income: {
      amount: '5000 BDT',
      projectName: 'Cow and Milk',
      date: '10-10-2024',
    },
    Withdrawal: {
      amount: '5000 BDT',
      projectName: 'Cow and Milk',
      date: '10-10-2024',
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">User Dashboard</h2>
        
        {/* Tab Navigation */}
        <div className="flex justify-around mb-6 border-b">
          {['Recharge', 'Invest', 'Income', 'Withdrawal'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-lg font-semibold ${
                activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {/* Data Row */}
          <div className="flex justify-between items-center text-lg border rounded-lg p-4 bg-gray-50 shadow-sm">
            {/* Serial Number */}
            <div className="font-semibold text-gray-700">1.</div>
            
            {/* Amount */}
            <div className="flex-1 text-center">
              <span className="font-semibold">Amount:</span> {data[activeTab].amount}
            </div>
            
            {/* Project Name */}
            <div className="flex-1 text-center">
              <span className="font-semibold">Project Name:</span> {data[activeTab].projectName}
            </div>
            
            {/* Date */}
            <div className="flex-1 text-center">
              <span className="font-semibold">Date:</span> {data[activeTab].date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
