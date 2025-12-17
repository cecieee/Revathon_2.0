import React from "react";

export default function Organizers() {
  const organizers = [
    {
      id: 1,
      name: "IEEE",
      logo: "/organisers-sponsors/IEEE-logo-WHITE.png",
      alt: "IEEE Logo",
    },
    {
      id: 2,
      name: "IEEE Student Branch",
      logo: "/organisers-sponsors/ieee_sb_cec_logo_white.png",
      alt: "IEEE Student Branch Logo",
    },
    {
      id: 3,
      name: "Robotics and Automation Society",
      logo: "/organisers-sponsors/RAS-white.png",
      alt: "IEEE RAS Logo",
    },
  ];

  return (
    <>
      {/* Minimal animations */}
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
                   text-center bg-black"
        aria-labelledby="organizers-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">

          {/* Smaller heading */}
          <h2
            id="organizers-heading"
            className="font-mechsuit text-2xl sm:text-3xl md:text-4xl
                       tracking-[0.08em] sm:tracking-[0.1em] md:tracking-[0.12em]
                       uppercase mb-6 sm:mb-8 md:mb-10
                       text-white
                       drop-shadow-[0_0_4px_rgba(58,191,188,0.35)]
                       animate-soft-pulse"
          >
            ORGANIZERS
          </h2>

          <div className="flex flex-wrap justify-center items-center
                          gap-3 sm:gap-4 md:gap-6">
            {organizers.map((organizer) => (
              <div
                key={organizer.id}
                role="group"
                aria-label={organizer.name}
                className="relative"
              >
                {/* Gradient border */}
                <div className="rounded-lg bg-secondary p-0.5">
                  {/* Smaller inner container */}
                  <div className="rounded-lg bg-black p-3
                                  flex items-center justify-center
                                  h-12 sm:h-14 md:h-16">
                    <img
                      src={organizer.logo}
                      alt={organizer.alt}
                      loading="lazy"
                      className="max-h-6 sm:max-h-8 md:max-h-10
                                 max-w-full object-contain
                                 brightness-110 contrast-110
                                 drop-shadow-[0_0_4px_rgba(58,191,188,0.3)]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
