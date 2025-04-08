// Home.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface HomeProps {
  setIsHovering: (hovering: boolean) => void;
}
const Home: React.FC<HomeProps> = ({ setIsHovering }) => {
  const { t } = useTranslation(); // Accès aux traductions

  // Animation d'apparition pour le boutton
   

  return (
    <div className="h-full flex flex-col items-center justify-evenly ">
      <motion.h1
      className="!text-3xl md:!text-4xl text-center"
        initial={{ opacity: 0, y: -20 }} // Animation pour l'apparition
        animate={{
          opacity: 1,
          y: 0,
          x: [0, 10, -10, 0], // Animation répétée pour le mouvement horizontal
        }}
        transition={{
           duration: 0.5 , // Pour y et opacity
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
      <motion.p
        className="!m-4 !text-lg md:!text-xl text-justify text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {t("intro")}
      </motion.p>
      <motion.div
       animate={{ opacity: [0.7, 1, 0.7] }}
       transition={{
         duration: 2,
         repeat: Infinity,
         repeatType: "loop",
         ease: "easeInOut",
       }}
      >
        <Link
          to="/projects"
          className="interactive-area hide-cursor !mt-8 !px-6 !py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => setIsHovering(false)}
        >
          {t("viewWork")}
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
