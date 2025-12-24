
import React from 'react';
import { DESTINATIONS, TREK_PACKAGES } from '../constants';

const DestinationGrid: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Countries */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20">
          {DESTINATIONS.map((dest) => (
            <div key={dest.name} className="flex items-center space-x-4 bg-white p-5 rounded-2xl shadow-sm w-full sm:w-[calc(50%-1rem)] lg:w-56 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
              <div className={`${dest.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                {dest.icon}
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-base">{dest.name}</h3>
                <p className="text-[10px] md:text-xs text-[#00a1ab] font-bold uppercase tracking-widest">{dest.count} Adventures</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Top Rated <span className="text-[#f58220]">Experiences</span>
          </h2>
          <div className="w-20 h-2 bg-[#00a1ab] mx-auto rounded-full"></div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TREK_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full border border-gray-100">
              <div className="relative h-56 md:h-72 overflow-hidden shrink-0">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-[#f58220] text-white px-4 py-2 rounded-full font-black text-sm shadow-xl">
                  From ${pkg.price}
                </div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[#00a1ab] font-black text-[10px] uppercase tracking-widest shadow-lg">
                   Verified Trip
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#f58220]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                  {pkg.reviewsCount && <span className="text-xs text-gray-400 ml-2 font-bold">{pkg.reviewsCount} reviews</span>}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 h-auto md:h-16 line-clamp-2 leading-tight group-hover:text-[#00a1ab] transition-colors">
                  {pkg.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                   <div className="flex flex-col">
                     <span className="text-[9px] uppercase font-black text-gray-400 tracking-widest mb-1">Duration</span>
                     <div className="flex items-center text-gray-900 font-black text-sm">
                       <svg className="w-4 h-4 mr-1.5 text-[#00a1ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       {pkg.days} Days
                     </div>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[9px] uppercase font-black text-gray-400 tracking-widest mb-1">Max Alt</span>
                     <div className="flex items-center text-gray-900 font-black text-sm">
                       <svg className="w-4 h-4 mr-1.5 text-[#00a1ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                       {pkg.altitude}m
                     </div>
                   </div>
                   <div className="flex flex-col items-end">
                     <span className="text-[9px] uppercase font-black text-gray-400 tracking-widest mb-1">Status</span>
                     <div className="text-[#7dc242] font-black text-xs uppercase">
                        {pkg.bookedCount > 20 ? 'Popular' : 'Open'}
                     </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;
