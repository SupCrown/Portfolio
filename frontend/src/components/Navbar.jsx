import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-md z-50">
      <ul className="flex justify-around items-center p-4 text-white">
        <li className="hover:scale-110 transition-transform duration-300">
          <Link to="/" className="font-semibold text-lg">Home</Link>
        </li>
        <li className="hover:scale-110 transition-transform duration-300">
          <Link to="/about" className="font-semibold text-lg">About</Link>
        </li>
        <li className="hover:scale-110 transition-transform duration-300">
          <Link to="/projects" className="font-semibold text-lg">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;