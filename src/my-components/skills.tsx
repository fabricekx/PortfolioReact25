import { useTranslation } from "react-i18next";
import ProgressBar from "./progressBar";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase, FaPython, FaMicrochip } from "react-icons/fa";
import useSectionReacher from "@/my-utils/sectionReacher";



const Skills = () => {
  const { t } = useTranslation(); // Accès aux traductions
const {ref: refSkill,isVisible : isVisibleSkill}= useSectionReacher(); // hook perso qui me permet de savoir si une section est visible
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

  

  return (
    <section ref={refSkill} id="programmation" className="p-14 flex flex-col space-y-6 ">
      <h2 className="text-white text-2xl mb-4">{t("programmation2")}</h2>
      <ProgressBar icon={techIcons["HTML & CSS"]} isVisible={isVisibleSkill} percentage={95} label="HTML & CSS" />
      <ProgressBar icon={techIcons["JavaScript"]} isVisible={isVisibleSkill} percentage={80} label="JavaScript [React, Node.Js, Nest.Js]" />
      <ProgressBar icon={techIcons["PHP"]}  isVisible= {isVisibleSkill} percentage={75} label="PHP [Symfony]" color="bg-emerald-400"/>
      <ProgressBar icon={techIcons["SQL"]}  isVisible= {isVisibleSkill} percentage={70} label="SQL [MySQL]" color="bg-emerald-400"/>
      <ProgressBar icon={techIcons["Python"]}  isVisible= {isVisibleSkill} percentage={30} label="Python [Django]" color="bg-orange-400"/>
      <ProgressBar icon={techIcons["Arduino"]}  isVisible= {isVisibleSkill} percentage={40} label="Arduino" color="bg-orange-400"/>

    </section>
  );
};

export default Skills;
