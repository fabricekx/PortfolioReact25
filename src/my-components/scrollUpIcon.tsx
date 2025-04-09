import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollUp = () => {
  const handleScroll = () => {
    const scrollableDiv = document.getElementById("maDivScrollable"); // c'est cette div div qui va scroller, pas tout le document"

    if (scrollableDiv)  scrollableDiv.scrollBy({ top : -500, behavior: "smooth" } );
    {console.log("scroll");
  };}

  return (
    <motion.div
    onClick={handleScroll}
    className="cursor-pointer fixed top-65 left-0.9 transform -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1 }}
  >
    <FaChevronUp className="text-white text-2xl" />
  </motion.div>
  );
};

export default ScrollUp