// import React, { useContext, useEffect } from 'react';
// import { useLoaderData, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider';



 

// const MyDonation = () => {

//     const { user } = useContext(AuthContext);




//  const myDonations = useLoaderData();
//  console.log(myDonations)
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-6">My Donations</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {myDonations.map((donation) => (
//           <div 
//             key={donation._id} 
//             className="max-w-lg bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition p-4"
//           >
//             <img 
//               src={donation.image} 
//               alt={donation.title} 
//               className="rounded-t-lg w-full h-48 object-cover mb-4" 
//             />
//             <h2 className="text-xl font-inter font-bold mb-2">{donation.title}</h2>
//             <p className="text-sm font-lora text-gray-600 mb-4">{donation.description}</p>
//             <p className="text-sm font-medium text-gray-700">
//               Type: <span className="font-semibold">{donation.type}</span>
//             </p>
//             <p className="text-sm font-medium text-gray-700">
//               Minimum Donation: <span className="font-semibold">${donation.minDonation}</span>
//             </p>
//             <p className="text-sm font-medium text-gray-700">
//               Deadline: <span className="font-semibold">{new Date(donation.deadline).toLocaleDateString()}</span>
//             </p>
//             <p className="text-sm font-medium text-gray-700">
//               Created by: <span className="font-semibold">{donation.userName}</span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyDonation;















import  { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const [myDonations, setMyDonations] = useState([]);
  const [loading, setLoading] = useState(true);  // To manage loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in before making the API request
    // if (!user?.email) {
    //   navigate('/login'); // Redirect to login if no user is logged in
    //   return;
    // }

    // Fetch the donations data
    fetch(`http://localhost:5000/myDonations/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyDonations(data);  // Store the fetched data in state
        setLoading(false);  // Stop the loading spinner when data is fetched
      })
      .catch((err) => {
        console.error('Error fetching donations:', err);
        setLoading(false);
      });
  }, [user, navigate]);

  if (loading) {
    return <div className="text-center">Loading...</div>;  // Show loading message while data is being fetched
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-2xl font-bold text-center mb-6">My Donations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {myDonations.map((donation) => (
          <div 
            key={donation._id} 
            className=" mx-auto max-w-lg bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition p-4"
          >
            <img 
              src={donation.image} 
              alt={donation.title} 
              className="rounded-t-lg w-full h-48 object-cover mb-4" 
            />
            <h2 className="text-xl font-inter font-bold mb-2">{donation.title}</h2>
            <p className="text-sm font-lora text-gray-600 mb-4">{donation.description}</p>
            <p className="text-sm font-medium text-gray-700">
              Type: <span className="font-semibold">{donation.type}</span>
            </p>
            <p className="text-sm font-medium text-gray-700">
              Minimum Donation: <span className="font-semibold">${donation.minDonation}</span>
            </p>
            <p className="text-sm font-medium text-gray-700">
              Deadline: <span className="font-semibold">{new Date(donation.deadline).toLocaleDateString()}</span>
            </p>
            <p className="text-sm font-medium text-gray-700">
              Created by: <span className="font-semibold">{donation.userName}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;

