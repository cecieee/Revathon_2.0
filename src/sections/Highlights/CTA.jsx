import React from 'react';
import TechButton from '../../components/Button';
import DotGrid from '../../components/DotGrid';
import toast from 'react-hot-toast';

const CTA = () => {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ fontFamily: "Mechsuit, Inter, sans-serif" }}>
      {/* Background Dot Grid Animation */}
      <div className="absolute inset-0 opacity-30">
        <DotGrid
          dotSize={2}
          gap={30}
          baseColor="#cbd5e1"
          activeColor="#ffffff"
          proximity={150}
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <h2 className="text-xl md:text-4xl font-bold mb-6 text-[#3abfbc] tracking-wider">
          Ready for <br />{" "}
          <span className="mb-4 text-2xl font-bold tracking-tighter text-white md:text-6xl">
            REV-A-THON
          </span>{" "}
          <span className="text-[#ff7046] text-2xl md:text-6xl">2.0</span> ?
        </h2>

        <p className="max-w-2xl mx-auto mb-12 font-sans text-xl font-light tracking-wide text-gray-200">
          Join the community of creators, developers, and visionaries. The next
          revolution starts with you.
        </p>

        <TechButton to="/" size="lg" onClick={() => {
          toast.custom((t) => (
            <div
              className={`${t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full pointer-events-auto`}
            >
              <div className="bg-black border border-[#3ABFBC] p-4 relative shadow-[0_0_20px_rgba(58,191,188,0.1)]">
                {/* Corner Accents */}
                <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-[#3ABFBC]"></div>
                <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-[#3ABFBC]"></div>
                <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-[#3ABFBC]"></div>
                <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-[#3ABFBC]"></div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#FF7046]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[#3ABFBC] text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Mechsuit' }}>
                      SYSTEM NOTIFICATION
                    </h3>
                    <p className="font-mono text-sm tracking-wide text-white">
                      Registration Starting Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ));
        }}>
          Register Now
        </TechButton>
      </div>
    </section>
  );
};

export default CTA;
