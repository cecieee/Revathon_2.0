import React from 'react';

function About() {
  return (
    <section id="about" className="w-full py-16 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img 
            src="/assets/images/About-rev1.png" 
            alt="About Rev-A-Thon" 
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
          />
        </div>
        <div className="w-[80vw] md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 uppercase tracking-wider"><span className='text-xl'>About</span><br></br><span className='text-[#3abfbc]'>Rev</span>-<span>A</span>-<span className='text-[#ff7046]'>Thon</span>1.0</h2>
          <p className="text-base md:text-lg leading-relaxed font-sans text-gray-300">
            India's First Reverse Engineering Hackathon is a unique 24-hour competition that
            goes beyond typical hackathons by focusing on the art of reverse engineering.
            The event is structured around three key stages: Breakdown, Analysis, and
            Reconstruction. Participants are given a product—whether it’s hardware or a system—to
            deconstruct, understand its underlying mechanics, and then reconstruct it,
            enhancing or reimagining it with innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;