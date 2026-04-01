import React from 'react';

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 w-full py-12">
      <div className="max-w-5xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-white/30 text-white text-center">
          
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center py-6 md:py-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-2 tracking-wide">50K+</h2>
            <p className="text-white/80 text-sm lg:text-base font-light">Active Users</p>
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center py-6 md:py-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-2 tracking-wide">200+</h2>
            <p className="text-white/80 text-sm lg:text-base font-light">Premium Tools</p>
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center py-6 md:py-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-2 tracking-wide">4.9</h2>
            <p className="text-white/80 text-sm lg:text-base font-light">Rating</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;