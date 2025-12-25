
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import DestinationGrid from './components/DestinationGrid';
import PackageDetail from './components/PackageDetail';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import { TREK_PACKAGES } from './constants';
import { TrekPackage } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'about' | 'packages' | 'package'>('home');
  const [selectedPackage, setSelectedPackage] = useState<TrekPackage | null>(null);

  const handlePackageClick = (pkg: TrekPackage) => {
    setSelectedPackage(pkg);
    setView('package');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setView('home');
    setSelectedPackage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setView('about');
    setSelectedPackage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPackages = () => {
    setView('packages');
    setSelectedPackage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const homePackages = useMemo(() => {
    const inbound = TREK_PACKAGES.filter(p => p.category === 'Inbound').slice(0, 3);
    const outbound = TREK_PACKAGES.filter(p => p.category === 'Outbound').slice(0, 3);
    return [...inbound, ...outbound];
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-[#0b2b2e] text-white py-3 hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em]">
          <div className="flex items-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-[#F4A622] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#F4A622] transition-colors">Instagram</a>
          </div>
          <div className="flex space-x-8">
            <span className="flex items-center hover:text-[#F4A622] transition-colors">
              <span className="mr-2 text-[#f58220]">PH.</span> (+977) 9854022644
            </span>
            <span className="flex items-center hover:text-[#F4A622] transition-colors">
              <span className="mr-2 text-[#f58220]">EM.</span> contact@yolo.com.np
            </span>
          </div>
        </div>
      </div>

      <Navbar 
        onNavigateHome={navigateToHome} 
        onNavigateAbout={navigateToAbout} 
        onNavigatePackages={navigateToPackages}
        currentView={view} 
      />
      
      {view === 'home' && (
        <>
          <Hero />
          <div className="relative z-20">
            <StatsSection />
          </div>
          <AboutSection />
          
          <DestinationGrid 
            onPackageSelect={handlePackageClick} 
            customPackages={homePackages}
            titleOverride="Adventure Experiences"
          />
          
          <div className="bg-[#F8FAFB] pb-32 text-center">
            <button 
              onClick={navigateToPackages}
              className="inline-flex items-center bg-[#00A1AB] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-[12px] shadow-2xl shadow-teal-500/20 hover:bg-[#F4A622] transition-all group active:scale-95"
            >
              Discover More Adventures
              <svg className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>

          {/* YOLO RENTALS SECTION - Updated to match Reference Image Style */}
          <section className="py-24 md:py-36 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Header inspired by 'Real Reviews' Image */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                <div className="text-left relative">
                  {/* Verified Badge Pillar */}
                  <div className="inline-flex items-center space-x-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-gray-100 mb-6">
                    <span className="text-[#00a1ab] font-black text-xs uppercase tracking-widest">YOLO</span>
                    <div className="h-4 w-px bg-gray-200"></div>
                    <div className="flex items-center">
                      <span className="text-xs font-black text-gray-900 mr-3">Verified Fleet</span>
                      <div className="flex space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 text-[#F4A622]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-black text-[#0b2b2e] tracking-tighter leading-[1.1] uppercase">
                    Drive Your <br/>
                    <span className="text-[#f58220]">YOLO Freedom</span>
                  </h2>
                </div>

                <div className="shrink-0 md:pb-2">
                  <button className="bg-[#4285F4] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-[#357abd] transition-all shadow-xl shadow-blue-500/20 inline-flex items-center group">
                    <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    View Our Fleet
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-8 bg-[#2998bd] rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-2xl">
                  <div className="w-full md:w-1/2 relative z-10 flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" 
                      alt="SUV" 
                      className="w-full h-auto object-contain drop-shadow-2xl animate-float"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-white relative z-10">
                    <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tight">
                      Explore Any <br/>Terrain Today
                    </h3>
                    <p className="text-white/70 font-medium mb-10 text-lg leading-relaxed">
                      Simply rent and ride wherever the road takes you. We provide 24/7 road assistance for every mile.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-10">
                      <div className="bg-[#fcc12d] text-[#0b2b2e] p-6 rounded-3xl shadow-xl">
                        <p className="text-3xl font-black">20+</p>
                        <p className="text-[11px] font-black uppercase tracking-widest opacity-80">Fleet Size</p>
                      </div>
                      <div className="bg-[#9bd4e4] text-[#0b2b2e] p-6 rounded-3xl shadow-xl">
                        <p className="text-3xl font-black">50+</p>
                        <p className="text-[11px] font-black uppercase tracking-widest opacity-80">Districts</p>
                      </div>
                    </div>
                    <button className="bg-white text-[#0b2b2e] px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#fcc12d] transition-all shadow-2xl">
                      Get a Quote
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-4 relative group overflow-hidden rounded-[3.5rem] min-h-[500px] lg:min-h-full shadow-2xl bg-gray-900">
                  <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[6s] group-hover:scale-105" alt="Adventure" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                  <div className="absolute inset-0 p-16 flex flex-col justify-between">
                    <h4 className="text-5xl font-black leading-none text-white tracking-tighter uppercase">
                      VEHICLE<br/><span className="text-[#9bd4e4]">RENTAL</span>
                    </h4>
                    <div className="flex justify-center">
                       <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20 hover:bg-[#9bd4e4] hover:text-[#0b2b2e] transition-all group/play cursor-pointer">
                          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-current border-b-[10px] border-b-transparent ml-2"></div>
                       </div>
                    </div>
                    <div className="flex justify-between items-center text-white/50">
                       <span className="text-[12px] font-black uppercase tracking-[0.3em]">Trusted Service</span>
                       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Testimonials />
        </>
      )}

      {view === 'packages' && (
        <>
          <div className="bg-[#0b2b2e] py-32 md:py-48 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="text-white/50 text-[12px] md:text-[14px] font-black uppercase tracking-[0.5em] mb-6 block">Adventure is calling</span>
              <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">Explore <br/><span className="text-[#f58220]">All Tours</span></h1>
            </div>
          </div>
          <div className="bg-[#F8FAFB]">
             <DestinationGrid onPackageSelect={handlePackageClick} hideCountries={true} showFilters={true} />
          </div>
        </>
      )}

      {view === 'about' && <AboutPage />}

      {view === 'package' && selectedPackage && (
        <PackageDetail 
          pkg={selectedPackage} 
          onBack={navigateToHome} 
          onPackageSelect={handlePackageClick}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;
