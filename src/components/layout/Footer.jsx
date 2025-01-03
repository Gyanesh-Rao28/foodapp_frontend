import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {  
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Contact Me - S Gyanesh Rao</h3>
            <div className="space-y-3">
              <a
                href="mailto:gyaneshrao28@gmail.com"
                className="flex items-center hover:text-indigo-400 transition-colors"
              >
                <FaEnvelope className="mr-2" />
                gyaneshrao28@gmail.com
              </a>
              <a
                href="tel:+918815572510"
                className="flex items-center hover:text-indigo-400 transition-colors"
              >
                <FaPhone className="mr-2" />
                +91 8815572510
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">Socials</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Gyanesh-Rao28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-indigo-400 transition-colors"
              >
                <FaGithub size={24} className="mr-2" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/gyanesh-rao28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin size={24} className="mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Gyanesh Rao. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
