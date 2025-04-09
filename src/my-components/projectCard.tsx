import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import useSectionReacher from "@/my-utils/sectionReacher";


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

interface ProjectCardProps {
    project: Project;
    setIsHovering: (hovering: boolean) => void;
  }

const ProjectCard: React.FC<ProjectCardProps>  =({project, setIsHovering}) =>{
    const { t, i18n } = useTranslation(); // Manquant ici
    const { ref, isVisible } = useSectionReacher();
  // Récupère l'image en format "small" si dispo, sinon l'image originale
  const imageUrl = project.Picture?.formats?.small?.url || project.Picture?.url;
  
    return (<motion.div
      key={project.id}
      ref = {ref}
      initial={{ opacity: 0, x: -150 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { }}
      transition={{ duration: 0.5 }}
  
    >
      <Card className="hover:scale-105 border-0 transition-transform bg-emerald-950 flex flex-col md:flex-row items-center !p-4 w-full">
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
            <div className="!mt-2 flex flex-wrap">
              {project.technos.map((techno) => (
                <span
                  key={techno.id}
                  className="bg-blue-500 text-white !py-1 !px-3 rounded-full !text-tiny !m-1"
                >
                  {techno.Technos}
                </span>
              ))}
            </div>
          </CardHeader>
          <CardContent className="!mt-auto !m-2">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="hide-cursor inline-block text-white !px-4 !py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => setIsHovering(false)}
            >
              {t("showProject")}
            </motion.a>
          </CardContent>
        </div>
      </Card>
    </motion.div>)
  }

  export default ProjectCard