import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { fetchProjects } from "@/my-utils/apiFetch";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


interface ProjectsProps {
  setIsHovering: (hovering: boolean) => void;
}
interface Project {
  id: number;

  Title: string;
  Description: string;
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

  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error);
  }, []);

  return (
    <div className="h-full flex flex-col items-center  text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("welcome")}
      </motion.h1>
      <div className="p-6 space-y-6 w-5/6">
        {" "}
        {/* Une seule carte par ligne avec espacement */}
        {projects.map((project) => {
          // Récupère l'image en format "small" si dispo, sinon l'image originale
          const imageUrl =
            project.Picture?.formats?.small?.url || project.Picture?.url;

          return (
            <motion.div initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <Card
              key={project.id}
              className="hover:scale-105 border-0 transition-transform bg-gray-800 flex flex-col md:flex-row items-center p-4 w-full"
              
            >
              {" "}
              {imageUrl && (
                <img
                  src={`http://localhost:1337${imageUrl}`}
                  alt={project.Title}
                  className="w-1/2 md:w-1/3 h-48 object-cover rounded-lg"
                />
              )}
              <div className="flex flex-col w-1/2 justify-between h-full ">
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
                  onClick={()=> setIsHovering(false)}
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
