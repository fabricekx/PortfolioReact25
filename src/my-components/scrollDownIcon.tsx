import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

interface ScrollDownProps {
  setIsHovering: (hovering: boolean) => void;
myScroll: number
}


const ScrollDown: React.FC<ScrollDownProps> = ({ myScroll, setIsHovering}) => {
  const handleScroll = () => {
    const scrollableDiv = document.getElementById("maDivScrollable");

    if (scrollableDiv) {
      scrollableDiv.scrollBy({ top: 500, behavior: "smooth" });
    }
  };

  const isAtBottom = () => {
    const scrollableDiv = document.getElementById("maDivScrollable");
    if (!scrollableDiv) return false;

    const maxScroll = scrollableDiv.scrollHeight - scrollableDiv.clientHeight;
    return myScroll >= maxScroll-10;
  };

  if (isAtBottom()) return null; // 👈 On cache la flèche quand on est tout en bas


  return (
    <motion.div
    onClick={handleScroll}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    className="hide-cursor fixed bottom-10 left-0.9 transform -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1 }}
  >
    <FaChevronDown className="text-white text-2xl" />
  </motion.div>
  );
};

export default ScrollDown