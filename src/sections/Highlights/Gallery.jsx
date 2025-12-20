import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/assets/images/group.jpeg",
  "/assets/images/robot.jpeg",
  "/assets/images/image2.jpeg",
  "/assets/images/bh1.jpeg",
  "/assets/images/bh2.jpeg",
  "/assets/images/bh3.jpeg",
  "/assets/images/bh4.jpeg",
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
          const scrollWidth = sectionRef.current.scrollWidth;
          const windowWidth = window.innerWidth;
          
          gsap.to(sectionRef.current, {
              x: -(scrollWidth - windowWidth),
              ease: "none",
              scrollTrigger: {
                  trigger: triggerRef.current,
                  start: "top top",
                  end: `+=${scrollWidth}`,
                  scrub: 10,
                  pin: true,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
              }
          });
        },
        "(max-width: 767px)": function() {
           gsap.set(sectionRef.current, { x: 0 });
        }
      });
    }, triggerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="grid grid-cols-2 gap-2 md:gap-0 md:flex md:flex-row w-[90vw] m-auto md:w-fit h-auto md:h-screen md:pt-12">
          <div className="col-span-2 h-[30vh] md:h-full w-full md:w-screen flex items-center justify-center px-4 md:px-20 shrink-0">
             <h2 className="text-2xl md:text-8xl font-bold text-white text-center"><span className='text-[#ff7046]'>Memories</span> <br/> from <span className="text-[#3abfbc]">Revathon 1.0</span></h2>
          </div>
          {images.map((src, index) => (
            <div key={index} className={`${index % 3 === 0 ? 'col-span-2 h-64' : 'col-span-1 h-40'} md:h-full w-full md:w-screen flex items-center justify-center p-2 md:p-10 shrink-0`}>
              <div className="w-full h-full bg-zinc-800 rounded-xl overflow-hidden relative group border border-zinc-700">
                 <img src={src} alt={`Gallery ${index}`} className={`w-full h-full object-cover border-2 md:border-[6px] ${index%2 === 0 ? 'border-[#3abfbc]' : 'border-[#ff7046]'} rounded-xl transition-transform duration-500 group-hover:scale-110`} />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
