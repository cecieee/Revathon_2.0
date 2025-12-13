import React, { Suspense, lazy } from "react";
import Countdown from "../sections/Home/Countdown";
import EventDetails from "../sections/Home/EventDetails";
import Organizers from "../sections/Home/Organizers";
import Sponsors from "../sections/Home/Sponsors";
import Training from "../sections/Home/Training";
import Register from "../sections/Home/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../sections/Home/About";
import HighlightsPreview from "../sections/Home/HighlightsPreview";
// Direct import for Robot3D to avoid lazy loading issues with WebGL
import Robot3D from "../components/Robot3D";

// Lazy load Hero component only
const Hero = lazy(() => import("../sections/Home/Hero"));

const Home = () => {
  return (
    <>
      <Navbar />
      <Robot3D />
      <main>
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <Countdown />
        <About />
        <EventDetails />
        <HighlightsPreview />
        <Organizers />
        <Sponsors />
        <Training />
        <Register />
      </main>
      <Footer />
    </>
  );
};

export default Home;
