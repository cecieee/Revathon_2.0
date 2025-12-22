import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DotGrid from '../../components/DotGrid';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5");
  }, []);

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <DotGrid 
            dotSize={2} 
            gap={30} 
            baseColor="#cbd5e1" 
            activeColor="#ffffff" 
            proximity={150}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-4 px-4 w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <div className="flex flex-col w-fit max-w-full gap-2">
          <p className="text-sm pr-[5vw] md:pr-0 md:text-2xl font-sans uppercase font-bold text-[#ff7046] self-end text-right">
            India's First Ever
          </p>
          <h1 ref={titleRef} className="hero-title text-2xl  md:text-7xl lg:text-8xl font-medium text-white tracking-tighter text-center" data-text="REV-A-THON 1.0" style={{fontFamily: "Mechsuit, sans-serif"}}>
            REV-A-THON 1.0
          </h1>
          <p ref={subtitleRef} className="text-sm pl-[5vw] md:pl-0 md:text-2xl font-sans uppercase font-bold mt-2 sm:mt-6 text-[#3abfbc] self-start text-left">
            Reverse Engineering Hackathon
          </p>
          <div className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-sans uppercase pt-4 sm:pt-8 text-white self-center font-semibold text-center">
            Reliving the <span className='text-[#3abfbc] font-bold'>innovation</span>, <span className='text-[#ff7046] font-bold'>code</span>, and <span className='text-[#3abfbc] font-bold'>chaos</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
