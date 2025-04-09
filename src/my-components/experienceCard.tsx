import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";
  import { useTranslation } from "react-i18next";
  import { motion } from "framer-motion";
  import useSectionReacher from "@/my-utils/sectionReacher";

  interface Experience {
    id: number;
    date: string;
    entreprise: string;
    poste: string;
    posteEN: string;
    description: string;
    descriptionEn: string;
    place: string;
  }

  interface ExperienceCardProps {
    experience: Experience;
    setIsHovering: (hovering: boolean) => void;
  }

  const ExperienceCard: React.FC<ExperienceCardProps>  =({experience}) =>{
    const {  i18n } = useTranslation(); // Manquant ici
    const { ref, isVisible } = useSectionReacher();

return (
    <motion.div
            key={experience.id}
            ref = {ref}
            // le whileInView ne rend pas ma première carte lors du chargement, il faut donc le forcer
            initial={ { opacity: 0, x: -150 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}

            transition={{ duration: 0.5 }}
          >
            <Card className="hover:scale-105 border-0 transition-transform bg-emerald-950 hover:bg-gray-700 flex flex-col md:flex-row items-start !p-4 w-full">
              <div className=" md:w-1/3  object-cover rounded-lg">
                <div className="text-gray-600"> {experience.date} </div>
                <div className="text-gray-600 font-bold">
                  {experience.entreprise}
                </div>
                <div className="text-gray-600">{experience.place}</div>
              </div>
              <div className="flex flex-col  justify-between h-full w-full">
                <CardHeader className="flex-grow w-full">
                  <CardTitle className="text-white">
                    {" "}
                    {i18n.language === "fr"
                      ? experience.poste
                      : experience.posteEN}
                  </CardTitle>
                  <CardDescription>
                    {" "}
                    {i18n.language === "fr"
                      ? experience.description
                      : experience.descriptionEn}
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
            </motion.div>
)
  }

  export default ExperienceCard