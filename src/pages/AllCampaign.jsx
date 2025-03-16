


// import React, { useState, useEffect, useContext } from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import Loading from './Loading';

// const AllCampaign = () => {
//   const campaigns = useLoaderData();
//   const [sortedCampaigns, setSortedCampaigns] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState("Low to High");
//   const [loading, setLoading] = useState(true);
//   const { dark } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (campaigns) {
//       setSortedCampaigns(campaigns);
//       setLoading(false);
//     }
//   }, [campaigns]);

//   const handleSort = (order) => {
//     const sorted = [...campaigns].sort((a, b) =>
//       order === "asc" ? a.minDonation - b.minDonation : b.minDonation - a.minDonation
//     );
//     setSortedCampaigns(sorted);
//     setSelectedSort(order === "asc" ? "Low to High" : "High to Low");
//     setIsOpen(false);
//   };

//   const handleSeeMore = (campaignId) => {
//     navigate(`/campaigns/${campaignId}`);
//   };

//   if (loading) {
//     return (
//       <div className={`flex justify-center items-center h-screen ${dark ? 'bg-gray-900' : 'bg-gray-100'}`}>
//         <p className={`text-xl font-semibold ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
//           <Loading /> Loading...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className={`mx-6 md:mx-12 lg:mx-16 xl:mx-24 my-16 p-6 min-h-screen flex flex-col items-center justify-between ${dark ? 'bg-gray-900' : ''}`}>
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">All Campaigns</h1>
//       <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl">Discover inspiring campaigns that you can be a part of today!</p>

//       {/* Sort Button with Dropdown */}
//       <div className="relative mb-6 w-full flex justify-end">
//         <button onClick={() => setIsOpen(!isOpen)} className="px-3 py-1.5 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-200 text-sm flex items-center">
//           <span className="mr-2">Sort: {selectedSort}</span>
//           <svg className={`w-3 h-3 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>

//         {/* Dropdown Menu */}
//         {isOpen && (
//           <div className=" absolute right-0 mt-10 w-32 bg-white shadow-lg rounded-lg overflow-hidden text-sm z-10 mb-1">
//             <button onClick={() => handleSort("asc")} className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100">Low to High</button>
//             <button onClick={() => handleSort("desc")} className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100">High to Low</button>
//           </div>
//         )}
//       </div>

//       {/* Campaign Cards */}
//       <div className=" mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-6">
//   {sortedCampaigns.length > 0 ? (
//     sortedCampaigns.map((campaign) => (
//       <div 
//         key={campaign._id} 
//         className={`flex flex-col justify-between h-full rounded-lg overflow-hidden shadow-xl bg-white transform transition-transform duration-300 hover:scale-105 ${dark ? 'border border-gray-700' : 'border border-gray-200'}`}
//       >
//         {/* Image Section */}
//         <div className="relative">
//           <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover" />
//           <div className="absolute top-4 left-4 bg-teal-600 text-white text-sm px-3 py-1 rounded-md">{campaign.deadline}</div>
//         </div>

//         {/* Content Section */}
//         <div className="px-4 py-4 flex-grow">
//           <h3 className={`text-xl font-semibold mb-2 ${dark ? 'text-gray-300' : 'text-gray-800'}`}>{campaign.title}</h3>
//           <p className={` line-clamp-4 text-base text-gray-600 mb-4 ${dark ? 'text-gray-400' : ''}`}>{campaign.description}</p>
//           <div className="text-sm text-gray-500">
//             <p>Min Donation: <span className="font-medium text-gray-700">${campaign.minDonation}</span></p>
//             <p>Total Raised: <span className="font-medium text-gray-700">${campaign.totalRaised}</span></p>
//           </div>
//         </div>

//         {/* Action Button */}
//         <div className="p-4 bg-gray-100">
//           <button
//             onClick={() => handleSeeMore(campaign._id)}
//             className="w-full py-2 px-6 bg-teal-600 text-white rounded-full hover:bg-teal-700 focus:outline-none transition-all"
//           >
//             See More
//           </button>
//         </div>
//       </div>
//     ))
//   ) : (
//     <p className="text-center text-lg text-gray-500">No campaigns available.</p>
//   )}
// </div>

//     </div>
//   );
// };

// export default AllCampaign;


import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { motion } from "framer-motion";
import Loading from './Loading';
import { FaHeart } from "react-icons/fa";

const AllCampaign = () => {
  const campaigns = useLoaderData();
  const [sortedCampaigns, setSortedCampaigns] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Low to High");
  const [loading, setLoading] = useState(true);
  const { dark } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (campaigns) {
      setSortedCampaigns(campaigns);
      setLoading(false);
    }
  }, [campaigns]);

  const handleSort = (order) => {
    const sorted = [...campaigns].sort((a, b) =>
      order === "asc" ? a.minDonation - b.minDonation : b.minDonation - a.minDonation
    );
    setSortedCampaigns(sorted);
    setSelectedSort(order === "asc" ? "Low to High" : "High to Low");
    setIsOpen(false);
  };

  const handleSeeMore = (campaignId) => {
    navigate(`/campaigns/${campaignId}`);
  };

  if (loading) {
    return (
      <div className={`flex justify-center items-center h-screen ${dark ? 'bg-gray-900' : 'bg-white'}`}>
        <p className={`text-xl font-semibold flex items-center gap-2 ${dark ? 'text-gray-300' : 'text-teal-600'}`}>
          <Loading /> Loading Campaigns...
        </p>
      </div>
    );
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className={`min-h-screen py-16 px-6 md:px-12 lg:px-16 xl:px-24 ${dark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300 overflow-hidden`}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative"
      >
        <h1 className={`text-4xl md:text-5xl font-extrabold ${dark ? 'text-white' : 'text-teal-700'} drop-shadow-lg`}>
          Discover All Campaigns
        </h1>
        <p className={`mt-4 text-lg md:text-xl ${dark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto italic`}>
          Join the movement—support causes that inspire you!
        </p>
        <motion.div
          className="absolute -top-10 -left-10 text-teal-300 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <FaHeart size={60} />
        </motion.div>
      </motion.div>

      {/* Sort Button with Dropdown */}
      <div className="flex justify-end mb-10 relative z-10">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center px-5 py-2.5 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 ${dark ? 'border border-teal-400' : ''}`}
          whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 128, 128, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2 text-sm md:text-base font-medium">Sort: {selectedSort}</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-14 right-0 w-48 bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden z-20 border ${dark ? 'border-gray-700' : 'border-teal-200'}`}
          >
            <button
              onClick={() => handleSort("asc")}
              className="w-full px-4 py-3 text-left text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors duration-200"
            >
              Low to High
            </button>
            <button
              onClick={() => handleSort("desc")}
              className="w-full px-4 py-3 text-left text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors duration-200"
            >
              High to Low
            </button>
          </motion.div>
        )}
      </div>

      {/* Campaign Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-0"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {sortedCampaigns.length > 0 ? (
          sortedCampaigns.map((campaign) => (
            <motion.div
              key={campaign._id}
              className={`rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${dark ? 'border border-gray-700' : 'border border-teal-200'}`}
              variants={cardVariants}
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-60 object-cover rounded-t-2xl"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-teal-500 text-white text-sm px-4 py-1.5 rounded-full shadow-lg">
                  {campaign.deadline}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-2xl font-bold mb-3 ${dark ? 'text-gray-100' : 'text-gray-800'} hover:text-teal-600 transition-colors duration-300`}>
                  {campaign.title}
                </h3>
                <p className={`line-clamp-3 text-base ${dark ? 'text-gray-400' : 'text-gray-600'} mb-4 italic`}>
                  {campaign.description}
                </p>
                <div className={`text-sm ${dark ? 'text-gray-300' : 'text-gray-500'} mb-4`}>
                  <p>
                    Min Donation: <span className="font-semibold text-teal-600">${campaign.minDonation}</span>
                  </p>
                  <p>
                    Total Raised: <span className="font-semibold text-teal-600">${campaign.totalRaised || 0}</span>
                  </p>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-teal-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((campaign.totalRaised || 0) / campaign.minDonation * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <motion.button
                  onClick={() => handleSeeMore(campaign._id)}
                  className="w-full py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 focus:outline-none transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 128, 128, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaHeart className="text-white" /> See More
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p
            className={`text-center text-xl col-span-full ${dark ? 'text-gray-400' : 'text-teal-600'} font-semibold`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            No campaigns available yet—start one today!
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default AllCampaign;