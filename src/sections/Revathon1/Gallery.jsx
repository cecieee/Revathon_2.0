import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechFrame from "../../components/TechFrame";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);

  const images = [
    "https://revathon.cecieee.org/Gallery/gallery/1.webp",
    "https://revathon.cecieee.org/Gallery/gallery/2.webp",
    "https://revathon.cecieee.org/Gallery/gallery/3.webp",
    "https://revathon.cecieee.org/Gallery/gallery/4.webp",
    "https://revathon.cecieee.org/Gallery/gallery/5.webp",
    "https://revathon.cecieee.org/Gallery/gallery/6.webp",
    "https://revathon.cecieee.org/Gallery/gallery/7.webp",
    "https://revathon.cecieee.org/Gallery/gallery/8.webp",
    "https://revathon.cecieee.org/Gallery/gallery/9.webp",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-[#ff7046] mb-4">EVENT MEMORIES</h2>
            <div className="w-24 h-1 bg-[#3abfbc] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((src, index) => (
            <div
              key={index}
              className={`gallery-item relative group ${
                index === 0 || index === 5 ? "md:col-span-2" : ""
              } ${index === 2 ? "md:row-span-2 h-full" : ""}`}
            >
              <TechFrame color={index % 2 !== 0 ? "#ff7046" : "#3abfbc"} reversed={index % 2 !== 0} className="h-full w-full p-0">
                <img
                    src={src}
                    alt={`Revathon Event ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </TechFrame>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
