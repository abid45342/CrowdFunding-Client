
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="flex flex-wrap justify-between">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">IgnitionDeck</h2>
                    <div className="flex gap-4 mb-4">
                        <FaFacebook size={30} className="hover:text-gray-400 transition-colors duration-200" />
                        <FaTwitter size={30} className="hover:text-gray-400 transition-colors duration-200" />
                        <FaLinkedin size={30} className="hover:text-gray-400 transition-colors duration-200" />
                        <FaYoutube size={30} className="hover:text-gray-400 transition-colors duration-200" />
                        <FaWhatsapp size={30} className="hover:text-gray-400 transition-colors duration-200" />
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
