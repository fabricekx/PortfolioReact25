// Home.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface HomeProps {
  setIsHovering: (hovering: boolean) => void;
}
const Home: React.FC<HomeProps> = ({ setIsHovering }) => {
  const { t } = useTranslation(); // Accès aux traductions

  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
<motion.h1 
        className="text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link to="/projects" className="interactive-area hide-cursor mt-8 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsHovering(false)}>
         {t("viewWork")}
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;