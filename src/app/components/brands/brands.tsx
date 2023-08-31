import React from 'react';

const Brands = () => {
  return (

    <section className="section bg-white text-black py-16">
        <div className="container mx-auto">
        <h2 className="font-inter text-[20px]  mb-8">
                <span>--</span>You’ll be in good company
                </h2>
            <div className="flex w-[1279px h-[68px] flex-shrink-0">
                
                <div className="grid grid-cols-5 gap-4">
                    {/* Brand icon 1 */}
                    <div className="w-1/5 bg-gray-900 rounded">ddd</div>
                    
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
