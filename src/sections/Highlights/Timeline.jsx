import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DotGrid from '../../components/DotGrid';
import WinnerFrame from '../../components/WinnerFrame';

gsap.registerPlugin(ScrollTrigger);

const events = [
  { time: "10:00 AM", title: "Opening Ceremony", description: "Kickstarting the event with inspiring talks." },
  { time: "12:00 PM", title: "Hacking Begins", description: "Teams start building their innovative solutions." },
  { time: "06:00 PM", title: "Mentoring Session", description: "Industry experts guide the participants." },
  { time: "12:00 AM", title: "Midnight Snacks", description: "Refueling for the night ahead." },
  { time: "10:00 AM", title: "Submission Deadline", description: "Pens down! Time to showcase." },
];

const Timeline = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const items = timelineRef.current.querySelectorAll('.timeline-item');
    
    // Animate the central line
    gsap.fromTo(lineRef.current, 
      { height: '0%' },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      }
    );

    items.forEach((item, index) => {
      const content = item.querySelector('.timeline-content');
      const dot = item.querySelector('.timeline-dot');
      const connector = item.querySelector('.timeline-connector');
      const mobileConnector = item.querySelector('.timeline-connector-mobile');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        }
      });

      tl.fromTo(dot, 
        { opacity: 0.2, scale: 1, borderColor: 'rgba(255,255,255,0.2)', boxShadow: 'none' }, 
        { opacity: 1, scale: 1, borderColor: '#FF7046', boxShadow: '0 0 10px #3ABFBC', duration: 0.3 }
      )
        .fromTo(connector, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.3 })
        .fromTo(mobileConnector, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.3 }, "<")
        .fromTo(content, { opacity: 0, x: index % 2 === 0 ? -20 : 20 }, { opacity: 1, x: 0, duration: 0.5 });
    });
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Dot Grid Animation */}
      <div className="absolute inset-0 opacity-30">
         <DotGrid 
            dotSize={2} 
            gap={30} 
            baseColor="#cbd5e1" 
            activeColor="#ffffff" 
            proximity={150}
         />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-20 text-white">
          Event <span className="text-[#ff7046]">Timeline</span>
        </h2>
        
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Central Bus Line */}
          <div className="absolute left-[26px] md:left-1/2 transform md:-translate-x-1/2 h-full w-1 md:w-2 bg-zinc-800 rounded-full overflow-hidden">
             <div ref={lineRef} className="w-full bg-white shadow-[0_0_15px_#3ABFBC]"></div>
          </div>

          {events.map((event, index) => (
            <div key={index} className={`timeline-item relative flex flex-col md:flex-row items-center justify-between mb-24 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Empty Space for alignment on Desktop */}
              <div className="w-full md:w-5/12 hidden md:block"></div>

              {/* Center Node */}
              <div className="absolute left-5 top-1/2 -translate-y-1/2 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="timeline-dot w-4 h-4 md:w-6 md:h-6 bg-white/80 border-2 border-[#ff7046] rounded-full z-20 shadow-[0_0_10px_#3ABFBC] relative">
                    <div className="absolute inset-0 bg-white opacity-100 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 pl-16 md:pl-0 relative flex items-center ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                
                {/* Connector Trace (Desktop) */}
                <div 
                    className={`timeline-connector hidden md:block absolute top-1/2 h-0.5 bg-[#3abfbc] w-12 origin-left ${index % 2 === 0 ? 'right-0 origin-right' : 'left-0'}`}
                    style={{ [index % 2 === 0 ? 'marginRight' : 'marginLeft']: '-3rem' }}
                >
                    {/* Decorative end of trace */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#3abfbc] rounded-full ${index % 2 === 0 ? 'left-0' : 'right-0'}`}></div>
                </div>
                
                {/* Connector Trace (Mobile) */}
                 <div className="timeline-connector-mobile md:hidden absolute top-1/2 transform -translate-y-1/2 left-7 w-10 h-1 bg-[#3abfbc] origin-left"></div>

                <div 
                    className={`timeline-content w-full group relative cursor-pointer ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                    <div className="relative bg-zinc-900/90 w-[60vw] md:w-full p-4 md:p-6 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/95 group-[.active]:bg-zinc-900/95">
                        
                        {/* Border Animation Container */}
                        <div className="absolute inset-0 pointer-events-none">
                            {index % 2 === 0 ? (
                                <>
                                    {/* Left Side Content: TR & BL Borders */}
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40 group-hover:w-full group-hover:h-full group-hover:border-white/80 group-[.active]:w-full group-[.active]:h-full group-[.active]:border-white/80 transition-all duration-500 ease-out"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/40 group-hover:w-full group-hover:h-full group-hover:border-white/80 group-[.active]:w-full group-[.active]:h-full group-[.active]:border-white/80 transition-all duration-500 ease-out"></div>
                                    
                                    {/* Circuit Dots */}
                                    <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-white shadow-[0_0_8px_white] group-hover:shadow-[0_0_15px_white] group-[.active]:shadow-[0_0_15px_white] transition-all"></div>
                                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-white shadow-[0_0_8px_white] group-hover:shadow-[0_0_15px_white] group-[.active]:shadow-[0_0_15px_white] transition-all"></div>
                                </>
                            ) : (
                                <>
                                    {/* Right Side Content: TL & BR Borders */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/40 group-hover:w-full group-hover:h-full group-hover:border-white/80 group-[.active]:w-full group-[.active]:h-full group-[.active]:border-white/80 transition-all duration-500 ease-out"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/40 group-hover:w-full group-hover:h-full group-hover:border-white/80 group-[.active]:w-full group-[.active]:h-full group-[.active]:border-white/80 transition-all duration-500 ease-out"></div>

                                    {/* Circuit Dots */}
                                    <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-white shadow-[0_0_8px_white] group-hover:shadow-[0_0_15px_white] group-[.active]:shadow-[0_0_15px_white] transition-all"></div>
                                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-white shadow-[0_0_8px_white] group-hover:shadow-[0_0_15px_white] group-[.active]:shadow-[0_0_15px_white] transition-all"></div>
                                </>
                            )}
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-2 md:mb-3">
                                <span className="text-[#ff7046] font-mono font-bold text-sm md:text-lg tracking-wider">{event.time}</span>
                                <div className={`h-px grow mx-4 bg-zinc-800 group-hover:bg-white/20 group-[.active]:bg-white/20 transition-colors`}></div>
                            </div>
                            <h3 className="text-[12px] md:text-2xl font-bold text-white mb-2 group-hover:text-[#3abfbc] group-[.active]:text-[#3abfbc] transition-colors">{event.title}</h3>
                            <p className="text-gray-400 text-xs md:text-sm font-mono leading-relaxed">{event.description}</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
