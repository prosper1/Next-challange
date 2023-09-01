import React from 'react';
import rectangle from '../../../assets/Rectangle 1.svg'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-purple-900  text-white py-8">
         <div className="container mx-auto">
      <div className="flex content-center">
      <Image src={rectangle} alt='' width={30} height={30} className="" /> 
        <h2 className="font-inter text-[20px]  mb-8">
            Contact us
        </h2>
        </div>

        <div className="">
            <div className="grid grid-cols-2 gap-auto">
                <div>
                    <p className="font-inter text-[48px] font-semibold mb-12">
                        Have a project in mind?<br></br>
                        Let's make it happen
                    </p>
                </div>
                <div className=''>
                    <p className="text-[20px] pl-4">22 Street Name, Suburb, 8000,<br></br> 
                    Cape Town, South Africa <br></br>  +27 21 431 0001<br></br>  enquirie@website.co.za</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-5 gap-auto">
            <div className="mt-8 pl-4">
                <div className="mr-4">
                    <a href="#" className="text-white text-lg hover:text-blue-500">Terms of service</a>
                </div>
                <div className="mr-4">
                    <a href="#" className="text-white text-lg hover:text-blue-500">Privacy policy</a>
                </div>
                <div>  
                    <a href="#" className="text-white text-lg hover:text-blue-500">Impressum</a>
                </div>
            </div>

            {/* ...... */}

            <div className="mt-8 pl-4 text-[20px]">
                <div className="mr-4">
                    <a href="#" className="text-white hover:text-blue-500">Facebook</a>
                </div>
                <div className="mr-4">
                    <a href="#" className="text-white hover:text-blue-500">Instagram</a>
                </div>
                <div>
                    <a href="#" className="text-white hover:text-blue-500">Twitter</a>
                </div>
            </div>

            {/* ..... */}
            <div className="mt-8 pl-4 text-[20px]">
                <div className="mr-4 ">
                    <a href="#" className="text-white hover:text-blue-500">Github</a>
                </div>
                <div className="mr-4">
                    <a href="#" className="text-white hover:text-blue-500">LinkedIn</a>
                </div>
                <div>
                    <a href="#" className="text-white hover:text-blue-500">Teams</a>
                </div>
            </div>

             {/* ..... */}
             <div className="mt-8 pl-4 text-[20px]">
                <div className="mr-4 ">
                    <a href="#" className="text-white hover:text-blue-500">Youtube</a>
                </div>
                <div className="mr-4">
                    <a href="#" className="text-white hover:text-blue-500">Behance</a>
                </div>
                <div>
                    <a href="#" className="text-white hover:text-blue-500">Dribble</a>
                </div>
            </div>

            <div className="mt-8 pl-4 text-[20px]">
            <p>Explore open jobs </p>
            <p>©2000—2023 Company Name</p>
            </div>
        </div>
       
        
      </div>
      
    </footer>
  );
};

export default Footer;

