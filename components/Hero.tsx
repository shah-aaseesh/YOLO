
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[500px] md:h-[650px] w-full overflow-hidden bg-gray-900 flex items-center">
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920" 
        alt="Mountain Peaks" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-[20s] hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <span className="bg-[#f58220] px-4 py-1.5 rounded-full font-black uppercase tracking-[0.3em] text-[10px] md:text-[12px] text-white">
              Himalayan Adventures 2025
            </span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter uppercase">
            You Only <br/>
            <span className="text-[#f58220]">Live Once.</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed">
            Stop waiting for tomorrow. Embark on a journey of a lifetime with YOLO's curated Himalayan experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="w-full sm:w-auto bg-[#f58220] text-white px-10 py-4 rounded-full font-black hover:bg-[#d8731b] transition-all uppercase tracking-widest text-[12px] shadow-2xl shadow-orange-500/30">
              Get Started
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-black hover:bg-white hover:text-gray-900 transition-all uppercase tracking-widest text-[12px]">
              Our Packages
            </button>
          </div>
        </div>
      </div>

      {/* Floating Info Box - Refined */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block max-w-sm">
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border-l-[6px] border-[#00a1ab]">
          <h4 className="font-black text-[#00a1ab] uppercase text-[12px] mb-3 tracking-[0.3em]">Live Support</h4>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 font-medium">
            Speak with our travel experts directly: <span className="font-black text-[#f58220] block mt-1 text-2xl tracking-tighter">(+977) 9854022644</span>
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#7dc242] animate-pulse"></div>
            <span className="text-[10px] uppercase font-black text-[#7dc242] tracking-[0.3em]">Experts Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
