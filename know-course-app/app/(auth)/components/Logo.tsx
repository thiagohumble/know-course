// components/Logo.tsx
import React from 'react';

const Logo = ({ size = 40 }) => (
  <div className="flex items-center gap-2 font-bold">
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:rotate-12 transition-transform duration-500"
    >
      {/* Fundo gradiente */}
      <rect width="120" height="120" rx="20" fill="url(#gradient)" />
      
      {/* Símbolo de conhecimento (livro + átomo) */}
      <path
        d="M30 40V80C30 80 45 76 60 80C75 84 90 80 90 80V40C90 40 75 44 60 40C45 36 30 40 30 40Z"
        fill="white"
        fillOpacity="0.9"
      />
      <circle cx="60" cy="60" r="15" stroke="#FE4000" strokeWidth="4" fill="none" />
      <path
        d="M60 45V75M45 60H75"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="60" cy="60" r="5" fill="#9333EA" />
      
      {/* Efeitos */}
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="120"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FE4000" /> {/* Laranja */}
          <stop offset="1" stopColor="#9333EA" /> {/* Roxo */}
        </linearGradient>
      </defs>
    </svg>
    
    {/* Texto do logo - opcional */}
    <span 
      className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600"
      style={{ fontSize: `${size * 0.5}px` }}
    >
      KnowCourse 
    </span>
  </div>
);

export default Logo;