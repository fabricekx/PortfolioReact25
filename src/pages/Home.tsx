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
    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
    };

  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <motion.h1
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
      <motion.p
        className="m-8 text-lg md:text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {t("intro")}
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link
          to="/projects"
          className="interactive-area hide-cursor mt-8 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
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
