import { motion } from "framer-motion";


interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string; //couleur de tailwind
  isVisible: boolean;
  img?: string; // Chemin du logo
  icon?: React.ReactNode; // Typage pour un élément React (icône)

}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, color, isVisible, icon, img }) => {

  

  return (
    <div className="!mb-4">
      <div className="flex justify-between !mb-1">
      {img &&<img src={img} alt={label} className="w-6 !h-6" />} 

     
        <span className="text-white font-medium flex items-center !space-x-4">{icon  && icon}  <span>{label}</span></span>
        {/* <span className="text-gray-400">{percentage}%</span> */}
      </div>
      <div className="w-full bg-gray-700 rounded-full !h-4">
        <motion.div
        
  className={`${color ? color : "bg-blue-500"} h-4 rounded-full`}
  initial={{ width: 0 }}
          animate={{ width: isVisible?`${percentage}%`: "0%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar