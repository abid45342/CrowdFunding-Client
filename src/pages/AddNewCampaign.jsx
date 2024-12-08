import { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider'; // Assumes you have a context for user authentication.
import { useNavigate } from 'react-router-dom';

const AddNewCampaign = () => {
    const { user } = useContext(AuthContext); // Get logged-in user info
    console.log(user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const title = e.target.title.value;
        const type = e.target.type.value;
        const description = e.target.description.value;
        const minDonation = e.target.minDonation.value;
        const deadline = e.target.deadline.value;

        const newCampaign = {
            image,
            title,
            type,
            description,
            minDonation,
            deadline,
            userEmail: user?.email,
            userName: user?.name,
        };

        
            fetch('http://localhost:5000/campaign', { // Adjust URL to your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCampaign),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Campaign Successfully Added!',
                            text: 'Your campaign has been created and is now available for donations.',
                            icon: 'success',
                            confirmButtonText: 'View Campaigns',
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    Swal.fire({
                        title: 'Failed to Add Campaign!',
                        text: 'Something went wrong. Please check your inputs and try again.',
                        icon: 'error',
                        confirmButtonText: 'Retry',
                    });
                });
            


    };

    return (
        <div className=" py-20 min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-xl p-8 rounded-lg shadow-lg w-full max-w-4xl h-auto"> {/* Increased max-width and set height to auto */}
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Campaign</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"> {/* Reduced horizontal gap */}
                        {/* Image URL */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter image URL"
                                required
                            />
                        </div>
                        {/* Campaign Title */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Campaign Title</label>
                            <input
                                type="text"
                                name="title"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter campaign title"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6"> {/* Reduced horizontal gap */}
                        {/* Campaign Type */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Campaign Type</label>
                            <select
                                name="type"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            >
                                <option value="personal issue">Personal Issue</option>
                                <option value="startup">Startup</option>
                                <option value="business">Business</option>
                                <option value="creative ideas">Creative Ideas</option>
                            </select>
                        </div>
                        {/* Minimum Donation Amount */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Minimum Donation Amount</label>
                            <input
                                type="number"
                                name="minDonation"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter minimum donation amount"
                                required
                            />
                        </div>
                    </div>
                    {/* Description */}
                    <div className="mt-6">
                        <label className="block text-gray-700 font-bold mb-2">Description</label>
                        <textarea
                            name="description"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter campaign description"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    {/* Deadline */}
                    <div className="mt-6">
                        <label className="block text-gray-700 font-bold mb-2">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    {/* User Info: Email and Username Side by Side */}
                    <div className="mt-6 flex justify-between gap-4"> {/* Side by side layout */}
                        {/* User Email */}
                        <div className="flex-1">
                            <label className="block text-gray-700 font-bold mb-2">User Email</label>
                            <input
                                type="email"
                                value={user?.email || ''}
                                readOnly
                                className="w-full px-3 py-2 border bg-gray-100 rounded-lg"
                            />
                        </div>
                        {/* User Name */}
                        <div className="flex-1">
                            <label className="block text-gray-700 font-bold mb-2">User Name</label>
                            <input
                                type="text"
                                value={user?.displayName || user?.name || ''}
                                readOnly
                                className="w-full px-3 py-2 border bg-gray-100 rounded-lg"
                            />
                        </div>
                    </div>
                    {/* Add Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none mt-6"
                    >
                        Add Campaign
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewCampaign;
