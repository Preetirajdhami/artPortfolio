import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F6F1EB] py-8 border-t border-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/_preetiarts?igsh=b3l5dHM4aWZvZmVu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transform hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transform hover:scale-110 transition-all duration-300"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>

            {/* TikTok */}
            <Link
              href="https://www.tiktok.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transform hover:scale-110 transition-all duration-300"
            >
              <FaTiktok className="w-6 h-6" />
            </Link>

            {/* Gmail */}
            <Link
              href="mailto:your-email@gmail.com"
              className="text-gray-700 hover:text-gray-900 transform hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope className="w-6 h-6" />
            </Link>
          </div>

          {/* Footer Text */}
          <p className="text-sm text-gray-600">
            Copyright &copy; 2025 Preeti Arts. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
