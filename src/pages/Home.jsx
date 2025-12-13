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
// Lazy load heavy 3D components to reduce initial bundle size
const Robot3D = lazy(() => import("../components/Robot3D"));
const Hero = lazy(() => import("../sections/Home/Hero"));

// Minimal loading fallback - no external dependencies
const LoadingFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white font-mono text-sm tracking-wider">Loading...</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Robot3D />
      </Suspense>
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
