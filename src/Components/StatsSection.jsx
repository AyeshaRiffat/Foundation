import React, { useEffect, useState } from 'react';
import { FaHeart, FaUsers, FaMoneyBillWave, FaHandsHelping } from 'react-icons/fa';

const StatsSection = () => {
  const [donors, setDonors] = useState(0);
  const [volunteers, setVolunteers] = useState(0);
  const [raised, setRaised] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const increment = (setter, value) => {
      let current = 0;
      const interval = setInterval(() => {
        if (current < value) {
          current++;
          setter(current);
        } else {
          clearInterval(interval);
        }
      }, 10);
    };

    increment(setDonors, 100); // Simulate raising donors count to 1200
    increment(setVolunteers, 500); // Simulate raising volunteers count to 500
    increment(setRaised, 300); // Simulate raising amount to $35,000
    increment(setProjects, 8); // Simulate raising the number of projects to 8
  }, []);

  return (
    <div className="bg-green-100 py-16 px-8">
      <h2 className="text-4xl font-semibold text-center mb-12 text-green-700">Our Impact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <FaHeart className="text-green-500 text-4xl mb-4" />
          <h3 className="text-3xl font-bold text-green-700">{donors}</h3>
          <p className="text-lg text-green-500">Donors</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <FaUsers className="text-green-500 text-4xl mb-4" />
          <h3 className="text-3xl font-bold text-green-700">{volunteers}</h3>
          <p className="text-lg text-green-500">Volunteers</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <FaMoneyBillWave className="text-green-500 text-4xl mb-4" />
          <h3 className="text-3xl font-bold text-green-700">${raised}</h3>
          <p className="text-lg text-green-500">Funds Raised</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <FaHandsHelping className="text-green-500 text-4xl mb-4" />
          <h3 className="text-3xl font-bold text-green-700">{projects}</h3>
          <p className="text-lg text-green-500">Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
