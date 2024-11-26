// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate after submission

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [minInvestment, setMinInvestment] = useState("");
  const [deadline, setDeadline] = useState("");
  const [projectImages, setProjectImages] = useState([]);
  const navigate = useNavigate();

  // Handle file change (for images)
  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      // Convert each file to base64
      const promises = Array.from(files).map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result); // This gives you the base64 string
          reader.onerror = reject;
          reader.readAsDataURL(file); // Convert to base64
        });
      });

      // Once all images are converted to base64, update the state
      Promise.all(promises)
        .then((base64Images) => setProjectImages(base64Images))
        .catch((error) =>
          console.error("Error converting files to base64:", error)
        );
    }
  };

  // Get the existing projects from localStorage or default to an empty array
  const getStoredProjects = () => {
    const storedProjects = localStorage.getItem("ProductsDB");
    return storedProjects ? JSON.parse(storedProjects) : [];
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new project object
    const newProject = {
      id: Date.now(), // Use current timestamp for a unique ID
      title,
      description,
      category,
      minInvestment: parseFloat(minInvestment),
      deadline,
      projectImages, // Storing base64 images
    };

    // Get existing projects from localStorage
    const existingProjects = getStoredProjects();

    // Add the new project to the existing projects
    const updatedProjects = [...existingProjects, newProject];

    // Save the updated projects array back to localStorage
    localStorage.setItem("ProductsDB", JSON.stringify(updatedProjects));

    // Reset form fields after submission
    setTitle("");
    setDescription("");
    setCategory("");
    setMinInvestment("");
    setDeadline("");
    setProjectImages([]);

    // Navigate to the dashboard or another page after successful submission
    navigate("/dashboard");

    // Optionally log the updated ProductsDB to console
    console.log(updatedProjects);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Project</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Project Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Project Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter project title"
          />
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter project description"
            rows="4"
          />
        </div>

        {/* Project Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Select category</option>
            <option value="fashion">Fashion</option>
            <option value="technology">Technology</option>
            <option value="real-estate">Real Estate</option>
            <option value="education">Education</option>
          </select>
        </div>

        {/* Minimum Investment */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Minimum Investment
          </label>
          <input
            type="number"
            value={minInvestment}
            onChange={(e) => setMinInvestment(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter minimum investment"
          />
        </div>

        {/* Investment Deadline */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Investment Deadline
          </label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Project Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Project Images
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            multiple
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <div className="mt-3">
            {projectImages.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {projectImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Project Image ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
