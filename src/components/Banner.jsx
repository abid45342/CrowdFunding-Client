


import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../provider/AuthProvider";
import { motion } from "framer-motion";

const Banner = () => {
  const { dark } = useContext(AuthContext);

  return (
    <div className={dark ? "bg-gray-900" : "bg-white "}>
      {/* Banner Section with Background Image */}
      <motion.div
        className="relative text-center mb-16  sm:h-[400px] md:h-[500px]  bg-cover bg-center  shadow-lg overflow-hidden"
        style={{
          backgroundImage: `url('https://i.ibb.co/MffXctc/image.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

        {/* Banner Text Content */}
        <div className="relative z-10 mt-12  flex flex-col justify-center items-center h-full text-white px-6 md:px-12 ">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typewriter
              words={[
                "Crowdfunding & Charity Platform",
                "Make a Difference Today",
                "Support Causes That Matter",
              ]}
              loop
              cursor
              cursorStyle="_"
            />
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Join hands with us to empower communities, fund impactful projects,
            and bring positive change. Every contribution counts.
          </motion.p>

          {/* Call to Action Button */}

<motion.a 
            href="#donate"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105  "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start Your Impact
          </motion.a>

        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
