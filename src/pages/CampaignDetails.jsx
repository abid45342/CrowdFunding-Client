import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CampaignDetails = () => {
  const { details } = useLoaderData(); // Fetching campaign details

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Campaign Image */}
        <div className="mb-6">
          <img
            src={details.image}
            alt={details.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Campaign Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{details.title}</h1>

        {/* Campaign Type */}
        <div className="mb-4">
          <span className="text-sm text-gray-500 font-medium">{details.type}</span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-6">{details.description}</p>

        {/* Minimum Donation */}
        <div className="flex items-center mb-6">
          <span className="text-xl font-bold text-teal-600">Minimum Donation:</span>
          <span className="ml-2 text-xl font-semibold text-gray-800">${details.minDonation}</span>
        </div>

        {/* Deadline */}
        <div className="mb-6">
          <span className="text-sm text-gray-500 font-medium">Deadline:</span>
          <span className="text-lg font-semibold text-gray-800">{details.deadline}</span>
        </div>

        {/* User Email */}
        <div className="mb-6">
          <span className="text-sm text-gray-500 font-medium">Creator Email:</span>
          <span className="text-lg font-semibold text-gray-800">{details.userEmail}</span>
        </div>

        {/* Donation Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-teal-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-200">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
