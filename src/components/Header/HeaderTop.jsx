// src/components/Header/HeaderTop.jsx
import { Link } from 'react-router-dom';
import Logo from "../../Assest/logo.png";
import Swach from "../../Assest/swach.png";

export default function HeaderTop({ handleScroll }) {
  return (
    <div className="bg-gradient-to-b from-orange-200 via-orange-100 to-blue-200 text-gray-900 shadow-xl">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-orange-400/90 to-blue-500/90 text-white text-xs sm:text-sm py-2 sm:py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <a
              href="mailto:info@india-iecregistration.org"
              className="flex items-center gap-2 hover:text-orange-100 transition-colors"
            >
              <span>📧</span>
              info@india-iecregistration.org
            </a>
            <span className="hidden sm:inline text-orange-100/60">|</span>
            <a
              href="tel:+919211037448"
              className="flex items-center gap-2 hover:text-orange-100 transition-colors"
            >
              <span>📞</span>
              +91-9211037448
            </a>
          </div>

          <div className="flex gap-4 sm:gap-6 mt-1 sm:mt-0 font-medium">
            <Link
              to="#benefits"
              onClick={(e) => handleScroll(e, "#benefits")}
              className="hover:text-white transition-colors"
            >
              Benefits
            </Link>
            <Link
              to="#faq"
              onClick={(e) => handleScroll(e, "#faq")}
              className="hover:text-white transition-colors"
            >
              FAQs
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-gradient-to-r from-orange-300/80 to-blue-400/80 text-gray-900 py-2 sm:py-2.5 shadow-sm">
        <div className="marquee-container relative w-full h-8 sm:h-9 overflow-hidden">
          <div className="marquee inline-flex whitespace-nowrap text-xs sm:text-sm md:text-base font-medium tracking-wide animate-marquee">
            <span className="mx-12 sm:mx-16 md:mx-20">
              ◆ Mandatory IEC updation every year between 1st April – 30th June ◆ Keep your code active – verify & update even if no changes ◆ Visit DGFT portal to avoid deactivation ◆
            </span>
            <span className="mx-12 sm:mx-16 md:mx-20">
              ◆ Mandatory IEC updation every year between 1st April – 30th June ◆ Keep your code active – verify & update even if no changes ◆ Visit DGFT portal to avoid deactivation ◆
            </span>
          </div>
        </div>
      </div>

      {/* Logo + Title + Swach */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
          {/* Logo + Text - centered on mobile */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 md:gap-6 text-center md:text-left">
            <Link to="/">
              <div className="relative group">
                <img
                  src={Logo}
                  alt="IEC - Import Export Code India"
                  className="w-32 h-20 xs:w-40 xs:h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 lg:w-64 lg:h-36 object-contain drop-shadow-lg mx-auto md:mx-0"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-300/40 to-blue-300/40 opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-xl"></div>
              </div>
            </Link>

            <div>
              <h1 className="text-xl xs:text-2xl sm:text-2.5xl md:text-3xl lg:text-4xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
                INDIA'S IEC CONSULTANCY REGISTRATION PORTAL
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mt-0.5 opacity-90">
                भारतीय आयात निर्यात कोड कंसल्टेंसी पंजीकरण पोर्टल
              </p>
            </div>
          </div>

          {/* Swach - hidden on mobile, appears from md */}
          <div className="hidden md:block relative group">
            <img
              src={Swach}
              alt="Swachh Bharat - Global Trade India"
              className="w-32 h-20 xs:w-40 xs:h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 lg:w-64 lg:h-36 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}