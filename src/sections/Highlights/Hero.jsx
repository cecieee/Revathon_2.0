import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
      <div className="absolute inset-0 opacity-20"></div>
      <div className="z-10 text-center flex flex-col gap-4 px-4">
        <h1 ref={titleRef} className="hero-title text-3xl md:text-6xl lg:text-8xl font-medium text-white mb-4 tracking-tighter" data-text="REV-A-THON 1.0">
          REV-A-THON 1.0
        </h1>
        <p ref={subtitleRef} className="text-xl md:text-2xl font-sans uppercase font-bold text-gray-300 max-w-2xl mx-auto">
          Reliving the <span className='text-[#3abfbc]'>Innovation</span>, <span className='text-[#ff7046]'>Code</span>, and <span className='text-[#3abfbc]'>Chaos</span>.
        </p>
      </div>
    </section>
  );
};

export default Hero;
