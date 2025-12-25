
import React from 'react';
import { GOOGLE_REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  const businessUri = 'https://www.google.com/maps/place/YOLO+TOURISM/@26.7282928,85.9298352,17z/data=!3m1!4b1!4m6!3m5!1s0x242420d8e5c78465:0x3aa18db45345a0a0!8m2!3d26.728288!4d85.9324101!16s%2Fg%2F11f4mrvv6n';

  // Double the reviews for seamless marquee loop
  const displayReviews = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left">
            <div className="inline-flex items-center space-x-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100 mb-6">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-5" />
              <div className="h-4 w-px bg-gray-200"></div>
              <div className="flex items-center">
                <span className="text-sm font-black text-gray-900 mr-2">Verified Business</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-[#F4A622]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Real Reviews from <br/>
              Our <span className="text-[#f58220]">Google Profile</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <a 
              href={businessUri}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#4285F4] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-[#357abd] transition-all shadow-xl shadow-blue-500/20 inline-flex items-center"
            >
              <img src="https://www.gstatic.com/images/branding/product/2x/maps_96dp.png" className="h-4 mr-2" />
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee flex whitespace-nowrap group-hover:pause">
          {displayReviews.map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`} 
              className="mx-4 w-[320px] md:w-[450px] bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col justify-between shrink-0 hover:shadow-[0_20px_50px_rgba(244,166,34,0.1)] transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={review.avatar} 
                      alt={review.author} 
                      className="w-14 h-14 rounded-full border-2 border-[#00a1ab]/10" 
                    />
                    <div>
                      <h4 className="font-black text-gray-900 text-sm uppercase tracking-wide">{review.author}</h4>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-[#F4A622]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border w-10 h-10 rounded-xl flex items-center justify-center shadow-sm">
                    <img src="https://www.gstatic.com/images/branding/product/2x/maps_96dp.png" className="w-6" />
                  </div>
                </div>
                <p className="text-gray-600 font-medium text-base italic leading-relaxed whitespace-normal line-clamp-5 relative">
                  <span className="text-4xl text-[#00a1ab]/10 absolute -top-4 -left-2 font-serif">"</span>
                  {review.text}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center text-[12px] font-black uppercase tracking-[0.2em] text-[#00a1ab]">
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Verified Experience
                </div>
                <a href={businessUri} target="_blank" rel="noopener noreferrer" className="text-[11px] font-black text-gray-400 uppercase tracking-widest hover:text-[#4285F4]">Source: Google Maps</a>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-10"></div>
      </div>

      <div className="mt-20 text-center">
        <a 
          href={businessUri}
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center"
        >
          <span className="text-[12px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4">Official Google Business Profile</span>
          <div className="bg-white border-2 border-gray-100 rounded-full px-8 py-3.5 flex items-center space-x-4 group-hover:border-[#4285F4] group-hover:shadow-xl transition-all">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4" />
            <div className="h-4 w-px bg-gray-200"></div>
            <span className="text-sm font-black text-gray-900 tracking-tight">Browse 450+ Verified Reviews</span>
            <span className="text-[#4285F4] text-lg">→</span>
          </div>
        </a>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
