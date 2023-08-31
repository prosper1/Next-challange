import React from 'react';

const CaseStudySection = () => {
  return (
    <section className="section bg-white text-black py-16">
      <div className="container mx-auto">
        <h2 className="font-inter text-[20px]  mb-8">
          <span>--</span>Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-start">
            <div className="custom-card bg-white p-6 rounded-lg relative">
              <div className="custom-image">
                <img src="https://via.placeholder.com/640x480" alt="Case Study 1" className="w-full h-auto" />
              </div>
              <div className="custom-content absolute bottom-0 left-0 p-4 text-white">
                <h3 className="custom-title text-lg font-semibold mb-2">Case Study 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start">
            <div className="custom-card bg-white p-6 rounded-lg relative">
              <div className="custom-image">
                <img src="https://via.placeholder.com/640x480" alt="Case Study 1" className="w-full h-auto" />
              </div>
              <div className="custom-content absolute bottom-0 left-0 p-4 text-white">
                <h3 className="custom-title text-lg font-semibold mb-2">Case Study 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="custom-card bg-white p-6 rounded-lg relative">
              <div className="custom-image">
                <img src="https://via.placeholder.com/640x480" alt="Case Study 1" className="w-full h-auto" />
              </div>
              <div className="custom-content absolute bottom-0 left-0 p-4 text-white">
                <h3 className="custom-title text-lg font-semibold mb-2">Case Study 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

