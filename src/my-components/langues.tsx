import { useTranslation } from "react-i18next";
import ProgressBar from "./progressBar";
import useSectionReacher from "@/my-utils/sectionReacher";
import { motion } from "framer-motion";


const Langues = () => {
  const { t } = useTranslation(); // Accès aux traductions
  const { ref: refLang, isVisible: isVisibleLang } = useSectionReacher();

  const countryIcons = {
    "fr":<span className="flag-icon flag-icon-fr mr-2"></span>,
    "gb": <span className="flag-icon flag-icon-gb"></span>,
    "pt": <span className="flag-icon flag-icon-pt"></span>

  }

  

  return (
    <section ref={refLang} id="langues" className="md:!p-14 !p-6 flex flex-col !space-y-6 ">
      <motion.h2 
      initial={{opacity: 0,  scale: 5}}
      whileInView= {{opacity: 1,  scale: 1}}
      transition={{duration:0.5}}
      className="text-white !text-2xl !mb-4">{t("langues")}</motion.h2>
      <ProgressBar icon={countryIcons["fr"]} isVisible={isVisibleLang} percentage={95} label={t("francais")} />
      <ProgressBar icon={countryIcons["gb"]} isVisible={isVisibleLang} percentage={90} label={t("anglais")} />
      <ProgressBar icon={countryIcons["pt"]} isVisible={isVisibleLang} percentage={60} label={t("portugais")} />


    </section>
  );
};

export default Langues;
