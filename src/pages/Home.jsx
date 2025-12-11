import React from "react";
import Countdown from "../sections/Home/Countdown";
import About from "../sections/Home/About";
import EventDetails from "../sections/Home/EventDetails";
import Organizers from "../sections/Home/Organizers";
import Sponsors from "../sections/Home/Sponsors";
import Training from "../sections/Home/Training";
import Register from "../sections/Home/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About1 from "../sections/Revathon1/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Countdown />
        <About />
        <EventDetails />
        <Organizers />
        <Sponsors />
        <About1 />
        <Training />
        <Register />
      </main>
      <Footer />
    </>
  );
};

export default Home;
