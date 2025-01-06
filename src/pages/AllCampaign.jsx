// import { useState, useEffect } from "react";
// import { useLoaderData, NavLink } from "react-router-dom";

// const AllCampaign = () => {
//   const campaigns = useLoaderData();
//   const [sortedCampaigns, setSortedCampaigns] = useState([]);
//   const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
//   const [selectedSort, setSelectedSort] = useState("Low to High"); // Store the selected option
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     // Simulate loading state until data is fetched
//     if (campaigns) {
//       setSortedCampaigns(campaigns);
//       setLoading(false); // Data is loaded
//     }
//   }, [campaigns]);

//   // Sort handler
//   const handleSort = (order) => {
//     const sorted = [...campaigns].sort((a, b) =>
//       order === "asc" ? a.minDonation - b.minDonation : b.minDonation - a.minDonation
//     );
//     setSortedCampaigns(sorted);
//     setSelectedSort(order === "asc" ? "Low to High" : "High to Low");
//     setIsOpen(false); // Close dropdown after selection
//   };

//   return (
//     <div className="mx-10 my-16 p-6 min-h-screen flex flex-col items-center justify-between">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         All Campaigns
//       </h1>
//       <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl">
//         Explore a variety of campaigns dedicated to making a difference in the world.
//       </p>

//       {/* Loading Spinner */}
//       {loading && (
//         <div className="flex justify-center items-center my-8">
//           <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid border-teal-500 rounded-full" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}

//       {/* Sort Button with Dropdown aligned to the right */}
//       <div className="relative mb-6 w-full flex justify-end">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="px-3 py-1.5 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-200 text-sm flex items-center"
//         >
//           <span className="mr-2">Sort: {selectedSort}</span>
//           <svg
//             className={`w-3 h-3 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>

//         {/* Dropdown Menu */}
//         {isOpen && (
//           <div className="absolute right-0 mt-1 w-32 bg-white shadow-lg rounded-lg overflow-hidden text-sm">
//             <button
//               onClick={() => handleSort("asc")}
//               className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100"
//             >
//               Low to High
//             </button>
//             <button
//               onClick={() => handleSort("desc")}
//               className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100"
//             >
//               High to Low
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Campaign Table */}
//       <div className="overflow-x-auto w-full">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-teal-500 text-white">
//               <th className="px-4 py-2 text-left">Title</th>
//               <th className="px-4 py-2 text-left">Type</th>
//               <th className="px-4 py-2 text-left">Min Donation</th>
//               <th className="px-4 py-2 text-left">Deadline</th>
//               <th className="px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {!loading &&
//               sortedCampaigns.map((campaign) => (
//                 <tr key={campaign._id} className="border-b hover:bg-gray-100">
//                   <td className="px-4 py-2">{campaign.title}</td>
//                   <td className="px-4 py-2">{campaign.type}</td>
//                   <td className="px-4 py-2">${campaign.minDonation}</td>
//                   <td className="px-4 py-2">{campaign.deadline}</td>
//                   <td className="px-4 py-2">
//                     <NavLink
//                       to={`/campaigns/${campaign._id}`}
//                       className="btn text-white mt-4 py-2 px-4 rounded-lg bg-gray-500 hover:bg-gray-500 transition-all duration-100 transform hover:scale-105 shadow-2xl hover:shadow-10xl font-inter"
//                     >
//                       See More
//                     </NavLink>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllCampaign;














// import { useState, useEffect } from "react";
// import { useLoaderData, NavLink } from "react-router-dom";

// const AllCampaign = () => {
//   const campaigns = useLoaderData();
//   const [sortedCampaigns, setSortedCampaigns] = useState([]);
//   const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
//   const [selectedSort, setSelectedSort] = useState("Low to High"); // Store the selected option
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     // Simulate loading state until data is fetched
//     if (campaigns) {
//       setSortedCampaigns(campaigns);
//       setLoading(false); // Data is loaded
//     }
//   }, [campaigns]);

//   // Sort handler
//   const handleSort = (order) => {
//     const sorted = [...campaigns].sort((a, b) =>
//       order === "asc" ? a.minDonation - b.minDonation : b.minDonation - a.minDonation
//     );
//     setSortedCampaigns(sorted);
//     setSelectedSort(order === "asc" ? "Low to High" : "High to Low");
//     setIsOpen(false); // Close dropdown after selection
//   };

//   return (
//     <div className="mx-10 my-16 p-6 min-h-screen flex flex-col items-center justify-between">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         All Campaigns
//       </h1>
//       <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl">
//         Explore a variety of campaigns dedicated to making a difference in the world.
//       </p>

//       {/* Loading Spinner */}
//       {loading && (
//         <div className="flex justify-center items-center my-8">
//           <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid border-teal-500 rounded-full" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}

//       {/* Sort Button with Dropdown aligned to the right */}
//       <div className="relative mb-6 w-full flex justify-end">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="px-3 py-1.5 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-200 text-sm flex items-center"
//         >
//           <span className="mr-2">Sort: {selectedSort}</span>
//           <svg
//             className={`w-3 h-3 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>

//         {/* Dropdown Menu */}
//         {isOpen && (
//           <div className="absolute right-0 mt-1 w-32 bg-white shadow-lg rounded-lg overflow-hidden text-sm">
//             <button
//               onClick={() => handleSort("asc")}
//               className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100"
//             >
//               Low to High
//             </button>
//             <button
//               onClick={() => handleSort("desc")}
//               className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100"
//             >
//               High to Low
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Campaign Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
//         {!loading &&
//           sortedCampaigns.map((campaign) => (
//             <div
//               key={campaign._id}
//               className="bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition-all p-6"
//             >
//               <h2 className="text-xl font-inter font-bold mb-2">{campaign.title}</h2>
//               <p className="text-sm font-lora text-gray-600 mb-4">{campaign.type}</p>
//               <p className="text-sm font-medium text-gray-700 mb-4">
//                 Min Donation: <span className="font-semibold">${campaign.minDonation}</span>
//               </p>
//               <p className="text-sm font-medium text-gray-700 mb-4">
//                 Deadline: <span className="font-semibold">{new Date(campaign.deadline).toLocaleDateString()}</span>
//               </p>
//               <NavLink
//                 to={`/campaigns/${campaign._id}`}
//                 className="btn text-white py-2 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
//               >
//                 See More
//               </NavLink>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default AllCampaign;






// import React, { useState, useEffect, useContext } from "react";
// import { useLoaderData, NavLink } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import Loading from './Loading';

// const AllCampaign = () => {
//   const campaigns = useLoaderData();
//   const [sortedCampaigns, setSortedCampaigns] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState("Low to High");
//   const [loading, setLoading] = useState(true);
//   const { dark } = useContext(AuthContext);

//   useEffect(() => {
//     // Simulate loading state until data is fetched
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
//     <div className={`mx-10 my-16 p-6 min-h-screen flex flex-col items-center justify-between ${dark ? 'bg-gray-900' : 'bg-gray-100'}`}>
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">All Campaigns</h1>
//       <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl">Explore a variety of campaigns dedicated to making a difference in the world.</p>

//       {/* Loading Spinner */}
//       {loading && (
//         <div className="flex justify-center items-center my-8">
//           <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid border-teal-500 rounded-full" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}

//       {/* Sort Button with Dropdown aligned to the right */}
//       <div className="relative mb-6 w-full flex justify-end">
//         <button onClick={() => setIsOpen(!isOpen)} className="px-3 py-1.5 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-200 text-sm flex items-center">
//           <span className="mr-2">Sort: {selectedSort}</span>
//           <svg className={`w-3 h-3 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>

//         {/* Dropdown Menu */}
//         {isOpen && (
//           <div className="absolute right-0 mt-1 w-32 bg-white shadow-lg rounded-lg overflow-hidden text-sm">
//             <button onClick={() => handleSort("asc")} className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100">Low to High</button>
//             <button onClick={() => handleSort("desc")} className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100">High to Low</button>
//           </div>
//         )}
//       </div>

//       {/* Campaign Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
//         {sortedCampaigns.length > 0 ? (
//           sortedCampaigns.map((campaign) => (
//             <div key={campaign._id} className={`p-6 rounded-2xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl mb-8 ${dark ? 'bg-gray-800 text-white' : 'bg-white'}`}>
//               <div className="relative mb-4">
//                 <img src={campaign.image} alt={campaign.title} className="w-full h-64 object-cover rounded-lg mb-4" />
//                 <div className="absolute top-4 right-4 bg-red-500 text-white text-sm py-2 px-4 rounded-full">
//                   Deadline: {campaign.deadline}
//                 </div>
//               </div>
//               <h2 className={`text-2xl font-semibold ${dark ? 'text-gray-300' : 'text-gray-800'} mb-2`}>
//                 {campaign.title}
//               </h2>
//               <p className={`text-gray-600 text-base mb-4 ${dark ? 'text-gray-400' : ''}`}>{campaign.description}</p>
//               <div className="text-sm text-gray-500">
//                 <p>Type: <span className="font-medium text-gray-700">{campaign.type}</span></p>
//                 <p>Min Donation: <span className="font-medium text-gray-700">${campaign.minDonation}</span></p>
//                 <p>Total Raised: <span className="font-medium text-gray-700">${campaign.totalRaised}</span></p>
//               </div>
//               <button onClick={() => handleSeeMore(campaign._id)} className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none transition-all">
//                 See More
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-lg text-gray-500">No campaigns available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllCampaign;




import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from './Loading';

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
      <div className={`flex justify-center items-center h-screen ${dark ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <p className={`text-xl font-semibold ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          <Loading /> Loading...
        </p>
      </div>
    );
  }

  return (
    <div className={`mx-6 md:mx-12 lg:mx-16 xl:mx-24 my-16 p-6 min-h-screen flex flex-col items-center justify-between ${dark ? 'bg-gray-900' : ''}`}>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">All Campaigns</h1>
      <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl">Discover inspiring campaigns that you can be a part of today!</p>

      {/* Sort Button with Dropdown */}
      <div className="relative mb-6 w-full flex justify-end">
        <button onClick={() => setIsOpen(!isOpen)} className="px-3 py-1.5 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-200 text-sm flex items-center">
          <span className="mr-2">Sort: {selectedSort}</span>
          <svg className={`w-3 h-3 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className=" absolute right-0 mt-10 w-32 bg-white shadow-lg rounded-lg overflow-hidden text-sm z-10 mb-1">
            <button onClick={() => handleSort("asc")} className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100">Low to High</button>
            <button onClick={() => handleSort("desc")} className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100">High to Low</button>
          </div>
        )}
      </div>

      {/* Campaign Cards */}
      <div className=" mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-6">
  {sortedCampaigns.length > 0 ? (
    sortedCampaigns.map((campaign) => (
      <div 
        key={campaign._id} 
        className={`flex flex-col justify-between h-full rounded-lg overflow-hidden shadow-xl bg-white transform transition-transform duration-300 hover:scale-105 ${dark ? 'border border-gray-700' : 'border border-gray-200'}`}
      >
        {/* Image Section */}
        <div className="relative">
          <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover" />
          <div className="absolute top-4 left-4 bg-teal-600 text-white text-sm px-3 py-1 rounded-md">{campaign.deadline}</div>
        </div>

        {/* Content Section */}
        <div className="px-4 py-4 flex-grow">
          <h3 className={`text-xl font-semibold mb-2 ${dark ? 'text-gray-300' : 'text-gray-800'}`}>{campaign.title}</h3>
          <p className={` line-clamp-4 text-base text-gray-600 mb-4 ${dark ? 'text-gray-400' : ''}`}>{campaign.description}</p>
          <div className="text-sm text-gray-500">
            <p>Min Donation: <span className="font-medium text-gray-700">${campaign.minDonation}</span></p>
            <p>Total Raised: <span className="font-medium text-gray-700">${campaign.totalRaised}</span></p>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-4 bg-gray-100">
          <button
            onClick={() => handleSeeMore(campaign._id)}
            className="w-full py-2 px-6 bg-teal-600 text-white rounded-full hover:bg-teal-700 focus:outline-none transition-all"
          >
            See More
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-lg text-gray-500">No campaigns available.</p>
  )}
</div>

    </div>
  );
};

export default AllCampaign;
