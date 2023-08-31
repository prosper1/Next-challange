import React from 'react';
import jose from '../../../assets/jose-png.png';

const HeroSection = () => {


  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-white h-600 md:h-screen"
      style={{
        backgroundImage: `url(${jose})`,
      }}
    >
      <div className="flex flex-col justify-end h-full py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Left side - Copy/Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Live with Confidence
          </h1>
          <p className="text-lg mb-6">
          José Mourinho brings confidence to pan-African Sanlam campaign.
          </p>
          <button className="bg-white text-blue-900 py-2 px-6 rounded-full hover:bg-blue-100">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;





