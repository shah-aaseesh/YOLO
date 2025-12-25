import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b2b2e] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

          <div className="space-y-8">
            <div className="h-16 flex items-center">
              <img
                src="https://storage.googleapis.com/static.claudevideo.com/static/user_uploaded/logo_yolo.png"
                alt="YOLO"
                className="h-full w-auto brightness-110"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Experience the best of Nepal with YOLO Tourism. From the historic temples of Janakpur to the majestic Himalayas, we create unforgettable journeys tailored just for you.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f58220] transition-colors flex items-center justify-center cursor-pointer border border-white/5 group">
                  <Icon className="w-4 h-4 text-white group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#f58220] font-black text-xl uppercase tracking-widest mb-10">Quick Links</h4>
            <ul className="space-y-5 text-gray-300 font-bold text-sm">
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Destination</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f58220] font-black text-xl uppercase tracking-widest mb-10">Other Pages</h4>
            <ul className="space-y-5 text-gray-300 font-bold text-sm">
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Privacy & Policy</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-[#F4A622] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f58220] font-black text-xl uppercase tracking-widest mb-10">Contact Info</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 text-[#f58220] mr-4 mt-1 shrink-0" />
                <span>Kadam Chowk, Janakpur,<br /> Nepal</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-[#f58220] mr-4 shrink-0" />
                <span>+977 980-1234567</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-[#f58220] mr-4 shrink-0" />
                <span>info@yolotourism.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500 font-bold uppercase tracking-widest gap-6">
          <p>YOLO Tourism © 2024. All rights reserved.</p>
          <p>Designed for Travelers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
