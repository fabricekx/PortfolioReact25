import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


interface NavAboutProps {
  setIsHovering: (hovering: boolean) => void;
}
const NavAbout: React.FC<NavAboutProps> = ({ setIsHovering }) => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
    const { t, i18n } = useTranslation(); // Accès aux traductions
  
  const navItems = [
    { path: "#experience", label: i18n.language === "fr" ? "Expériences" : "Experience" },
    { path: "#formation", label: i18n.language === "fr" ?"Formation" : "Education" },
    { path: "#programmation", label: i18n.language === "fr" ? "Programmation" : "Coding"},
    { path: "#langues", label: i18n.language === "fr" ?"Langues" : "Languages" },
    { path: "#hobbies", label: "Hobbies" },
  ];

  // UseEffect pour capter dans quelle section on scroll, et pouvoir faire le soulignement de lien correctement
  useEffect(() => {
    const scrollContainer = document.querySelector("#maDivScrollable"); // Remplace par ta classe réelle

    const handleScroll = () => {
      // console.log("📜 Scrolling..."); // Debug

      const sections = navItems
        .map((item) => {
          const section = document.querySelector(item.path);

          if (!section) return null;
          const rect = section.getBoundingClientRect();
          return { path: item.path, top: rect.top };
        })
        .filter(Boolean) as { path: string; top: number }[];

      const visibleSection = sections.find((s) => s.top >= 0 && s.top < 300);
      if (visibleSection) {
        setActiveLink(visibleSection.path);
        // console.log("🔵 Section active:", visibleSection.path); // Ajout du log
      }
    };
    if (scrollContainer) {
      // console.log("👀 Attaching scroll event to scroll container...");
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial call to trigger on mount

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Fonction qui remplace le scroll natif
  const handleScrollTo = (id: string) => {
    const section = document.querySelector(id);
    const scrollContainer = document.querySelector("#maDivScrollable");
  
    if (section && scrollContainer) {
      const sectionRect = section.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      
      const navHeight = 230; // Ajuste selon la hauteur de ta nav
      const top = sectionRect.top - containerRect.top + scrollContainer.scrollTop - navHeight;
  
      scrollContainer.scrollTo({ top, behavior: "smooth" });
    }
  };
  
  
  
  

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-8 md:flex hidden space-x-4 justify-around"
      onMouseEnter={() => setIsHovering(true)} // modification du pointer
      onMouseLeave={() => setIsHovering(false)}
    >
      {navItems.map((item) => (
        <div key={item.path} className="relative">
          <a
            href={item.path}
            className="interactive-area hide-cursor text-white hover:text-gray-300"
            onClick={(e) => {setActiveLink(item.path); e.preventDefault() // empeche le scroll natif
              handleScrollTo(item.path);

            }}
          >
            {item.label}
          </a>
          {activeLink === item.path && (
            <motion.div
              className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500"
              layoutId="underline2"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>
      ))}
    </motion.nav>
  );
};

export default NavAbout;
