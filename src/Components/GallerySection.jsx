import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const images = [
    'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg',
    'https://images.pexels.com/photos/2004152/pexels-photo-2004152.jpeg',
    'https://images.pexels.com/photos/3735436/pexels-photo-3735436.jpeg',
    'https://images.pexels.com/photos/2872320/pexels-photo-2872320.jpeg',
    'https://images.pexels.com/photos/2789932/pexels-photo-2789932.jpeg',
    'https://images.pexels.com/photos/2434004/pexels-photo-2434004.jpeg',
    'https://images.pexels.com/photos/3580554/pexels-photo-3580554.jpeg',
    'https://images.pexels.com/photos/2493607/pexels-photo-2493607.jpeg',
    'https://images.pexels.com/photos/2958232/pexels-photo-2958232.jpeg',
    'https://images.pexels.com/photos/3681005/pexels-photo-3681005.jpeg',
    'https://images.pexels.com/photos/2958232/pexels-photo-2958232.jpeg',
    'https://images.pexels.com/photos/3681005/pexels-photo-3681005.jpeg',
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <h2 className="text-4xl font-semibold text-center mb-12">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={image}
              alt={`Gallery image ${index}`}
              className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-0 transition-all duration-300"></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white font-bold text-lg text-center">Project {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
