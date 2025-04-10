import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

interface ScrollUpProps {
  setIsHovering: (hovering: boolean) => void;
myScroll: number
}


const ScrollUp: React.FC<ScrollUpProps> = ({ myScroll , setIsHovering}) => {
  const scrollableDiv = document.getElementById("maDivScrollable");
  const handleScroll = () => {
    if (scrollableDiv) {
      scrollableDiv.scrollBy({ top: -500, behavior: "smooth" });
    }
  };

  if (myScroll <= 0) return null; // 👈 flèche cachée tout en haut

  return (
    <motion.div
    onClick={handleScroll}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    className="hide-cursor fixed top-65 left-0.9 transform -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1 }}
  >
    <FaChevronUp className="text-white text-2xl" />
  </motion.div>
  );
};

export default ScrollUp