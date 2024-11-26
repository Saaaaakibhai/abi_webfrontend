// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Load projects from localStorage when the component mounts
  useEffect(() => {
    const storedProjects = localStorage.getItem("ProductsDB");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  const renderImage = (image) => {
    // Check if the image is a valid base64 string or URL
    if (typeof image === "string" && image.startsWith("data:image")) {
      return image; // Return base64 string directly
    } else if (typeof image === "string" && image.startsWith("http")) {
      return image; // Return URL directly
    } else if (image instanceof File) {
      // If it's a File object, convert it to base64 URL
      return URL.createObjectURL(image);
    }
    return "default-image.jpg"; // Return default image if none found
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
                ? renderImage(project.projectImages[0])
                : "default-image.jpg"
            }
            alt="Project Image"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
            <p className="text-sm text-green-600">
              Min Investment: ${project.minInvestment}
            </p>
            <p className="text-sm text-gray-500">
              Deadline: {project.deadline}
            </p>
            <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-md">
              See Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

Projects.jsx;

// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   // Load projects from localStorage when the component mounts
//   useEffect(() => {
//     const storedProjects = localStorage.getItem("ProductsDB");
//     if (storedProjects) {
//       setProjects(JSON.parse(storedProjects));
//     }
//   }, []);

//   // Function to delete all projects
//   const deleteAllProjects = () => {
//     localStorage.removeItem("ProductsDB");
//     setProjects([]); // Reset the state to empty array to update the UI
//   };

//   // Function to render project images
//   const renderImage = (image) => {
//     // If the image is a File object (uploaded image), create a URL for it
//     if (image instanceof File) {
//       return URL.createObjectURL(image);
//     }
//     // If it's a URL (string), return it as is
//     if (typeof image === "string" && image.startsWith("http")) {
//       return image;
//     }
//     // Return a default image if no image is found
//     return "default-image.jpg";
//   };

//   return (
//     <div>
//       {/* Button to delete all projects */}
//       <button
//         onClick={deleteAllProjects}
//         className="mt-3 bg-red-600 text-white py-2 px-4 rounded-md"
//       >
//         Delete All Projects
//       </button>

//       <div className="grid grid-cols-3 gap-6 mt-6">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//           >
//             <img
//               src={
//                 project.projectImages[0]
//                   ? renderImage(project.projectImages[0]) // Display the first image
//                   : "default-image.jpg" // Use a default image if no project image
//               }
//               alt="Project Image"
//               className="w-full h-32 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold text-lg">{project.title}</h3>
//               <p className="text-sm text-gray-600">{project.description}</p>
//               <p className="text-sm text-green-600">
//                 Min Investment: ${project.minInvestment}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Deadline: {project.deadline}
//               </p>
//               <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-md">
//                 See Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
