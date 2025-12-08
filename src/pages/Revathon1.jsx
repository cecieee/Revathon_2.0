import React from "react";
import About from "../sections/Revathon1/About";
import Winners from "../sections/Revathon1/Winners";
import Gallery from "../sections/Revathon1/Gallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Revathon1 = () => {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Winners />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default Revathon1;
