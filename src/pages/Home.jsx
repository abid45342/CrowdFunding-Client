import { FaBullhorn, FaShareAlt, FaHandsHelping, FaUserCircle } from 'react-icons/fa';
import banner from '../assets/banner-1544x500.png';
import Running from './Running';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Typewriter } from 'react-simple-typewriter';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
  const { loading, dark } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={dark ? 'bg-gray-900' : ''}>
      {/* Banner Section with Background Image */}
      {/* <div
        className="text-center banner mb-16 relative bg-cover bg-center lg:h-[500px] h-[200px] md:w-full md:h-[400px]"
        style={{ backgroundImage: `url(${banner})` }}
      >

      </div> */}
      <Banner></Banner>

      <Running />

      {/* How It Works Section */}
      <div className={`how-it-works py-12 mb-16 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2
            className={`text-3xl font-bold mb-8 text-center ${
              dark ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div
              className={`step p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                dark ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
            >
              <FaBullhorn size={40} className="mx-auto mb-4 text-teal-500" />
              <h3
                className={`text-xl font-semibold mb-2 ${
                  dark ? 'text-gray-300' : 'text-gray-800'
                }`}
              >
                Create a Campaign
              </h3>
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'}`}>
                Set up your campaign by providing details about your cause and goals.
              </p>
            </div>
            <div
              className={`step p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                dark ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
            >
              <FaShareAlt size={40} className="mx-auto mb-4 text-teal-500" />
              <h3
                className={`text-xl font-semibold mb-2 ${
                  dark ? 'text-gray-300' : 'text-gray-800'
                }`}
              >
                Share with Network
              </h3>
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'}`}>
                Promote your campaign to reach potential donors and supporters.
              </p>
            </div>
            <div
              className={`step p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                dark ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
            >
              <FaHandsHelping size={40} className="mx-auto mb-4 text-teal-500" />
              <h3
                className={`text-xl font-semibold mb-2 ${
                  dark ? 'text-gray-300' : 'text-gray-800'
                }`}
              >
                Receive Donations
              </h3>
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'}`}>
                Collect funds and make a difference with your successful campaign.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Our Supporters Say Section */}
      <div className={`testimonials py-12 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2
            className={`text-3xl font-bold mb-8 text-center ${
              dark ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            What Our Supporters Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`testimonial p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                dark ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
            >
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'} mb-4`}>
                Supporting these campaigns has been incredibly rewarding. It's amazing to see the
                positive impact our donations can make.
              </p>
              <div className="flex items-center">
                <FaUserCircle size={48} className="rounded-full mr-4 text-teal-500" />
                <div>
                  <h4
                    className={`text-xl font-semibold ${
                      dark ? 'text-gray-300' : 'text-gray-800'
                    }`}
                  >
                    John Doe
                  </h4>
                  <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>Philanthropist</p>
                </div>
              </div>
            </div>
            <div
              className={`testimonial p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                dark ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
            >
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'} mb-4`}>
                I’ve seen firsthand how these campaigns can change lives. I'm proud to be a
                supporter.
              </p>
              <div className="flex items-center">
                <FaUserCircle size={48} className="rounded-full mr-4 text-teal-500" />
                <div>
                  <h4
                    className={`text-xl font-semibold ${
                      dark ? 'text-gray-300' : 'text-gray-800'
                    }`}
                  >
                    Jane Smith
                  </h4>
                  <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>Entrepreneur</p>
                </div>
              </div>
            </div>
            <div
              className={`testimonial p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                dark ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
            >
              <p className={`${dark ? 'text-gray-400' : 'text-gray-700'} mb-4`}>
                The support from the community has been overwhelming. I’m grateful for the
                opportunity to help.
              </p>
              <div className="flex items-center">
                <FaUserCircle size={48} className="rounded-full mr-4 text-teal-500" />
                <div>
                  <h4
                    className={`text-xl font-semibold ${
                      dark ? 'text-gray-300' : 'text-gray-800'
                    }`}
                  >
                    Emily Johnson
                  </h4>
                  <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>Supporter</p>
                </div>
              </div>
            </div>
            {/* More Section */}



          </div>
          {/* More Section */}
<div className={`more-section py-12 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
  <div className="container mx-auto px-4 text-center">
    <h2 className={`text-3xl font-bold mb-8 ${dark ? 'text-gray-300' : 'text-gray-800'}`}>
      Want to Know More?
    </h2>
    <p className={`mb-8 ${dark ? 'text-gray-400' : 'text-gray-700'}`}>
      Learn more about how you can make a difference or get in touch with our team for any questions. Join the movement today!
    </p>
<Link to='about'>    <a
      href="/learn-more"  // Replace with your target link
      className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
    >
      Learn More
    </a></Link>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
