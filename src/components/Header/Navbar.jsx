// src/components/Header/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ navItems, handleScroll }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-orange-300 to-blue-400 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">

          {/* Hamburger button - visible only on mobile (below md) */}
          <button
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop / Tablet horizontal menu - hidden on mobile */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-2 lg:gap-6 text-sm lg:text-base font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={(e) => {
                  handleScroll(e, item.to);
                  closeMenu();
                }}
                className="px-3 py-2 hover:bg-white/30 rounded-lg transition-all duration-300 hover:shadow-md hover:text-orange-700 active:scale-95"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu dropdown - only visible when open on small screens */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-gradient-to-r from-orange-300 to-blue-400 shadow-lg z-40">
              <div className="flex flex-col items-center py-4 gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={(e) => {
                      handleScroll(e, item.to);
                      closeMenu();
                    }}
                    className="px-6 py-3 text-base font-medium hover:bg-white/20 rounded-lg transition-colors w-full text-center"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}