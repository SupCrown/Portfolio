import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">
        Welcome to My World 🌍
      </h1>
      <p className="text-center text-lg md:text-2xl mb-12">
        que faire de cette page ???
      </p>
      <div className="space-x-4">
        <Link
          to="/about"
          className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg text-xl transition duration-300 transform hover:bg-blue-500 hover:text-white hover:scale-105 shadow-lg">
          About Me
        </Link>
        <Link
          to="/projects"
          className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-500 rounded-lg text-xl transition duration-300 transform hover:bg-purple-500 hover:text-white hover:scale-105 shadow-lg">
          My Projects
        </Link>
      </div>
    </div>
  );
};

export default Home;
