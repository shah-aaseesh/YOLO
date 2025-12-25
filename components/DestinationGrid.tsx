
import React, { useState, useMemo } from 'react';
import { DESTINATIONS, TREK_PACKAGES } from '../constants';
import { TrekPackage } from '../types';

interface DestinationGridProps {
  onPackageSelect?: (pkg: TrekPackage) => void;
  limit?: number;
  hideCountries?: boolean;
  customPackages?: TrekPackage[];
  titleOverride?: string;
  showFilters?: boolean;
}

const DestinationGrid: React.FC<DestinationGridProps> = ({ 
  onPackageSelect, 
  limit, 
  hideCountries = false, 
  customPackages,
  titleOverride,
  showFilters = false
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Inbound' | 'Outbound'>('All');
  const basePackages = customPackages || TREK_PACKAGES;

  const displayedPackages = useMemo(() => {
    let list = basePackages;
    if (activeFilter !== 'All') {
      list = list.filter(p => p.category === activeFilter);
    }
    return limit ? list.slice(0, limit) : list;
  }, [basePackages, activeFilter, limit]);

  return (
    <section className="bg-[#F8FAFB] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideCountries && (
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-24">
            {DESTINATIONS.map((dest) => (
              <div key={dest.name} className="flex items-center space-x-4 bg-white px-8 py-5 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all cursor-pointer group border border-gray-100">
                <div className={`${dest.color} w-10 h-10 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                  {dest.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-black text-[#0b2b2e] text-base truncate uppercase">{dest.name}</h3>
                  <p className="text-[10px] text-[#00a1ab] font-black uppercase tracking-widest">{dest.count} Tours</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mb-16">
          <span className="text-[#f58220] text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] mb-4 block">Adventure awaits</span>
          <h2 className="text-4xl md:text-7xl font-black text-[#0b2b2e] tracking-tighter uppercase leading-none">
            {titleOverride || 'Adventure'} <br/>
            <span className="text-[#00A1AB]">Experiences</span>
          </h2>
        </div>

        {showFilters && (
          <div className="flex justify-center mb-16 space-x-4">
            {(['All', 'Inbound', 'Outbound'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-10 py-3.5 rounded-full font-black uppercase tracking-widest text-[11px] transition-all border-2 ${
                  activeFilter === filter 
                  ? 'bg-[#00A1AB] text-white border-[#00A1AB] shadow-2xl shadow-teal-500/30' 
                  : 'bg-white text-gray-500 border-gray-100 hover:border-[#00A1AB]/30 hover:text-[#00A1AB]'
                }`}
              >
                {filter} Tours
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {displayedPackages.map((pkg, index) => (
            <div 
              key={pkg.id} 
              onClick={() => onPackageSelect?.(pkg)}
              className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full cursor-pointer border border-gray-50"
            >
              <div className="relative h-64 md:h-72 overflow-hidden shrink-0">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                />
                <div className="absolute top-6 left-6 bg-[#0b2b2e]/80 backdrop-blur-md text-white px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest">
                  {pkg.category}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center space-x-3 mb-6 text-[11px] font-black uppercase tracking-widest text-gray-400">
                  <span className="text-[#00A1AB] bg-teal-50 px-3 py-1 rounded-lg">
                    {pkg.groupSize || 'Flexible'}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                  <span className="truncate">
                    {pkg.tourType || 'Leisure Tour'}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-[#0b2b2e] mb-10 leading-tight group-hover:text-[#00A1AB] transition-colors line-clamp-2 uppercase tracking-tight">
                  {pkg.title}
                </h3>

                <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                   <div className="flex items-center space-x-3 text-[#0b2b2e] font-black text-[14px]">
                      <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-[#F4A622]">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <span>{pkg.days} Days Trip</span>
                   </div>
                   
                   <div className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-[#00A1AB] group-hover:border-[#00A1AB] group-hover:translate-x-1 transition-all text-gray-200 group-hover:text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
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
