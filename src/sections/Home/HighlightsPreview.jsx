import React, { useLayoutEffect, useRef } from "react";
import TechButton from "../../components/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HighlightsPreview = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const highlightTitleRef = useRef(null);
  const imagesRef = useRef([]);
  const desktopButtonRef = useRef(null);

  const images = [
    "/assets/images/bh1.jpeg",
    "/assets/images/bh2.jpeg",
    "/assets/images/group.jpeg",
    "/assets/images/bh3.jpeg",
    "/assets/images/bh4.jpeg",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          const { isMobile } = context.conditions;

          // Scroll-driven Scatter Animation
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // 1. Para appears
          tl.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          })
            // 3. Para moves up and fades out
            .to(
              textRef.current,
              {
                opacity: 0,
                y: -100,
                duration: 1,
                ease: "power2.in",
              },
              "exit"
            )

            .to(
              highlightTitleRef.current,
              {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: "power2.in",
              },
              "exit"
            )

            // Move heading up to make space
            .to(
              headingRef.current,
              {
                top: isMobile ? "20%" : "10%",
                yPercent: 0,
                scale: 0.8,
                duration: 1,
                ease: "power2.inOut",
              },
              "exit"
            )

            // 4. Images come from corners
            .to(
              imagesRef.current,
              {
                top: isMobile ? "40%" : "60%",
                left: "50%",
                xPercent: -50,
                yPercent: -50,
                x: (index) => {
                  // 5 images layout
                  const row = index < 3 ? 0 : 1;
                  const col = index < 3 ? index : index - 3;

                  // Row 0 (3 items): -105%, 0%, 105%
                  if (row === 0) return (col - 1) * 105 + "%";

                  // Row 1 (2 items): -52.5%, 52.5%
                  if (row === 1) return col === 0 ? "-52.5%" : "52.5%";

                  return 0;
                },
                y: (index) => {
                  const row = index < 3 ? 0 : 1;
                  return row === 0 ? "-52%" : "52%";
                },
                rotation: 0,
                opacity: 1,
                autoAlpha: 1,
                scale: 1,
                duration: 2,
                ease: "linear",
              },
              "exit"
            )

            .fromTo(
              desktopButtonRef.current,
              { opacity: 0, scale: 0.5 },
              { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
              "-=0.5"
            );
        }
      );
    }, containerRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-[250vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <section
          ref={sectionRef}
          className="relative h-full w-full bg-black flex flex-col items-center justify-center z-10 overflow-hidden"
        >
          
          {/* Heading & Text */}
          <div
            ref={headingRef}
            className="absolute z-40 w-full h-auto top-1/2 -translate-y-1/2 pointer-events-none"
          >
            {/* Title Group */}
            <div className="relative w-full flex flex-col items-center">
                <h2 className="text-2xl sm:3xl md:text-7xl text-center font-bold text-white tracking-wide">
                  REV-A-THON <span className="text-primary">1.0</span>
                </h2>
                <p
                  ref={highlightTitleRef}
                  className="text-gray-400 mt-2 text-xl uppercase tracking-widest"
                >
                  Highlights
                </p>
            </div>

            {/* Text Group */}
            <div className="relative mt-6 flex flex-col items-center w-full px-4">
                <div className="relative max-w-2xl">
                    <p
                      ref={textRef}
                      className="text-gray-300 text-center text-lg md:text-2xl font-sans leading-relaxed 
                                 opacity-0 translate-y-4 
                                 bg-transparent p-0 rounded-xl border-none"
                    >
                      Relive the innovation and energy that defined our first chapter.
                      From intense coding sessions to breakthrough moments, witness the
                      journey that started it all.
                    </p>
                </div>
            </div>
          </div>

          {/* Images */}
          {images.map((src, index) => {
            // Determine initial scattered positions (Corners)
            let initialClass = "";
            if (index % 4 === 0)
              initialClass = "top-[-40%] left-[-40%]"; // Top-Left
            else if (index % 4 === 1)
              initialClass = "top-[-40%] right-[-40%]"; // Top-Right
            else if (index % 4 === 2)
              initialClass = "bottom-[-40%] left-[-40%]"; // Bottom-Left
            else if (index % 4 === 3)
              initialClass = "bottom-[-40%] right-[-40%]"; // Bottom-Right

            return (
              <div
                key={index}
                ref={addToRefs}
                className={`absolute z-10 w-28 h-20 sm:w-32 sm:h-24 md:w-44 md:h-32 lg:w-60 lg:h-40 xl:w-80 xl:h-52 rounded-lg overflow-hidden border border-primary/40 shadow-[0_0_15px_rgba(58,191,188,0.2)] opacity-0 pointer-events-none ${initialClass}`}
                style={{
                  transform: "translate(0, 0)",
                  willChange: "transform, opacity",
                }}
              >
                <img
                  src={src}
                  alt={`Highlight ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

          {/* Button */}
          <div
            ref={desktopButtonRef}
            className="absolute z-50 opacity-0 bottom-[40%] md:bottom-[5%] pointer-events-auto"
          >
            <TechButton
              to="/highlights"
              size="lg"
              onClick={() => window.scrollTo(0, 0)}
            >
              View All Memories
            </TechButton>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HighlightsPreview;
