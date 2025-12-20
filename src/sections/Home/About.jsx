import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-image", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-text p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center text-white py-20 relative overflow-hidden"
    >
      {/* Circuit Border Top Left */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 text-white pointer-events-none opacity-80">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M0 2 H30 L45 17 V45" stroke="currentColor" strokeWidth="1" />
          <circle cx="45" cy="45" r="2" fill="currentColor" />
          <path d="M0 12 H15 L25 22 V60" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <circle cx="25" cy="60" r="1.5" fill="currentColor" opacity="0.5" />
          <rect x="2" y="2" width="4" height="4" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Circuit Border Bottom Right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 text-white pointer-events-none rotate-180 opacity-80">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M0 2 H30 L45 17 V45" stroke="currentColor" strokeWidth="1" />
          <circle cx="45" cy="45" r="2" fill="currentColor" />
          <path d="M0 12 H15 L25 22 V60" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <circle cx="25" cy="60" r="1.5" fill="currentColor" opacity="0.5" />
          <rect x="2" y="2" width="4" height="4" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-5">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text Section */}
          <div className="md:w-1/2 justify-center flex md:pr-10 w-[83vw] m-auto p-3">
            <div className="max-w-xl">
              <h2 className="text-xl md:text-4xl font-bold text-[#3abfbc] mb-12 about-title tracking-tighter">
                ABOUT <br />
                <span className="text-white text-2xl tracking-wide">REV-A-THON</span> <span className="text-[#ff7046]"> 2.0</span>
              </h2>

              <div ref={textRef} className="about-text font-sans space-y-3 text-lg md:text-xl text-gray-300 leading-relaxed">
               <p><span className="font-bold">REV-A-THON 2.0</span> is a <span className="text-[#3abfbc] font-bold">reverse-engineering</span>–based technical <span className="text-[#ff7046] font-bold">hackathon</span> organized by the IEEE Robotics & Automation Society Student Branch Chapter College of Engineering Chengannur. </p>
               <p> Unlike traditional hackathons, this reverse hackathon begins by breaking systems apart-encouraging participants to <span className="text-[#3abfbc] font-bold uppercase">Reverse </span>, <span className="text-[#ff7046] uppercase font-bold">Rethink</span>, and <span className="text-[#3abfbc] uppercase font-bold">Rebuild</span> . </p>
               <p> It promotes collaboration, critical thinking, and hands-on learning across robotics, electronics, and embedded systems, turning analysis into innovation.</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden w-full md:w-1/2 about-image md:flex justify-center md:justify-end pb-10 md:pb-20 md:pr-10">
             <div className="relative rounded-xl overflow-hidden flex items-center justify-center max-w-md">
                <video 
                  src="/assets/images/video1.mp4" 
                  autoPlay
                  loop
                  muted
                  controls={0}
                  playsInline
                  className="w-full md:h-[90vh] object-cover md:mt-20 mt-0"
                />
             </div>
          </div>

        </div>
      </div>

      {/* Reserved space for 3D component - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 md:h-full pointer-events-none z-0 flex items-end justify-end p-10">
        {/* This area is kept visually clear of text for the 3D element */}
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#3abfbc]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ff7046]/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default About;
