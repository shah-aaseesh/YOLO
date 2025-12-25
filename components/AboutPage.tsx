
import React from 'react';
import StatsSection from './StatsSection';

const AboutPage: React.FC = () => {
  const leaders = [
    {
      name: "Rajesh Neupane",
      role: "Founder & Chief Architect",
      bio: "A pioneer in cross-border tourism, Rajesh founded YOLO to share the hidden spiritual gems of the Terai and the high Himalayas with the world.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Dhurba Bhandari",
      role: "Lead Expedition Guide",
      bio: "With over 15 years in the field, Dhurba has led hundreds of successful summits and pilgrimage treks, specializing in safety and altitude logistics.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Suman Karki",
      role: "Operations Director",
      bio: "Suman ensures every YOLO journey is seamless, from Janakpur's heritage sites to the remote luxury camps of Mustang.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[650px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1920" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Himalayan Sunset"
        />
        <div className="absolute inset-0 bg-[#0b2b2e]/70"></div>
        <div className="relative text-center px-4 max-w-5xl">
          <span className="text-white text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] mb-6 block">The YOLO Philosophy</span>
          <h1 className="text-4xl md:text-8xl font-black text-white leading-tight tracking-tight uppercase mb-6">
            Pioneering the <br/>
            <span className="text-[#f58220]">New Adventure</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Born in the heart of Janakpurdham, we bridge the gap between ancient spiritual heritage and the raw majesty of the mountains.
          </p>
        </div>
      </div>

      {/* Brand Story Section */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 md:order-1">
              <span className="text-[#00a1ab] text-[12px] md:text-[14px] font-black uppercase tracking-[0.3em] mb-4 block">Our Origin Story</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#0b2b2e] mb-10 leading-[1.1] tracking-tighter">
                Rooted in Tradition, <br/>
                Driven by <span className="text-[#f58220]">Discovery</span>
              </h2>
              <div className="space-y-8 text-gray-600 text-lg leading-relaxed font-medium">
                <p>
                  YOLO TOURISM wasn't built in a boardroom. It was forged on the winding trails of the Himalayas and the sacred ponds of Janakpurdham. We noticed that while travel was becoming easier, the *soul* of adventure was being lost in generic packages.
                </p>
                <p>
                  Our mission is simple: to provide high-end, expert-led experiences at mid-range prices. Whether you are seeking spiritual solace at Muktinath or an adrenaline-fueled safari in Jaynagar, our local roots ensure you see the world through the eyes of someone who calls it home.
                </p>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <button className="bg-[#0b2b2e] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-[14px] shadow-2xl shadow-teal-900/30 hover:bg-[#00a1ab] transition-all">
                  Our Mission
                </button>
                <button className="border-2 border-gray-200 text-[#0b2b2e] px-12 py-5 rounded-full font-black uppercase tracking-widest text-[14px] hover:border-[#f58220] transition-all">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="bg-[#f58220]/5 absolute -inset-8 rounded-[4rem] -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1000" 
                className="w-full rounded-[3.5rem] shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700"
                alt="Adventure in Nepal"
              />
              <div className="absolute -bottom-10 -left-10 bg-[#00a1ab] p-8 rounded-[2.5rem] shadow-2xl text-white hidden lg:block max-w-[240px]">
                 <p className="text-4xl font-black mb-1">100%</p>
                 <p className="text-[12px] font-black uppercase tracking-widest opacity-80">Local Expertise & Safety Record</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Integrated */}
      <div className="bg-gray-50 py-16">
        <StatsSection />
      </div>

      {/* Vision & Mission Cards */}
      <section className="relative py-32 md:py-48 bg-[#0b2b2e] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-[#00a1ab] rounded-full blur-[200px]"></div>
           <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#f58220] rounded-full blur-[150px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-12 md:p-20 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 hover:border-white/20 transition-all group">
              <span className="text-5xl mb-10 block group-hover:scale-110 transition-transform">🌟</span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">The Vision</h3>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-medium">
                To redefine adventure travel by making deep cultural immersion and professional mountain expertise accessible to every intrepid traveler, ensuring that every "Live Once" moment is truly unforgettable.
              </p>
            </div>
            <div className="p-12 md:p-20 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 hover:border-white/20 transition-all group">
              <span className="text-5xl mb-10 block group-hover:scale-110 transition-transform">🚀</span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">The Mission</h3>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-medium">
                We simplify complex journeys. By controlling our own logistics, maintaining high-altitude medical protocols, and employing local heritage experts, we create safe bridges to the world's most remote locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[#f58220] text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] mb-4 block">The Guardians of Adventure</span>
            <h2 className="text-4xl md:text-7xl font-black text-[#0b2b2e] mb-6 tracking-tight">Our Core Leadership</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Decades of mountain blood, cultural wisdom, and operational excellence behind every single trip we launch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leaders.map((leader, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                  <img src={leader.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={leader.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b2e] via-transparent to-transparent opacity-80"></div>
                </div>
                <h4 className="text-2xl font-black text-[#0b2b2e] mb-2">{leader.name}</h4>
                <p className="text-[#f58220] font-black uppercase text-[12px] tracking-widest mb-4">{leader.role}</p>
                <p className="text-gray-500 text-center text-sm font-medium leading-relaxed max-w-xs">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
