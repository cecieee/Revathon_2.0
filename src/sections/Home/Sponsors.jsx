import React from 'react'

export default function Sponsors() {

  const sponsor = {
    name: "Official Sponsor",
    logo: "/organisers-sponsors/ieee-logo.png",
    alt: "Sponsor Logo",
  };

  return (
    <section
      className="bg-black py-16 text-center relative overflow-hidden"
      aria-labelledby="sponsors-heading"
    >
      {/* Holographic scan line animation */}
      <div className="absolute top-0 left-0 right-0 h-1 
        bg-gradient-to-r from-transparent via-[#3abfbc] to-transparent 
        animate-scan">
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2
          id="sponsors-heading"
          className="font-mechsuit text-3xl xs:text-4xl sm:text-5xl md:text-6xl 
                     tracking-[0.05em] xs:tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.25em] 
                     uppercase mb-8 sm:mb-12 md:mb-16 
                     bg-gradient-to-r from-[#FF7046] via-[#3abfbc] to-[#FF7046] 
                     bg-clip-text text-transparent
                     drop-shadow-[0_0_10px_rgba(58,191,188,0.7)]
                     animate-pulse"
        >
          SPONSORS
        </h2>

        <div className="flex justify-center items-center">

          <div
            className="relative group"
            role="group"
            aria-label={sponsor.name}
          >
            {/* Outer glow effect */}
            <div className="absolute -inset-2 rounded-xl 
              bg-gradient-to-r from-[#FF7046] via-[#3abfbc] to-[#FF7046] 
              opacity-0 group-hover:opacity-40 blur-lg 
              transition-opacity duration-500">
            </div>

            {/* Holographic border */}
            <div className="relative rounded-xl 
              bg-gradient-to-r from-[#FF7046] via-[#3abfbc] to-[#FF7046] p-0.5">

              {/* Inner dark container */}
              <div className="rounded-xl bg-gray-900/80 backdrop-blur-sm p-2 sm:p-3">
                <img
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  width={128}
                  height={128}
                  className="h-16 xs:h-20 sm:h-24 md:h-28 lg:h-32 object-contain rounded-lg max-w-full
                             brightness-125 contrast-125
                             drop-shadow-[0_0_8px_rgba(58,191,188,0.6)]"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Keyframes for scan */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation-delay: 3s;
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  )
}