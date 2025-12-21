import React from "react";

export default function Sponsors() {
  const sponsor = {
    name: "Official Sponsor",
    logo: "/organisers-sponsors/quadratech.png",
    alt: "Quadratech Logo",
  };

  return (
    <>
      {/* Custom pulse animation (same system as Organizers) */}
      <style>
        {`
          @keyframes softPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.9; }
          }
          .animate-soft-pulse {
            animation: softPulse 2.5s ease-in-out infinite;
          }
        `}
      </style>

      <section
        className="relative overflow-hidden py-10 sm:py-12 md:py-14
                   text-center bg-transparent"
        aria-labelledby="sponsors-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">

          {/* Smaller heading */}
          <h2
            id="sponsors-heading"
            className="font-mechsuit text-2xl sm:text-3xl md:text-4xl
                       tracking-[0.08em] sm:tracking-[0.1em] md:tracking-[0.12em]
                       uppercase mb-6 sm:mb-8 md:mb-10
                       text-white
                       drop-shadow-[0_0_4px_rgba(58,191,188,0.35)]
                       animate-soft-pulse"
            style={{ fontFamily: 'Mechsuit, sans-serif' }}
          >
            TECHNICAL PARTNER
          </h2>

          <div className="flex justify-center items-center">
            <div
              role="group"
              aria-label={sponsor.name}
              className="relative"
            >
              {/* Gradient border */}
              <div className="rounded-lg bg-secondary p-0.5">

                {/* Smaller inner container */}
                <div className="rounded-lg bg-black p-3
                                flex items-center justify-center
                                h-14 sm:h-16 md:h-20">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    loading="lazy"
                    className="max-h-8 sm:max-h-10 md:max-h-12
                               max-w-full object-contain
                               brightness-110 contrast-110
                               drop-shadow-[0_0_4px_rgba(58,191,188,0.3)]"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
