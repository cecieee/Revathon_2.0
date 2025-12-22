import React from "react";

import TechButton from "../../components/Button";
import toast from 'react-hot-toast';

export default function RegisterNow() {
  const handleRegisterClick = () => {
    toast.info("Registration will open soon! Stay tuned!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return (
    <section
      id="register"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-transparent py-14 sm:py-20">
      {/* Circuit Border Top Left */}
      <div className="absolute top-0 left-0 w-24 h-24 text-white pointer-events-none sm:w-32 sm:h-32 md:w-64 md:h-64 opacity-80">
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
          <rect
            x="2"
            y="2"
            width="4"
            height="4"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Circuit Border Bottom Right */}
      <div className="absolute bottom-0 right-0 w-24 h-24 text-white rotate-180 pointer-events-none sm:w-32 sm:h-32 md:w-64 md:h-64 opacity-80">
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
          <rect
            x="2"
            y="2"
            width="4"
            height="4"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[80px] sm:blur-[100px] -z-10 animate-pulse"></div>

      <div className="container relative z-10 px-4 mx-auto text-center sm:px-6">
        <h2
          className="mb-8 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl sm:mb-12"
          style={{ fontFamily: "Mechsuit" }}>
          REGISTER <span className="text-primary">NOW</span>
        </h2>
        <TechButton size="lg" onClick={() => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full pointer-events-auto`}
            >
              <div className="bg-black border border-[#3ABFBC] p-4 relative shadow-[0_0_20px_rgba(58,191,188,0.1)]">
                  {/* Corner Accents */}
                  <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-white"></div>
                  <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-white"></div>
                  <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-white"></div>
                  <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-white"></div>
                  
                  <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                          <span className="text-2xl">🚀</span>
                      </div>
                      
                      <div className="flex-1">
                          <h3 className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Mechsuit' }}>
                              SYSTEM NOTIFICATION
                          </h3>
                          <p className="text-sm tracking-wide text-white font-inter">
                              Registration Starting Soon
                          </p>
                      </div>
                  </div>
              </div>
            </div>
          ));
        }}>Click Here</TechButton>
      </div>
    </section>
  );
}
