import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DotGrid = ({
  dotSize = 4,
  gap = 20,
  baseColor = '#d4d4d4',
  activeColor = '#ffffff',
  proximity = 100,
  shockRadius = 200,
  shockStrength = 10,
  className = '',
  style = {},
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const clickRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    let animationFrameId;
    let width, height;

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      initDots();
    };

    const initDots = () => {
      dotsRef.current = [];
      const cols = Math.ceil(width / gap);
      const rows = Math.ceil(height / gap);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gap + gap / 2;
          const y = j * gap + gap / 2;
          dotsRef.current.push({
            originX: x,
            originY: y,
            x: x,
            y: y,
            color: baseColor,
            size: dotSize,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      dotsRef.current.forEach((dot) => {
        // Mouse interaction
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Click shockwave interaction
        let shockX = 0;
        let shockY = 0;
        if (clickRef.current.active) {
            const cdx = clickRef.current.x - dot.x;
            const cdy = clickRef.current.y - dot.y;
            const cDist = Math.sqrt(cdx * cdx + cdy * cdy);
            
            if (cDist < shockRadius) {
                const force = (1 - cDist / shockRadius) * shockStrength;
                const angle = Math.atan2(cdy, cdx);
                shockX = -Math.cos(angle) * force * 10;
                shockY = -Math.sin(angle) * force * 10;
            }
        }

        // Hover interaction
        let targetX = dot.originX;
        let targetY = dot.originY;
        let targetColor = baseColor;

        if (dist < proximity) {
          const force = (1 - dist / proximity) * 5; // Repulsion strength
          const angle = Math.atan2(dy, dx);
          targetX -= Math.cos(angle) * force * 5;
          targetY -= Math.sin(angle) * force * 5;
          targetColor = activeColor;
        }

        // Apply shockwave
        targetX += shockX;
        targetY += shockY;

        // Smooth transition using simple lerp for performance in loop
        dot.x += (targetX - dot.x) * 0.1;
        dot.y += (targetY - dot.y) * 0.1;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = dist < proximity ? activeColor : baseColor;
        ctx.fill();
      });

      if(clickRef.current.active) {
          clickRef.current.active = false; 
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    const handleClick = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        clickRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true
        };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', resize);
    
    resize();
    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gap, dotSize, baseColor, activeColor, proximity, shockRadius, shockStrength]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={style}
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default DotGrid;
