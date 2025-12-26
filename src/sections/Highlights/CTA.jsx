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
          window.open("https://forms.gle/z2ow4dzWqWZJ63o86", "_blank");
        }}>
          Register Now
        </TechButton>
      </div>
    </section>
  );
};

export default CTA;
