import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { fetchProjects } from "@/my-utils/apiFetchProjects";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import fallbackProjects from '../my-json/projects-strapi.json'; // Chemin relatif à `src`

interface ProjectsProps {
  setIsHovering: (hovering: boolean) => void;
}

interface Project {
  id: number;
  technos: [{ id: number; Technos: string }];
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
  const { t, i18n } = useTranslation(); // Accès aux traductions
  const inline = true

   // Pour mettre à jour en json les données de strapi local, il faut soit lancer les scripts
  // indépendamment (ex node script/prepareExperience.mjs) soit lancer prepareAll grâce à
  //  npm run prepare
  

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
        className="text-5xl width-1/2 md:text-7xl md:fixed me-10 bg-gray-900 top-0 left-30px right-15px z-50 p-4 font-bold"
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
      <div className="p-6 space-y-6 pt-24">
        {/* Une seule carte par ligne avec espacement */}
        {projects.map((project) => {
          // Récupère l'image en format "small" si dispo, sinon l'image originale
          const imageUrl =
            project.Picture?.formats?.small?.url || project.Picture?.url;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="hover:scale-105 border-0 transition-transform bg-gray-800 flex flex-col md:flex-row items-center p-4 w-full">
                {" "}
                {imageUrl && (
                  <img
                    // src={`http://localhost:1337${imageUrl}`} // si on veut la version strapi
                    src={imageUrl}

                    alt={project.Title}
                    className=" md:w-1/3 h-48 object-cover rounded-lg"
                  />
                )}
                <div className="flex flex-col  justify-between h-full w-full">
                  <CardHeader className="flex-grow w-full">
                    <CardTitle className="text-white">
                      {" "}
                      {i18n.language === "fr" ? project.TitleFr : project.Title}
                    </CardTitle>
                    <CardDescription>
                      {" "}
                      {i18n.language === "fr"
                        ? project.DescriptionFr
                        : project.Description}
                    </CardDescription>
                    {/* Affichage des technos */}
                    <div className="mt-2 flex flex-wrap">
                      {project.technos.map((techno) => (
                        <span
                          key={techno.id}
                          className="bg-blue-500 text-white py-1 px-3 rounded-full text-tiny m-1"
                        >
                          {techno.Technos}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto m-2">
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      href={project.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hide-cursor inline-block text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      onClick={() => setIsHovering(false)}
                    >
                      {t("showProject")}
                    </motion.a>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
