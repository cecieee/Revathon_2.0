import React, { useState } from "react";
import GlitchLoader from "../sections/Home/loader";
import Countdown from "../sections/Home/Countdown";
import About from "../sections/Home/About";
import EventDetails from "../sections/Home/EventDetails";
import Organizers from "../sections/Home/Organizers";
import Sponsors from "../sections/Home/Sponsors";
import Training from "../sections/Home/Training";
import Register from "../sections/Home/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <GlitchLoader onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <main>
        <Countdown />
        <About />
        <EventDetails />
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
