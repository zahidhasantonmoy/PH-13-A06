import React from 'react';

const Main = () => {
  return (
    <div className="py-16 px-4 w-full">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
          Premium Digital Tools
        </h2>
        
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <button className="px-8 py-3 rounded-full font-semibold text-base lg:text-lg bg-[#7e22ce] text-white shadow-md">
            Products
          </button>
          
          <button className="px-8 py-3 rounded-full font-semibold text-base lg:text-lg bg-white text-gray-700 border border-gray-200 shadow-sm">
            Cart
          </button>
        </div>

       

      </div>
    </div>
  );
};

export default Main;