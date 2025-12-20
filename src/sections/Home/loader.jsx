import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET_TEXT = "REV-A-THON2.0";
const INITIAL_TEXT = "rev-A-thon";
const SCRAMBLE_CHARS = "revathon";

const GlitchLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState(INITIAL_TEXT);
  const [isVisible, setIsVisible] = useState(true);

  // 1. Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increment
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // 2. Animation Logic (Driven by progress updates)
  useEffect(() => {
    // Phase 1: Static (0-20%)
    if (progress < 20) {
      setDisplayText(INITIAL_TEXT);
    }
    // Phase 2: Sequential Scramble (20-70%)
    else if (progress >= 20 && progress < 70) {
      const scrambleRatio = (progress - 20) / 50; // 0 to 1 (50 is range 70-20      )
      const scrambleIndex = Math.floor(scrambleRatio * TARGET_TEXT.length);

      let newText = "";
      for (let i = 0; i < TARGET_TEXT.length; i++) {
        if (i <= scrambleIndex) {
          // Characters up to the index are scrambling
          newText +=
            SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        } else {
          // Characters after are static
          if (i < INITIAL_TEXT.length) {
            newText += INITIAL_TEXT[i];
          } else {
            newText += " "; // Padding
          }
        }
      }
      setDisplayText(newText);
    }
    // Phase 3: Sequential Fix (70-95%)
    else if (progress >= 70 && progress < 95) {
      const fixRatio = (progress - 70) / 25; // 0 to 1 (25 is range 95-70)
      const fixIndex = Math.floor(fixRatio * TARGET_TEXT.length);

      let newText = "";
      for (let i = 0; i < TARGET_TEXT.length; i++) {
        if (i <= fixIndex) {
          // Fixed characters
          newText += TARGET_TEXT[i];
        } else {
          // Remaining characters still scrambling
          newText +=
            SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      setDisplayText(newText);
    }
    // Phase 4: Done (95%+)
    else if (progress >= 95) {
      setDisplayText(TARGET_TEXT);

      if (progress === 100) {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => onComplete?.(), 500);
        }, 500);
      }
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="text-xl md:text-6xl font-black tracking-widest drop-shadow-[4px_4px_0_rgba(6,182,212,1)]"
            style={{ fontFamily: "Mechsuit, sans-serif" }}
          >
            {displayText.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Optional Progress Bar for visual feedback */}
          <div className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 font-mono text-sm text-cyan-500/70">
            SYSTEM LOADING... {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlitchLoader;
