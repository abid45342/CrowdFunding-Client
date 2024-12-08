import React, { useContext, useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Loading from './Loading';
import { AuthContext } from '../provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';

const Running = () => {
  const [runningCampaigns, setRunningCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { dark } = useContext(AuthContext);

  useEffect(() => {
    const fetchRunningCampaigns = async () => {
      try {
        const response = await fetch('http://localhost:5000/camp'); 
        const data = await response.json();
        setRunningCampaigns(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
        setLoading(false);
      }
    };

    fetchRunningCampaigns();
  }, []);

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
    <div className={`my-40 home-page-container ${dark ? 'bg-gray-900' : 'bg-gray-100'} py-8 px-4 mx-20 rounded-lg p-40`}>
       <Fade duration={1000}> {/* Adding Fade animation to the headline */}
        <h1 className={`text-4xl font-extrabold text-center ${dark ? 'text-gray-300' : 'text-gray-800'} mb-12`}>
          Running Campaigns
        </h1>
      </Fade>
      {runningCampaigns.length > 0 ? (
        <div className="campaign-list grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20 px-6">
          {runningCampaigns.map((campaign) => (
            <div
              key={campaign._id}
              className={`campaign-card ${dark ? 'bg-gray-800 text-white' : 'bg-white'} rounded-2xl shadow-lg p-6 transition-all transform hover:scale-105 hover:shadow-2xl mb-8`}
            >
              <div className="relative mb-4">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white text-sm py-2 px-4 rounded-full">
                  Deadline: {campaign.deadline}
                </div>
              </div>
              <h2 className={`text-2xl font-semibold ${dark ? 'text-gray-300' : 'text-gray-800'} mb-2`}>
                {campaign.title}
              </h2>
              <p className={`text-gray-600 text-base mb-4 ${dark ? 'text-gray-400' : ''}`}>{campaign.description}</p>
              <div className="text-sm text-gray-500">
                <p>Type: <span className="font-medium text-gray-700">{campaign.type}</span></p>
                <p>Min Donation: <span className="font-medium text-gray-700">${campaign.minDonation}</span></p>
                <p>Total Raised: <span className="font-medium text-gray-700">${campaign.totalRaised}</span></p>
              </div>
              <div className="mt-4 p-4 bg-yellow-200 rounded-lg mt-8">
                <p className="text-gray-700 font-semibold text-lg">Join us in making a difference!</p>
                <p className="text-gray-600">Your support can change lives. Contribute today!</p>
              </div>
              <button
                onClick={() => handleSeeMore(campaign._id)}
                className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none transition-all"
              >
                See More
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className={`text-center text-lg ${dark ? 'text-gray-400' : 'text-gray-500'}`}>No running campaigns found.</p>
      )}
    </div>
  );
};

export default Running;
