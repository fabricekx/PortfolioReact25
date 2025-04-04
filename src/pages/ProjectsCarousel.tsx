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
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay, Pagination } from "swiper/modules";

// Import des styles nécessaires
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface ProjectsCarouselProps {
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

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ setIsHovering }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { t, i18n } = useTranslation(); // Accès aux traductions

  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error);
  }, []);

  return (
    <div className="h-full flex flex-col items-center text-center">
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
     
        {/* Swiper avec les cartes */}
        <Swiper
          effect="fade"
          grabCursor={true}
          centeredSlides={true}
          // slidesPerView={3}
          loop={true}
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          //   reverseDirection: true,
          // }}
          // navigation={true}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 80,
          //   depth: 200,
          //   modifier: 0.5,
          //   slideShadows: false,
          // }}
          modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
          className="monswipe flex align-middle"
        >
          {projects.map((project) => {
            // Récupère l'image en format "small" si dispo, sinon l'image originale
            const imageUrl =
              project.Picture?.formats?.small?.url || project.Picture?.url;

            return (
              <SwiperSlide key={project.id} className="w-full flex items-center">
                <div className="flex  items-center bg-gray-800">
                  {imageUrl && (
                    <img
                      src={`http://localhost:1337${imageUrl}`}
                      alt={project.Title}
                      className="md:w-1/3 h-48 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex flex-col justify-between h-full w-full mt-4">
                    <CardHeader className="w-full">
                      <CardTitle className="text-white">
                        {i18n.language === "fr" ? project.TitleFr : project.Title}
                      </CardTitle>
                      <CardDescription>
                        {i18n.language === "fr"
                          ? project.DescriptionFr
                          : project.Description}
                      </CardDescription>
                    </CardHeader>
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
                    <CardContent className="mt-auto m-2">
                      <a
                        href={project.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hide-cursor inline-block text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onClick={() => setIsHovering(false)}
                      >
                        {t("showProject")}
                      </a>
                    </CardContent>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      
    </div>
  );
};

export default ProjectsCarousel;
