import React from 'react';
import { Menu } from 'lucide-react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gray-900">Your Name</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#experience" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Experience
              </a>
              <a href="#education" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Education
              </a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Skills
              </a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
            <div className="flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <Menu className="block h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;