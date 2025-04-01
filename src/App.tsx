import {  Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import des icônes GitHub et LinkedIn
import { motion,AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./my-components/languageSwitcher";



const App = () => {
  const { t } = useTranslation(); // Hook pour accéder aux traductions
  const location = useLocation(); // Récupérer l'URL actuelle pour styliser le lien actuel

  // pour le curseur perso, avec la classe custom-cursor
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);


  const [isHovering, setIsHovering] = useState(false); // pour le survol des liens
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu mobile (hamburger)
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" }, // Menu caché (hors écran)
    visible: { opacity: 1, y: 0 }, // Menu visible (position d'origine)
    exit: { opacity: 0 }, // Menu qui disparaît (effet inverse de visible)
  };
  
  return (
    <div className="flex w-full h-full " id="main-div">
      {/* curseur */}
      <motion.div
      className="custom-cursor"
      animate={{ x: cursorPosition.x - 5, 
        y: cursorPosition.y - 5,  
        scale: isHovering ? 2 : 1, // Agrandit si hover
        backgroundColor: isHovering ? "rgba(0,115,230,0.5)" : "rgba(131, 154, 247, 0.03)" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    />
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
          <p className="text-gray-400">{t("description")}</p>
        
        </motion.div>

        {/* Navigation */}
        <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-8 sidebar"
    >
      <ul className="space-y-4">
        {/* Création des liens à partir d'un tableau */}
        {[
          { path: "/", label: t("home"), icon: "🏠" },
          { path: "/about", label: t("about"), icon: "👤" },
          { path: "/projects", label: t("projects"), icon: "📁" },
          { path: "/contact", label: t("contact"), icon: "📧" },
        ].map((item) => (
          <li key={item.path} className="relative">
            <Link
              to={item.path}
              className="interactive-area hide-cursor hover:text-gray-300 relative"
              onMouseEnter={() => setIsHovering(true)} // modification du pointer
              onMouseLeave={() => setIsHovering(false)}
            >
              {item.label} 
            </Link>
            {location.pathname === item.path && ( // si le chemin correspond à la page en cours, on ajoute une ligne avec une animation
              <motion.div
                layoutId="underline"
                className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </li>
        ))}
      </ul>
    </motion.nav>

{/* Bouton Langue */}
        <motion.div 
        initial={{ opacity: 0 , y:30}}
        animate={{ opacity: 1 , y:0}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="hide-cursor w-1/4" onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        <LanguageSwitcher /> </motion.div>

         {/* Social Links */}
         <div className="mt-8 flex space-x-4 justify-center">
          
          <a href="https://github.com/ton-username" target="_blank" rel="noopener noreferrer" className="interactive-area hide-cursor text-white hover:text-gray-300">
            <FaGithub size={24} onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}/>
          </a>
          <a href="https://www.linkedin.com/in/ton-username" target="_blank" rel="noopener noreferrer" className="interactive-area hide-cursor text-white hover:text-gray-300">
            <FaLinkedin size={24} onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}/>
          </a>
        </div>
      </div>



      {/* Mobile Menu Button (Hamburger) */}
      <button
        className="interactive-area hide-cursor lg:hidden bg-gray-600 fixed top-6 right-6 text-black z-50 hamburger-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
      {isMenuOpen && (
        <div className="fixed right-0 top-10  w-2/3 bg-opacity-90 p-6 lg:hidden z-50">
          <button
            className="fixed bg-gray-600 right-6 top-6 text-black text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            ✖
          </button>
         
          <motion.ul
className="mt-8 space-y-6 text-white font-medium"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={mobileMenuVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseLeave={() => {
            setIsMenuOpen(false);
            setIsHovering(false);
          }}        >
            <li className="text-end" onClick={() => {setIsMenuOpen(false); setIsHovering(false)}}>
              <Link to="/" className="hide-cursor hover:text-gray-300" onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
                {t("home")}
              </Link>
              
            </li>
            <li className="text-end"  onClick={() => {setIsMenuOpen(false); setIsHovering(false)}}>
              <Link to="/about" className="hide-cursor hover:text-gray-300" onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
                {t("about")}
              </Link>
            </li>
            <li className="text-end"  onClick={() => {setIsMenuOpen(false); setIsHovering(false)}}>
              <Link to="/projects" className="hide-cursor hover:text-gray-300" onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
                {t("projects")}
              </Link>
            </li>
            <li className="text-end"  onClick={() => {setIsMenuOpen(false); setIsHovering(false)}}>
              <Link to="/contact" className="hide-cursor hover:text-gray-300" onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
                {t("contact")}
              </Link>
            </li>
          </motion.ul>
        </div>
      )}
      </AnimatePresence>

      {/* Zone principale qui change selon la page */}
      <div className="flex-1 justify-center align-middle p-10 bg-gray-900 text-white overflow-y-auto max-h-screen">
        <Routes>
          <Route path="/" element={<Home setIsHovering={setIsHovering} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects setIsHovering={setIsHovering} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
