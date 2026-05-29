import React from "react";
import pentakuhlvideo from "../assets/pentakulvid.mp4";

const Pentakuhl = () => {
  return (
    <div className="w-full pl-0 md:pl-[90px] bg-black overflow-hidden">
      <section className="relative w-full h-[100dvh] md:h-[calc(100vh-64px)] flex items-center justify-center px-4 md:px-8 overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          src={pentakuhlvideo}
        />

        {/* Dark overlay strictly pinned to the container */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col mt-16 md:mt-20">
          {/* Top: Centered Heading with responsive font sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-white text-center tracking-wide leading-tight mb-6 md:mb-8 drop-shadow-md">
            Ensuring Safe Transport for <br className="hidden md:block" />{" "}
            Temperature-Sensitive Products
          </h1>

          {/* Middle: Thin Divider Line */}
          <hr className="w-full border-t border-white/40 my-4 md:my-6" />

          {/* Bottom: Split Layout (Stacked on mobile, side-by-side on desktop) */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <p className="text-white text-base md:text-lg lg:text-[22px] font-light text-center md:text-left max-w-2xl leading-relaxed drop-shadow-md">
              Explore our frequently asked questions to gain clarity{" "}
              <br className="hidden lg:block" /> about Penta Kuhl’s services and
              features
            </p>

            {/* Button: full width on mobile (w-full), auto width on desktop (md:w-auto) */}
            <button className="bg-[#e05320] hover:bg-orange-600 text-white font-semibold px-8 py-4 md:py-3.5 rounded text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shrink-0 w-full md:w-auto">
              Explore <span className="text-[10px]">▼</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pentakuhl;
