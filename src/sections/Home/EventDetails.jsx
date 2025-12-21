import React from "react";
import TechButton from "../../components/Button";

/* ----------------------------------------------
   1. CONFIGURATION & DATA  (UPDATED THEME COLORS)
---------------------------------------------- */

const THEMES = {
    neutral: {
        panel: "#111111",
        accent: "#3a3a3a",
        text: "#ffffff",
        subtext: "#d4d4d4",
        border: "rgba(255,255,255,0.1)",
        stroke: "rgba(255,255,255,0.25)",
    },
    blue: {
        panel: "#0d1d1d",
        accent: "#3ABFBC",
        text: "#3ABFBC",
        subtext: "#3ABFBC",
        border: "rgba(58,191,188,0.25)",
        stroke: "rgba(58,191,188,0.5)",
    },
    dark: {
        panel: "#1a0f0b",
        accent: "#FF7046",
        text: "#FF7046",
        subtext: "#FF7046",
        border: "rgba(255,112,70,0.25)",
        stroke: "rgba(255,112,70,0.5)",
    },
};

const PROCESS_STEPS = [
    {
        id: 1,
        title: "BREAK",
        variant: "neutral",
        description:
            "Deconstruct the problem or system into smaller, manageable components to understand its structure and identify key areas requiring attention.",
    },
    {
        id: 2,
        title: "ANALYSE",
        variant: "blue",
        description:
            "Examine each component critically to uncover inefficiencies, weaknesses or areas of improvement through data and pattern study.",
    },
    {
        id: 3,
        title: "INNOVATE",
        variant: "dark",
        description:
            "Create meaningful, creative and efficient solutions by leveraging insights gathered from the analysis phase.",
    },
];

/* ----------------------------------------------
   2. SUB COMPONENTS
---------------------------------------------- */

const SlantedBars = ({ theme, count = 5 }) => (
    <div className="flex gap-1.5 opacity-80" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
            <div
                key={i}
                className="w-2 h-5 rounded-sm transform -skew-x-[18deg]"
                style={{ backgroundColor: theme.accent }}
            />
        ))}
    </div>
);

const DecorativeStroke = ({ theme, position = "top" }) => {
    const isTop = position === "top";
    return (
        <div
            className={`absolute left-0 right-0 hidden md:block pointer-events-none ${isTop ? "-top-2" : "-bottom-5"
                }`}
            aria-hidden="true"
        >
            <div
                className="absolute h-[2px] w-3/4"
                style={{
                    backgroundColor: theme.stroke,
                    left: isTop ? "15%" : "10%",
                    opacity: 0.5,
                }}
            />
            <div
                className="absolute h-3 w-10 border-b-2 transform -skew-x-[18deg]"
                style={{
                    borderColor: theme.stroke,
                    left: isTop ? "65%" : "25%",
                    top: "-12px",
                }}
            />
        </div>
    );
};

/* ----------------------------------------------
   3. CARD COMPONENT
---------------------------------------------- */

const ProcessCard = ({ title, description, variant = "neutral", index }) => {
    const theme = THEMES[variant];

    return (
        <div className="relative group w-full">
            <div
                className="relative w-full p-8 md:p-10 overflow-hidden transition-transform duration-300 group-hover:-translate-x-1"
                style={{
                    backgroundColor: theme.panel,
                    clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
                }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${theme.border}` }}
                />

                <div className="absolute top-6 right-6 pointer-events-none">
                    <SlantedBars theme={theme} count={4} />
                </div>



                <DecorativeStroke theme={theme} position="top" />
                <DecorativeStroke theme={theme} position="bottom" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 md:w-48">
                        <div className="flex items-center gap-3 mb-2">
                            <div
                                className="w-2 h-2 rounded-full animate-pulse"
                                style={{ backgroundColor: theme.subtext }}
                            />
                            <div
                                className="px-2 py-1 border rounded border-opacity-30"
                                style={{ borderColor: theme.text }}
                            >
                                <h3
                                    className="font-mono font-bold tracking-[0.2em] text-sm uppercase"
                                    style={{ color: theme.text }}
                                >
                                    {title}
                                </h3>
                            </div>
                        </div>

                        <span
                            className="text-xs font-mono opacity-50 block pl-5"
                            style={{ color: theme.text }}
                        >
                            PHASE_0{index + 1}
                        </span>
                    </div>

                    <div className="flex-grow">
                        <p
                            className="text-sm md:text-base leading-relaxed font-light opacity-90"
                            style={{ color: theme.text }}
                        >
                            {description}
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-4 right-4 flex gap-1 opacity-40">
                    {[1, 2, 3].map((dot) => (
                        <div
                            key={dot}
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: theme.text }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

/* ----------------------------------------------
   4. INFO COMPONENT (NEW)
---------------------------------------------- */

const EventInfo = () => {
    return (
        <div className="w-full max-w-6xl mx-auto mb-20">
            {/* Date Section */}
            <div className="relative border border-[#3abfbc]/30 rounded-2xl p-8 md:p-12 mb-8 overflow-hidden group">
                <div className="absolute inset-0 bg-[#0d1d1d]/80 backdrop-blur-sm -z-10" />
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#3abfbc" strokeWidth="1">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex items-baseline gap-2 md:gap-4 mb-2">
                        <span className="text-6xl md:text-8xl font-black text-[#3abfbc] tracking-tighter" style={{ fontFamily: 'Mechsuit' }}>1</span>
                    </div>
                    <h3 className="text-2xl md:text-4xl text-white font-bold tracking-[0.5em] mt-2">JANUARY 2026</h3>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Venue Section */}
                <div className="relative border border-white/10 rounded-2xl p-8 overflow-hidden group hover:border-[#3abfbc]/50 transition-colors duration-300">
                    <div className="absolute inset-0 bg-[#111111]/80 backdrop-blur-sm -z-10" />

                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold tracking-widest text-white uppercase mb-2">VENUE</h2>
                        <div className="w-24 h-1 bg-[#3abfbc] mx-auto rounded-full" />
                    </div>

                    <div className="space-y-6">
                        <p className="text-xs text-orange-400 text-center font-mono uppercase tracking-widest">IEEE Student Branch CEC</p>

                        <div className="space-y-4 mt-8">
                            <div className="flex items-start gap-4 text-gray-300">
                                <svg className="w-6 h-6 shrink-0 text-[#3abfbc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-sm font-mono">College of Engineering Chengannur, Chengannur, Kerala 689121</span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <svg className="w-6 h-6 shrink-0 text-[#3abfbc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm font-mono">9:00 AM - 6:00 PM</span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <svg className="w-6 h-6 shrink-0 text-[#3abfbc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="text-sm font-mono">Offline - On Campus</span>
                            </div>
                        </div>

                        <TechButton
                            href="https://maps.app.goo.gl/fshjptiLKD5ZciTj8"
                            className="mt-8 w-full"
                        >
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7" />
                                </svg>
                                View on Maps
                            </span>
                        </TechButton>
                    </div>
                </div>

                {/* Prizepool Section */}
                <div className="relative border border-white/10 rounded-2xl p-8 overflow-hidden group hover:border-[#ff7046]/50 transition-colors duration-300">
                    <div className="absolute inset-0 bg-[#1a0f0b]/80 backdrop-blur-sm -z-10" />

                    <div className="text-center">
                        <h2 className="text-4xl font-bold tracking-widest text-white uppercase mb-2">PRIZEPOOL</h2>
                        <div className="w-24 h-1 bg-[#ff7046] mx-auto rounded-full" />
                    </div>

                    <div className="flex flex-col items-center justify-center h-full min-h-[200px] space-y-4">

                        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                            <span className="text-[#ff7046]">₹</span> 50,000+
                        </h3>
                        <p className="text-gray-400 font-mono text-sm tracking-wider uppercase">Worth of Prizes</p>
                        <div>
                            <p className="text-xl font-mono">- Swags</p>
                            <p className="text-xl font-mono">- Certificates</p>
                            <p className="text-xl font-mono">- Cash Prizes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ----------------------------------------------
   5. MAIN COMPONENT
---------------------------------------------- */

export default function ProcessWorkflow() {
    return (
        <section id="event-details" className="min-h-screen bg-black p-6 md:p-12 flex flex-col items-center">

            {/* NEW EVENT INFO SECTION */}
            <EventInfo />

            <div className="w-full max-w-4xl flex flex-col gap-20">
                <h2
                    className="text-center text-2xl md:text-4xl font-extrabold tracking-wide"
                    style={{ color: "white" }}
                >
                    WHAT IS <span style={{ color: "#FF7046" }}>REVERSE ENGINEERING ?</span>
                </h2>

                <div className="flex flex-col gap-10 font-mono">
                    {PROCESS_STEPS.map((step, index) => (
                        <ProcessCard
                            key={step.id}
                            index={index}
                            title={step.title}
                            description={step.description}
                            variant={step.variant}
                        />
                    ))}
                </div>
                <div className="w-full mt-6">
                    <h3
                        className="text-center text-secondary text-2xl md:text-3xl font-bold tracking-wide mb-4"
                    >
                        WHY REVERSE HACKATHON?
                    </h3>

                    <p className="max-w-4xl mx-auto text-center text-lg md:text-xl leading-8 md:leading-9 opacity-90 text-white" style={{
                        fontFamily:
                            "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
                    }}>
                        Participants gain hands-on experience in understanding how systems
                        work by deconstructing them, enhancing their technical skills, and
                        developing analytical thinking. A reverse engineering hackathon is
                        perfect for curious minds who love uncovering how things work.
                    </p>
                </div>
            </div>

            {/* FIXED SECOND SECTION – Reduced Size */}
            <div className="w-full mt-12">
                {/* Title outside the box */}
                <h3
                    className="text-center text-secondary text-xl md:text-2xl font-extrabold tracking-wide mb-6"
                >
                    HOW REVERSE HACKATHON?
                </h3>

                {/* Main container box */}
                <div className="border-2 border-[#3ABFBC] rounded-lg p-4 md:p-5
                        max-w-3xl mx-auto
                        bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm">

                    {/* Grid of individual content boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 font-mono tracking-wider">
                        {[
                            ["OBSERVE & ANALYZE", "Study the product closely"],
                            ["DECOMPOSE", "Disassemble to identify components"],
                            ["MAP FUNCTIONALITY", "Understand how parts interact"],
                            ["DOCUMENT", "Create diagrams or models"],
                            ["TEST & VALIDATE", "Simulate and verify your findings"],
                            ["REBUILD OR INNOVATE", "Recreate with improvements"],
                        ].map(([title, text], i) => (
                            <div
                                key={i}
                                className="border border-gray-700 rounded-md p-4
                          bg-gray-900/40 hover:bg-gray-800/40
                          transition-all duration-300
                          hover:border-[#3ABFBC]/50"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div
                                        className="flex items-center justify-center
                              w-8 h-8 rounded-full
                              text-white font-bold text-sm"
                                        style={{ backgroundColor: "#3ABFBC" }}
                                    >
                                        {i + 1}
                                    </div>

                                    <h4
                                        className="text-sm md:text-base font-bold tracking-wide"
                                        style={{ color: "#3ABFBC" }}
                                    >
                                        {title}
                                    </h4>
                                </div>

                                <p className="text-xs md:text-sm opacity-80 text-white pl-11">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* NORMAL VS REVERSE */}
            {/* Title Section */}
            <div className="text-center space-y-2 mb-12 mt-16">
                <h2
                    className="text-xl md:text-3xl tracking-wide"
                    style={{ color: "#FF7046" }}
                >
                    NORMAL HACKATHON
                </h2>

                <h3
                    className="text-lg md:text-2xl tracking-wide"
                    style={{ color: "#FF7046" }}
                >
                    VS
                </h3>

                <h2
                    className="text-xl md:text-3xl tracking-wide"
                    style={{ color: "#3ABFBC" }}
                >
                    REVERSE HACKATHON
                </h2>
            </div>

            {/* Comparison Section - 2 Column Table */}
            <div className="w-full max-w-5xl mx-auto px-2 md:px-8">
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {/* Header Row */}
                    <div
                        className="border-2 rounded-t-lg md:rounded-t-xl py-3 md:py-6 px-2 md:px-6 text-center font-bold text-xs md:text-lg"
                        style={{ borderColor: "#FF7046", color: "#FF7046", backgroundColor: "rgba(255,112,70,0.1)" }}
                    >
                        Normal Hackathon
                    </div>
                    <div
                        className="border-2 rounded-t-lg md:rounded-t-xl py-3 md:py-6 px-2 md:px-6 text-center font-bold text-xs md:text-lg"
                        style={{ borderColor: "#3ABFBC", color: "#3ABFBC", backgroundColor: "rgba(58,191,188,0.1)" }}
                    >
                        Reverse Hackathon
                    </div>

                    {/* Comparison Rows */}
                    {[
                        {
                            normal: "Creating new solutions from scratch.",
                            reverse: "Enhancing and optimizing existing systems and products.",
                        },
                        {
                            normal: "Developing new ideas, apps, or features.",
                            reverse: "Analyzing, reverse-engineering, debugging, and improving quality.",
                        },
                        {
                            normal: "Start from zero to create innovative solutions.",
                            reverse: "Break down and refine existing systems to identify flaws and optimize them.",
                        },
                        {
                            normal: "A brand-new product or app ready for launch.",
                            reverse: "A refined, optimized, and more secure version of an existing product.",
                        },
                    ].map((item, i, arr) => (
                        <React.Fragment key={i}>
                            <div
                                className={`border-2 font-mono tracking-wider border-t-0 py-3 md:py-5 px-2 md:px-5 text-center text-xs md:text-base ${i === arr.length - 1 ? 'rounded-b-lg md:rounded-b-xl' : ''}`}
                                style={{ borderColor: "#FF7046", color: "#FF7046" }}
                            >
                                {item.normal}
                            </div>
                            <div
                                className={`border-2 font-mono tracking-wider border-t-0 py-3 md:py-5 px-2 md:px-5 text-center text-xs md:text-base ${i === arr.length - 1 ? 'rounded-b-lg md:rounded-b-xl' : ''}`}
                                style={{ borderColor: "#3ABFBC", color: "#3ABFBC" }}
                            >
                                {item.reverse}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>


        </section>
    );
}
