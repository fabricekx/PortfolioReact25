import { FaSeedling, FaMountain, FaLaptopCode } from "react-icons/fa";
import { GiMountains } from "react-icons/gi";
import { GiShipWheel } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


const Hobbies = () => {
  const { t } = useTranslation(); // Accès aux traductions

  return (
    <section id="hobbies" className="md:!p-14 !p-6 flex flex-col !space-y-6 ">
      <motion.h2
      initial={{opacity: 0,  scale: 5}}
      whileInView= {{opacity: 1,  scale: 1}}
      transition={{duration:0.5}}
      className="text-white !text-2xl !mb-4">Hobbies</motion.h2>

      <div className="flex gap-4   justify-evenly align-middle flex-wrap">
       
        <div className="flex gap-2" >
          <GiShipWheel className="w-6 h-6  " />
          <span>{t("voilier")}</span>
        </div>

        <div className="flex gap-2" >
          <FaSeedling className="w-6 h-6   " />
          <span>{t("botanique")}</span>
        </div>
      

      <div className="flex gap-2" >
        <FaMountain className="w-6 h-6   " />
        <span>{t("montagne")}</span>
      </div>

      <div className="flex gap-2" >
        <FaLaptopCode className="w-6 h-6   " />
        <span> Coding</span>
      </div>

      <div className="flex gap-2" >
        <GiMountains className="w-6 h-6   " />
        <span>{t("randonnée")}</span>
      </div>

      </div>
    </section>
  );
};

export default Hobbies;
