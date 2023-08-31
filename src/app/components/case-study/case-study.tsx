'use client';
import React from 'react';
import Slider, { Settings } from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import girl from '../../../assets/girl.png'
import timebanker from '../../../assets/timebanker.png'
import dragon from '../../../assets/dragon.png'
import Image from 'next/image';

const CaseStudySection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll when navigating
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
  return (
    <section className="section bg-white text-black py-16">
      <div className="container mx-auto">
        <h2 className="font-inter text-[20px]  mb-8">
          <span>--</span>Case Studies
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
        <Slider {...settings}>
        <div className="flex flex-col items-start">
            <div className="custom-card bg-white pr-[41px] rounded-lg relative">
              <div className="custom-image">
                <Image src={girl} alt='' width={100} height={100} className="w-full h-auto"></Image>
              </div>
              <div className="custom-content absolute bottom-2 left-0 p-4 text-white">
                <h3 className="custom-title text-[32px] font-semibold mb-2">The Olympian</h3>
                <p>The only athlete in the world to do her Olympic routine in 2020.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start">
            <div className="custom-card bg-white pr-[41px] rounded-lg relative">
              <div className="custom-image">
                <Image src={dragon} alt='' width={100} height={100} className="w-full h-auto"></Image>
              </div>
              <div className="custom-content absolute bottom-0 left-0 p-[24px] text-white">
                <h3 className="custom-title text-[32px] font-semibold mb-2">The Savings Jar</h3>
                <p>Grow your savings treasure and grow your dragon.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="custom-card bg-white pr-[41px] rounded-lg relative">
              <div className="custom-image">
                <Image src={timebanker} alt='' width={100} height={100} className="w-full h-auto"></Image>
              </div>
              <div className="custom-content absolute bottom-0 left-0 p-[24px] text-white">
                <h3 className="custom-title text-[32px] font-semibold mb-2">Skhokho seMali</h3>
                <p>Helping South Africans become #CashCleva with Skhokho and TymeBank.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="custom-card bg-white pr-[41px] rounded-lg relative">
              <div className="custom-image">
                <Image src={dragon} alt='' width={100} height={100} className="w-full h-auto"></Image>
              </div>
              <div className="custom-content absolute bottom-0 left-0 p-[24px] text-white">
                <h3 className="custom-title text-[32px] font-semibold mb-2">Extra</h3>
                <p>Created to demostrate scroll.</p>
              </div>
            </div>
          </div>
        </Slider>
        

        {/* </div> */}
      </div>
    </section>
  );
};

export default CaseStudySection;

