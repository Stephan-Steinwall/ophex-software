import React, { useState, useEffect } from 'react';
import Navlogo from '../assets/logos/NavLogo.svg';
import Chat from './primary/Chat';
import DarkNav from '../assets/logos/DarkNav.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full p-4 fixed z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">

              <img
                src={isScrolled ? DarkNav : Navlogo}
                alt="Logo"
                className="h-10 transition-all duration-300"
              />

              <span className={`text-xl font-bold ml-2 ${isScrolled ? 'text-black' : 'text-white'
                }`}></span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className={`hover:text-gray-700 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                }`}>Home</a>
              <a href="#" className={`hover:text-gray-700 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                }`}>About</a>
              <a href="#" className={`hover:text-gray-700 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                }`}>Services</a>
              <a href="#" className={`hover:text-gray-700 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                }`}>Projects</a>
              <a href="#" className={`hover:text-gray-700 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                }`}>Contact</a>
            </div>

            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;