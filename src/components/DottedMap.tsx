import React from 'react';

const DottedMap = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full"
    >
      <defs>
        <pattern
          id="dotted-pattern"
          width="2"
          height="2"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.5" fill="currentColor" />
        </pattern>
        <mask id="map-mask">
          <image
            href="https://raw.githubusercontent.com/djaiss/mapsicon/master/africa/africa.svg"
            width="100"
            height="100"
            className="text-white"
          />
        </mask>
      </defs>
      <rect
        width="100"
        height="100"
        fill="url(#dotted-pattern)"
        mask="url(#map-mask)"
      />

      {/* Animated Nodes */}
      <circle cx="50" cy="50" r="1" fill="white" className="animate-pulse" />
      <circle cx="40" cy="40" r="1" fill="white" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <circle cx="60" cy="60" r="1" fill="white" className="animate-pulse" style={{ animationDelay: '1s' }} />
      <circle cx="30" cy="60" r="1" fill="white" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
      <circle cx="70" cy="40" r="1" fill="white" className="animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Connecting Lines */}
      <line x1="50" y1="50" x2="40" y2="40" stroke="white" strokeWidth="0.2" className="animate-pulse" />
      <line x1="40" y1="40" x2="60" y2="60" stroke="white" strokeWidth="0.2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <line x1="60" y1="60" x2="30" y2="60" stroke="white" strokeWidth="0.2" className="animate-pulse" style={{ animationDelay: '1s' }} />
      <line x1="30" y1="60" x2="70" y2="40" stroke="white" strokeWidth="0.2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
      <line x1="70" y1="40" x2="50" y2="50" stroke="white" strokeWidth="0.2" className="animate-pulse" style={{ animationDelay: '2s' }} />
    </svg>
  );
};

export default DottedMap;
