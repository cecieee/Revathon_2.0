import React from 'react'

export default function Countdown() {
  return (
    <section id="countdown" className="flex items-center justify-center relative overflow-hidden bg-transparent py-20 min-h-[50vh]">
      {/* Circuit Border Top Left */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 text-white pointer-events-none opacity-80">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M0 2 H30 L45 17 V45" stroke="currentColor" strokeWidth="1" />
          <path d="M0 12 H15 L25 22 V60" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      {/* Circuit Border Bottom Right */}
      <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 text-white pointer-events-none rotate-180 opacity-80">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M0 2 H30 L45 17 V45" stroke="currentColor" strokeWidth="1" />
          <path d="M0 12 H15 L25 22 V60" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter" style={{ fontFamily: "Mechsuit" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            COUNTDOWN
          </span>
        </h2>
        {/* Placeholder for actual countdown logic if added later */}
        <div className="text-2xl text-white font-mono tracking-widest">
          COMING SOON
        </div>
      </div>
    </section>
  )
}
