// eslint-disable-next-line no-unused-vars
import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-10">
        <div className=" mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Contact</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Head Office</h2>
              <p>Amanat Business Center</p>
              <p>Plot: Executive, 2, 29, Banani DOHS,</p>
              <p>Dhaka-1212, Bangladesh</p>
              <p>Phone Number: 02 1239831231</p>
              <p>Fax: 02 2131002</p>
              <button className="mt-2 text-blue-500 hover:underline">
                Call Now
              </button>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Share Department</h2>
              <p>Amanat Business Center</p>
              <p>29, Dilhusha C/A</p>
              <p>1&2nd Floor, Dhaka-1000</p>
              <p>Phone Number: +802-123983831</p>
              <button className="mt-2 text-blue-500 hover:underline">
                Download App
              </button>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Subject</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter Subject"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Your Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter Name"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Contact Number</label>
              <input
                type="tel"
                className="w-full p-2 border rounded"
                placeholder="Enter Contact Number"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Your Location</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter Your Location"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Type Your Message"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" w-1/2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Projects;
