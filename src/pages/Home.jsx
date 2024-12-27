import { motion } from "framer-motion";
import { useContext } from 'react';
import { FaBullhorn, FaHandsHelping, FaShareAlt, FaUserCircle } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import banner from '../assets/banner-1544x500.png';
import { AuthContext } from '../provider/AuthProvider';
import Loading from './Loading';
import Running from './Running';
import { div } from "framer-motion/client";
import Banner from "../components/Banner";




const Home = () => {
 


  
             const { loading, dark } = useContext(AuthContext);











    if (loading) {
      return <Loading></Loading>
    }
    else return (
      <>
  
      
          
  <Banner></Banner>
  
    






















{/* <motion.div
  className="w-full mt-3 h-[300px] sm:h-[600px] lg:h-[480px] bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-center text-white relative overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
>

  <motion.div
    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-800 opacity-40"
    animate={{ scale: 1.1 }}
    transition={{ repeat: Infinity, repeatType: "reverse", duration: 5, ease: "easeInOut" }}
  />
  
  <div className="max-w-3xl px-4 z-10">

    <motion.h1
      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold drop-shadow-lg"
      animate={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Welcome to <span className="text-yellow-300">IgnitionDeck</span>
    </motion.h1>


    <motion.p
      className="mt-4 text-sm sm:text-base lg:text-lg font-light opacity-90 drop-shadow-md"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
    >
      Empowering your crowdfunding journey with innovative tools.
    </motion.p>

    
    <div className="mt-6 flex gap-4 justify-center">
      <motion.button
        className="px-5 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-xl hover:bg-gray-100 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start a Campaign
      </motion.button>
      <motion.button
        className="px-5 py-2 bg-purple-700 text-white font-semibold rounded-lg shadow-xl hover:bg-purple-600 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Campaigns
      </motion.button>
    </div>
  </div>
</motion.div>  */}


























































<Running></Running>

     
      <div className={`how-it-works py-12 mb-16 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-8 text-center ${dark ? 'text-gray-300' : 'text-gray-800'}`}>How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className={`step p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${dark ? 'bg-gray-800 text-white' : 'bg-white'}`}>
              <FaBullhorn size={40} className="mx-auto mb-4 text-teal-500" />
              <h3 className={`text-xl font-semibold mb-2 ${dark ? 'text-gray-300' : 'text-gray-800'}`}>Create a Campaign</h3>
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'}`}>Set up your campaign by providing details about your cause and goals.</p>
            </div>
            <div className={`step p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${dark ? 'bg-gray-800 text-white' : 'bg-white'}`}>
              <FaShareAlt size={40} className="mx-auto mb-4 text-teal-500" />
              <h3 className={`text-xl font-semibold mb-2 ${dark ? 'text-gray-300' : 'text-gray-800'}`}>Share with Network</h3>
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'}`}>Promote your campaign to reach potential donors and supporters.</p>
            </div>
            <div className={`step p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${dark ? 'bg-gray-800 text-white' : 'bg-white'}`}>
              <FaHandsHelping size={40} className="mx-auto mb-4 text-teal-500" />
              <h3 className={`text-xl font-semibold mb-2 ${dark ? 'text-gray-300' : 'text-gray-800'}`}>Receive Donations</h3>
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'}`}>Collect funds and make a difference with your successful campaign.</p>
            </div>
          </div>
        </div>
      </div>
    

      {/* What Our Supporters Say Section */}
      <div className={`testimonials py-12 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-8 text-center ${dark ? 'text-gray-300' : 'text-gray-800'}`}>What Our Supporters Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`testimonial p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${dark ? 'bg-gray-800 text-white' : 'bg-white'}`}>
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'} mb-4`}>Supporting these campaigns has been incredibly rewarding. It's amazing to see the positive impact our donations can make.</p>
              <div className="flex items-center">
                <FaUserCircle size={48} className="rounded-full mr-4 text-teal-500" />
                <div>
                  <h4 className={`text-xl font-semibold ${dark ? 'text-gray-300' : 'text-gray-800'}`}>John Doe</h4>
                  <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>Philanthropist</p>
                </div>
              </div>
            </div>
            <div className={`testimonial p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${dark ? 'bg-gray-800 text-white' : 'bg-white'}`}>
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'} mb-4`}>I’ve seen firsthand how these campaigns can change lives. I'm proud to be a supporter.</p>
              <div className="flex items-center">
                <FaUserCircle size={48} className="rounded-full mr-4 text-teal-500" />
                <div>
                  <h4 className={`text-xl font-semibold ${dark ? 'text-gray-300' : 'text-gray-800'}`}>Jane Smith</h4>
                  <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>Entrepreneur</p>
                </div>
              </div>
            </div>
            <div className={`testimonial p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${dark ? 'bg-gray-800 text-white' : 'bg-white'}`}>
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'} mb-4`}>The support from the community has been overwhelming. I’m grateful for the opportunity to help.</p>
              <div className="flex items-center">
                <FaUserCircle size={48} className="rounded-full mr-4 text-teal-500" />
                <div>
                  <h4 className={`text-xl font-semibold ${dark ? 'text-gray-300' : 'text-gray-800'}`}>Emily Johnson</h4>
                  <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>Supporter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    

  )
};


export default Home;
