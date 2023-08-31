import React from 'react';
import styles from './what-we-do.module.css'

const WhatWeDoSection = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto">
        <h2 className="font-inter text-[24px]  mb-8">
          <span>--</span>What We Do
        </h2>
        <p className="font-inter text-[48px] font-semibold mb-12">
        We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-4">
            <img
            className="absolute top-[0px] left-[0px] w-16 h-16 overflow-hidden"
              alt=""
              src="/web-dev-icon.svg"
            />
            <h3 className="font-inter text-[24px] font-semibold mb-4">
              Web development
            </h3>
            <p className="font-inter text-lg">
            We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-inter text-[24px]  font-semibold mb-4">
            User experience & design
            </h3>
            <p className="font-inter text-lg">
            Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-inter text-[24px] font-semibold mb-4">
            Mobile app development
            </h3>
            <p className="font-inter text-lg">
            Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.
            </p>
          </div>
           <div className="p-4">
            <h3 className="font-inter text-[24px] font-semibold mb-4">
            Blockchain solutions
            </h3>
            <p className="font-inter text-lg">
            We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;

