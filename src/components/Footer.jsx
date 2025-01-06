







import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp, FaHandsHelping } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="flex flex-wrap justify-between">
                <div className="mb-6">
                    {/* Crowdfunding Logo using React Icons */}
                    <div className="mb-4">
                        <FaHandsHelping size={40} className="text-teal-500" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">IgnitionDeck</h2>
                    <div className="flex gap-4 mb-4">
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} className="hover:text-gray-400 transition-colors duration-200" />
                        </a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} className="hover:text-gray-400 transition-colors duration-200" />
                        </a>
                        <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} className="hover:text-gray-400 transition-colors duration-200" />
                        </a>
                        <a href="https://youtube.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={30} className="hover:text-gray-400 transition-colors duration-200" />
                        </a>
                        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={30} className="hover:text-gray-400 transition-colors duration-200" />
                        </a>
                    </div>
                    <p className="mb-2">2.5M+ Followers</p>
                    <p className="mb-1">Email: info@ignitiondeck.com</p>
                    <p>Contact No: +91 1234567890</p>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">About Us</h3>
                    <ul>
                        <li className="mb-2">Our Story</li>
                        <li className="mb-2">Team</li>
                        <li className="mb-2">Careers</li>
                        <li className="mb-2">Blog</li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul>
                        <li className="mb-2">FAQs</li>
                        <li className="mb-2">Contact Support</li>
                        <li className="mb-2">Trust & Safety</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6 text-center">
                <p>© 2024 IgnitionDeck. All Rights Reserved. <span className="underline">Terms of Use</span> | <span className="underline">Privacy Policy</span></p>
                <div className="flex justify-center gap-4 mt-4">
                    <img src="visa-icon.png" alt="Visa" className="h-8" />
                    <img src="mastercard-icon.png" alt="MasterCard" className="h-8" />
                    <img src="amex-icon.png" alt="American Express" className="h-8" />
                    <img src="rupay-icon.png" alt="RuPay" className="h-8" />
                    <img src="upi-icon.png" alt="UPI" className="h-8" />
                    <img src="secure-icon.png" alt="100% Secure" className="h-8" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
