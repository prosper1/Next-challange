import React from 'react';
import Image from 'next/image';
import logo from '../../../assets/logo.svg'
import rectangle from '../../../assets/Rectangle 1.svg'

const Brands = () => {
  return (

    <section className="section bg-white text-black py-16">
        <div className="container mx-auto">
        <div className="flex">
            <Image src={rectangle} alt='' width={30} height={30} className="" />
            <h2 className="font-inter text-20 mb-8">
                You’ll be in good company
            </h2>
        </div>
        

                <p className="font-inter text-[48px] font-semibold mb-12">
                Trusted by leading brands
                </p>
            <div className="flex w-[1279px h-[68px] flex-shrink-0">
                
                <div className="grid grid-cols-5 gap-auto">
                    {/* Brand icon 1 */}
                    <div className=" rounded">
                    <Image src={logo} alt='' width={100} height={100} className="w-10 h-10 mr-2"></Image>
                    </div>
                    
                    {/* Brand icon 2 */}
                    <div className="w-1/5 bg-gray-300 rounded">ddd</div>
                    
                    {/* Brand icon 3 */}
                    <div className="w-1/5 bg-gray-300 rounded">sss</div>
                    
                    {/* Brand icon 4 */}
                    <div className="w-1/5 bg-gray-300 rounded"></div>
                    
                    {/* Brand icon 5 */}
                    <div className="w-1/5 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    </section>
    
  );
};

export default Brands;
