import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WinnerFrame from "../../components/WinnerFrame";
import ElectricBorder from "../../components/ElectricBorder";

gsap.registerPlugin(ScrollTrigger);

const Winners = () => {
  const sectionRef = useRef(null);

  const winnersData = [
    {
      place: "2nd",
      names: ["Arun A", "Alimtiyas S"],
      img: "https://revathon.cecieee.org/assets/2nd-BwbC_KRx.webp",
      color: "#ff7046",
      textColor: "text-[#ff7046]",
      delay: 0.2,
      height: "h-[32rem] md:h-[28rem]",
      mbClass: "md:mb-2",
      paddingTop: "3rem",
      margin: "",
    },
    {
      place: "1st",
      names: ["Abhiram Chandrasenan", "Amil Mether", "Sabin K Santhosh", "Chris James Antony"],
      img: "https://revathon.cecieee.org/assets/1st-D-HZEbzd.webp",
      color: "#3abfbc",
      textColor: "text-[#3abfbc]",
      delay: 0,
      height: "h-[32rem] md:h-[32rem]",
      mbClass: "md:mb-24",
      crown: true,
      paddingTop: "6rem",
      margin: "",
    },
    {
      place: "3rd",
      names: ["Afnan Yusaf", "Salman Faris Illikkathod", "Sumama Shuhaib"],
      img: "https://revathon.cecieee.org/assets/3rd-7MWk5soY.webp",
      color: "white", // We'll handle white in TechFrame or default
      textColor: "text-white",
      delay: 0.4,
      height: "h-[32rem] md:h-[26rem]",
      mbClass: "md:mb-16",
      paddingTop: "60px",
      margin: "",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards entrance animation
      gsap.from(".winner-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Mask reveal animation
      gsap.to(".winner-mask", {
        yPercent: -100,
        duration: 1.5,
        ease: "power4.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="winners" className="py-20 bg-black text-white relative hover:cursor-default">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl flex flex-col md:flex-row gap-3 justify-center items-center md:text-5xl font-bold text-center mb-16 text-[#ff7046]">
          <span className="text-[#3abfbc]">WINNERS</span><span className="text-white"> OF</span> REVATHON 1.0
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-10 md:gap-8 w-[80vw] mx-auto">
          {winnersData.map((winner, index) => (
            <div
              key={index}
              className={`winner-card group relative w-full md:w-1/3 flex flex-col ${winner.height} ${winner.mbClass} ${index === 1 ? 'order-first md:order-0 z-10' : ''} hover:-translate-y-2 active:-translate-y-2 transition-transform duration-300`}
            >
              <ElectricBorder 
                color={winner.color === '#3abfbc' ? '#3ABFBC' : winner.color === '#ff7046' ? '#FF7046' : '#FFFFFF'} 
                className="h-full w-full"
                layerClassName="opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"
              >
              <WinnerFrame color={winner.color} reversed={index % 2 !== 0} className="h-full flex flex-col">
                <div className="relative w-full h-full flex flex-col overflow-hidden">
                {/* Reveal Mask */}
                <div className="winner-mask absolute inset-0 z-30 bg-zinc-900 flex items-center justify-center border-b border-white/10 origin-top overflow-hidden">
                    <div className="text-center">
                        <h3 className={`text-6xl md:text-7xl font-black ${winner.textColor} mb-2`}>{winner.place}</h3>
                        <p className="text-gray-500 font-sans text-xl tracking-widest">PLACE</p>
                    </div>
                </div>

                <div className="flex-1 min-h-0 overflow-hidden relative group">
                    <img
                    src={winner.img}
                    alt={`${winner.place} Place Winners`}
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110 group-active:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60  z-10"></div>
                    <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl font-black ${winner.textColor} z-20`}>
                        {winner.place}
                    </div>
                </div>
                
                <div className="p-4 pb-6 shrink-0 flex flex-col justify-center items-center z-20">
                    <div className="flex flex-col items-center gap-4 justify-center w-full">
                        {winner.names.map((name, idx) => (
                            <span key={idx} className="text-xs md:text-sm text-center font-medium text-gray-300 px-2 py-0.5 rounded-md leading-tight">
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
                </div>
              </WinnerFrame>
              </ElectricBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Winners;
