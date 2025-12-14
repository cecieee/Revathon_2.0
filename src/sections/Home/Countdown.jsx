import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date('2026-01-31T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-24 min-h-[60vh] flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-transparent z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-5 blur-[100px]"></div>
      </div>

      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-secondary">
          <path d="M0 0 H40 L60 20 V60" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="58" y="58" width="4" height="4" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 pointer-events-none rotate-180">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-primary">
          <path d="M0 0 H40 L60 20 V60" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="58" y="58" width="4" height="4" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

        <div className="mb-16 relative group">
          <h2
            className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text text-white  relative z-10"
            style={{ fontFamily: 'Mechsuit', textShadow: '0 0 20px rgba(58, 191, 188, 0.3)' }}
          >
            STARTS
            <span className="text-primary"> IN</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl">
          {timeUnits.map((unit, index) => (
            <div key={index} className="relative group">
              {/* Card Container */}
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(58,191,188,0.2)]">

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-secondary/50 group-hover:border-secondary transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-secondary/50 group-hover:border-secondary transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/50 group-hover:border-primary transition-colors"></div>

                {/* Animated Background Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Number */}
                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-mono tracking-tighter mb-2 group-hover:text-secondary transition-colors" style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
                  {unit.value?.toString().padStart(2, '0') || '00'}
                </span>

                {/* Label */}
                <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-gray-400 group-hover:text-primary transition-colors">
                  {unit.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
          20% { clip-path: inset(92% 0 1% 0); transform: translate(1px, -1px); }
          40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 2px); }
          60% { clip-path: inset(25% 0 58% 0); transform: translate(2px, 1px); }
          80% { clip-path: inset(54% 0 7% 0); transform: translate(-1px, -2px); }
          100% { clip-path: inset(58% 0 43% 0); transform: translate(2px, 2px); }
        }
        .animation-glitch-1 {
          animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
        }
        .animation-glitch-2 {
          animation: glitch-anim-1 3s infinite linear alternate-reverse;
        }
      `}</style>
    </section>
  );
}
