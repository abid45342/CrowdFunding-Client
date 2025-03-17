













import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const loaderData = useLoaderData();
  const [campaigns, setCampaigns] = useState(loaderData || []);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [updatedCampaign, setUpdatedCampaign] = useState({});

  // Handle delete campaign
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crowd-server.vercel.app/campaigns/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
              setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete campaign.", "error");
          });
      }
    });
  };

  // Handle update click
  const handleUpdateClick = (campaign) => {
    setSelectedCampaign(campaign);
    setUpdatedCampaign(campaign); // Set the initial data for the update form
  };

  // Handle form submission
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log(updatedCampaign);
  
    fetch(`https://crowd-server.vercel.app/campaigns/${updatedCampaign._id}`, {
      method: "PATCH", // Change from PUT to PATCH
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 0) {
          Swal.fire("You didn't change anything", "success");
        } else {
          Swal.fire("Updated!", "Campaign has been updated.", "success");
          setCampaigns(
            campaigns.map((campaign) =>
              campaign._id === updatedCampaign._id ? updatedCampaign : campaign
            )
          );
          setSelectedCampaign(null); // Close modal
        }
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to update campaign.", "error");
      });
  };

  return (
    <div className="p-4 mt-20 text-center">
      <h2 className="text-2xl font-bold mb-4">My Campaigns</h2>
      {campaigns.length === 0 ? (
        <p>You don't have any campaigns yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Min Donation</th>
                <th className="border border-gray-300 px-4 py-2">Deadline</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign._id}>
                  <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{campaign.description}</td>
                  <td className="border border-gray-300 px-4 py-2">{campaign.minDonation}</td>
                  <td className="border border-gray-300 px-4 py-2">{campaign.deadline}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => handleUpdateClick(campaign)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(campaign._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* DaisyUI Modal */}
      {selectedCampaign && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-xl font-bold mb-4">Update Campaign</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title:</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2"
                  value={updatedCampaign.title || ""}
                  onChange={(e) =>
                    setUpdatedCampaign({ ...updatedCampaign, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description:</label>
                <textarea
                  className="w-full border px-3 py-2"
                  value={updatedCampaign.description || ""}
                  onChange={(e) =>
                    setUpdatedCampaign({ ...updatedCampaign, description: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Min Donation:</label>
                <input
                  type="number"
                  className="w-full border px-3 py-2"
                  value={updatedCampaign.minDonation || ""}
                  onChange={(e) =>
                    setUpdatedCampaign({ ...updatedCampaign, minDonation: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Deadline:</label>
                <input
                  type="date"
                  className="w-full border px-3 py-2"
                  value={updatedCampaign.deadline || ""}
                  onChange={(e) =>
                    setUpdatedCampaign({ ...updatedCampaign, deadline: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">User Name:</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 bg-gray-100"
                  value={selectedCampaign.userName || ""}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">User Email:</label>
                <input
                  type="email"
                  className="w-full border px-3 py-2 bg-gray-100"
                  value={selectedCampaign.userEmail || ""}
                  readOnly
                />
              </div>
              <button type="submit" className="btn btn-primary mr-2">
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedCampaign(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCampaign;
























// import React, { useContext, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../provider/AuthProvider";

// const MyCampaign = () => {
//   const { user } = useContext(AuthContext);
//   const loaderData = useLoaderData();
//   const [campaigns, setCampaigns] = useState(loaderData || []);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [updatedCampaign, setUpdatedCampaign] = useState({});

//   // Handle delete campaign
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://crowd-server.vercel.app/campaigns/${id}`, {
//           method: "DELETE",
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             if (data.deletedCount) {
//               Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
//               setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
//             }
//           })
//           .catch(() => {
//             Swal.fire("Error!", "Failed to delete campaign.", "error");
//           });
//       }
//     });
//   };

//   // Handle update click
//   const handleUpdateClick = (campaign) => {
//     setSelectedCampaign(campaign);
//     setUpdatedCampaign({ ...campaign }); // Clone the campaign object to avoid mutation
//   };

//   // Handle form submission
//   const handleUpdateSubmit = (e) => {
//     e.preventDefault();

//     fetch(`https://crowd-server.vercel.app/campaigns/${updatedCampaign._id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedCampaign),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount === 0) {
//           Swal.fire("You didn't change anything", "success");
//         } else {
//           Swal.fire("Updated!", "Campaign has been updated.", "success");
//           setCampaigns(
//             campaigns.map((campaign) =>
//               campaign._id === updatedCampaign._id ? updatedCampaign : campaign
//             )
//           );
//           setSelectedCampaign(null); // Close modal after update
//         }
//       })
//       .catch(() => {
//         Swal.fire("Error!", "Failed to update campaign.", "error");
//       });
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">My Campaigns</h2>
//       {campaigns.length === 0 ? (
//         <p>You don't have any campaigns yet.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full border-collapse border border-gray-300">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border border-gray-300 px-4 py-2">Title</th>
//                 <th className="border border-gray-300 px-4 py-2">Description</th>
//                 <th className="border border-gray-300 px-4 py-2">Min Donation</th>
//                 <th className="border border-gray-300 px-4 py-2">Deadline</th>
//                 <th className="border border-gray-300 px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {campaigns.map((campaign) => (
//                 <tr key={campaign._id}>
//                   <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
//                   <td className="border border-gray-300 px-4 py-2">{campaign.description}</td>
//                   <td className="border border-gray-300 px-4 py-2">{campaign.minDonation}</td>
//                   <td className="border border-gray-300 px-4 py-2">{campaign.deadline}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button
//                       className="btn btn-primary mr-2"
//                       onClick={() => handleUpdateClick(campaign)}
//                     >
//                       Update
//                     </button>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => handleDelete(campaign._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* DaisyUI Modal */}
//       {selectedCampaign && (
//         <div className="modal modal-open">
//           <div className="modal-box">
//             <h2 className="text-xl font-bold mb-4">Update Campaign</h2>
//             <form onSubmit={handleUpdateSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Title:</label>
//                 <input
//                   type="text"
//                   className="w-full border px-3 py-2"
//                   value={updatedCampaign.title || ""}
//                   onChange={(e) =>
//                     setUpdatedCampaign({ ...updatedCampaign, title: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Description:</label>
//                 <textarea
//                   className="w-full border px-3 py-2"
//                   value={updatedCampaign.description || ""}
//                   onChange={(e) =>
//                     setUpdatedCampaign({ ...updatedCampaign, description: e.target.value })
//                   }
//                   required
//                 ></textarea>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Min Donation:</label>
//                 <input
//                   type="number"
//                   className="w-full border px-3 py-2"
//                   value={updatedCampaign.minDonation || ""}
//                   onChange={(e) =>
//                     setUpdatedCampaign({ ...updatedCampaign, minDonation: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Deadline:</label>
//                 <input
//                   type="date"
//                   className="w-full border px-3 py-2"
//                   value={updatedCampaign.deadline || ""}
//                   onChange={(e) =>
//                     setUpdatedCampaign({ ...updatedCampaign, deadline: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">User Name:</label>
//                 <input
//                   type="text"
//                   className="w-full border px-3 py-2 bg-gray-100"
//                   value={selectedCampaign.userName || ""}
//                   readOnly
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">User Email:</label>
//                 <input
//                   type="email"
//                   className="w-full border px-3 py-2 bg-gray-100"
//                   value={selectedCampaign.userEmail || ""}
//                   readOnly
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary mr-2">
//                 Update
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={() => setSelectedCampaign(null)}
//               >
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCampaign;
