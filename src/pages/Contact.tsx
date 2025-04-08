import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Contact() {

  const { t} = useTranslation(); // Accès aux traductions
  const email = "fabricekx" + "@" + "gmail.com";
  const phone = "+33" + "6 01 95 14 47";
  const linkedinUrl = "https://www.linkedin.com/in/fabricehendrikx/";
  const githubUrl = "https://github.com/fabricekx";

  // Animation d'apparition
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  // Animation scintillement des icônes
  const iconVariants = {
    animate: {
      opacity: [1, 0.5, 1],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };
    return (
      <div className="h-full flex flex-col items-center justify-evenly text-center">
        <motion.h1 
        className="!text-3xl  md:!text-4xl"
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
        }}>{t("contactMe")}</motion.h1>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"className="flex flex-col h-1/2 justify-evenly">
      {/* Téléphone */}
      <a href={`tel:${phone}`} className="flex items-center space-x-2 hover:text-blue-500 transition">
        <motion.span variants={iconVariants} animate="animate">
        <FaPhone className="text-xl !m-5" />
        </motion.span>
        <span>{phone}</span>
      </a>

      {/* Email */}
      <a href={`mailto:${email}`} className="flex items-center space-x-2 hover:text-blue-500 transition">
        <motion.span variants={iconVariants} animate="animate">
        <FaEnvelope className="text-xl !m-5" />
        </motion.span>
        <span>{email}</span>
      </a>

      {/* LinkedIn */}
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-500 transition">
        <motion.span variants={iconVariants} animate="animate">
        <FaLinkedin className="text-xl !m-5" />
        </motion.span>
        <span>LinkedIn</span>
      </a>

      {/* GitHub */}
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400 transition">
        <motion.span variants={iconVariants} animate="animate">
        <FaGithub className="text-xl !m-5" />
        </motion.span>
        <span>GitHub</span>
      </a>
      </motion.div>
      </div>
    );
  }