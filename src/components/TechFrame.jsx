import React from "react";

const TechFrame = ({ children, className = "", color = "primary", reversed = false }) => {
  // Use inline styles for colors to ensure they work regardless of Tailwind class generation
  const getColor = (c) => {
    switch(c) {
        case "primary": return "#3ABFBC";
        case "secondary": return "#FF7046";
        case "white": return "#FFFFFF";
        default: return "#3ABFBC";
    }
  };

  const colorHex = getColor(color);
  
  // Clip path for the "cut corner" look
  // Standard: Top-Left & Bottom-Right cut
  // Reversed: Top-Right & Bottom-Left cut
  const clipPathValue = reversed 
    ? "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))"
    : "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)";

  const clipPathStyle = {
    clipPath: clipPathValue,
  };

  return (
    <div className={`relative p-[4px] group ${className}`} style={clipPathStyle}>
      {/* Background/Border Layer */}
      <div 
        className="absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: colorHex }}
      ></div>
      
      {/* Inner Content Layer */}
      <div 
        className="relative bg-zinc-900 h-full w-full overflow-hidden"
        style={{
            clipPath: clipPathValue
        }}
      >
        {children}
      </div>

      {/* Decorative Corner Accents */}
      {reversed ? (
        <>
            {/* Top Right */}
            <div className="absolute top-0 right-0 w-8 h-[4px]" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute top-0 right-0 w-[4px] h-8" style={{ backgroundColor: colorHex }}></div>
            
            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0 w-8 h-[4px]" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute bottom-0 left-0 w-[4px] h-8" style={{ backgroundColor: colorHex }}></div>
        </>
      ) : (
        <>
            {/* Top Left */}
            <div className="absolute top-0 left-0 w-8 h-[4px]" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute top-0 left-0 w-[4px] h-8" style={{ backgroundColor: colorHex }}></div>
            
            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 w-8 h-[4px]" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute bottom-0 right-0 w-[4px] h-8" style={{ backgroundColor: colorHex }}></div>
        </>
      )}
    </div>
  );
};

export default TechFrame;
