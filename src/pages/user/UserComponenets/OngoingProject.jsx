import React from 'react';
import { FaTicketAlt } from 'react-icons/fa'; // Importing a ticket icon

const ongoingProjects = [
  {
    id: 1,
    title: 'Organic Vegetable Farming',
    invested: '৳ 50,000',
    expectedReturn: '৳ 65,000',
  },
  {
    id: 2,
    title: 'Handcrafted Furniture',
    invested: '৳ 1,00,000',
    expectedReturn: '৳ 1,20,000',
  },
];

const OngoingProject = () => {
  return (
    <div className="bg-cyan-100 min-h-screen w-full p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Ongoing Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ongoingProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center">
              <FaTicketAlt className="text-red-600 mr-3 animate-pulse" /> {/* Ticker icon */}
              <h2 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
            </div>
            <p className="text-gray-600 mt-2">
              <span className="font-bold">Invested:</span> {project.invested}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Expected Return:</span> {project.expectedReturn}
            </p>
            {/* Moving ticker */}
            <div className="relative mt-4 h-6 overflow-hidden">
              <div className="absolute w-full animate-marquee text-gray-600 font-medium">
              📈 Invest now 👇 for guaranteed returns! 🚀📈
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            50% { transform: translateX(-50%); }
            100% { transform: translateX(100%); }
          }
          .animate-marquee {
            animation: marquee 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default OngoingProject;
