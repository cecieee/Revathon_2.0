import React from "react";
import Robot3D from "../../components/Robot3D";

const Hero = () => {
    return (
        <>
            {/* <Robot3D /> */}
            <section
                id="hero"
                className="min-h-screen flex items-center justify-center text-black relative overflow-hidden"
            >
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        REVATHON 2.0
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
                        The Ultimate Innovation Challenge
                    </p>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
                    <svg
                        className="w-6 h-6 text-black opacity-70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </section>
        </>
    );
};

export default Hero;

