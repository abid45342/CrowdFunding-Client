import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/banner3.jpg"; // Replace with your image path


const Banner = () => {
  // Animation variants for Framer Motion
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="relative  h-[650px] bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
      }}
    >
      {/* Dim Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40       "></div>

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg mb-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Empower Change with Every Donation
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-white drop-shadow-md mb-6 max-w-2xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <Typewriter
            words={["Support Dreams", "Build Communities", "Create Impact"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.p>

        <motion.div
          className="flex gap-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <Link to="/start-campaign">
            <motion.button
              className="px-6 py-3 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Campaign
            </motion.button>
          </Link>
          <Link to="/campaigns">
            <motion.button
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Campaigns
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;