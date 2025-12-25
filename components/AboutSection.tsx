
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="text-center md:text-left relative">
            <span className="text-[#00a1ab] text-[12px] md:text-[14px] font-black uppercase tracking-[0.3em] mb-4 block">Our Origin Story</span>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter text-[#0b2b2e]">
              Rooted in Tradition, <br/>
              Driven by <span className="text-[#f58220]">Discovery</span>
            </h2>
            <div className="space-y-8 text-gray-600 leading-relaxed text-lg font-medium">
              <p>
                At YOLO (You Only Live Once), we believe travel isn't just about the destination—it's about the soul-stirring experiences that stay with you forever. 
              </p>
              <p>
                Specializing in rugged mountain adventures, 4-wheel expeditions, and hidden jungle safaris, we provide premium services at mid-range prices. With our local expertise, every trip is crafted to push your limits.
              </p>
            </div>
            <button className="mt-12 bg-[#00a1ab] text-white px-12 py-4 rounded-full font-black hover:bg-[#008a92] transition-all uppercase tracking-widest text-[12px] shadow-2xl shadow-teal-500/20">
              Read Our Story
            </button>
          </div>

          <div className="bg-gray-50 p-10 md:p-16 rounded-[3rem] border-2 border-dashed border-[#00a1ab]/30 relative">
            <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/2 bg-[#f58220] p-6 rounded-3xl shadow-2xl">
               <span className="text-white font-black text-3xl block leading-none">100%</span>
               <span className="text-white text-[10px] block font-black uppercase tracking-widest mt-1">Authentic</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center md:text-left text-[#0b2b2e] tracking-tight">
              The <span className="text-[#00a1ab]">YOLO</span> Edge
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { 
                  icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
                  title: "Award Winning",
                  subtitle: "Top rated by travelers",
                  color: "bg-[#f58220] shadow-orange-500/30"
                },
                { 
                  icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 11-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 011 1V4z" /></svg>,
                  title: "Custom Trips",
                  subtitle: "Built around you",
                  color: "bg-[#00a1ab] shadow-teal-500/30"
                },
                { 
                  icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
                  title: "Direct Pricing",
                  subtitle: "No hidden fees",
                  color: "bg-[#7dc242] shadow-green-500/30"
                },
                { 
                  icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: "Safety First",
                  subtitle: "Certified guides only",
                  color: "bg-[#ed1c24] shadow-red-500/30"
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className={`${item.color} p-5 rounded-3xl mb-5 shadow-2xl`}>
                     {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-[#0b2b2e] text-[15px] mb-2 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wider">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
