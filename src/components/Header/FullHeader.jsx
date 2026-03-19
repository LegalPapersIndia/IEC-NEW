// src/components/Header/FullHeader.jsx (unchanged structure, just for completeness)
import HeaderTop from './HeaderTop';
import Navbar from './Navbar';

export default function FullHeader() {
  const navItems = [
    { label: "IEC REGISTRATION", to: "#registration-form" },
    { label: "IEC MODIFICATION", to: "#registration-form" },
    { label: "IEC RENEWAL/UPDATE", to: "#registration-form" },
    { label: "PROCEDURE", to: "#procedure" },
    { label: "BENEFITS", to: "#benefits" },
    { label: "FAQ'S", to: "#faq" },
  ];

  const handleScroll = (e, target) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        // Adjusted header offset for sticky navbar + top bar
        const headerOffset = 160; // increase if your header is taller
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <HeaderTop handleScroll={handleScroll} />
      <Navbar navItems={navItems} handleScroll={handleScroll} />
    </>
  );
}