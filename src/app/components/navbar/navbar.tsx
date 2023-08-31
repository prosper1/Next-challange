import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between">
      {/* Left side - Navigation Brand */}
      <div className="flex items-center px-10">
        <img src="/path/to/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-white text-lg font-semibold">My App</span>
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
        <button className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100">
          Learn More
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
