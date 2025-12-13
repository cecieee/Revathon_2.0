import React from 'react';

const Sponsors = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        
        {/* Organizers Section */}
        <div className="mb-24">
            <h2 className="md:text-4xl text-2xl font-bold mb-12 text-white">Organized <span className="text-[#ff7046]">By</span></h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                <div className="w-32 md:w-48 h-32 flex items-center justify-center p-4 rounded-xl border border-white/1 hover:border-[#3abfbc] transition-all duration-300 group">
                    <img src="/assets/images/IEEE.png" alt="IEEE" className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="w-32 md:w-48 h-32 flex items-center justify-center  p-4 rounded-xl border border-white/1 hover:border-[#3abfbc] transition-all duration-300 group">
                    <img src="/assets/images/IEEE SB CEC.png" alt="IEEE SB CEC" className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="w-32 md:w-48 h-32 flex items-center justify-center p-4 rounded-xl border border-white/1 hover:border-[#3abfbc] transition-all duration-300 group">
                    <img src="/assets/images/RAS.png" alt="RAS" className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </div>

        {/* Sponsors Section */}
        <div>
            <h2 className="md:text-4xl text-2xl font-bold mb-12 text-white">Our <span className="text-[#ff7046]">Sponsors</span></h2>
            <div className="flex flex-wrap justify-center gap-12 items-center">
                <div className="w-48 md:w-64 h-32 flex items-center justify-center p-6 rounded-xl border border-white/1 hover:border-[#3abfbc] transition-all duration-300 group">
                    <img src="/assets/images/quadratech.png" alt="Quadratech" className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;
