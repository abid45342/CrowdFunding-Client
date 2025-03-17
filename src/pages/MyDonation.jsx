


import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const [myDonations, setMyDonations] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in before making the API request
    // if (!user?.email) {
    //   navigate('/login'); // Redirect to login if no user is logged in
    //   return;
    // }

    // Fetch the donations data
    fetch(`https://crowd-server.vercel.app/myDonations/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyDonations(data); // Store the fetched data in state
        setLoading(false); // Stop the loading spinner when data is fetched
      })
      .catch((err) => {
        console.error('Error fetching donations:', err);
        setLoading(false);
      });
  }, [user, navigate]);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold text-center mb-6">My Donations</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-left">Title</th>
            <th className="py-2 px-4 border-b text-left">Description</th>
            <th className="py-2 px-4 border-b text-left">Type</th>
            <th className="py-2 px-4 border-b text-left">Min Donation</th>
            <th className="py-2 px-4 border-b text-left">Deadline</th>
            <th className="py-2 px-4 border-b text-left">Created By</th>
          </tr>
        </thead>
        <tbody>
          {myDonations.map((donation) => (
            <tr key={donation._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{donation.title}</td>
              <td className="py-2 px-4 border-b">{donation.description}</td>
              <td className="py-2 px-4 border-b">{donation.type}</td>
              <td className="py-2 px-4 border-b">${donation.minDonation}</td>
              <td className="py-2 px-4 border-b">{new Date(donation.deadline).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">{donation.userName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyDonation;
