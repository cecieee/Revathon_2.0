import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Participants", value: 200, suffix: "+" },
  { label: "Teams", value: 60, suffix: "+" },
  { label: "Hours", value: 24, suffix: "" },
  { label: "Prizes", value: 50, prefix: "₹", suffix: "K" },
];

const StatCard = ({ label, value, prefix = "", suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the number
      gsap.to(
        { val: 0 },
        {
          val: value,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
          onUpdate: function () {
            setDisplayValue(Math.floor(this.targets()[0].val));
          },
        }
      );

      // Animate the card entrance
      gsap.fromTo(
        cardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [value]);

  return (
    <div
      ref={cardRef}
      className="relative group h-full border-2 border-white/20 rounded-lg p-[3px] hover:cursor-default"
      style={{fontFamily: "Mechsuit, Inter, sans-serif"}}
    >
      {/* Animated Border Container */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        {/* Moving Gradient Border */}
        <div className="absolute inset-[-500%] bg-[conic-gradient(from_0deg,transparent_0_290deg,#3ABFBC_360deg)] animate-[spin_3s_linear_infinite] opacity-100"></div>
      </div>

      {/* Inner Card Background */}
      <div className="relative h-full bg-black rounded-[9px] p-8 overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#3ABFBC 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        ></div>

        {/* Corner Accents */}
        <div className="pointer-events-none absolute top-0 left-0 w-3 h-3 rounded-tl-[9px] border-t border-l border-white/50"></div>
        <div className="pointer-events-none absolute top-0 right-0 w-3 h-3 rounded-tr-[9px] border-t border-r border-white/50"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-3 h-3 rounded-bl-[9px] border-b border-l border-white/50"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 rounded-br-[9px] border-b border-r border-white/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter group-hover:text-[#3abfbc] transition-colors duration-300">
            <span className="text-[#3abfbc] text-3xl align-top mr-1">
              {prefix}
            </span>
            {displayValue}
            <span className="text-[#ff7046] text-3xl md:text-4xl align-top ml-1">
              {suffix}
            </span>
          </h3>
          <div className="h-1px w-12 bg-zinc-800 my-4 group-hover:w-24 group-hover:bg-[#3abfbc] transition-all duration-300"></div>
          <p className="text-gray-400 text-md uppercase tracking-widest group-hover:text-white transition-colors">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="w-[50vw] md:w-[80vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
