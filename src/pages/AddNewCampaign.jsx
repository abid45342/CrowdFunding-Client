import  { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider'; // Assumes you have a context for user authentication.
import { useNavigate } from 'react-router-dom';

const AddNewCampaign = () => {
    const { user } = useContext(AuthContext); // Get logged-in user info
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        type: 'personal issue',
        description: '',
        minDonation: '',
        deadline: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCampaign = {
            ...formData,
            userEmail: user?.email,
            userName: user?.displayName,
        };

        try {
            const response = await fetch('/api/campaigns', { // Adjust URL to your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCampaign),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Campaign Added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                navigate('/'); // Redirect to the homepage or campaigns list
            } else {
                throw new Error('Failed to add campaign');
            }
        } catch (error) {
            Swal.fire({
                title: 'Error Adding Campaign!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
        }
    };

    return (
        <div  className="py-20 min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Campaign</h2>
                <form onSubmit={handleSubmit}>
                    {/* Image URL */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter image URL"
                            required
                        />
                    </div>
                    {/* Campaign Title */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Campaign Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter campaign title"
                            required
                        />
                    </div>
                    {/* Campaign Type */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Campaign Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        >
                            <option value="personal issue">Personal Issue</option>
                            <option value="startup">Startup</option>
                            <option value="business">Business</option>
                            <option value="creative ideas">Creative Ideas</option>
                        </select>
                    </div>
                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter campaign description"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    {/* Minimum Donation Amount */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Minimum Donation Amount</label>
                        <input
                            type="number"
                            name="minDonation"
                            value={formData.minDonation}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter minimum donation amount"
                            required
                        />
                    </div>
                    {/* Deadline */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    {/* User Email (Read-only) */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">User Email</label>
                        <input
                            type="email"
                            value={user?.email || ''}
                            readOnly
                            className="w-full px-3 py-2 border bg-gray-100 rounded-lg"
                        />
                    </div>
                    {/* User Name (Read-only) */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">User Name</label>
                        <input
                            type="text"
                            value={user?.displayName || ''}
                            readOnly
                            className="w-full px-3 py-2 border bg-gray-100 rounded-lg"
                        />
                    </div>
                    {/* Add Button */}
                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none"
                    >
                        Add Campaign
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewCampaign;
