// import React from "react";
// import { Link, NavLink } from "react-router-dom";

// const CampaignCard = ({ campaign }) => {
  
//   return (
//     <div className="max-w-lg rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
//       <img
//         src={campaign.image}
//         alt={campaign.title}
//         className="w-full h-56 object-cover rounded-t-lg"
//       />
//       <div className="p-6">
//         <h2 className="text-3xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 mb-4 font-inter">
//           {campaign.title}
//         </h2>
//         <p className="text-md text-gray-800 mb-6 font-lora">
//           {campaign.description.length > 100
//             ? `${campaign.description.slice(0, 100)}...`
//             : campaign.description}
//         </p>
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-sm text-gray-600 font-semibold">
//             Min Donation: <span className="text-blue-600">${campaign.minDonation}</span>
//           </span>
//           <span className="text-sm text-gray-600 font-semibold">
//             Deadline: <span className="text-blue-600">{campaign.deadline}</span>
//           </span>
//         </div>
//         <div className="flex justify-between items-center">
//           <NavLink
//             to={`/campaigns/${campaign._id}`}
//             className="w-full  text-white mt-4 py-2 px-4 rounded-lg bg-gray-500 hover:bg-gray-500 transition-all duration-100 transform hover:scale-105 shadow-2xl hover:shadow-10xl font-inter"
//           >
//             See More
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampaignCard;




import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const CampaignCard = ({ campaign }) => {
  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="max-w-lg rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-teal-200 dark:border-gray-700"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-56 object-cover rounded-t-xl"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 bg-teal-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
          {campaign.deadline}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-600 transition-colors duration-300 mb-3">
          {campaign.title}
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {campaign.description}
        </p>
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500 dark:text-gray-300">
          <span>
            Min Donation: <span className="font-medium text-teal-600">${campaign.minDonation}</span>
          </span>
          <span>
            Total Raised: <span className="font-medium text-teal-600">${campaign.totalRaised || 0}</span>
          </span>
        </div>

        {/* Action Button */}
        <NavLink to={`/campaigns/${campaign._id}`}>
          <motion.button
            className="w-full py-2.5 bg-teal-500 text-white rounded-full hover:bg-teal-600 focus:outline-none transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See More
          </motion.button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default CampaignCard;