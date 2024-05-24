import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              Discover the Ultimate Freedom of Travel with Our Top-Quality Vehicle Rentals! Whether youre planning a weekend getaway, a cross-country adventure, or simply need a reliable car for your daily errands, we have the perfect vehicle to suit your needs. Our extensive fleet of cars, SUVs, and vans are meticulously maintained and ready to take you wherever you need to go in comfort and style. Enjoy the convenience of easy online booking, competitive pricing, and exceptional customer service every step of the way. With us, your journey is our priority. Experience hassle-free rentals and make every trip memorable. Rent your dream vehicle today and hit the road with confidence!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 md:mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} IanBom Website. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;