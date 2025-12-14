import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('your-image.jpg')" }}>
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Empowering Change, One Step at a Time
        </motion.h1>
        <motion.p
          className="mt-4 text-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Join us in making a difference today.
        </motion.p>
        <motion.button
          className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Donate Now
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
