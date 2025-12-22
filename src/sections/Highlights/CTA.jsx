import React from 'react';
import TechButton from '../../components/Button';
import DotGrid from '../../components/DotGrid';
import toast from 'react-hot-toast';

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden" style={{fontFamily: "Mechsuit, Inter, sans-serif"}}>
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

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-xl md:text-4xl font-bold mb-6 text-[#3abfbc] tracking-wider">
          Ready for <br />  <span className="text-2xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
            REV-A-THON</span> <span className="text-[#ff7046] text-2xl md:text-6xl">2.0</span> ?
        </h2>

        <p className="text-xl text-gray-200 mb-12 font-sans max-w-2xl mx-auto font-light tracking-wide">
          Join the community of creators, developers, and visionaries. The next revolution starts with you.
        </p>

        <TechButton to="/" size="lg" onClick={() => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
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
                          <span className="text-2xl">🚀</span>
                      </div>
                      
                      <div className="flex-1">
                          <h3 className="text-[#3ABFBC] text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Mechsuit' }}>
                              SYSTEM NOTIFICATION
                          </h3>
                          <p className="text-white text-sm font-mono tracking-wide">
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
