import React from "react";
import { useNavigate } from "react-router-dom";



const Invest = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/project");
  };
  return (
    <div className="mb-1 bg-gray-100 min-h-screen p-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600 mb-4 animate-fade-in-down">Invest in Amanot Business Invest</h1>
        <p className="text-lg text-gray-700">Discover our investment plans and how you can make money with us.</p>
      </div>

      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Investment Categories */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
          <h2 className="text-xl font-semibold text-green-600 mb-2">Green</h2>
          <p className="text-gray-600">Farming, Plants, Trees</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
          <h2 className="text-xl font-semibold text-amber-800 mb-2">Brown</h2>
          <p className="text-gray-600">Land, Wood</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
          <h2 className="text-xl font-semibold text-amber-500 mb-2">Gold</h2>
          <p className="text-gray-600">Gold</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
          <h2 className="text-xl font-semibold text-stone-500 mb-2">Silver</h2>
          <p className="text-gray-600">Electric, Tech</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
          <h2 className="text-xl font-semibold text-slate-100 mb-2">White</h2>
          <p className="text-gray-600">Running Business, Shares, Startups</p>
        </div>
      </div>

      {/* How do we make money */}
      <div className=" mb-10 bg-[#f2f9f4] w-full p-8 border-t-4 border-t-green-400">
        <h2 className="text-2xl font-bold text-green-600 mb-4">How We Make Money</h2>
        <p className="text-gray-700">At Amanot Business Invest, we generate revenue through strategic investments in high-growth sectors like farming, land, gold, tech, and startups. We use our expertise to ensure optimal returns on investments.</p>
        <h2 className="text-2xl font-bold text-green-600 mb-4 animate-fade-in-down">How Clients Return Earnings</h2>
        <p className="text-gray-700">Our clients receive their returns based on the performance of the investments they choose. Returns are paid monthly or quarterly, depending on the investment type, and can be withdrawn via bank or mobile money.</p>
        <h2 className="text-2xl font-bold text-green-600 mb-4">How Users Can Invest</h2>
        <ul className="text-gray-700 list-disc pl-6">
          <li>Mobile: Use our mobile app to make quick and easy investments.</li>
          <li>Web: Invest through our secure online platform.</li>
          <li>Agents: Contact our agents for hands-on assistance.</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-600 mb-4">Company Charges</h2>
        <p className="text-gray-700">We charge a small percentage of the profit generated, ranging from 1% to 5% based on the investment category and the amount invested.</p>
      </div>
      <div className="mb-10 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-600 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md">
            <summary className="cursor-pointer text-lg font-semibold">
              How can I start investing?
            </summary>
            <p className="text-gray-700 mt-2">
              You can start by signing up on our platform, selecting your preferred investment category, and making your first deposit via mobile, web, or agent.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md">
            <summary className="cursor-pointer text-lg font-semibold">
              What is the minimum investment amount?
            </summary>
            <p className="text-gray-700 mt-2">
              The minimum investment amount depends on the category. It ranges from 500tk to 5,00,000tk.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md">
            <summary className="cursor-pointer text-lg font-semibold">
              How secure is my investment?
            </summary>
            <p className="text-gray-700 mt-2">
              We ensure the security of your investments through rigorous market analysis, expert guidance, and compliance with international financial regulations.
            </p>
          </details>
        </div>
      </div>
      <div className="mb-10 bg-[#f9fafb] p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-green-600 mb-6">What Our Clients Say</h2>
        <div className="flex overflow-x-auto space-x-4">
          <div className="p-6 bg-white shadow-md rounded-lg flex-shrink-0 w-80">
            <p className="text-gray-700 mb-4">
              "Investing with ABI has been the best financial decision of my life! Highly recommended."
            </p>
            <h3 className="text-lg font-bold text-green-600">- Ayesha Rahman</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg flex-shrink-0 w-80">
            <p className="text-gray-700 mb-4">
              "I love the transparency and excellent customer support. Great returns too!"
            </p>
            <h3 className="text-lg font-bold text-green-600">- Tanvir Ahmed</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg flex-shrink-0 w-80">
            <p className="text-gray-700 mb-4">
              "ABI made investing simple and stress-free. I'm already seeing positive results."
            </p>
            <h3 className="text-lg font-bold text-green-600">- Maria Hossain</h3>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white text-center py-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Wealth?</h2>
        <p className="text-lg mb-6">Join thousands of satisfied clients investing with ABI.</p>
        <button
          className="bg-white text-green-600 font-bold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
          onClick={handleNavigate}
        >
          Start Investing Now
        </button>
      </div>
    </div>
    

  );
};

export default Invest;