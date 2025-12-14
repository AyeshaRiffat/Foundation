import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-16 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-emerald-300">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition duration-300">Get Involved</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition duration-300">Donate Now</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition duration-300">Become a Volunteer</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition duration-300">Careers</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition duration-300">Site Map</a></li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-emerald-300">About Us</h3>
          <p className="text-sm mb-6">We are a registered charity working across Pakistan to deliver healthcare, clean water, and hope to vulnerable communities.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-400">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-emerald-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-emerald-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-emerald-400">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="hover:text-emerald-400">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-emerald-300">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li>Email: <a href="mailto:info@pro.org" className="hover:text-emerald-400">info@pro.org</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-emerald-400">+1 234 567 890</a></li>
            <li>Address: 123 Charity Road, City, Country</li>
          </ul>
        </div>

        {/* Newsletter Subscription Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-emerald-300">Join The Newsletter</h3>
          <form>
            <input 
              type="email" 
              placeholder="Your email here..." 
              className="w-full p-3 rounded-lg text-black mb-4"
            />
            <button 
              type="submit" 
              className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition duration-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-12 text-sm">
        <p>© 2025 PRO. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
