import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/logo.png"; // Placeholder for your logo asset

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "INDUSTRIES", path: "/industries" },
    { name: "PentaKÜHL", path: "/pentakuhl" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Main Top Header Navigation */}
      {/* Responsive Fix: Changed pl-[90px] to md:pl-[90px] and added px-4 for mobile */}
      <nav className="fixed top-0 left-0 w-full bg-white h-16 z-50 px-4 md:pl-[90px] md:pr-12 border-b border-gray-50 shadow-sm md:shadow-none">
        <div className="max-w-7xl mx-auto h-full flex justify-between md:justify-center items-center">
          
          {/* Mobile Logo (Visible only on small screens) */}
          <div className="flex md:hidden items-center">
            {/* If your logo is white/transparent, adjust bg or use a different asset here */}
            <Link to="/">
              <img src={logo} alt="Penta Freight" className="h-8 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold tracking-wider transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-[#e05320]" // Their exact brand orange tone
                    : "text-gray-800 hover:text-[#e05320]"
                }`}
              >
                {link.name === "PentaKÜHL" ? (
                  <span>
                    Penta<span className="text-[#009bdf]">KÜHL</span>
                  </span>
                ) : (
                  link.name
                )}
              </Link>
            ))}
            <span className="text-xs font-bold text-gray-800 hover:text-[#e05320] cursor-pointer tracking-wider">
              ABOUT US
            </span>
            <span className="text-xs font-bold text-gray-800 hover:text-[#e05320] cursor-pointer tracking-wider flex items-center gap-0.5">
              SERVICES <span className="text-[10px]">▼</span>
            </span>
            <span className="text-xs font-bold text-gray-800 hover:text-[#e05320] cursor-pointer tracking-wider">
              CAREERS
            </span>
            <span className="text-xs font-bold text-gray-800 hover:text-[#e05320] cursor-pointer tracking-wider">
              CONTACT
            </span>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#e05320] focus:outline-none transition-colors"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  // Close Icon (X)
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger Icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // Close menu on click
                className={`text-sm font-bold tracking-wider transition-colors duration-200 w-full text-center py-2 border-b border-gray-50 last:border-none ${
                  isActive(link.path)
                    ? "text-[#e05320]"
                    : "text-gray-800 hover:text-[#e05320]"
                }`}
              >
                {link.name === "PentaKÜHL" ? (
                  <span>
                    Penta<span className="text-[#009bdf]">KÜHL</span>
                  </span>
                ) : (
                  link.name
                )}
              </Link>
            ))}
            
            {/* Mobile versions of the static links */}
            <span className="text-sm font-bold text-gray-800 hover:text-[#e05320] cursor-pointer tracking-wider w-full text-center py-2 border-b border-gray-50">
              ABOUT US
            </span>
            <span className="text-sm font-bold text-gray-800 hover:text-[#e05320] cursor-pointer tracking-wider w-full text-center py-2 border-b border-gray-50 flex items-center justify-center gap-1">
              SERVICES <span className="text-[10px]">▼</span>
            </span>
            <span className="text-sm font-bold text-gray-800 hover:text-[#e05320] cursor-pointer tracking-wider w-full text-center py-2 border-b border-gray-50">
              CAREERS
            </span>
            <span className="text-sm font-bold text-gray-800 hover:text-[#e05320] cursor-pointer tracking-wider w-full text-center py-2">
              CONTACT
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;