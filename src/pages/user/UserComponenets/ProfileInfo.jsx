import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const ProfileInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    bio: "",
    facebookURL: "",
    xURL: "",
    linkedinURL: "",
    displayName: "",
    userName: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("https://via.placeholder.com/200");

  useEffect(() => {
    const savedImage = Cookies.get("profileImage");
    if (savedImage) {
      setPreviewImage(savedImage);
    } else {
      setPreviewImage("https://via.placeholder.com/200");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleImageSave = () => {
    if (profileImage) {
      const savedImageUrl = previewImage; // Use the preview URL as saved image temporarily
      Cookies.set("profileImage", savedImageUrl, { expires: 7 });
      localStorage.setItem('user', JSON.stringify({ profileImage: savedImageUrl })); // Save to localStorage as well
      alert("Image has been saved successfully!");
    } else {
      alert("No image selected to save.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-6">Update Your Profile Information</h2>

        {/* Profile Photo */}
        <div className="relative w-32 h-32 mb-6">
          <img
            src={previewImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <label className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-full cursor-pointer">
            📷
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
        </div>

        {/* Save Image Button */}
        <div className="mb-6">
          <button
            onClick={handleImageSave}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Save Image
          </button>
        </div>

        {/* Form Fields */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["firstName", "lastName", "userName", "phoneNumber"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 font-semibold">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={field}
                />
              </div>
            ))}
          </div>

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

          <div>
            <label className="block text-gray-700 font-semibold">Display name publicly as</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;
