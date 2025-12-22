import React from "react";

export default function Sponsors() {
  const sponsors = [
    {
      name: "Official Sponsor",
      logo: "/organisers-sponsors/quadratech.png",
      alt: "Quadratech Logo",
    },
    {
      name: "Zentroniq",
      logo: "/organisers-sponsors/Zentroniq.png",
      alt: "Zentroniq Logo",
    },
  ];

  return (
    <>
      {/* Custom pulse animation */}
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

          {/* Heading */}
          <h2
            id="sponsors-heading"
            className="
              font-mechsuit uppercase text-white text-center
              text-2xl sm:text-3xl md:text-4xl
              tracking-[0.08em] sm:tracking-[0.1em] md:tracking-[0.12em]
              leading-[1.45] sm:leading-[1.3] md:leading-[1.15]
              drop-shadow-[0_0_4px_rgba(58,191,188,0.35)]
              animate-soft-pulse
            "
            style={{ fontFamily: "Mechsuit, sans-serif" }}
          >
            {/* Mobile: 3 lines | Desktop: 2 lines */}
            <span className="block sm:inline">ROBOTICS</span>{" "}
            <span className="block sm:inline">AND HARDWARE</span>
            <br className="hidden sm:block" />
            <span className="block">PARTNER</span>
          </h2>

          {/* Sponsors */}
          <div className="flex justify-center items-center gap-6 flex-wrap mt-8 sm:mt-10">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                role="group"
                aria-label={sponsor.name}
                className="relative"
              >
                <div className="rounded-lg bg-secondary p-0.5">
                  <div
                    className="rounded-lg bg-black p-3
                               flex items-center justify-center
                               h-14 sm:h-16 md:h-20"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.alt}
                      loading="lazy"
                      className="max-h-8 sm:max-h-10 md:max-h-18
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
