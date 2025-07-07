import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import backgroundImage from './assets/background.jpg';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Navigation Menu */}
      <nav className="bg-blue-600 p-4 text-white flex space-x-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'font-bold underline' : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'font-bold underline' : undefined
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'font-bold underline' : undefined
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'font-bold underline' : undefined
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Page Content */}
      <main className="p-6 bg-white bg-opacity-60">
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
