





import React, { useContext, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { FaHandsHelping } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
 
  const location = useLocation();
  console.log(location.pathname)
  const navigate = useNavigate();
  const { user, handleLogout, setDark, dark } = useContext(AuthContext);
  const controls = useAnimation();
  console.log(user)

  // Animation variants for Framer Motion
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const handleScroll = () => {
    const scrollY = window.scrollY;
    controls.start({
      backgroundColor: (scrollY > 50 || location.pathname !='/') ? (dark ? 'rgba(31, 41, 55, 1)' : '#1f2937') : 'rgba(0, 0, 0, 0)',
      color: scrollY > 50 ? (dark ? '#ffffff' : '#ffffff') : '#ffffff',
      boxShadow: scrollY > 50 ? '0px 4px 10px rgba(0,0,0,0.1)' : 'none',
      transition: { duration: 0.3 },
    });
  };
  // Scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dark,location.pathname]); // Re-run when dark mode changes



  return (
    <motion.div
      className="fixed top-0 left-0 w-full z-50 flex border-x-2 border-b border-[rgba(255,255,255,0.15)] min-h-20"
      animate={controls}
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#ffffff' }} // Initial styles
    >
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <motion.ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-transparent text-white dark:bg-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.li variants={navItemVariants}><NavLink to="/" className="hover:text-mint">Home</NavLink></motion.li>
            <motion.li variants={navItemVariants}><NavLink to="/campaigns" className="hover:text-mint">All Campaigns</NavLink></motion.li>
            <motion.li variants={navItemVariants}><NavLink to="/addCampaign" className="hover:text-mint">Add New Campaign</NavLink></motion.li>
            <motion.li variants={navItemVariants}><NavLink to={`/myCampaign/${user?.email}`} className="hover:text-mint">My Campaign</NavLink></motion.li>
            <motion.li variants={navItemVariants}><NavLink to={`/myDonation/${user?.email}`} className="hover:text-mint">My Donation</NavLink></motion.li>
          </motion.ul>
        </div>
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaHandsHelping size={40} className="text-white ml-4" />
          <NavLink to="/" className="btn btn-ghost text-2xl font-bold hover:text-green-700">IgnitionDeck</NavLink>
        </motion.div>
      </div>

      {/* Navbar Center */}
      <div className={`navbar-center hidden lg:flex ${user?.email?'pl-4':'px-40'} border-x border-[rgba(255,255,255,0.15)] items-center`}>
        <motion.ul
          className="menu menu-horizontal px-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.li variants={navItemVariants}><NavLink to="/" className="hover:text-mint px-4 py-2 rounded-md">Home</NavLink></motion.li>
          <motion.li variants={navItemVariants}><NavLink to="/campaigns" className="hover:text-mint px-4 py-2 rounded-md">All Campaigns</NavLink></motion.li>
          {user?.email && (
            <motion.li variants={navItemVariants}><NavLink to="/addCampaign" className="hover:text-mint px-4 py-2 rounded-md">Add New Campaign</NavLink></motion.li>
          )}
          {user?.email && (
            <motion.li variants={navItemVariants}><NavLink to={`/myCampaign/${user?.email}`} className="hover:text-mint px-4 py-2 rounded-md">My Campaign</NavLink></motion.li>
          )}
          {user?.email && (
            <motion.li variants={navItemVariants}><NavLink to={`/myDonation/${user?.email}`} className="hover:text-white px-4 py-2 rounded-md">My Donation</NavLink></motion.li>
          )}
          <motion.li variants={navItemVariants}><NavLink to="/about" className="hover:text-mint px-4 py-2 rounded-md">About Us</NavLink></motion.li>
          <motion.li variants={navItemVariants}><NavLink to="/contact" className="hover:text-mint px-4 py-2 rounded-md">Contact</NavLink></motion.li>
          <motion.li variants={navItemVariants}><NavLink to="/support" className="hover:text-mint px-4 py-2 rounded-md">Support</NavLink></motion.li>
        </motion.ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex pr-4 items-center gap-4">
        {/* Dark Mode Toggle */}
        <motion.button
          className="btn btn-circle bg-transparent hover:bg-transparent hover:text-mint dark:bg-gray-700 text-white dark:text-white dark:hover:bg-transparent transition-colors"
          onClick={() => setDark(!dark)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {dark ? <IoMoon size={20} /> : <IoSunny size={20} />}
        </motion.button>

        {user?.email ? (
          <div className="flex items-center gap-4">
            {/* User Profile */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src={user?.photoURL}
                alt="user"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">{user?.displayName || user?.email}</p>
              </div>
            </motion.div>
            {/* Logout Button */}
            <motion.button
              onClick={() => handleLogout()}
              className="btn bg-transparent text-white hover:bg-transparent hover:text-mint rounded-full px-6 mr-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Logout
            </motion.button>
          </div>
        ) : (
          <div className="flex gap-3 mx-4">
            <NavLink to="/login" className="btn bg-transparent text-white hover:bg-transparent hover:text-mint rounded-full px-6">
              Login
            </NavLink>
            <NavLink to="/register" className="btn bg-transparent border-2 border-white text-white hover:text-mint rounded-full px-6 hover:bg-transparent">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;