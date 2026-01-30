
import { useEffect, useState } from "react";

function Banner({ reverse = false }) {
  const logos=[
    {src:"/assets/images/IEEE.png", alt:"IEEE"},
    {src:"/assets/images/IEEE SB CEC.png", alt:"IEEE SB CEC"},
    {src:"/assets/images/RAS.png", alt:"RAS"},
    {src:"/assets/images/quadratech.png", alt:"Quadratech"},
  {src:"/organisers-sponsors/Zentroniq.png", alt:"Zentroniq"},

  ]
  // const logos = [IEEE_LOGO, IEEE_SB_LOGO, RAS_LOGO, Quadratech, Spinners];
  const [banner, setBanner] = useState(false);
  useEffect(() => {
    const toggleBanner = () => {
      setBanner(true);
      setTimeout(() => {
        setBanner(false);
      }, 2500); // Banner on for 2.5 seconds
    };

    toggleBanner(); // Initial call to show the banner

    const interval = setInterval(() => {
      toggleBanner();
    }, 20000); // Toggle every 20 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative overflow-hidden ">
      <div
        className={
          "flex gap-14 items-center   " + (reverse ? "animate-reverse" : "animate-scroll")
        }>
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo.src} alt={`Logo ${index}`} className={ logo.alt=="Spinners" ?"h-32":"h-14"} />
        ))}
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index * 2}
            src={logo.src}
            alt={`Logo ${index}`}
            className={ logo.alt=="Spinners" ?"h-28":"h-14"}
          />
        ))}
      </div>
      <div
        className={
          "absolute flex font-primary items-center justify-center duration-300 delay-100 font-mech overflow-hidden whitespace-nowrap top-0 left-[50%] z-10  h-full bg-slate-900 transition-all " +
          (banner ? "w-full -translate-x-[50%]" : "w-0")
        }>
        <p>REV-A-THON 2.0</p>
      </div>
    </div>
  );
}

export default Banner;
