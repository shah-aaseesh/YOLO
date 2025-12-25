import React, { useState } from 'react';

interface NavbarProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigatePackages: () => void;
  currentView: 'home' | 'about' | 'packages' | 'package';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, onNavigateAbout, onNavigatePackages, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24">
          <div className="flex items-center">
            <div
              onClick={onNavigateHome}
              className="flex-shrink-0 flex items-center cursor-pointer group h-16 md:h-20"
            >
              <img
                src="/images/Yolo.png"
                alt="YOLO Logo"
                className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform"
              />
            </div>
          </div>

          <div className="hidden lg:ml-6 lg:flex lg:space-x-4 xl:space-x-8 items-center">
            <button
              onClick={onNavigateHome}
              className={`${currentView === 'home' ? 'text-[#F4A622]' : 'text-gray-700'} hover:text-[#F4A622] px-3 py-2 text-sm font-bold transition-colors uppercase tracking-wide`}
            >
              Home
            </button>
            <button
              onClick={onNavigateAbout}
              className={`${currentView === 'about' ? 'text-[#F4A622]' : 'text-gray-700'} hover:text-[#F4A622] px-3 py-2 text-sm font-bold transition-colors uppercase tracking-wide`}
            >
              About Us
            </button>
            <button
              onClick={onNavigatePackages}
              className={`${currentView === 'packages' ? 'text-[#F4A622]' : 'text-gray-700'} hover:text-[#F4A622] px-3 py-2 text-sm font-bold transition-colors uppercase tracking-wide`}
            >
              Packages
            </button>
            <button className="text-gray-700 hover:text-[#F4A622] px-3 py-2 text-sm font-bold transition-colors uppercase tracking-wide">Contact Us</button>

            <button className="ml-4 border-2 border-[#00A1AB] text-[#00A1AB] px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#00A1AB] hover:text-white transition-all">
              Enquire
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
        <div className="px-4 pt-4 pb-6 space-y-2">
          <button
            onClick={() => { onNavigateHome(); setIsOpen(false); }}
            className={`w-full text-left block px-4 py-4 rounded-xl text-lg font-black ${currentView === 'home' ? 'text-[#F4A622] bg-orange-50' : 'text-gray-600'}`}
          >
            Home
          </button>
          <button
            onClick={() => { onNavigateAbout(); setIsOpen(false); }}
            className={`w-full text-left block px-4 py-4 rounded-xl text-lg font-bold ${currentView === 'about' ? 'text-[#00A1AB] bg-teal-50' : 'text-gray-600'}`}
          >
            About Us
          </button>
          <button
            onClick={() => { onNavigatePackages(); setIsOpen(false); }}
            className={`w-full text-left block px-4 py-4 rounded-xl text-lg font-bold ${currentView === 'packages' ? 'text-[#00A1AB] bg-teal-50' : 'text-gray-600'}`}
          >
            Packages
          </button>
          <a href="#" className="block px-4 py-4 rounded-xl text-lg font-bold text-gray-600 hover:text-[#00A1AB] hover:bg-gray-50">Contact Us</a>
          <div className="p-4">
            <button className="w-full bg-[#00A1AB] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[12px] shadow-lg">
              Send Enquiry
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
