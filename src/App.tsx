import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import des icônes GitHub et LinkedIn
import { motion } from "framer-motion";


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu mobile (hamburger)

  return (
    <div className="flex w-full h-full " id="main-div">
      {/* Sidebar */}
      <div className="small  w-2/5 bg-gray-900 text-white p-6 flex flex-col justify-evenly">
        {/* Nom & Présentation */}
        <motion.div 
  initial={{ x: -100, opacity: 0 }}  // Commence hors de l'écran à gauche
  animate={{ x: 0, opacity: 1 }}     // Slide vers la droite avec une opacité qui augmente
  transition={{ duration: 0.5, ease: "easeOut" }} 
>
<motion.h1 
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
           className="  !text-lg sm:!text-5xl">Fabrice Hendrikx
           </motion.h1>
          <p className="text-gray-400 !text-lg sm:!text-3xl mt-2">
            Full Stack Developper
          </p>
          <p className="text-gray-400">I build modern, responsive, and beautiful web applications</p>
        
        </motion.div>
        {/* Navigation */}
        <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8 sidebar">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                🏠 Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                👤 About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-300">
                📁 Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                📧 Contact
              </Link>
            </li>
          </ul>
        </motion.nav>

         {/* Social Links */}
         <div className="mt-8 flex space-x-4 justify-center">
          <a href="https://github.com/ton-username" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ton-username" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>



      {/* Mobile Menu Button (Hamburger) */}
      <button
        className="lg:hidden bg-gray-600 fixed top-6 right-6 text-black z-50 hamburger-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed right-0 top-10  w-2/3 bg-opacity-90 p-6 lg:hidden z-50">
          <button
            className="fixed bg-gray-600 right-6 top-6 text-black text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            ✖
          </button>
          <ul className="mt-8 space-y-6 text-white font-medium">
            <li className="text-end" onClick={() => setIsMenuOpen(false)}>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              
            </li>
            <li className="text-end"  onClick={() => setIsMenuOpen(false)}>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li className="text-end"  onClick={() => setIsMenuOpen(false)}>
              <Link to="/projects" className="hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li className="text-end"  onClick={() => setIsMenuOpen(false)}>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Zone principale qui change selon la page */}
      <div className="flex-1 justify-center align-middle p-10 bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
