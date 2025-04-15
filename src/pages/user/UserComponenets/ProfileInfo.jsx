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

  const [previewImage, setPreviewImage] = useState(
    localStorage.getItem("userImage") || "https://via.placeholder.com/200"
  );

  // Fetch user profile data from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = Cookies.get("token"); // Adjust according to your token management
        const response = await fetch("http://localhost:5000/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setFormData({
            firstName: data.firstName || "",
            lastName: data.lastName || "",
            phoneNumber: data.phoneNumber || "",
            bio: data.bio || "",
            facebookURL: data.facebookURL || "",
            xURL: data.xURL || "",
            linkedinURL: data.linkedinURL || "",
            displayName: data.displayName || "",
            userName: data.userName || "",
          });

          const savedImage = localStorage.getItem("userImage");
          setPreviewImage(savedImage || data.userimage || "https://via.placeholder.com/200");
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;
        localStorage.setItem("userImage", base64Image);
        setPreviewImage(base64Image); // Update preview
      };

      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  const handleImageSave = async () => {
    const token = Cookies.get("token");
    const base64Image = localStorage.getItem("userImage");

    if (!base64Image) {
      alert("No image found to save.");
      return;
    }

    const formData = new FormData();
    formData.append("userimage", base64Image);

    try {
      const response = await fetch("http://localhost:5000/user/profile-image", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Image updated successfully!");
      } else {
        console.error(data.message);
        alert("Failed to update image.");
      }
    } catch (error) {
      console.error("Error saving image:", error);
      alert("Image Saved Successfully!");
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
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
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
                <label className="block text-gray-700 font-semibold">
                  {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </label>
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
