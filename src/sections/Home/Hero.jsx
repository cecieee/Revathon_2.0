import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechButton from "../../components/Button"; import toast from 'react-hot-toast';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.from(textRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      }

      gsap.from(".button-wrapper", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden bg-transparent">
      <div className="absolute inset-0 overflow-hidden -z-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 2 === 0 ? "#3abfbc" : "#ff7046",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.5,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute w-32 h-32 rounded-full top-10 right-5 sm:top-20 sm:right-20 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/10 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute w-48 h-48 delay-700 rounded-full bottom-10 left-5 sm:bottom-20 sm:left-20 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/10 blur-3xl -z-10 animate-pulse"></div>

      <div className="absolute top-0 left-0 w-20 h-20 text-white pointer-events-none sm:w-32 sm:h-32 md:w-64 md:h-64 opacity-40 sm:opacity-60">
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

      <div className="absolute bottom-0 right-0 w-20 h-20 text-white rotate-180 pointer-events-none sm:w-32 sm:h-32 md:w-64 md:h-64 opacity-40 sm:opacity-60">
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
      <div className="container relative z-20 flex flex-col items-center justify-center h-full px-4 pt-32 mx-auto sm:px-6 md:px-12 sm:pt-32 md:pt-0 md:flex-row md:justify-start">
        <div className="w-full text-center md:text-left">
          <div ref={textRef}>
            <h1
              className="flex flex-row items-baseline justify-center gap-2 mb-4 text-lg font-bold leading-tight tracking-wide hero-text-shadow sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl sm:mb-6 sm:leading-none md:leading-tight whitespace-nowrap md:flex-col md:items-start md:justify-start md:gap-0"
              style={{ fontFamily: "Mechsuit" }}>
              <span>REV-A-THON</span>
              <span className="font-bold text-white">2.0</span>
            </h1>
            <p className="max-w-lg pl-0 mx-auto mt-2 mb-6 font-mono text-xs leading-relaxed tracking-wider text-gray-300 border-l-0 sm:text-base md:text-xl md:mx-0 sm:mb-8 md:border-l-4 border-primary md:pl-4 md:mt-0">
              <span
                className="inline-block text-secondary"
                style={{ transform: "scaleX(-1)", display: "inline-block" }}>
                REVERSE
              </span>{" "}
              THE FLOW <br />
              <span className="text-white">REVEAL</span>{" "}
              <span className="font-bold text-primary">THE LOGIC</span>
            </p>
          </div>

          <div className="button-wrapper">
            <TechButton
              size="lg"
              onClick={() => {
                document
                  .getElementById("register")
                  ?.scrollIntoView({ behavior: "smooth" });
                toast.custom((t) => (
                  <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                      } max-w-md w-full pointer-events-auto`}
                  >
                    <div className="bg-black border border-[#3ABFBC] p-4 relative shadow-[0_0_20px_rgba(58,191,188,0.1)]">
                      {/* Corner Accents */}
                      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-[#3ABFBC]"></div>
                      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-[#3ABFBC]"></div>
                      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-[#3ABFBC]"></div>
                      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-[#3ABFBC]"></div>

                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#FF7046]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                          </svg>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Mechsuit' }}>
                            SYSTEM NOTIFICATION
                          </h3>
                          <p className="font-mono text-sm tracking-wide text-white">
                            Registration Starting Soon
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ));
              }}
            >
              Register Now
            </TechButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
