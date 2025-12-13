import React from "react";

const EventDetails = () => {
  return (
    <section id="event-details" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent py-20">
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

      {/* Background Blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>


      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tighter" style={{ fontFamily: "Mechsuit" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
            EVENT DETAILS
          </span>
        </h2>
        <div className="space-y-6 text-xl md:text-2xl text-gray-300 font-mono">
          <p className="border border-white/10 p-6 rounded-xl backdrop-blur-sm bg-black/30 hover:border-primary/50 transition-colors duration-300">
            <span className="text-primary block text-sm mb-2 tracking-widest uppercase">Date</span>
            To be announced
          </p>
          <p className="border border-white/10 p-6 rounded-xl backdrop-blur-sm bg-black/30 hover:border-secondary/50 transition-colors duration-300">
            <span className="text-secondary block text-sm mb-2 tracking-widest uppercase">Venue</span>
            To be announced
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
