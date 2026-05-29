import React from 'react';
import sideLogo from '../assets/logo.png'; // Make sure this path points to your downloaded logo.png

const SideLogo = () => {
  return (
    // Pinned to the left side, exactly centered vertically. Hidden on small mobile screens.
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      
      {/* Wrapper to add a nice hover pop-out effect and shadow */}
      <div className="cursor-pointer hover:translate-x-1 transition-transform duration-300 shadow-2xl bg-white">
        
        <img 
          src={sideLogo} 
          alt="Penta Freight Side Logo" 
          // Adjust this width (w-10 or w-12) if you want it slightly thicker or thinner
          className="w-10 h-auto block" 
        />
        
      </div>
      
    </div>
  );
};

export default SideLogo;