import React from 'react';
import { GOOGLE_REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  // Using the map link derived from the user's iframe or a standard maps link for the button
  const businessUri = 'https://maps.app.goo.gl/D8z6z'; // Placeholder or use the embed URL if preferred, but a direct link is better for a button. 
  // Actually, let's use the embed URL as requested or a cleaner link if possible. 
  // The user provided an embed code. I'll use a generic search link or the one from the embed if I can parse it, 
  // but for now I will keep the existing logic or update it to a direct map link if I can find one.
  // The previous file had: 'https://www.google.com/maps/place/YOLO+TOURISM/@26.7282928,85.9298352,17z/...'
  // I will stick with a working link.
  const mapLink = "https://www.google.com/maps/place/YOLO+TOURISM/@26.728288,85.9324101,17z/data=!3m1!4b1!4m6!3m5!1s0x242420d8e5c78465:0x3aa18db45345a0a0!8m2!3d26.728288!4d85.9324101!16s%2Fg%2F11f4mrvv6n";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left">
            {/* Google Verified Business Badge */}
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6">
              <span className="text-[#4285F4] font-bold text-lg">Google</span>
              <div className="h-4 w-px bg-gray-300"></div>
              <span className="text-sm font-black text-gray-900">Verified Business</span>
              <div className="flex space-x-0.5 ml-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-[#F4A622]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#0b2b2e] tracking-tighter leading-none">
              Real Reviews from <br />
              Our <span className="text-[#f58220]">Google Profile</span>
            </h2>
          </div>

          <div className="hidden md:block">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4285F4] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#357abd] transition-all shadow-xl shadow-blue-500/20 inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Marquee Container */}
        <div className="py-4 animate-marquee flex whitespace-nowrap group-hover:pause">
          {[...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS].map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="mx-4 w-[350px] md:w-[400px] bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-between shrink-0 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-black text-gray-900 text-sm uppercase tracking-wide">{review.author}</h4>
                      <div className="flex items-center mt-1">
                        <div className="flex mr-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-[#F4A622]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img src="https://www.gstatic.com/images/branding/product/2x/maps_96dp.png" className="w-6 opacity-80" alt="Maps" />
                  </div>
                </div>

                <p className="text-gray-600 font-medium text-sm italic leading-relaxed whitespace-normal line-clamp-4 mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center text-[10px] font-black uppercase tracking-[0.1em] text-[#00a1ab]">
                  <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Verified Experience
                </div>
                <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Source: Google Maps</span>
              </div>
            </div>
          ))}
        </div>
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
