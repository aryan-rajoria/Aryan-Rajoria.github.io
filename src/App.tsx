import React from 'react';
import { Menu } from 'lucide-react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        <About />
        <Projects />
        <Experience />
        <Education />
        {/* <Skills /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;