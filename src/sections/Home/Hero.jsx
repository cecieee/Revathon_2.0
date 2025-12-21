import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechButton from "../../components/Button";

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
      className="min-h-screen flex items-center relative overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
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

      <div className="absolute top-10 right-5 sm:top-20 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

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
      <div className="container mx-auto px-4 sm:px-6 md:px-12 pt-32 sm:pt-32 md:pt-0 relative z-20 flex flex-col md:flex-row items-center justify-center md:justify-start h-full">
        <div className="w-full  text-center md:text-left">
          <div ref={textRef}>
            <h1
              className="hero-text-shadow text-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-wide leading-tight sm:leading-none md:leading-tight whitespace-nowrap flex flex-row md:flex-col items-baseline md:items-start justify-center md:justify-start gap-2 md:gap-0"
              style={{ fontFamily: "Mechsuit" }}
            >
              <span>REV-A-THON</span>
              <span className="text-white font-bold">2.0</span>
            </h1>
            <p className="text-xs sm:text-base md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 mb-6 sm:mb-8 border-l-0 md:border-l-4 border-primary pl-0 md:pl-4 mt-2 md:mt-0 leading-relaxed font-mono tracking-wider">
              <span
                className="inline-block text-secondary"
                style={{ transform: "scaleX(-1)", display: "inline-block" }}
              >
                REVERSE
              </span>{" "}
              THE FLOW <br />
              <span className="text-white">REVEAL</span>{" "}
              <span className="text-primary font-bold">THE LOGIC</span>
            </p>
          </div>

          <div className="button-wrapper">
            <TechButton
              size="lg"
              onClick={() =>
                document
                  .getElementById("register")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
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
