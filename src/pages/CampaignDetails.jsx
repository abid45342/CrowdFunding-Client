




import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const CampaignDetails = () => {
  const details = useLoaderData(); // Fetching campaign details
  const [expired, setExpired] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(details)

  // Ensure the user exists before using user.email
  const userData = user ? { ...details, email: user.email } : { ...details, email: "guest@example.com" };
  console.log(userData);

  const currentDate = new Date();
  const campaignDate = new Date(details.deadline);

  useEffect(() => {
    if (currentDate > campaignDate) {
      setExpired(true);
      toast.error("The campaign has expired and is no longer accepting donations.");
    }
  }, []);

  const handleDonate = () => {
    fetch("https://crowd-server.vercel.app/donater", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          Swal.fire({
            title: "Donation Successful!",
            text: `Thank you for donating to ${details.title}.`,
            icon: "success",
            confirmButtonText: "Close",
          });
        } else {
          console.error("Donation failed:", data);
          throw new Error("Donation failed. No ID returned.");
        }
      })
      .catch((error) => {
        console.error("Error donating:", error);
        toast.error("An error occurred while processing your donation. Please try again.");
      });
  };

  if (!details) {
    return <div>Loading...</div>; // Show loading while details are not available
  }

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
          <button
            onClick={handleDonate}
            className={` ${expired ? "cursor-not-allowed opacity-50" : ""} btn bg-teal-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-200`}
          >
            {expired ? "Campaign Expired" : "Donate Now"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CampaignDetails;
