import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Disable browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Force instant jump, ignoring smooth scroll settings
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    };

    // Immediate
    scrollToTop();

    // Next tick
    const timeout = setTimeout(scrollToTop, 0);
    
    // Next frame
    const raf = requestAnimationFrame(scrollToTop);

    return () => {
        clearTimeout(timeout);
        cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
