import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import ProgressBar from "./progressBar";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase, FaPython, FaMicrochip } from "react-icons/fa";




const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation(); // Accès aux traductions

  const techIcons = {
    "HTML & CSS":<div className="flex items-center space-x-2">
    <FaHtml5 className="text-orange-500 w-6 h-6" />
    <FaCss3Alt className="text-emerald-500 w-6 h-6" />
  </div>,
    "JavaScript": <FaJs className="text-yellow-500 w-6 h-6" />,
    "PHP": <FaPhp className="text-purple-500 w-6 h-6" />,
    "SQL": <FaDatabase className="text-blue-500 w-6 h-6" />,
    "Python": <FaPython className="text-blue-400 w-6 h-6" />,
    "Arduino": <FaMicrochip className="text-gray-400 w-6 h-6" />,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("👀 Section visible ?", entry.isIntersecting);
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.4 } // Déclenche l'animation quand 40% de la section est visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} id="programmation" className="p-14 flex flex-col space-y-6 ">
      <h2 className="text-white text-2xl mb-4">{t("programmation2")}</h2>
      <ProgressBar icon={techIcons["HTML & CSS"]} isVisible={isVisible} percentage={95} label="HTML & CSS" />
      <ProgressBar icon={techIcons["JavaScript"]} isVisible={isVisible} percentage={80} label="JavaScript [React, Node.Js, Nest.Js]" />
      <ProgressBar icon={techIcons["PHP"]}  isVisible= {isVisible} percentage={75} label="PHP [Symfony]" color="bg-emerald-400"/>
      <ProgressBar icon={techIcons["SQL"]}  isVisible= {isVisible} percentage={70} label="SQL [MySQL]" color="bg-emerald-400"/>
      <ProgressBar icon={techIcons["Python"]}  isVisible= {isVisible} percentage={30} label="Python [Django]" color="bg-orange-400"/>
      <ProgressBar icon={techIcons["Arduino"]}  isVisible= {isVisible} percentage={40} label="Arduino" color="bg-orange-400"/>

    </section>
  );
};

export default Skills;
