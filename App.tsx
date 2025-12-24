
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import DestinationGrid from './components/DestinationGrid';
import Footer from './components/Footer';
import { BLOGS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Top Bar - Rebranded */}
      <div className="bg-[#0b2b2e] text-white py-2.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex space-x-6 text-gray-400">
            <span>Verified Operator: <span className="text-[#f58220]">YOLO-NEPAL-2025</span></span>
          </div>
          <div className="flex space-x-8">
            <span className="flex items-center hover:text-[#00a1ab] cursor-pointer transition-colors">
              <span className="mr-2 text-[#f58220]">📞</span> (+977) 9841936940
            </span>
            <span className="flex items-center hover:text-[#00a1ab] cursor-pointer transition-colors">
              <span className="mr-2 text-[#f58220]">📧</span> go@yolo-nepal.com
            </span>
          </div>
        </div>
      </div>

      <Navbar />
      
      <Hero />

      <AboutSection />

      <DestinationGrid />

      {/* Fixed Departure Section - Rebranded */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              YOLO <span className="text-[#00a1ab]">Upcoming</span> Trips
            </h2>
            <div className="w-20 h-2 bg-[#f58220] mx-auto rounded-full mb-16"></div>
            
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="min-w-full text-left bg-gray-50 rounded-[2rem] overflow-hidden">
                <thead>
                  <tr className="border-b-2 border-white text-[10px] md:text-xs font-black uppercase text-gray-400 tracking-[0.3em]">
                    <th className="p-8 min-w-[200px]">Adventure</th>
                    <th className="p-8 min-w-[150px]">Dates</th>
                    <th className="p-8 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white">
                  <tr className="group hover:bg-white transition-all cursor-pointer">
                    <td className="p-8 font-black text-gray-900 text-base md:text-lg">
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-[#f58220] rounded-full mr-4 group-hover:scale-150 transition-transform"></span>
                        Kanchenjunga Multi-Peak Trek
                      </div>
                    </td>
                    <td className="p-8 text-gray-500 font-bold text-xs md:text-sm">AUG 20 — SEP 02</td>
                    <td className="p-8 text-right">
                      <button className="bg-[#00a1ab] text-white px-8 py-3 rounded-full font-black text-[10px] hover:bg-[#f58220] transition-all uppercase tracking-widest shadow-lg shadow-teal-500/10">
                        Join Group
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages (Mosaic) - Rebranded */}
      <section className="bg-gray-900 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              YOLO <span className="text-[#f58220]">Signature</span> Collection
            </h2>
            <div className="w-20 h-2 bg-[#00a1ab] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[700px]">
             {/* Large Item */}
             <div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-[2.5rem] h-[400px] md:h-auto shadow-2xl">
                <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                   <span className="bg-[#00a1ab] text-white self-start px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">Iconic Adventure</span>
                   <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">Gokyo Lake & Chola Pass</h3>
                   <div className="flex space-x-6 text-xs font-black text-white/70 uppercase tracking-widest">
                      <span className="flex items-center"><span className="text-[#f58220] mr-2">📅</span> 14 Days</span>
                      <span className="flex items-center"><span className="text-[#f58220] mr-2">🏔️</span> 5420m</span>
                   </div>
                </div>
             </div>

             {/* Small Item 1 */}
             <div className="lg:col-span-1 lg:row-span-1 relative group overflow-hidden rounded-[2rem] h-[250px] md:h-auto shadow-xl">
                <img src="https://images.unsplash.com/photo-1582234373447-7359197c368d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
                   <h3 className="text-sm md:text-base font-black text-white leading-tight uppercase tracking-wide">Mustang 4x4 Overland</h3>
                   <span className="text-[10px] font-black text-[#f58220] mt-2 uppercase tracking-widest">Starting $1299</span>
                </div>
             </div>

             {/* Small Item 2 */}
             <div className="lg:col-span-1 lg:row-span-1 relative group overflow-hidden rounded-[2rem] h-[250px] md:h-auto shadow-xl">
                <img src="https://images.unsplash.com/photo-1627894483216-2138af692e27?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
                   <h3 className="text-sm md:text-base font-black text-white leading-tight uppercase tracking-wide">Annapurna Circuit</h3>
                   <div className="flex items-center space-x-2 text-[10px] font-black text-[#00a1ab] mt-2 uppercase tracking-widest">
                      <span>18 Days</span>
                      <span className="text-white/30">•</span>
                      <span>Level: Hard</span>
                   </div>
                </div>
             </div>

             {/* Wide Bottom Item */}
             <div className="lg:col-span-2 lg:row-span-1 relative group overflow-hidden rounded-[2.5rem] h-[250px] md:h-auto shadow-xl">
                <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-6 right-6 bg-[#ed1c24] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">Hot Pick</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                   <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tight">Everest Base Camp (Heli-Return)</h3>
                   <div className="flex space-x-6 text-[10px] font-black text-[#00a1ab] uppercase tracking-widest">
                      <span>9 Full Days</span>
                      <span>Lux Lodge Stay</span>
                      <span className="text-[#f58220]">$2400</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Blogs Section - Rebranded */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Adventure <span className="text-[#f58220]">Journal</span>
            </h2>
            <div className="w-20 h-2 bg-[#00a1ab] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOGS.map((blog) => (
              <article key={blog.id} className="flex flex-col h-full bg-white group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2rem] h-64 md:h-72 mb-8 shadow-lg group-hover:shadow-2xl transition-all">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-[#00a1ab] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    YOLO Tales
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">
                  <span className="flex items-center"><span className="text-[#f58220] mr-2">📅</span> {blog.date}</span>
                  <span className="flex items-center text-[#00a1ab]"><span className="text-gray-400 mr-2">👤</span> {blog.author}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 group-hover:text-[#f58220] transition-colors leading-tight tracking-tight">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 line-clamp-3 font-medium">
                  {blog.excerpt}
                </p>
                <div className="mt-auto">
                   <button className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-[#00a1ab] hover:text-[#f58220] transition-colors">
                     Read The Story <span className="ml-2 text-base">→</span>
                   </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partner logos - Rebranded */}
      <section className="py-12 md:py-16 bg-gray-50 border-t overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <div className="w-full text-center font-black text-[#00a1ab] uppercase tracking-[0.3em] text-[10px] mb-6 lg:w-auto lg:mb-0">YOLO Affiliations</div>
           <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
           <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
           <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
           <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
