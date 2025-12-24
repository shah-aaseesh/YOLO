
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b2b2e] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-8 h-20">
              <img 
                src="https://storage.googleapis.com/static.claudevideo.com/static/user_uploaded/logo_yolo.png" 
                alt="YOLO" 
                className="h-full w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              You Only Live Once. Explore the Himalayas with the experts who live there and turn your dreams into reality.
            </p>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center justify-center sm:justify-start group">
                 <span className="mr-3 bg-white/5 p-2 rounded-lg group-hover:bg-[#F4A622] transition-colors">📍</span> Thamel, Kathmandu, Nepal
              </li>
              <li className="flex items-center justify-center sm:justify-start group">
                 <span className="mr-3 bg-white/5 p-2 rounded-lg group-hover:bg-[#F4A622] transition-colors">📞</span> (+977) 9841936940
              </li>
              <li className="flex items-center justify-center sm:justify-start group">
                 <span className="mr-3 bg-white/5 p-2 rounded-lg group-hover:bg-[#F4A622] transition-colors">📧</span> go@yolo-nepal.com
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-black text-lg mb-8 text-[#00A1AB] uppercase tracking-widest border-b border-white/10 pb-4">Top Regions</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Everest Region</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Annapurna Base Camp</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Manaslu Circuit</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Upper Mustang</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Langtang Valley</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-black text-lg mb-8 text-[#00A1AB] uppercase tracking-widest border-b border-white/10 pb-4">Travel Guide</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Nepal Visa Info</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Trekking Permits</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Packing Checklist</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Best Time to Visit</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Booking Policy</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-black text-lg mb-8 text-[#00A1AB] uppercase tracking-widest border-b border-white/10 pb-4">Stay Connected</h4>
            <div className="flex flex-col space-y-8">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#F4A622]">Newsletter</p>
                 <div className="flex bg-white/10 rounded-full p-1 border border-white/20">
                    <input type="text" placeholder="Your email" className="bg-transparent text-xs px-4 w-full focus:outline-none placeholder:text-gray-500" />
                    <button className="bg-[#F4A622] p-2.5 rounded-full hover:scale-105 transition-transform">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                 </div>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <h5 className="text-[10px] uppercase font-black text-gray-400 mb-4 tracking-[0.3em]">We Accept</h5>
                <div className="flex space-x-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                   <div className="w-12 h-8 bg-white rounded-lg flex items-center justify-center p-1.5 shadow-lg">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-full object-contain" />
                   </div>
                   <div className="w-12 h-8 bg-white rounded-lg flex items-center justify-center p-1.5 shadow-lg">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-full object-contain" />
                   </div>
                   <div className="w-12 h-8 bg-white rounded-lg flex items-center justify-center p-1.5 shadow-lg">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" className="h-full object-contain" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col items-center text-center text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">
          <p className="mb-6 italic">Adventure Awaits. You Only Live Once.</p>
          <p className="mb-6 opacity-40">© 2025 YOLO. License No: 198664/075/076</p>
          <div className="flex space-x-8">
             <a href="#" className="hover:text-[#F4A622] transition-all hover:scale-110">Facebook</a>
             <a href="#" className="hover:text-[#F4A622] transition-all hover:scale-110">Instagram</a>
             <a href="#" className="hover:text-[#F4A622] transition-all hover:scale-110">WhatsApp</a>
             <a href="#" className="hover:text-[#F4A622] transition-all hover:scale-110">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
