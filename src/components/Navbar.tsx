import React from 'react';
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <header className="bg-gray-800 shadow-sm sticky top-0 z-50"> 
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-white">Aryan Rajoria</span> 
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium"> 
              About
            </a>
            <a href="#experience" className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium"> 
              Experience
            </a>
            <a href="#education" className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium"> 
              Education
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium"> 
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium"> 
              Contact
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> 
              <Menu className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;