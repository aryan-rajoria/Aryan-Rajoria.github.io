import React from 'react';
import { Menu } from 'lucide-react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    // <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
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
    // </ThemeProvider>
  );
}

export default App;