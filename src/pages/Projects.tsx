import { useEffect, useState } from "react";
import { fetchProjects } from "@/my-utils/apiFetchProjects";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import fallbackProjects from '../my-json/projects-strapi.json' ; // Chemin relatif à `src`
import ProjectCard from "@/my-components/projectCard";

interface ProjectsProps {
  setIsHovering: (hovering: boolean) => void;
}

interface Project {
  id: number;
  technos:  { id: number; Technos: string }[];
  Title: string;
  Description: string;
  TitleFr: string;
  DescriptionFr: string;
  Link: string;
  Picture?: {
    url: string;
    formats?: {
      small?: { url: string };
      thumbnail?: { url: string };
    };
  };
}



const Projects: React.FC<ProjectsProps> = ({ setIsHovering }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { t} = useTranslation(); // Accès aux traductions
  const inline = true

   // Pour mettre à jour en json les données de strapi local, il faut soit lancer les scripts
  // indépendamment (ex node script/prepareExperience.mjs) soit lancer prepareAll grâce à
  //  npm run prepareAll
  

  useEffect(() => {
    if (inline) {
      setProjects(fallbackProjects);
      console.log("fallbackProjects picture url:", fallbackProjects[0]?.Picture?.url);
    } else {
      fetchProjects().then(setProjects).catch(console.error);
    }
  }, []);

 

  return (
    <div className="h-full flex flex-col items-center  text-center">
      {/* div titre */}
      <motion.h1
        className="!text-3xl  md:!text-4xl width-1/2 md:fixed w-1/2 !me-10 bg-emerald-600 top-0 left-30px right-15px z-50 !p-4 font-bold"
        initial={{ opacity: 0, y: -20 }} // Animation pour l'apparition
        animate={{
          opacity: 1,
          y: 0,
          x: [0, 10, -10, 0], // Animation répétée pour le mouvement horizontal
        }}
        transition={{
          opacity: { duration: 0.5 }, // Pour l'animation d'apparition
          y: { duration: 0.5 }, // Pour l'animation d'apparition
          x: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }, // Pour l'animation répétée
        }}
      >
        {t("welcome")}
      </motion.h1>

      {/* div contenant toutes les cartes */}
      <div className="!p-6 !space-y-6 md:!pt-24 !pt-6">
        {/* Une seule carte par ligne avec espacement */}
        {projects.map((project) => {
          
          return (
            <ProjectCard key={project.id} project={project} setIsHovering={setIsHovering}/>

          );
        })}
      </div>
    </div>
  );
};

export default Projects;
