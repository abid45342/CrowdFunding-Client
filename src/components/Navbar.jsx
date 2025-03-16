// import { useContext } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import { IoMoon, IoSunny } from 'react-icons/io5';
// import { FaHandsHelping, FaRegBuilding } from "react-icons/fa";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user, handleLogout, setDark, dark } = useContext(AuthContext);

//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to='/campaigns'>All Campaign</NavLink>
//             </li>
//             <li>
//               <NavLink to="/addCampaign">Add New Campaign</NavLink>
//             </li>
//             <li>
//             <NavLink to={`/myCampaign/${user?.email}`}>My Campaign</NavLink>
//             </li>

//             <li>
//               <NavLink to={`/myDonation/${user?.email}`}>My Donation</NavLink>
//             </li>

//           </ul>
//         </div>
//         <FaHandsHelping size={40} className="text-teal-500 ml-3" />
//         <a className="btn btn-ghost text-xl">IgnitionDeck</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/campaigns">All Campaign</NavLink>
//           </li>
//           {user?.email && (
//             <li>
//               <NavLink to="/addCampaign">Add New Campaign</NavLink>
//             </li>
//           )}
//           {user?.email && (
//             <li>
//               <NavLink to={`/myCampaign/${user?.email}`}>My Campaign</NavLink>
//             </li>
//           )}
//           {user?.email && (
//             <li>
//               <NavLink to={`/myDonation/${user?.email}`}>My Donation</NavLink>
//             </li>
//           )}
//           <li>
//             <NavLink to="/about">About Us</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact">Contact</NavLink>
//           </li>
//           <li>
//             <NavLink to="/support">Support</NavLink>
//           </li>
//         </ul>
//       </div>

//       <div className="navbar-end">
//         <button
//           className="mr-20 text-xl btn rounded-2xl bg-gray-200"
//           onClick={() => {
//             setDark(!dark);
//           }}
//         >
//           {dark ? <IoMoon /> : <IoSunny />}
//         </button>

//         {user?.email ? (
//           <div className="flex items-center gap-4">
//             <div className="relative group">
//               <img
//                 src={user?.photoURL}
//                 alt="user"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div className="absolute bottom-0 top-12 left-4 text-center bg-opacity-60 text-gray rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
//                 <p>{user?.name}</p>
//               </div>
//             </div>
//             <button 
//               onClick={() => {
//                 handleLogout();
//               }}
//               className="btn  mr-10"
//             >
//               Log out
//             </button>
//           </div>
//         ) : (
//           <div className="flex gap-3 mx-5">
//             <NavLink to="/login" className="btn">
//               Login
//             </NavLink>
//             <NavLink to="/register" className="btn">
//               Register
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;










import React from 'react';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, handleLogout, setDark, dark } = useContext(AuthContext);

  // Animation variants for Framer Motion
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`navbar shadow-lg ${dark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-colors duration-300  `}>
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <motion.ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white dark:bg-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.li variants={navItemVariants}><NavLink to="/" className="hover:text-green-500">Home</NavLink></motion.li>
            <motion.li variants={navItemVariants}><NavLink to="/campaigns" className="hover:text-green-500">All Campaigns</NavLink></motion.li>
            <motion.li variants={navItemVariants}><NavLink to="/addCampaign" className="hover:text-green-500">Add New Campaign</NavLink></motion.li>
            <motion.li variants={navItemVariants}><NavLink to={`/myCampaign/${user?.email}`} className="hover:text-green-500">My Campaign</NavLink></motion.li>
            <motion.li variants={navItemVariants}><NavLink to={`/myDonation/${user?.email}`} className="hover:text-green-500">My Donation</NavLink></motion.li>
          </motion.ul>
        </div>
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaHandsHelping size={40} className="text-green-500 ml-4" />
          <NavLink to="/" className="btn btn-ghost text-2xl font-bold text-green-600 hover:text-green-700">IgnitionDeck</NavLink>
        </motion.div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <motion.ul
          className="menu menu-horizontal px-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.li variants={navItemVariants}><NavLink to="/" className="hover:text-green-500 px-4 py-2 rounded-md">Home</NavLink></motion.li>
          <motion.li variants={navItemVariants}><NavLink to="/campaigns" className="hover:text-green-500 px-4 py-2 rounded-md">All Campaigns</NavLink></motion.li>
          {user?.email && (
            <motion.li variants={navItemVariants}><NavLink to="/addCampaign" className="hover:text-green-500 px-4 py-2 rounded-md">Add New Campaign</NavLink></motion.li>
          )}
          {user?.email && (
            <motion.li variants={navItemVariants}><NavLink to={`/myCampaign/${user?.email}`} className="hover:text-green-500 px-4 py-2 rounded-md">My Campaign</NavLink></motion.li>
          )}
          {user?.email && (
            <motion.li variants={navItemVariants}><NavLink to={`/myDonation/${user?.email}`} className="hover:text-green-500 px-4 py-2 rounded-md">My Donation</NavLink></motion.li>
          )}
          <motion.li variants={navItemVariants}><NavLink to="/about" className="hover:text-green-500 px-4 py-2 rounded-md">About Us</NavLink></motion.li>
          <motion.li variants={navItemVariants}><NavLink to="/contact" className="hover:text-green-500 px-4 py-2 rounded-md">Contact</NavLink></motion.li>
          <motion.li variants={navItemVariants}><NavLink to="/support" className="hover:text-green-500 px-4 py-2 rounded-md">Support</NavLink></motion.li>
        </motion.ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <motion.button
          className="btn btn-circle bg-green-100 dark:bg-gray-700 text-green-500 dark:text-white hover:bg-green-200 dark:hover:bg-gray-600 transition-colors"
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
                className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
              />
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">{user?.displayName || user?.email}</p>
              </div>
            </motion.div>
            {/* Logout Button */}
            <motion.button
              onClick={() => handleLogout()}
              className="btn bg-green-500 text-white hover:bg-green-600 rounded-full px-6 mr-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Logout
            </motion.button>
          </div>
        ) : (
          <div className="flex gap-3 mx-4">
            <NavLink to="/login" className="btn bg-green-500 text-white hover:bg-green-600 rounded-full px-6">
              Login
            </NavLink>
            <NavLink to="/register" className="btn bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-full px-6">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
