import React, { useState } from 'react';

const ProfileInfo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    bio: '',
    facebookURL: '',
    linkedinURL: '',
    displayName: '', // Default display name
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-white shadow-md">
        <div className="p-6 text-xl font-bold text-center">
          Howdy, <span className="text-blue-500">{formData.userName || 'User'}</span>
        </div>
        <ul className="space-y-2">
          {['Dashboard', 'ProfileInfo', 'Onging Project', 'Completed Project','Logout'].map((item) => (
            <li key={item} className="px-6 py-2 hover:bg-blue-100 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </aside> */}

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Settings Header */}
        <h2 className="text-2xl font-semibold mb-6">Settings</h2>

        {/* Profile and Reset Password Tabs */}
        <div className="border-b-2 mb-4">
          <button className="py-2 px-4 border-b-2 border-blue-500 text-blue-500 font-semibold">
            Profile
          </button>
          <button className="py-2 px-4 text-gray-500">Reset Password</button>
        </div>

        {/* Cover Photo Section */}
        <div className="relative mb-8">
          <img
            src="https://via.placeholder.com/700x430"
            alt="Cover"
            className="w-full h-48 object-cover rounded-md"
          />
          <button className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md">
            Update Your Cover Photo
          </button>
        </div>

        {/* Profile Photo */}
        <div className="relative w-32 h-32 mb-6">
          <img
            src="https://via.placeholder.com/200"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <button className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-full">
            📷
          </button>
        </div>

        {/* Form Fields */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 font-semibold">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First Name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 font-semibold">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last Name"
              />
            </div>

            {/* User Name */}
            <div>
              <label className="block text-gray-700 font-semibold">User Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="User Name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-semibold">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Bio Section */}
          <div>
            <label className="block text-gray-700 font-semibold">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write something about yourself..."
              rows="5"
            />
          </div>

          {/* Display Name Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold">Display name publicly as</label>
            <select
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value=""></option>
              {/* Add other options dynamically if needed */}
            </select>
            <p className="text-gray-500 text-sm mt-1">
              The display name is shown in all public fields, such as the author name, instructor name, and student name.
            </p>
          </div>

          {/* Social Media & Website URLs */}
          {[
            { label: 'Facebook URL', name: 'facebookURL', placeholder: 'https://facebook.com/username' },
            { label: 'X URL', name: 'xURL', placeholder: 'https://x.com/username' },
            { label: 'Linkedin URL', name: 'linkedinURL', placeholder: 'https://linkedin.com/in/username' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-gray-700 font-semibold">{field.label}</label>
              <input
                type="url"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={field.placeholder}
              />
            </div>
          ))}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;
