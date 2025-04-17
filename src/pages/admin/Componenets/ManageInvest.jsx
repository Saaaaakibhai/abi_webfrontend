import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ManageInvest = () => {
  // Example investment data
  const investmentData = [
    {
      id: 1,
      userName: "John Doe",
      amount: 10000,
    },
    {
      id: 2,
      userName: "Jane Smith",
      amount: 20000,
    },
    {
      id: 3,
      userName: "Ali Khan",
      amount: 15000,
    },
  ];

  // Project list
  const projectList = [
    "Farming",
    "Land",
    "Gold",
    "Fashion",
    "Technology",
    "Real Estate",
    "Education",
    "Healthcare",
    "Food",
    "Transportation",
    "Entertainment",
  ];

  // State to manage the visibility of the project list and the selected project
  const [visibleProjectId, setVisibleProjectId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Handle investing in a project
  const handleInvest = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg relative">
      <h2 className="text-2xl font-bold mb-4">Manage Investments</h2>
      
      {/* Show pop-up if a project is selected */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm z-30">
            <p className="text-lg font-semibold">You have successfully invested in {selectedProject}!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {investmentData.map((investment) => (
          <div
            key={investment.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* User Name and Invested Amount */}
            <div>
              <p className="text-lg font-semibold">{investment.userName}</p>
              <p className="text-sm text-gray-600">
                Invested Amount: ৳ {investment.amount.toLocaleString()}
              </p>
            </div>

            {/* Button to show projects */}
            <div
              className="relative"
              onMouseEnter={() => setVisibleProjectId(investment.id)}
              onMouseLeave={() => setVisibleProjectId(null)}
            >
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-blue-600">
                Available Projects
              </button>
              {visibleProjectId === investment.id && (
                <div className="absolute left-0 top-full mt-2 w-52 bg-white p-2 rounded-lg shadow-lg border border-gray-200 z-10">
                  <ul className="space-y-1">
                    {projectList.map((project, index) => (
                      <li
                        key={index}
                        className="text-gray-800 hover:text-blue-500 cursor-pointer"
                        onClick={() => handleInvest(project)}
                      >
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                <FaCheckCircle />
                <span>Invest Now</span>
              </button>
              <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                <FaTimesCircle />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Background blur effect */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}
    </div>
  );
};

export default ManageInvest;
