import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", target: "hero" },
    { name: "About", target: "about" },
    { name: "Events", target: "event-details" },
    { name: "Training", target: "training" },
    { name: "Register", target: "register" },
  ];

  const handleScrollTo = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-bold tracking-widest cursor-pointer text-white hover:text-primary transition-colors duration-300"
          style={{ fontFamily: "Mechsuit" }}
          onClick={() => handleScrollTo("hero")}
        >
          REVATHON <span className="text-primary">2.0</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollTo(link.target)}
              className="relative text-white opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 group text-sm uppercase tracking-wider"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-8 h-6 flex flex-col justify-between">
            <span
              className={`block w-full h-[2px] bg-primary transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
            ></span>
            <span
              className={`block w-full h-[2px] bg-secondary transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block w-full h-[2px] bg-primary transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleScrollTo(link.target)}
            className="text-2xl text-white font-bold hover:text-primary transition-colors duration-300 tracking-widest uppercase"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
