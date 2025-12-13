import React from 'react'

export default function RegisterNow() {
  return (
    <section id="register" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent py-20">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>


      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tighter" style={{ fontFamily: "Mechsuit" }}>
          REGISTER <span className="text-primary">NOW</span>
        </h2>
        <button
          className="group relative px-12 py-4 bg-transparent border border-white/20 overflow-hidden cursor-pointer hover:bg-white hover:border-white transition-all duration-300"
        >
          <span className="relative text-xl text-white font-mono tracking-widest uppercase group-hover:text-black transition-colors duration-300">
            Click Here
          </span>
          <div className="absolute top-0 right-0 p-1">
            <div className="w-1 h-1 bg-white group-hover:bg-black transition-colors duration-300"></div>
          </div>
          <div className="absolute bottom-0 left-0 p-1">
            <div className="w-1 h-1 bg-white group-hover:bg-black transition-colors duration-300"></div>
          </div>
        </button>
      </div>
    </section>
  )
}
