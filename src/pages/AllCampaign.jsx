import { useState, useEffect } from "react";
import { useLoaderData, NavLink } from "react-router-dom";

const AllCampaign = () => {
  const campaigns = useLoaderData();
  const [sortedCampaigns, setSortedCampaigns] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const [selectedSort, setSelectedSort] = useState("Low to High"); // Store the selected option
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate loading state until data is fetched
    if (campaigns) {
      setSortedCampaigns(campaigns);
      setLoading(false); // Data is loaded
    }
  }, [campaigns]);

  // Sort handler
  const handleSort = (order) => {
    const sorted = [...campaigns].sort((a, b) =>
      order === "asc" ? a.minDonation - b.minDonation : b.minDonation - a.minDonation
    );
    setSortedCampaigns(sorted);
    setSelectedSort(order === "asc" ? "Low to High" : "High to Low");
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="mx-10 my-16 p-6 min-h-screen flex flex-col items-center justify-between">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        All Campaigns
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl">
        Explore a variety of campaigns dedicated to making a difference in the world.
      </p>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center my-8">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid border-teal-500 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Sort Button with Dropdown aligned to the right */}
      <div className="relative mb-6 w-full flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 py-1.5 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-200 text-sm flex items-center"
        >
          <span className="mr-2">Sort: {selectedSort}</span>
          <svg
            className={`w-3 h-3 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-1 w-32 bg-white shadow-lg rounded-lg overflow-hidden text-sm">
            <button
              onClick={() => handleSort("asc")}
              className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100"
            >
              Low to High
            </button>
            <button
              onClick={() => handleSort("desc")}
              className="w-full px-3 py-1 text-left text-gray-800 hover:bg-gray-100"
            >
              High to Low
            </button>
          </div>
        )}
      </div>

      {/* Campaign Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-teal-500 text-white">
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Min Donation</th>
              <th className="px-4 py-2 text-left">Deadline</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              sortedCampaigns.map((campaign) => (
                <tr key={campaign._id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{campaign.title}</td>
                  <td className="px-4 py-2">{campaign.type}</td>
                  <td className="px-4 py-2">${campaign.minDonation}</td>
                  <td className="px-4 py-2">{campaign.deadline}</td>
                  <td className="px-4 py-2">
                    <NavLink
                      to={`/campaigns/${campaign._id}`}
                      className="w-full text-white mt-4 py-2 px-4 rounded-lg bg-gray-500 hover:bg-gray-500 transition-all duration-100 transform hover:scale-105 shadow-2xl hover:shadow-10xl font-inter"
                    >
                      See More
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
