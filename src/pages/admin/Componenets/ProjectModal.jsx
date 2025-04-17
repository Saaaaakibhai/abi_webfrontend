import React from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-2/3 p-6">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <img
          src={project.projectImages[0]}
          alt="Project"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-gray-600 mb-2">
          <strong>Description:</strong> {project.description}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Category:</strong> {project.category}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Min Investment:</strong> ৳ {project.minInvestment} Taka
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Deadline:</strong> {project.deadline}
        </p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
