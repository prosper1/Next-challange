import React from 'react';
import Image from 'next/image';
import logo from '../../../assets/logo.svg' 

const Navbar = () => {
  return (
    <nav className="bg-purple-500 p-4 px-20 flex items-center justify-between">
      {/* Left side - Navigation Brand */}
      <div className="flex items-center px-10">
        <Image src={logo} alt='' width={100} height={100} className="w-10 h-10 mr-2"></Image>
      </div>

      {/* Center - Navigation Links */}
      <div className="flex-grow flex justify-center">
        <a href="#" className="text-white mx-4 hover:underline">Services</a>
        <a href="#" className="text-white mx-4 hover:underline">Industries</a>
        <a href="#" className="text-white mx-4 hover:underline">Cases</a>
        <a href="#" className="text-white mx-4 hover:underline">Contact</a>
      </div>

      {/* Right - Learn More Button */}
      <div>
        <button className="bg-white text-purple-500 py-2 px-4 rounded-full hover:bg-purple-100">
        Let’s Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
