import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center text-xl font-bold relative"> {/* Make the logo container relative */}
      {/* Rotated square positioned over the first two letters */}
      <div className="w-8 h-8 border-[3px] border-main-primary transform rotate-45 absolute rounded" style={{ left: '1.3rem', top: '45%', transform: 'translateY(-50%) rotate(45deg)' }}></div>
    
      <span className="relative z-10 pl-8">Yugoiate.com</span> 
    </div>
  );
}

export default Logo;