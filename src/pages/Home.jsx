import React from 'react';
import homeVideo from '../assets/homevideo.mp4'; 

const Home = () => {
  return (
  
    <div className="w-full pl-0 md:pl-[70px] bg-black">
      
      <section className="relative w-full h-[100dvh] md:h-[calc(100vh-64px)] overflow-hidden bg-black">
        
    
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          src={homeVideo}
        />

        {/* Scroll Circle Overlay Anchor */}
        <div className="absolute bottom-10 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 flex items-center justify-center cursor-pointer hover:border-white hover:bg-white/10 transition-all duration-300">
            <svg 
              className="w-4 h-4 text-white animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Floating Orange Speaker Utility Icon */}
        <div className="absolute bottom-10 right-6 md:bottom-8 md:right-8 z-10">
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e05320] text-white flex items-center justify-center shadow-2xl hover:bg-orange-600 hover:scale-105 transition-all duration-200">
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
        </div>

      </section>
    </div>
  );
};

export default Home;