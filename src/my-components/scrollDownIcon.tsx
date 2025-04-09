import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollDown = () => {
  const handleScroll = () => {
    const scrollableDiv = document.getElementById("maDivScrollable"); // c'est cette div div qui va scroller, pas tout le document"

    if (scrollableDiv)  scrollableDiv.scrollBy({ top: 500, behavior: "smooth" } );
    {console.log("scroll");
  };}

  return (
    <motion.div
    onClick={handleScroll}
    className="cursor-pointer fixed bottom-10 left-0.9 transform -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1 }}
  >
    <FaChevronDown className="text-white text-2xl" />
  </motion.div>
  );
};

export default ScrollDown