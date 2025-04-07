import { FaSeedling, FaMountain, FaLaptopCode } from 'react-icons/fa';
import { GiMountains } from 'react-icons/gi';
import { GiShipWheel } from 'react-icons/gi';
import { useTranslation } from "react-i18next";

const Hobbies = () => {

      const { t } = useTranslation(); // Accès aux traductions
    
  return (
    <section  id="hobbies" className="!p-14 flex flex-col !space-y-6 ">
              <h2 className="text-white !text-2xl !mb-4">Hobbies</h2>

      <div className="flex   justify-evenly">
      <div className="flex  !space-x-2">
      <GiShipWheel className="w-6 h-6" />
        <span>{t("voilier")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaSeedling className="w-6 h-6 !m-3" />
        <span>{t("botanique")}</span>
      </div>
      </div>

      <div className="flex justify-evenly">
      <div className="flex items-center space-x-2">
        <FaMountain className="w-6 h-6 !m-3" />
        <span>{t("montagne")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaLaptopCode className="w-6 h-6 !m-3" />
        <span>  Coding</span>
      </div>
</div>

<div className="flex justify-center">
      <div className="flex items-center space-x-2">
        <GiMountains className="w-6 h-6 !m-3" />
        <span>{t("randonnée")}</span>
      </div>
      </div>
    </section>
  );
};

export default Hobbies;
