import React, { useEffect, useState } from "react";
import ProjectModal from "../../admin/Componenets/ProjectModal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedProjects = localStorage.getItem("ProductsDB");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={
              project.projectImages[0]
                ? project.projectImages[0]
                : "default-image.jpg"
            }
            alt="Project"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
            <p className="text-sm text-green-600">
              Min Investment: ৳ {project.minInvestment} Taka
            </p>
            <p className="text-sm text-gray-500">
              Deadline: {project.deadline}
            </p>
            <button
              className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => handleOpenModal(project)}
            >
              See Details
            </button>
          </div>
        </div>
      ))}

      {/* Render the modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default Projects;
