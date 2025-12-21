import React, { Suspense, lazy, useState } from "react";
import GlitchLoader from "../sections/Home/loader";
import Countdown from "../sections/Home/Countdown";
import EventDetails from "../sections/Home/EventDetails";
import Organizers from "../sections/Home/Organizers";
import Sponsors from "../sections/Home/Sponsors";
// import Training from "../sections/Home/Training";
import Register from "../sections/Home/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../sections/Home/About";
import HighlightsPreview from "../sections/Home/HighlightsPreview";
// Direct import for Robot3D to avoid lazy loading issues with WebGL
import Robot3D from "../components/Robot3D";
import StarBackground from "../components/StarBackground";

// Lazy load Hero component only
const Hero = lazy(() => import("../sections/Home/Hero"));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <StarBackground />
      {isLoading && <GlitchLoader onComplete={() => setIsLoading(false)} />}
      {!isLoading && <Navbar />}
      <Robot3D />
      <main className="relative z-10">
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <Countdown />
        <About />
        <EventDetails />
        <HighlightsPreview />
        <Organizers />
        <Sponsors />
        {/* <Training /> */}
        <Register />
      </main>
      <Footer />
    </>
  );
};

export default Home;
