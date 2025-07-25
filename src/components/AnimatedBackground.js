import React from 'react';

function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
  );
}

export default AnimatedBackground;