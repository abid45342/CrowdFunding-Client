// src/pages/Home.jsx

import { FaBullhorn, FaShareAlt, FaHandsHelping, FaUserCircle } from 'react-icons/fa';
import banner from '../../public/assets/banner-1544x500.png';

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="banner mb-16">
        <img src={banner} alt="Banner" className="w-full shadow-lg" />
      </div>

      {/* How It Works Section */}
      <div className="how-it-works bg-white py-12 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="step bg-white  p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaBullhorn size={40} className="mx-auto mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2">Create a Campaign</h3>
              <p className="text-gray-700">Set up your campaign by providing details about your cause and goals.</p>
            </div>
            <div className="step bg-white  p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaShareAlt size={40} className="mx-auto mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2">Share with Network</h3>
              <p className="text-gray-700">Promote your campaign to reach potential donors and supporters.</p>
            </div>
            <div className="step bg-white  p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <FaHandsHelping size={40} className="mx-auto mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2">Receive Donations</h3>
              <p className="text-gray-700">Collect funds and make a difference with your successful campaign.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What Our Supporters Say Section */}
      <div className="testimonials  bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Supporters Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial  bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-gray-700 mb-4">Supporting these campaigns has been incredibly rewarding. Its amazing to see the positive impact our donations can make.</p>
              <div className="flex items-center">
                <FaUserCircle size={48} className="rounded-full mr-4 text-teal-500" />
                <div>
                  <h4 className="text-xl font-semibold">John Doe</h4>
                  <p className="text-gray-600">Philanthropist</p>
                </div>
              </div>
            </div>
            <div className="testimonial bg-white  p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-gray-700 mb-4">I ve seen firsthand how these campaigns can change lives. Im proud to be a supporter.</p>
              <div className="flex items-center">
                <FaUserCircle size={48} className="rounded-full mr-4 text-teal-500" />
                <div>
                  <h4 className="text-xl font-semibold">Jane Smith</h4>
                  <p className="text-gray-600">Entrepreneur</p>
                </div>
              </div>
            </div>
            <div className="testimonial bg-white  p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-gray-700 mb-4">The support from the community has been overwhelming. Im grateful for the opportunity to help.</p>
              <div className="flex items-center">
                <FaUserCircle size={48} className="rounded-full mr-4 text-teal-500" />
                <div>
                  <h4 className="text-xl font-semibold">Emily Johnson</h4>
                  <p className="text-gray-600">Supporter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
