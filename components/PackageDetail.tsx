
import React, { useState, useMemo } from 'react';
import { TrekPackage } from '../types';
import { TREK_PACKAGES } from '../constants';

interface PackageDetailProps {
  pkg: TrekPackage;
  onBack: () => void;
  onPackageSelect?: (pkg: TrekPackage) => void;
}

const PackageDetail: React.FC<PackageDetailProps> = ({ pkg, onBack, onPackageSelect }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const formatDay = (day: string | number) => {
    const dayStr = day.toString();
    // Check if the value looks like a time (contains : or AM/PM)
    const isTime = /[:\s](am|pm)/i.test(dayStr) || dayStr.includes(':');
    
    if (isTime) {
      return dayStr;
    }
    
    // Otherwise, treat as a Day number
    const numericDay = dayStr.replace(/[^0-9]/g, '');
    return `Day ${numericDay}`;
  };

  // Recommendation engine: 
  // 1. Same tour type first
  // 2. Others to fill up to 3
  const relatedPackages = useMemo(() => {
    const filtered = TREK_PACKAGES.filter(p => p.id !== pkg.id);
    const sameType = filtered.filter(p => p.tourType === pkg.tourType);
    const others = filtered.filter(p => p.tourType !== pkg.tourType);
    
    return [...sameType, ...others].slice(0, 3);
  }, [pkg.id, pkg.tourType]);

  return (
    <div className="bg-white pb-24">
      {/* Detail Hero / Header */}
      <div className="relative h-[300px] md:h-[450px] overflow-hidden">
        <img src={pkg.image} className="w-full h-full object-cover" alt={pkg.title} />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <span className="text-white text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] mb-4">Package Details</span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight max-w-4xl">{pkg.title}</h1>
        </div>
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-xl z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b pb-10">
              <div>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < pkg.rating ? 'text-[#F4A622]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                  <span className="text-[12px] font-bold text-gray-400 ml-2 uppercase tracking-widest">Verified Trip</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">{pkg.title}</h2>
                <p className="flex items-center text-gray-500 font-bold text-base">
                   <svg className="w-4 h-4 mr-2 text-[#F4A622]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                   Nepal Himalayas
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <button className="bg-[#00A1AB] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-[#008a92] transition-all shadow-xl shadow-teal-500/20">
                  Book This Experience
                </button>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: '🕒', label: 'Duration', val: `${pkg.days} Days` },
                { icon: '🏔️', label: 'Altitude', val: `${pkg.altitude}m` },
                { icon: '👥', label: 'Group Size', val: pkg.groupSize || 'Flexible' },
                { icon: '🗣️', label: 'Languages', val: pkg.languages || 'English & Hindi' }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-xl shadow-sm border border-gray-100">{item.icon}</div>
                  <div>
                    <p className="text-[12px] font-black uppercase text-gray-400 tracking-widest mb-1">{item.label}</p>
                    <p className="font-black text-gray-900 text-sm">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="mb-16">
              <h3 className="text-xl font-black text-gray-900 flex items-center mb-6">
                <span className="bg-[#F4A622] w-1.5 h-6 rounded-full mr-4"></span>
                Overview
              </h3>
              <div className="text-gray-600 font-medium leading-relaxed space-y-4 text-base">
                <p>{pkg.overview || "Experience the majestic Himalayas with our specialized tours."}</p>
              </div>
            </div>

            {/* Tour Highlights */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <div className="mb-16">
                <h3 className="text-xl font-black text-gray-900 flex items-center mb-6">
                  <span className="bg-[#7EC343] w-1.5 h-6 rounded-full mr-4"></span>
                  Tour Highlights
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-base font-bold text-gray-700 bg-gray-50 p-4 rounded-3xl border border-gray-100">
                      <span className="text-[#F4A622] mr-3 mt-1">★</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Included / Excluded */}
            <div className="mb-16 p-10 bg-[#0b2b2e] text-white rounded-[2.5rem] shadow-2xl">
              <h3 className="text-xl font-black flex items-center mb-8">
                <span className="bg-[#00A1AB] w-1.5 h-6 rounded-full mr-4"></span>
                Inclusions & Exclusions
              </h3>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#7EC343] mb-6">What's Included</h4>
                  <ul className="space-y-4">
                    {(pkg.included || []).map((text, i) => (
                      <li key={i} className="flex items-start text-base font-bold text-gray-300">
                        <svg className="w-5 h-5 text-[#7EC343] mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#E95541] mb-6">What's Not Included</h4>
                  <ul className="space-y-4">
                    {(pkg.excluded || []).map((text, i) => (
                      <li key={i} className="flex items-start text-base font-bold text-gray-400">
                        <svg className="w-5 h-5 text-[#E95541] mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Itinerary Section */}
            <div className="mb-20">
              <h3 className="text-xl font-black text-gray-900 flex items-center mb-8">
                <span className="bg-[#F4A622] w-1.5 h-6 rounded-full mr-4"></span>
                Detailed Itinerary
              </h3>
              <div className="space-y-4">
                {(pkg.itinerary || []).map((item, i) => (
                  <div key={i} className="border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button 
                      onClick={() => toggleAccordion(i)}
                      className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="flex items-center">
                        <span className="font-black text-[#00A1AB] text-[14px] mr-5 uppercase tracking-widest whitespace-nowrap">
                           {formatDay(item.day)}
                        </span>
                        <span className="font-black text-gray-900 text-[14px]">{item.title}</span>
                      </div>
                      <svg className={`w-5 h-5 text-gray-400 transition-transform ${activeAccordion === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {activeAccordion === i && (
                      <div className="px-10 pb-8 pt-2 text-base text-gray-600 font-medium bg-white leading-relaxed border-t border-gray-50">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              
              {/* Support Card */}
              <div className="bg-[#00A1AB] rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="text-2xl font-black mb-6 relative z-10">Book This Trip</h4>
                <p className="text-sm font-medium text-white/80 mb-10 relative z-10 leading-relaxed">Let our local experts handle every detail for a safe and unforgettable journey.</p>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer border border-white/10">
                    <span className="text-2xl">📞</span>
                    <div>
                       <p className="text-[12px] font-black uppercase opacity-60 tracking-widest">Call Expert</p>
                       <span className="font-black text-lg">(+977) 9854022644</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer border border-white/10">
                    <span className="text-2xl">📧</span>
                    <div>
                       <p className="text-[12px] font-black uppercase opacity-60 tracking-widest">Email Quote</p>
                       <span className="font-black text-lg">contact@yolo.com.np</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-10 bg-[#F4A622] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-[#d8911a] transition-all relative z-10 shadow-xl shadow-orange-900/20">
                   Enquire Now
                </button>
              </div>

              {/* Verified Badge */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center shadow-sm">
                 <img src="https://www.gstatic.com/images/branding/product/2x/maps_96dp.png" className="w-12 mb-4" />
                 <h5 className="font-black text-gray-900 uppercase text-[12px] tracking-widest mb-2">Official Operator</h5>
                 <p className="text-[12px] text-gray-500 font-medium leading-relaxed">YOLO TOURISM is a licensed partner for Nepal, Bhutan, and Tibet.</p>
              </div>

            </div>
          </div>
        </div>

        {/* You Might Also Like Section */}
        <div className="mt-20 md:mt-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              You Might <span className="text-[#f58220]">Also Like</span>
            </h2>
            <div className="w-16 md:w-20 h-1.5 md:h-2 bg-[#00a1ab] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {relatedPackages.map((relatedPkg) => (
              <div 
                key={relatedPkg.id} 
                onClick={() => onPackageSelect?.(relatedPkg)}
                className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full border border-gray-100 cursor-pointer"
              >
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden shrink-0">
                  <img src={relatedPkg.image} alt={relatedPkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 md:top-5 md:left-5 bg-[#f58220] text-white px-3 py-1.5 md:px-4 md:py-1.5 rounded-full font-black text-[9px] md:text-[11px] uppercase tracking-widest shadow-xl">
                    Similar Trip
                  </div>
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-1 mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#f58220]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <h3 className="text-base md:text-xl font-black text-gray-900 mb-2 md:mb-4 h-auto md:h-12 line-clamp-2 leading-tight group-hover:text-[#00a1ab] transition-colors">
                    {relatedPkg.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100">
                     <div className="flex flex-col">
                       <span className="text-[9px] md:text-[10px] uppercase font-black text-gray-400 tracking-widest mb-0.5">Duration</span>
                       <div className="flex items-center text-gray-900 font-black text-[12px] md:text-[13px]">
                         <svg className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 text-[#00a1ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         {relatedPkg.days} Days
                       </div>
                     </div>
                     <div className="flex flex-col items-end">
                       <button className="bg-[#00A1AB] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[9px] md:text-[11px] font-black uppercase tracking-widest group-hover:bg-[#F4A622] transition-colors shadow-lg shadow-teal-500/10 whitespace-nowrap">
                          Explore
                       </button>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
