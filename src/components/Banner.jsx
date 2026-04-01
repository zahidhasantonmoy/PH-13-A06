import React from 'react';
import { CircleDot, Play } from 'lucide-react';

const Banner = () => {
  return (
    <div className="px-4 lg:px-12 py-12 lg:py-20 w-full min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        
        <div className="flex flex-col gap-6 lg:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-[#7e22ce] px-4 py-2 rounded-full text-sm font-medium">
              <CircleDot size={16} className="fill-[#7e22ce] text-purple-200" />
              New: AI-Powered Tools Available
            </div>
          </div>

          <h1 className="text-5xl lg:text-[72px] font-bold text-[#1e293b] leading-[1.1] tracking-tight">
            Supercharge Your <br className="hidden lg:block" />
            Digital Workflow
          </h1>

          <p className="text-lg lg:text-xl text-gray-500 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <button className="btn bg-[#7e22ce] hover:bg-[#6b21a8] text-white rounded-full px-8 lg:px-10 border-none normal-case text-base lg:text-lg h-14 min-h-0">
              Explore Products
            </button>
            <button className="btn bg-white border border-[#7e22ce] text-[#7e22ce] hover:bg-[#7e22ce] hover:text-white hover:border-[#7e22ce] rounded-full px-8 lg:px-10 normal-case text-base lg:text-lg h-14 min-h-0 flex items-center gap-2">
              <img src="./assets/Play.png" alt="" /> Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end w-full">
          <img 
            src="/src/assets/banner.png" 
            className="w-full h-auto object-contain aspect-[4/3] lg:aspect-square max-w-[450px] lg:max-w-[600px] rounded-2xl"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Banner;