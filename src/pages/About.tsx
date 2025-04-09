import { useTranslation } from "react-i18next";
import { useEffect, useState} from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
 
} from "@/components/ui/card";
import { fetchFormations } from "@/my-utils/apiFetchFormation";
import { fetchExperiences } from "@/my-utils/apiFetchExperience";
import NavAbout from "@/my-components/navAbout";
import { motion } from "framer-motion";
import Skills from "@/my-components/skills";
import Langues from "@/my-components/langues";
import Hobbies from "@/my-components/hobbies";
import fallbackFormations from '../my-json/formations-strapi.json'; // Chemin relatif à `src`
import fallbackExperiences from '../my-json/experiences-strapi.json'; // Chemin relatif à `src`
import ScrollDown from "@/my-components/scrollDownIcon";
import ScrollUp from "@/my-components/scrollUpIcon";
import ExperienceCard from "@/my-components/experienceCard";

interface AboutProps {
  setIsHovering: (hovering: boolean) => void;
}

interface Experiences {
  id: number;
  date: string;
  entreprise: string;
  poste: string;
  posteEN: string;
  description: string;
  descriptionEn: string;
  place: string;
}

interface Formations {
  id: number;
  date: string;
  etablissement: string;
  diplomeEn: string;
description: string;
descriptionEn: string
  diplome: string;
}
const About: React.FC<AboutProps> = ({ setIsHovering }) => {
  const [experiences, setExperiences] = useState<Experiences[]>([]);
  const [formations, setFormations] = useState<Formations[]>([]);
const inline = true
  const { t, i18n } = useTranslation(); // Accès aux traductions

  
  // Pour mettre à jour en json les données de strapi local, il faut soit lancer les scripts
  // indépendamment (ex node script/prepareExperience.mjs) soit lancer prepareAll grâce à
  //  npm run prepareAll
  
  useEffect(() => {
    if (inline) {
      setFormations(fallbackFormations);
      setExperiences(fallbackExperiences);
    } else {
      fetchFormations().then(setFormations).catch(console.error);
      fetchExperiences().then(setExperiences).catch(console.error);
    }
  }, []);

 
  return (
    <div className="w-full overflow-x-auto flex-col align-middle">
      <ScrollUp></ScrollUp>
        {/* Div contenant le titre, un petite description et un nav, en fixe sur les grand écrans pour éviter le défilement */}
      <div className="md:fixed bg-emerald-600  !pt-5 top-0 z-1">
        <motion.h1 
        className="!text-3xl text-center md:!text-4xl !mb-4 "
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
        }}>About me</motion.h1>
        <ScrollDown></ScrollDown>
        <motion.p  initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-justify !ps-5 ">{t("aboutMe")}
              </motion.p>
<NavAbout setIsHovering={setIsHovering}/>
      
      </div>
      {/* div contenant toutes les cartes experiences, formations etc.. */}
      <section id="experience" className="!p-6 flex flex-col !space-y-6 md:!pt-56">
      <h2 className="text-white !text-2xl !mb-4">{t("experiences")}</h2>

        {experiences.map((experience) => {
          return (
          <ExperienceCard key={experience.id} setIsHovering={setIsHovering} experience={experience}></ExperienceCard>
          );
        })}
      </section>

      <section id="formation" className="!p-6 flex flex-col !space-y-6 ">
      <h2 className="text-white !text-2xl !mb-4">{t("formation")}</h2>

        {formations.map((formation) => {
          return (
            <motion.div
            key={formation.id}
            initial={ { opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x:0 }}

            transition={{ duration: 0.5 }}
          >
            <Card  key={formation.id} className="hover:scale-105 border-0 transition-transform bg-emerald-950 hover:bg-gray-700 flex flex-col md:flex-row items-start !p-4 w-full">
              <div className=" md:w-1/3  object-cover rounded-lg">
                <div className="text-gray-600"> {formation.date} </div>
                <div className="text-gray-600 font-bold">
                  {formation.etablissement}
                </div>
              </div>
              <div className="flex flex-col  justify-between h-full w-full">
                <CardHeader className="flex-grow w-full">
                  <CardTitle className="text-white">
                    {" "}
                    {i18n.language === "fr"
                      ? formation.diplome
                      : formation.diplomeEn}
                  </CardTitle>
                  <CardDescription>
                    {" "}
                    {i18n.language === "fr"
                      ? formation.description
                      : formation.descriptionEn}
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
            </motion.div>
          );
        })}
      </section>
      
      {/* le section id= programmation est déjà incluse dans skills */}
<Skills></Skills>

<Langues></Langues>

<motion.div
initial={ { opacity: 0, x: -150 }}
whileInView={{ opacity: 1, x:0 }}
transition={{ duration: 0.9 }}
>
<Hobbies></Hobbies>
</motion.div>
<div className="!mt-10">
        {/* Technos utiisées */}
        <p className="text-emerald-950  !text-sm">{t("techno")}</p>

</div>

    </div>
  );
};

export default About;
