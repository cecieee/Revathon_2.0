import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 -z-20">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Sparkles
            count={25}
            scale={1}
            size={4}
            speed={0.4}
            opacity={0.5}
            color="#3abfbc"
          /><Sparkles
            count={25}
            scale={1}
            size={4}
            speed={0.4}
            opacity={0.5}
            color="#ff7046"
          />
        </Canvas>
      </div>

      {/* Decorative blur circles - responsive positioning */}
      <div className="absolute top-10 right-5 sm:top-20 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

      {/* Corner decorative SVGs */}
      <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 md:w-64 md:h-64 text-white pointer-events-none opacity-40 sm:opacity-60">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M0 2 H30 L45 17 V45" stroke="currentColor" strokeWidth="1" />
          <circle cx="45" cy="45" r="2" fill="currentColor" />
          <path
            d="M0 12 H15 L25 22 V60"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <circle cx="25" cy="60" r="1.5" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 md:w-64 md:h-64 text-white pointer-events-none opacity-40 sm:opacity-60 rotate-180">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M0 2 H30 L45 17 V45" stroke="currentColor" strokeWidth="1" />
          <circle cx="45" cy="45" r="2" fill="currentColor" />
          <path
            d="M0 12 H15 L25 22 V60"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <circle cx="25" cy="60" r="1.5" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-start">
        <div ref={textRef} className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-mono text-secondary tracking-widest mb-2 sm:mb-3">
            IEEE SB CEC PRESENTS
          </h2>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 tracking-tighter leading-none"
            style={{ fontFamily: "Mechsuit" }}
          >
            REVATHON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
              2.0
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 mb-6 sm:mb-8 border-l-4 border-primary pl-3 sm:pl-4">
            The Ultimate Innovation Challenge. <br />
            <span className="text-primary font-bold">
              Reverse Engineering Hackathon
            </span>
          </p>

          <button
            onClick={() =>
              document
                .getElementById("register")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border border-white/20 overflow-hidden cursor-pointer hover:bg-white hover:border-white transition-all duration-300"
          >
            <span className="relative text-sm sm:text-base text-white font-mono tracking-widest uppercase group-hover:text-black transition-colors duration-300">
              Register Now
            </span>
            <div className="absolute top-0 right-0 p-1">
              <div className="w-1 h-1 bg-white group-hover:bg-black transition-colors duration-300"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-1">
              <div className="w-1 h-1 bg-white group-hover:bg-black transition-colors duration-300"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
