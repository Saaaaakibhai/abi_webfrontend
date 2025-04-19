import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const User = () => {
  // Sample user data (Account creation dates)
  const userData = [
    { name: "John Doe", created: "2023-05-15" },
    { name: "Jane Smith", created: "2023-05-18" },
    { name: "Ali Khan", created: "2023-05-20" },
    { name: "Mary Lee", created: "2023-06-01" },
    { name: "Robert Brown", created: "2023-06-05" },
    // Add more users as needed
  ];

  // Process the user data to count the number of accounts created per day
  const creationDates = userData.map((user) => new Date(user.created).toLocaleDateString());
  const dateCount = {};

  // Count the number of accounts created on each date
  creationDates.forEach((date) => {
    dateCount[date] = (dateCount[date] || 0) + 4;
  });

  // Sort the dates
  const sortedDates = Object.keys(dateCount).sort((a, b) => new Date(a) - new Date(b));

  // Prepare data for the ogive graph (cumulative frequency)
  const cumulativeData = sortedDates.reduce((acc, date, index) => {
    const cumulativeSum = index === 0 ? dateCount[date] : acc[index - 1] + dateCount[date];
    acc.push(cumulativeSum);
    return acc;
  }, []);

  // Chart.js data structure
  const data = {
    labels: sortedDates,
    datasets: [
      {
        label: 'Accounts Created',
        data: cumulativeData,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Chart.js options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Ogive Graph - User Account Creation Over Time',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Cumulative Accounts Created',
        },
        min: 0,
      },
    },
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Account Creation Ogive Graph</h2>
      <div className="w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default User;
