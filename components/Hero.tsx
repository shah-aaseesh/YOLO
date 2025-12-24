
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[500px] md:h-[700px] w-full overflow-hidden bg-gray-900 flex items-center">
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920" 
        alt="Mountain Peaks" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-white/90 mb-4">
            <span className="bg-[#f58220] p-1 px-3 rounded-full font-black uppercase tracking-[0.2em] text-[10px]">Nepal Adventure</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
            You Only Live Once. <br/>
            <span className="text-[#f58220]">Explore The Peak.</span>
          </h1>
          <p className="text-base md:text-xl text-white/80 mb-10 max-w-lg mx-auto md:mx-0 font-medium">
            Stop waiting for tomorrow. Embark on a journey of a lifetime with YOLO's expert-guided Himalayan treks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
            <button className="w-full sm:w-auto bg-[#f58220] text-white px-10 py-4 rounded-full font-black hover:bg-[#d8731b] transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-orange-500/20">
              Start Your Adventure
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-4 rounded-full font-black hover:bg-white hover:text-gray-900 transition-all uppercase tracking-widest text-sm">
              Our Packages
            </button>
          </div>
        </div>
      </div>

      {/* Floating Info Box - Rebranded for YOLO */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block max-w-xs">
        <div className="bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border-l-[10px] border-[#00a1ab]">
          <h4 className="font-black text-[#00a1ab] uppercase text-xs mb-3 tracking-widest">YOLO Live Support</h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium">
            Got a question? Chat with a local expert on WhatsApp at <span className="font-black text-[#f58220] block mt-1 text-base">+977 9841936940</span>
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-[#7dc242] animate-ping"></div>
            <span className="text-[10px] uppercase font-black text-[#7dc242] tracking-widest">Local Experts Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
