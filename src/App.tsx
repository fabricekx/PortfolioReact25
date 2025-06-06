import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import des icônes GitHub et LinkedIn
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./my-components/languageSwitcher";
import "flag-icon-css/css/flag-icons.min.css";

const App = () => {
  const { t, i18n } = useTranslation(); // Hook pour accéder aux traductions
  const location = useLocation(); // Récupérer l'URL actuelle pour styliser le lien actuel

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]); // s'exécute à chaque changement de langue

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
    <div className="flex w-full h-full  " id="main-div">
      {/* curseur */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: cursorPosition.x - 5,
          y: cursorPosition.y - 5,
          scale: isHovering ? 2 : 1, // Agrandit si hover
          backgroundColor: isHovering
            ? "rgba(0,115,230,0.5)"
            : "rgba(184, 197, 245, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
      {/* Sidebar */}
      <div className="small  w-2/5 bg-emerald-800 text-white !p-3 flex flex-col justify-evenly">
        {/* Nom & Présentation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Commence hors de l'écran à gauche
          animate={{ x: 0, opacity: 1 }} // Slide vers la droite avec une opacité qui augmente
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="  !text-3xl sm:!text-4xl"
          >
            Fabrice Hendrikx
          </motion.h1>
          <p className="text-gray-400 !text-xl sm:!text-2xl !mt-2">
            Full Stack Developper
          </p>
          <p className="text-gray-400">{t("description")}</p>
          
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="!mt-8 sidebar"
        >
         <ul className="!space-y-4 !ml-10">
  {[
    { path: "/", label: t("home"), icon: "🏠" },
    { path: "/about", label: t("about"), icon: "👤" },
    { path: "/projects", label: t("projects"), icon: "📁" },
    { path: "/contact", label: t("contact"), icon: "📧" },
  ].map((item) => {
    const isActive = location.pathname === item.path;

    const animate = {
      opacity: 1,
      y: 0,
      x: isActive ? [0, 10, -10, 0] : 0,
    };

    const transition = isActive
      ? {
          ease: "linear",
          duration: 2,
          repeat: Infinity,
          delay: 1,
        }
      : { duration: 0.3 };

    return (
      <motion.li
        key={item.path}
        className="relative"
        animate={animate}
        transition={transition}
      >
        <Link
          to={item.path}
          className="interactive-area hide-cursor !text-2xl !text-emerald-950 hover:text-gray-300 relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {item.label}
        </Link>

        {isActive && (
          <motion.div
            layoutId="underline"
            className="absolute left-0 bottom-0 w-1/2 !h-[2px] bg-emerald-900"
            initial={{ width: 0 }}
            animate={{
              width: "100px",
              backgroundColor: ["#8989ff", "#5656ff", "#8989ff"],
            }}
            transition={{
              width: { duration: 0.5 },
              backgroundColor: {
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                duration: 2,
              },
            }}
          />
        )}
      </motion.li>
    );
  })}
</ul>
        </motion.nav>

        {/* Bouton Langue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hide-cursor w-1/4 !m-5"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <LanguageSwitcher />{" "}
        </motion.div>

        {/* Technos utiisées */}
        <p className="text-emerald-950 hidden sm:block !text-tiny md:!text-sm">{t("techno")}</p>
        {/* Social Links */}
        <div className=" mt-2 md:!mt-8 flex !space-x-4 justify-evenly">
          <a
            href="https://github.com/fabricekx"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-area hide-cursor text-white hover:text-gray-300"
          >
            <FaGithub
              size={24}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/fabricehendrikx/"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-area hide-cursor text-white hover:text-gray-300"
          >
            <FaLinkedin
              size={24}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <button
        className="interactive-area hide-cursor md:hidden !bg-gray-300 fixed top-6 right-6 text-black z-50 hamburger-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed right- top-5  w-2/3 bg-opacity-90 !p-6 lg:hidden z-50">
            <button
              className="fixed !bg-gray-300 right-6 top-6 text-black text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ✖
            </button>

            <motion.ul
              className="!mt-7 fixed right-3 space-y-6 w-1/4 rounded-md text-white !font-medium bg-blue-950/90"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onMouseLeave={() => {
                setIsMenuOpen(false);
                setIsHovering(false);
              }}
            >
              <li
                className="text-center !mt-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsHovering(false);
                }}
              >
                <Link
                  to="/"
                  className="hide-cursor hover:text-gray-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {t("home")}
                </Link>
              </li>
              <li
                className="text-center !mt-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsHovering(false);
                }}
              >
                <Link
                  to="/about"
                  className="hide-cursor hover:text-gray-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {t("about")}
                </Link>
              </li>
              <li
                className="text-center !mt-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsHovering(false);
                }}
              >
                <Link
                  to="/projects"
                  className="hide-cursor hover:text-gray-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {t("projects")}
                </Link>
              </li>
              <li
                className="text-center !mt-2 !mb-3"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsHovering(false);
                }}
              >
                <Link
                  to="/contact"
                  className="hide-cursor hover:text-gray-300 !mb-3"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {t("contact")}
                </Link>
              </li>
            </motion.ul>
          </div>
        )}
      </AnimatePresence>

      {/* Zone principale qui change selon la page */}
      
      <div id="maDivScrollable" className="flex-1 justify-center align-middle !p-5 bg-emerald-600 text-white overflow-x-hidden overflow-y-auto max-h-screen">
        <Routes>
          <Route path="/" element={<Home setIsHovering={setIsHovering} />} />
          <Route
            path="/about"
            element={<About setIsHovering={setIsHovering} />}
          />
          <Route
            path="/projects"
            element={<Projects setIsHovering={setIsHovering} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
