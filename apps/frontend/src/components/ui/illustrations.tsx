import React from "react";

export function BrainAiIllustration({ className = "", width = 200, height = 200 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="100" cy="100" r="95" fill="url(#brain-gradient)" opacity="0.2" />
      <circle cx="100" cy="100" r="75" stroke="rgba(173, 109, 255, 0.6)" strokeWidth="1.5" strokeDasharray="5 3" />
      
      {/* Brain network paths */}
      <path d="M70,80 Q90,60 110,80 T150,80" stroke="rgba(173, 109, 255, 0.8)" strokeWidth="1.5" fill="none" />
      <path d="M60,100 Q80,120 100,100 T140,100" stroke="rgba(116, 193, 255, 0.8)" strokeWidth="1.5" fill="none" />
      <path d="M70,120 Q90,140 110,120 T150,120" stroke="rgba(173, 109, 255, 0.8)" strokeWidth="1.5" fill="none" />
      
      {/* Neural nodes */}
      <circle cx="70" cy="80" r="3" fill="rgba(173, 109, 255, 0.9)" />
      <circle cx="110" cy="80" r="3" fill="rgba(173, 109, 255, 0.9)" />
      <circle cx="150" cy="80" r="3" fill="rgba(173, 109, 255, 0.9)" />
      
      <circle cx="60" cy="100" r="3" fill="rgba(116, 193, 255, 0.9)" />
      <circle cx="100" cy="100" r="3" fill="rgba(116, 193, 255, 0.9)" />
      <circle cx="140" cy="100" r="3" fill="rgba(116, 193, 255, 0.9)" />
      
      <circle cx="70" cy="120" r="3" fill="rgba(173, 109, 255, 0.9)" />
      <circle cx="110" cy="120" r="3" fill="rgba(173, 109, 255, 0.9)" />
      <circle cx="150" cy="120" r="3" fill="rgba(173, 109, 255, 0.9)" />
      
      {/* Connecting lines */}
      <line x1="70" y1="80" x2="60" y2="100" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.75" />
      <line x1="110" y1="80" x2="100" y2="100" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.75" />
      <line x1="150" y1="80" x2="140" y2="100" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.75" />
      
      <line x1="60" y1="100" x2="70" y2="120" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.75" />
      <line x1="100" y1="100" x2="110" y2="120" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.75" />
      <line x1="140" y1="100" x2="150" y2="120" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.75" />
      
      {/* Central brain core */}
      <circle cx="100" cy="100" r="25" fill="rgba(20, 10, 35, 0.6)" />
      <circle cx="100" cy="100" r="25" stroke="rgba(173, 109, 255, 0.7)" strokeWidth="1" />
      <path d="M90,90 Q100,80 110,90 T120,100 Q110,110 100,110 T80,100 Q90,90 100,90" 
            fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="0.75" />
            
      <defs>
        <radialGradient id="brain-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(173, 109, 255, 0.5)" />
          <stop offset="100%" stopColor="rgba(116, 193, 255, 0.1)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function VirtualWorldIllustration({ className = "", width = 200, height = 200 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background grid */}
      <rect width="200" height="200" fill="url(#grid-pattern)" opacity="0.15" />
      
      {/* Horizon line with gradient */}
      <rect x="0" y="100" width="200" height="1" fill="url(#horizon-gradient)" />
      
      {/* Metaverse landscape elements */}
      <path d="M0,100 L50,90 L100,100 L150,95 L200,100 L200,130 L0,130 Z" 
            fill="url(#land-gradient)" opacity="0.5" />
            
      {/* Digital structures/buildings */}
      <path d="M70,90 L75,70 L85,70 L90,90 Z" fill="rgba(116, 193, 255, 0.6)" />
      <path d="M110,95 L115,65 L125,65 L130,95 Z" fill="rgba(173, 109, 255, 0.6)" />
      <path d="M40,95 L45,75 L55,75 L60,95 Z" fill="rgba(116, 193, 255, 0.5)" />
      
      {/* Floating platform */}
      <ellipse cx="100" cy="50" rx="25" ry="8" fill="rgba(173, 109, 255, 0.3)" />
      <rect x="90" y="42" width="20" height="15" rx="2" fill="rgba(116, 193, 255, 0.6)" />
      <line x1="100" y1="58" x2="100" y2="80" stroke="rgba(255, 255, 255, 0.4)" strokeDasharray="2 2" />
      
      {/* Glowing orbs/data points */}
      <circle cx="40" cy="60" r="3" fill="white" opacity="0.8">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="40" r="2" fill="white" opacity="0.8">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="30" r="2.5" fill="white" opacity="0.8">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      
      {/* Connecting lines between data points */}
      <line x1="40" y1="60" x2="100" y2="30" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
      <line x1="100" y1="30" x2="160" y2="40" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
      <line x1="40" y1="60" x2="160" y2="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" strokeDasharray="3 2" />
      
      <defs>
        <linearGradient id="horizon-gradient" x1="0" y1="0" x2="200" y2="0">
          <stop offset="0%" stopColor="rgba(116, 193, 255, 0.8)" />
          <stop offset="50%" stopColor="rgba(173, 109, 255, 0.8)" />
          <stop offset="100%" stopColor="rgba(116, 193, 255, 0.8)" />
        </linearGradient>
        
        <linearGradient id="land-gradient" x1="100" y1="100" x2="100" y2="130">
          <stop offset="0%" stopColor="rgba(173, 109, 255, 0.2)" />
          <stop offset="100%" stopColor="rgba(20, 10, 35, 0.8)" />
        </linearGradient>
        
        <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="none" />
          <path d="M 20 0 L 0 0 0 20" stroke="rgba(173, 109, 255, 0.3)" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
    </svg>
  );
}

export function DataVisualizationIllustration({ className = "", width = 200, height = 200 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circular data visualization */}
      <circle cx="100" cy="100" r="80" stroke="rgba(173, 109, 255, 0.2)" strokeWidth="1" fill="none" />
      <circle cx="100" cy="100" r="60" stroke="rgba(173, 109, 255, 0.25)" strokeWidth="1" fill="none" />
      <circle cx="100" cy="100" r="40" stroke="rgba(173, 109, 255, 0.3)" strokeWidth="1" fill="none" />
      
      {/* Radial lines */}
      <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(173, 109, 255, 0.2)" strokeWidth="0.5" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(173, 109, 255, 0.2)" strokeWidth="0.5" />
      <line x1="37" y1="37" x2="163" y2="163" stroke="rgba(173, 109, 255, 0.2)" strokeWidth="0.5" />
      <line x1="163" y1="37" x2="37" y2="163" stroke="rgba(173, 109, 255, 0.2)" strokeWidth="0.5" />
      
      {/* Data points and connecting lines */}
      <path d="M100,100 L130,60 L160,90 L140,140 L90,150 L50,110 L70,60 Z" 
            stroke="rgba(116, 193, 255, 0.8)" strokeWidth="1.5" fill="rgba(116, 193, 255, 0.1)" />
      
      <circle cx="130" cy="60" r="4" fill="rgba(116, 193, 255, 0.8)" />
      <circle cx="160" cy="90" r="4" fill="rgba(116, 193, 255, 0.8)" />
      <circle cx="140" cy="140" r="4" fill="rgba(116, 193, 255, 0.8)" />
      <circle cx="90" cy="150" r="4" fill="rgba(116, 193, 255, 0.8)" />
      <circle cx="50" cy="110" r="4" fill="rgba(116, 193, 255, 0.8)" />
      <circle cx="70" cy="60" r="4" fill="rgba(116, 193, 255, 0.8)" />
      
      {/* Central data hub */}
      <circle cx="100" cy="100" r="10" fill="rgba(173, 109, 255, 0.6)" />
      <circle cx="100" cy="100" r="5" fill="rgba(255, 255, 255, 0.8)" />
      
      {/* Digital pulses */}
      <circle cx="100" cy="100" r="30" stroke="rgba(173, 109, 255, 0.5)" strokeWidth="1" fill="none">
        <animate attributeName="r" values="20;40;20" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}