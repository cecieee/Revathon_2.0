import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to section if state is passed from another route
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // wrapper to ensure page is loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      // Clear state to prevent re-scrolling on refresh/update
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);


  const navLinks = [
    { name: "Home", target: "hero" },
    { name: "About", target: "about" },
    { name: "Events", target: "event-details" },
    { name: "Training", target: "training" },
    { name: "Register", target: "register" },
    { name: "Highlights", path: "/highlights" },
  ];

  const handleNavigation = (link) => {
    if (link.path) {
      navigate(link.path);
      window.scrollTo(0, 0);
      setIsOpen(false);
      return;
    }

    if (link.target) {
      if (location.pathname === '/') {
        const element = document.getElementById(link.target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }
      } else {
        navigate('/', { state: { scrollTo: link.target } });
        setIsOpen(false);
      }
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
          onClick={() => handleNavigation({ target: "hero" })}
        >
          REVATHON <span className="text-primary">2.0</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link)}
              className="relative text-white opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 group text-sm uppercase tracking-wider cursor-pointer"
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
            onClick={() => handleNavigation(link)}
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
