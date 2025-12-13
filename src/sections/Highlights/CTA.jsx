import React from 'react';
import { Link } from 'react-router-dom';
import DotGrid from '../../components/DotGrid';

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
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
          REV-A-THON</span> <span className="text-[#ff7046]">2.0</span> ?
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 font-sans max-w-2xl mx-auto font-light tracking-wide">
          Join the community of creators, developers, and visionaries. The next revolution starts with you.
        </p>

        <Link to="/" className="animated-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;
