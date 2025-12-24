
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer group h-16">
              <img 
                src="https://storage.googleapis.com/static.claudevideo.com/static/user_uploaded/logo_yolo.png" 
                alt="YOLO Logo" 
                className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform"
              />
            </div>
          </div>
          
          <div className="hidden lg:ml-6 lg:flex lg:space-x-4 xl:space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-[#F4A622] px-2 py-2 text-sm font-bold transition-colors">Trekking <span className="text-[10px] text-gray-400">▼</span></a>
            <a href="#" className="text-gray-700 hover:text-[#F4A622] px-2 py-2 text-sm font-bold transition-colors">Tour <span className="text-[10px] text-gray-400">▼</span></a>
            <a href="#" className="text-gray-700 hover:text-[#F4A622] px-2 py-2 text-sm font-bold transition-colors whitespace-nowrap">Expeditions <span className="text-[10px] text-gray-400">▼</span></a>
            <a href="#" className="text-gray-700 hover:text-[#F4A622] px-2 py-2 text-sm font-bold transition-colors">About Us</a>
            <a href="#" className="text-gray-700 hover:text-[#F4A622] px-2 py-2 text-sm font-bold transition-colors">Blogs</a>
            <a href="#" className="text-gray-700 hover:text-[#F4A622] px-2 py-2 text-sm font-bold transition-colors">Contact</a>
            
            <button className="ml-4 bg-[#F4A622] text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider hover:bg-[#d8911a] transition-all shadow-md hover:shadow-orange-500/20">
               Book Trip
            </button>
          </div>

          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-[#00A1AB] hover:text-[#F4A622] focus:outline-none"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-8 w-8`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-8 w-8`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-4 rounded-md text-base font-black text-[#F4A622] bg-orange-50">Trekking</a>
          <a href="#" className="block px-3 py-4 rounded-md text-base font-bold text-gray-600 hover:text-[#00A1AB] hover:bg-gray-50">Tour</a>
          <a href="#" className="block px-3 py-4 rounded-md text-base font-bold text-gray-600 hover:text-[#00A1AB] hover:bg-gray-50">Expedition</a>
          <a href="#" className="block px-3 py-4 rounded-md text-base font-bold text-gray-600 hover:text-[#00A1AB] hover:bg-gray-50">About Us</a>
          <a href="#" className="block px-3 py-4 rounded-md text-base font-bold text-gray-600 hover:text-[#00A1AB] hover:bg-gray-50">Blogs</a>
          <a href="#" className="block px-3 py-4 rounded-md text-base font-bold text-gray-600 hover:text-[#00A1AB] hover:bg-gray-50">Contact</a>
          <div className="p-3">
             <button className="w-full bg-[#00A1AB] text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg">
                Book Your Adventure
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
