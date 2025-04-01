// Home.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
<motion.h1 
        className="text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p 
        className="m-8 text-lg md:text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I build modern, responsive, and beautiful web applications.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link to="/projects" className="mt-8 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
          View My Work
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;