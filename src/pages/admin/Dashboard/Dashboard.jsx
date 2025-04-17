import React from "react";
import { useSelector } from "react-redux";
import { FiUsers } from "react-icons/fi";
import { TbCoinTaka } from "react-icons/tb";
import { GiProfit } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const Dashboard = () => {
  const { User } = useSelector((state) => state.auth);
  const graphData = [
    { name: "January", Investment: 50000, Profit: 12000 },
    { name: "February", Investment: 70000, Profit: 18000 },
    { name: "March", Investment: 65000, Profit: 15000 },
    { name: "April", Investment: 80000, Profit: 20000 },
  ];
  return (
    <>
      <div className="space-y-6">
        <div className="bg-bgPrimary p-5">
          <h1>Hii..!</h1>
          <p>Welcome to the admin dashboard</p>
          <p>You can manage things here</p>
        </div>

        {/*cards grid [] [] [] []*/}
        <div className="flex flex-col md:flex-row justify-center gap-8 pt-8">
          <div className="bg-indigo-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FiUsers className="size-8 text-indigo-600" />
            <p>4 User</p>
          </div>
          <div className="bg-red-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <TbCoinTaka className="size-8 text-red-400" />
            <p>Invested Money</p>
          </div>
          <div className="bg-lime-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <GiProfit className="size-8 text-lime-500" />
            <p>Profit</p>
          </div>
          <div className="bg-orange-200 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <GoProjectSymlink className="size-8 text-orange-500" />
            <p>Completed Projects</p>
          </div>
        </div>
        {/* for graphs */}
        <div className="pt-5 pb-5">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Monthly Investments and Profits</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={graphData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Investment" fill="#8884d8" />
                <Bar dataKey="Profit" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          </div>
      </div>
    </>
  );
};

export default Dashboard;


