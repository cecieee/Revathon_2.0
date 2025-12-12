import React from "react";

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
      className={`absolute left-0 right-0 hidden md:block pointer-events-none ${
        isTop ? "-top-2" : "-bottom-5"
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

        <div className="absolute bottom-8 left-6 pointer-events-none opacity-50">
          <SlantedBars theme={theme} count={2} />
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
   4. MAIN COMPONENT
---------------------------------------------- */

export default function ProcessWorkflow() {
  return (
    <section className="min-h-screen bg-black p-6 md:p-12 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col gap-10">
        <h2
          className="text-center text-2xl md:text-4xl font-extrabold tracking-wide"
          style={{ color: "#3ABFBC" }}
        >
          WHAT IS <span style={{ color: "#FF7046" }}>REVERSE ENGINEERING ?</span>
        </h2>

        {PROCESS_STEPS.map((step, index) => (
          <ProcessCard
            key={step.id}
            index={index}
            title={step.title}
            description={step.description}
            variant={step.variant}
          />
        ))}

        <div className="w-full mt-6">
          <h3
            className="text-center text-2xl md:text-3xl font-bold tracking-wide mb-4"
            style={{ color: "#FF7046" }}
          >
            WHY REVERSE HACKATHON?
          </h3>

          <p className="max-w-3xl mx-auto text-center text-sm md:text-base leading-relaxed opacity-90 text-white">
            Participants gain hands-on experience in understanding how systems
            work by deconstructing them, enhancing their technical skills, and
            developing analytical thinking. A reverse engineering hackathon is
            perfect for curious minds who love uncovering how things work.
          </p>
        </div>
      </div>

      {/* FIXED SECOND SECTION */}
      <div className="w-full mt-20">
        {/* Title outside the box */}
        <h3
          className="text-center text-3xl md:text-4xl font-extrabold tracking-wide mb-8"
          style={{ color: "#FF7046" }}
        >
          HOW <span style={{ color: "#3ABFBC" }}>REVERSE HACKATHON?</span>
        </h3>

        {/* Main container box */}
        <div className="border-2 border-[#3ABFBC] rounded-xl p-6 md:p-8 max-w-4xl mx-auto bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm">
          {/* Grid of individual content boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                className="border border-gray-700 rounded-lg p-5 bg-gray-900/40 hover:bg-gray-800/40 transition-all duration-300 hover:border-[#3ABFBC]/50"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div 
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-lg"
                    style={{ backgroundColor: "#3ABFBC" }}
                  >
                    {i + 1}
                  </div>
                  <h4
                    className="text-lg md:text-xl font-bold tracking-wide"
                    style={{ color: "#3ABFBC" }}
                  >
                    {title}
                  </h4>
                </div>
                <p className="text-sm md:text-base opacity-80 text-white pl-14">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NORMAL VS REVERSE */}
      <div className="text-center space-y-4 mb-16 mt-16">
        <h2
          className="text-3xl md:text-5xl tracking-wider"
          style={{ color: "#FF7046" }}
        >
          NORMAL HACKATHON
        </h2>
        <h3
          className="text-2xl md:text-4xl text-[#FF7046] tracking-wider"
        >
          VS
        </h3>
        <h2
          className="text-3xl md:text-5xl tracking-wider"
          style={{ color: "#3ABFBC" }}
        >
          REVERSE HACKATHON
        </h2>
      </div>

      {/* Comparison Boxes */}
      {/* Comparison Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 max-w-6xl pr-20 md:pr-32 font-sans text-lg md:text-xl leading-relaxed font-semibold">

        {/* Row 1 */}
        <div
          className="border-2 rounded-xl py-6 px-4 text-center md:w-5/6"
          style={{ borderColor: "#FF7046",color: "#FF7046" }}
        >
          Normal Hackathon
        </div>

        <div
          className="border-2 rounded-xl py-6 px-4 text-center "
          style={{ borderColor: "#3ABFBC",color: "#3ABFBC" }}
        >
          Reverse Hackathon
        </div>

        {/* Row 2 */}
        <div
          className="border-2 rounded-xl py-6 px-4 text-center md:w-5/6"
          style={{ borderColor: "#FF7046",color: "#FF7046" }}
        >
          Creating new solutions from scratch.
        </div>

        <div
          className="border-2 rounded-xl py-6 px-4 text-center"
          style={{ borderColor: "#3ABFBC",color: "#3ABFBC" }}
        >
          Enhancing and optimizing existing systems and products.
        </div>

        {/* Row 3 */}
        <div
          className="border-2 rounded-xl py-6 px-4 text-center md:w-5/6"
          style={{ borderColor: "#FF7046",color: "#FF7046" }}
        >
          Developing new ideas, apps, or features.
        </div>

        <div
          className="border-2 rounded-xl py-6 px-4 text-center"
          style={{ borderColor: "#3ABFBC",color: "#3ABFBC" }}
        >
          Analyzing, reverse-engineering, debugging, and improving quality.
        </div>

        {/* Row 4 */}
        <div
          className="border-2 rounded-xl py-6 px-4 text-center md:w-5/6"
          style={{ borderColor: "#FF7046",color: "#FF7046" }}
        >
          Start from zero to create innovative solutions.
        </div>

        <div
          className="border-2 rounded-xl py-6 px-4 text-center"
          style={{ borderColor: "#3ABFBC",color: "#3ABFBC" }}
        >
          Break down and refine existing systems to identify flaws and optimize them.
        </div>

        {/* Row 5 */}
        <div
          className="border-2 rounded-xl py-6 px-4 text-center md:w-5/6"
          style={{ borderColor: "#FF7046",color: "#FF7046" }}
        >
          A brand-new product or app ready for launch.
        </div>

        <div
          className="border-2 rounded-xl py-6 px-4 text-center"
          style={{ borderColor: "#3ABFBC",color: "#3ABFBC" }}
        >
          A refined, optimized, and more secure version of an existing product.
        </div>
      </div>
    </section>
  );
}
