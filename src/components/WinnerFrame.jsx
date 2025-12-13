import React from "react";

const WinnerFrame = ({ children, className = "", color = "#3ABFBC" }) => {
  const getColor = (c) => {
    switch(c) {
        case "primary": return "#3ABFBC";
        case "secondary": return "#FF7046";
        case "white": return "#FFFFFF";
        default: return c;
    }
  };

  const colorHex = getColor(color);

  return (
    <div className={`relative p-4 group ${className}`}>
      {/* Hover Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 group-active:opacity-20 transition-opacity duration-500 blur-xl"
        style={{ backgroundColor: colorHex }}
      ></div>

      {/* Circuit Frame Container */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Top Left Circuit */}
        <div className="absolute top-0 left-0 w-32 h-32">
            {/* Main Corner Lines */}
            <div className="absolute top-0 left-0 w-24 h-[2px]" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute top-0 left-0 w-[2px] h-24" style={{ backgroundColor: colorHex }}></div>
            
            {/* Circuit Nodes */}
            <div className="absolute top-[-3px] left-24 w-2 h-2 border border-zinc-900" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute top-24 left-[-3px] w-2 h-2 border border-zinc-900" style={{ backgroundColor: colorHex }}></div>
            
            {/* Inner Detail */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/30"></div>
            <div className="absolute top-4 left-4 w-1 h-1 bg-white/50"></div>
        </div>

        {/* Top Right Circuit */}
        <div className="absolute top-0 right-0 w-32 h-32">
            <div className="absolute top-0 right-0 w-24 h-[2px]" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute top-0 right-0 w-[2px] h-24" style={{ backgroundColor: colorHex }}></div>
            
            <div className="absolute top-[-3px] right-24 w-2 h-2 border border-zinc-900" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute top-24 right-[-3px] w-2 h-2 border border-zinc-900" style={{ backgroundColor: colorHex }}></div>
            
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/30"></div>
            <div className="absolute top-4 right-4 w-1 h-1 bg-white/50"></div>
        </div>

        {/* Bottom Left Circuit */}
        <div className="absolute bottom-0 left-0 w-32 h-32">
            <div className="absolute bottom-0 left-0 w-24 h-[2px]" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute bottom-0 left-0 w-[2px] h-24" style={{ backgroundColor: colorHex }}></div>
            
            <div className="absolute bottom-[-3px] left-24 w-2 h-2 border border-zinc-900" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute bottom-24 left-[-3px] w-2 h-2 border border-zinc-900" style={{ backgroundColor: colorHex }}></div>
            
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/30"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/50"></div>
        </div>

        {/* Bottom Right Circuit */}
        <div className="absolute bottom-0 right-0 w-32 h-32">
            <div className="absolute bottom-0 right-0 w-24 h-[2px]" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute bottom-0 right-0 w-[2px] h-24" style={{ backgroundColor: colorHex }}></div>
            
            <div className="absolute bottom-[-3px] right-24 w-2 h-2 border border-zinc-900" style={{ backgroundColor: colorHex }}></div>
            <div className="absolute bottom-24 right-[-3px] w-2 h-2 border border-zinc-900" style={{ backgroundColor: colorHex }}></div>
            
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/30"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/50"></div>
        </div>

        {/* Connecting Lines (Thin & Faint) */}
        <div className="absolute top-0 left-28 right-28 h-[1px] bg-white/10"></div>
        <div className="absolute bottom-0 left-28 right-28 h-[1px] bg-white/10"></div>
        <div className="absolute left-0 top-28 bottom-28 w-[1px] bg-white/10"></div>
        <div className="absolute right-0 top-28 bottom-28 w-[1px] bg-white/10"></div>

        {/* Mid-point Tech Accents */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col gap-1">
            <div className="w-1 h-4" style={{ backgroundColor: colorHex }}></div>
            <div className="w-1 h-1 bg-white/50"></div>
            <div className="w-1 h-4" style={{ backgroundColor: colorHex }}></div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col gap-1 items-end">
            <div className="w-1 h-4" style={{ backgroundColor: colorHex }}></div>
            <div className="w-1 h-1 bg-white/50"></div>
            <div className="w-1 h-4" style={{ backgroundColor: colorHex }}></div>
        </div>
        
      </div>

      {/* Inner Content */}
      <div className="relative h-full w-full bg-zinc-900/90 backdrop-blur-sm overflow-hidden border border-white/5">
         {/* Subtle Grid Background */}
         <div className="absolute inset-0 opacity-10" 
              style={{ 
                  backgroundImage: `linear-gradient(to right, ${colorHex} 1px, transparent 1px), linear-gradient(to bottom, ${colorHex} 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
              }}>
         </div>
         
        {children}
      </div>
    </div>
  );
};

export default WinnerFrame;
