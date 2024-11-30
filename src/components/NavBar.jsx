import React from 'react';
import Navlogo from '../assets/logos/NavLogo.svg';
import Chat from './primary/Chat';

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-red-800 via-orange-600 to-red-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Navlogo} alt="Logo" className="h-10" />
              <span className="text-xl text-white font-bold ml-2"></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-200">Home</a>
              <a href="#" className="text-white hover:text-gray-200">About</a>
              <a href="#" className="text-white hover:text-gray-200">Services</a>
              <a href="#" className="text-white hover:text-gray-200">Projects</a>
              <a href="#" className="text-white hover:text-gray-200">Contact</a>
            </div>

            <Chat/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;