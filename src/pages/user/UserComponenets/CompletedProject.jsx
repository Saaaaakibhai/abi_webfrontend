import React from 'react';
import milkimage from '../../../image/milk.jpg';
import goat from '../../../image/goat.jpg';
import cow from '../../../image/Brahman-cow.jpg';
import SelwarKamij from '../../../image/SelwarKamij.jpg';
import panjabi from '../../../image/panjabi.jpg';
import book from '../../../image/book.jpg';
import glass from '../../../image/glass.jpg';
import raincoat from '../../../image/raincoat.jpg';
import bike from '../../../image/bike.jpg';

const projects = [
  {
    id: 1,
    title: 'Dairy Framing',
    photo: milkimage,
    invested: '৳ 10,000',
    returned: '৳ 12,500',
  },
  {
    id: 2,
    title: 'Goat For Export Business',
    photo: goat,
    invested: '৳ 8,0000',
    returned: '৳ 9,2000',
  },
  {
    id: 3,
    title: 'Brahman Imported Cow',
    photo: cow,
    invested: '৳ 15,0000',
    returned: '৳ 18,0000',
  },
  {
    id: 4,
    title: 'Pak-Indo Selwar Kamij',
    photo: SelwarKamij,
    invested: '৳ 5,000',
    returned: '৳ 6,000',
  },
  {
    id: 5,
    title: 'Panjabi Collections',
    photo: panjabi,
    invested: '৳ 20,000',
    returned: '৳ 25,000',
  },
  {
    id: 6,
    title: 'Old Books',
    photo: book,
    invested: '৳ 7,500',
    returned: '৳ 9,000',
  },
  {
    id: 7,
    title: 'Eye Glasses',
    photo: glass,
    invested: '৳ 12,000',
    returned: '৳ 14,500',
  },
  {
    id: 8,
    title: 'Premium Raincoat',
    photo: raincoat,
    invested: '৳ 9,000',
    returned: '৳ 10,800',
  },
  {
    id: 9,
    title: 'Gxp 125cc Bike',
    photo: bike,
    invested: '৳ 6,00000',
    returned: '৳ 7,20000',
  },
];

const CompletedProject = () => {
  return (
    <div className="bg-green-200 min-h-screen w-full p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Completed Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-3 hover:scale-105 duration-300"
          >
            <img
              src={project.photo}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-1">
                <span className="font-bold">Invested:</span> {project.invested}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Returned:</span> {project.returned}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProject;
