// src/pages/AllCampaign.jsx
import React from "react";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard"; // Import the CampaignCard component

const AllCampaign = () => {
  const campaigns = useLoaderData();

  return (
    <div className="mx-10 my-16 p-6 min-h-screen flex flex-col items-center justify-between">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        All Campaigns
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl">
        Explore a variety of campaigns dedicated to making a difference in the world. Whether it s providing relief during a natural disaster, supporting a social cause, or helping individuals in need, your donation can create a lasting impact. Browse the campaigns below to learn more about the causes and contribute to their success.
      </p>
      <br /><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 justify-between">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign._id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default AllCampaign;
