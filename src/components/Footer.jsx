import React from 'react';
import {FooterLogo,Insta,Facebook,LinkedIn} from '../assets/logos';


const Footer = () => {
  return (
    <footer className="w-11/12 bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-6">
          <img src={FooterLogo} alt="OPHEX Software" className="h-12" />
          <p className="text-gray-700 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:opacity-80">
              <img src={LinkedIn} alt="Linkedin" className='w-[50px]'/>
            </a>
            <a href="#" className="text-blue-500 hover:opacity-80">
            <img src={Facebook} alt="Facebook" className='w-[50px]'/>
            </a>
            <a href="#" className="text-pink-500 hover:opacity-80">
            <img src={Insta} alt="Instagram" className='w-[50px]'/>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Useful links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-700 hover:text-gray-900">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Web Application',
                'Mobile Application',
                'Desktop Application',
                'Brand Building',
                'Graphic Designing',
                'Social Media Marketing'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-700 hover:text-gray-900">{service}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chat CTA - Full Width */}
        <div className="md:col-span-2 flex justify-between items-center bg-gray-50 p-6 rounded-lg mt-8">
          <p className="text-xl font-bold">Ready to level up your business?</p>
          <a href="#" className="flex items-center space-x-2 font-bold hover:opacity-80">
            <span>Chat with us</span>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;