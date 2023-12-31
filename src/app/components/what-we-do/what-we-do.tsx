import React from 'react';
import styles from './what-we-do.module.css'
import webdevIcon from '../../../assets/Web Dev Icon.svg'
import uxIcon from '../../../assets/UX Icon.svg'
import blockchainIcon from '../../../assets/block-chain.svg'
import appIcon from '../../../assets/App Dev Icon.svg'

import rectangle from '../../../assets/Rectangle 1.svg'
import Image from 'next/image';

const WhatWeDoSection = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto">
      <div className="flex">
            <Image src={rectangle} alt='' width={30} height={30} className="" />
        <h2 className="font-inter text-[24px]  mb-8">
          What We Do
        </h2>
        </div>
        <p className="font-inter text-[48px] font-semibold mb-12">
        We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-4">
            
            <Image src={webdevIcon} alt='' width={64} height={64} className="mb-12"></Image>
            <h3 className="font-inter text-[24px] font-semibold mb-4">
              Web development
            </h3>
            <p className="font-inter text-lg">
            We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.
            </p>
          </div>
          <div className="p-4">
          <Image src={uxIcon} alt='' width={64} height={64} className="mb-12"></Image>
            <h3 className="font-inter text-[24px]  font-semibold mb-4">
            User experience & design
            </h3>
            <p className="font-inter text-lg">
            Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.
            </p>
          </div>
          <div className="p-4">
          <Image src={appIcon} alt='' width={64} height={64} className="mb-12"></Image>
            <h3 className="font-inter text-[24px] font-semibold mb-4">
            Mobile app development
            </h3>
            <p className="font-inter text-lg">
            Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.
            </p>
          </div>
           <div className="p-4">
           <Image src={blockchainIcon} alt='' width={64} height={64} className="mb-12"></Image>
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

