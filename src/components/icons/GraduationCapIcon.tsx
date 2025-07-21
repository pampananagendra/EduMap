import React from 'react';

interface GraduationCapIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const GraduationCapIcon: React.FC<GraduationCapIconProps> = ({ 
  size = 24, 
  className = "", 
  color = "#1e3a8a" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        fill={color}
        stroke="none"
      />
      
      {/* Graduation Cap */}
      <g fill="white">
        {/* Cap Base */}
        <ellipse cx="50" cy="45" rx="25" ry="8" />
        
        {/* Cap Top */}
        <path d="M25 37 L50 30 L75 37 L75 45 L25 45 Z" />
        
        {/* Tassel */}
        <circle cx="65" cy="35" r="2" />
        <line x1="65" y1="37" x2="68" y2="42" stroke="white" strokeWidth="1.5" />
        <circle cx="68" cy="42" r="1.5" />
        
        {/* Student Head */}
        <circle cx="50" cy="55" r="8" />
        
        {/* Student Body */}
        <path d="M42 63 Q42 65 44 67 L56 67 Q58 65 58 63 L58 60 Q58 58 56 58 L44 58 Q42 58 42 60 Z" />
        
        {/* Collar */}
        <path d="M46 58 L50 62 L54 58" stroke="white" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
};

export default GraduationCapIcon;
