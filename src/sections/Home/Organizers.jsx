import React from 'react'

export default function Organizers() {
  const organizers = [
    {
      id: 1,
      name: "IEEE",
      logo: "/organisers-sponsors/ieee-logo.png",
      alt: "IEEE Logo"
    },
    {
      id: 2,
      name: "IEEE Student Branch",
      logo: "/organisers-sponsors/ieee-logo.png",
      alt: "IEEE Student Branch Logo"
    },
    {
      id: 3,
      name: "Robotics and Automation Society",
      logo: "/organisers-sponsors/ieee-logo.png",
      alt: "IEEE RAS Logo"
    }
  ];

  return (
    <>
      {/* CSS for custom animations */}
      <style>
        {`
          @keyframes scan {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100vh);
            }
          }
          .animate-scan {
            animation: scan 3s linear infinite;
          }
          .animate-pulse {
            animation: pulse 2s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }
        `}
      </style>

      <section
        className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-12 sm:py-16 md:py-20 text-center relative overflow-hidden"
        aria-labelledby="organizers-heading"
      >
        {/* Holographic background grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233abfbc' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Holographic scan line animation */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3abfbc] to-transparent animate-scan"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2
            id="organizers-heading"
            className="font-mechsuit text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-[0.05em] xs:tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.25em] uppercase mb-8 sm:mb-12 md:mb-16 
                      bg-gradient-to-r from-[#FF7046] via-[#3abfbc] to-[#FF7046] bg-clip-text text-transparent
                      drop-shadow-[0_0_10px_rgba(58,191,188,0.7)]
                      animate-pulse"
          >
            ORGANIZERS
          </h2>

          <div className="flex flex-row justify-center items-center gap-4 xs:gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 flex-wrap">
            {organizers.map((organizer) => (
              <div
                key={organizer.id}
                className="relative group"
                role="group"
                aria-label={organizer.name}
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#FF7046] via-[#3abfbc] to-[#FF7046] opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>

                {/* Holographic border */}
                <div className="relative rounded-xl bg-gradient-to-r from-[#FF7046] via-[#3abfbc] to-[#FF7046] p-0.5">
                  {/* Inner dark container */}
                  <div className="rounded-xl bg-gray-900/80 backdrop-blur-sm p-2 sm:p-3">
                    <img
                      src={organizer.logo}
                      alt={organizer.alt}
                      width={112}
                      height={112}
                      className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 object-contain rounded-lg max-w-full
                                brightness-125 contrast-125
                                drop-shadow-[0_0_8px_rgba(58,191,188,0.6)]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Animated shimmer effect */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:translate-x-full"
                  style={{ transform: 'translateX(-100%)' }}
                ></div>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF7046]/20 via-[#3abfbc]/20 to-[#FF7046]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}