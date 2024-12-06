import React from "react";
import { Link, NavLink } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  return (
    <div className="max-w-lg rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-56 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-3xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 mb-4 font-inter">
          {campaign.title}
        </h2>
        <p className="text-md text-gray-800 mb-6 font-lora">
          {campaign.description.length > 100
            ? `${campaign.description.slice(0, 100)}...`
            : campaign.description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600 font-semibold">
            Min Donation: <span className="text-blue-600">${campaign.minDonation}</span>
          </span>
          <span className="text-sm text-gray-600 font-semibold">
            Deadline: <span className="text-blue-600">{campaign.deadline}</span>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <NavLink
            to={`/campaign/${campaign._id}`}
            className="w-full  text-white mt-4 py-2 px-4 rounded-lg bg-gray-500 hover:bg-gray-500 transition-all duration-100 transform hover:scale-105 shadow-2xl hover:shadow-10xl font-inter"
          >
            See More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
