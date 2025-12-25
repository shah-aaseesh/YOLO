
import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  endValue: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const numericMatch = endValue.replace(/,/g, '').match(/\d+/);
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  
  const rawNumberMatch = endValue.match(/[\d,]+/);
  const rawNumberStr = rawNumberMatch ? rawNumberMatch[0] : '';
  
  const parts = endValue.split(rawNumberStr);
  const prefix = parts[0] || '';
  const suffix = parts[1] || '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <span ref={countRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      label: 'Years of Adventure',
      value: '20 +',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Happy Explorers',
      value: '2,450 +',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Expert Guides',
      value: '1,250 +',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      ),
    },
    {
      label: 'Hidden Locations',
      value: '250 +',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-16 relative z-20">
      <div className="bg-[#00A1AB] rounded-[2rem] p-8 md:p-10 shadow-2xl border-2 border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center text-white group">
              <div className="mb-3 text-white/40 group-hover:text-[#F4A622] transition-colors duration-500 transform group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-4xl font-extrabold tracking-tight mb-1">
                <CountUp endValue={stat.value} />
              </div>
              <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
