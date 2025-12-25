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
            {titleOverride || 'Adventure'} <br />
            <span className="text-[#00A1AB]">Experiences</span>
          </h2>
        </div>

        {showFilters && (
          <div className="flex justify-center mb-16 space-x-4">
            {(['All', 'Inbound', 'Outbound'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-10 py-3.5 rounded-full font-black uppercase tracking-widest text-[11px] transition-all border-2 ${activeFilter === filter
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
              <div className="relative h-48 md:h-56 overflow-hidden shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#f58220] text-white px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">
                  {pkg.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-[#f58220]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>

                <h3 className="text-lg md:text-xl font-black text-[#0b2b2e] mb-6 leading-tight group-hover:text-[#00A1AB] transition-colors line-clamp-2 uppercase tracking-tight">
                  {pkg.title}
                </h3>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Duration</span>
                    <div className="flex items-center space-x-1.5 text-[#0b2b2e] font-black text-sm">
                      <svg className="w-4 h-4 text-[#00A1AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{pkg.days} Days</span>
                    </div>
                  </div>

                  <button className="bg-[#00A1AB] text-white px-6 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-[#0b2b2e] transition-colors shadow-lg shadow-teal-500/20">
                    Explore
                  </button>
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
