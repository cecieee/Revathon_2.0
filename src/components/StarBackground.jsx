import React, { useMemo } from 'react';

const StarBackground = () => {
  // Function to generate random box-shadow values
  const generateStars = (count) => {
    let value = '';
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      value += `${x}px ${y}px #FFF`;
      if (i < count - 1) {
        value += ', ';
      }
    }
    return value;
  };

  const smallStars = useMemo(() => generateStars(700), []);
  const mediumStars = useMemo(() => generateStars(200), []);
  const largeStars = useMemo(() => generateStars(100), []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      <div
        className="w-[1px] h-[1px] bg-transparent absolute animate-animStar"
        style={{ boxShadow: smallStars, animationDuration: '50s' }}
      />
      <div
        className="w-[2px] h-[2px] bg-transparent absolute animate-animStar"
        style={{ boxShadow: mediumStars, animationDuration: '100s' }}
      />
      <div
        className="w-[3px] h-[3px] bg-transparent absolute animate-animStar"
        style={{ boxShadow: largeStars, animationDuration: '150s' }}
      />
      <style>{`
        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
        .animate-animStar {
          animation-name: animStar;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
