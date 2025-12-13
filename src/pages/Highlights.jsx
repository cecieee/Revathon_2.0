
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Highlights/Hero";
import Stats from "../sections/Highlights/Stats";
import Timeline from "../sections/Highlights/Timeline";
import Gallery from "../sections/Highlights/Gallery";
import Winners from "../sections/Revathon1/Winners";
import About from "../sections/Highlights/About";
import BehindTheScenes from "../sections/Highlights/BehindTheScenes";
import Sponsors from "../sections/Highlights/Sponsors";
import CTA from "../sections/Highlights/CTA";

function Highlights() {
    return(
        <>
            <Navbar />
            <main className="highlights-page">
                <Hero />
                <Stats />
                <About />
                <Timeline />
                <Gallery />
                <Winners />
                <BehindTheScenes />
                <Sponsors />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
export default Highlights;