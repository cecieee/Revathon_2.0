import React from "react";
import About from "../sections/Revathon1/About.jsx";
import Winners from "../sections/Revathon1/Winners.jsx";
import Gallery from "../sections/Revathon1/Gallery.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

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
