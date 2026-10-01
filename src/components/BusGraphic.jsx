import React, { useState } from 'react';
import busImage from '../assets/tripz_bus_3d.png';

export default function BusGraphic({ className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-full flex items-center justify-center select-none cursor-pointer group py-2 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="TripZ Express Flagship VIP Coach (3/4 Perspective)"
    >
      {/* Dynamic Ambient Glow Backdrop */}
      <div 
        className="absolute w-3/4 h-24 bg-[#19D66B]/20 rounded-full blur-2xl -bottom-1 pointer-events-none transition-all duration-700 group-hover:bg-[#19D66B]/35 group-hover:blur-3xl group-hover:scale-110"
      />

      {/* Modern 3D Luxury Coach Image in Requested 3/4 Perspective Pose */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <img 
          src={busImage} 
          alt="TripZ Express Modern VIP Coach 3/4 Perspective"
          className="w-full max-w-[460px] h-auto object-contain transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1.5 drop-shadow-[0_16px_28px_rgba(0,0,0,0.55)]"
          loading="eager"
        />
      </div>
    </div>
  );
}
