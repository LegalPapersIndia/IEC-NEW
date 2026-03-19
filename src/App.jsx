// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import TopBar from './components/Header/HeaderTop';
import Navbar from './components/Header/Navbar';
import RegistrationForm from './components/Form/RegistrationForm';
import InstructionsSidebar from './components/Form/InstructionsSidebar';
import ProcedureSection from './components/Sections/ProcedureSection';
import BenefitsSection from './components/Sections/BenefitsSection';
import FaqSection from './components/Sections/FaqSection';
import MainFooter from './components/Footer/MainFooter';
import PaymentSummary from './components/Payment/PaymentSummary';
import DisclaimerPage from './components/Pages/DisclaimerPage';
import HeroCarousel from './components/Sections/HeroCarousel';
import ContactPage from './components/Pages/ContactPage';
import TermsAndConditionsPage from './components/Pages/TermsAndConditionsPage';
import RefundPolicyPage from './components/Pages/RefundPolicyPage';

// Reusable marquee component
function GlobalMarquee() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-md overflow-hidden">
      <div className="marquee-container relative w-full">
        <div className="marquee inline-flex whitespace-nowrap text-sm font-medium tracking-wide py-2 animate-marquee">
          <span className="mx-16">
            This is a private consultancy self-registration portal for obtaining import export code. Portal fees are consultancy in nature.
          </span>
          <span className="mx-16">
            This is a private consultancy self-registration portal for obtaining import export code. Portal fees are consultancy in nature.
          </span>
        </div>
      </div>
    </div>
  );
}

// Floating back-to-top button with visibility control
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400"
      aria-label="Back to top"
    >
      <FaArrowUp size={22} />
    </button>
  );
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Show marquee on all pages except home
  const showMarquee = !isHome;

  // Show floating navbar only on home
  const showNavbar = isHome;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Always visible header */}
      <TopBar />

      {/* Marquee – non-home pages */}
      {showMarquee && <GlobalMarquee />}

      {/* Optional floating-style navbar on home */}
      {showNavbar && (
        <Navbar
          navItems={[
            { label: "IEC REGISTRATION", to: "#registration-form" },
            { label: "IEC MODIFICATION", to: "#registration-form" },
            { label: "IEC RENEWAL/UPDATE", to: "#registration-form" },
            { label: "PROCEDURE", to: "#procedure" },
            { label: "BENEFITS", to: "#benefits" },
            { label: "FAQ'S", to: "#faq" },
          ]}
          handleScroll={(e, target) => {
            if (target.startsWith('#')) {
              e.preventDefault();
              const element = document.querySelector(target);
              if (element) {
                const headerOffset = 140;
                const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }
          }}
        />
      )}

      <main className="flex-grow">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-10 md:py-12">
                <HeroCarousel />

                <div className="mx-auto max-w-screen-2xl mt-10">
                  <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
                    <div className="lg:col-span-2">
                      <RegistrationForm />
                    </div>
                    <div className="lg:col-span-1">
                      <InstructionsSidebar />
                    </div>
                  </div>
                </div>

                <div className="mx-auto max-w-screen-2xl mt-16 space-y-20">
                  <ProcedureSection />
                  <BenefitsSection />
                  <FaqSection />
                </div>
              </div>
            }
          />

          {/* Payment */}
          <Route path="/payment-summary" element={<PaymentSummaryWrapper />} />

          {/* Legal pages */}
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/term-condition" element={<TermsAndConditionsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex items-center justify-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-700 text-center">
                  404 — Page Not Found
                </h1>
              </div>
            }
          />
        </Routes>
      </main>

      <MainFooter />

      {/* Floating back-to-top */}
      <BackToTop />
    </div>
  );
}

// Small wrapper to keep consistent padding & max-width
function PaymentSummaryWrapper() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-12 md:py-16">
      <div className="mx-auto max-w-screen-2xl">
        <PaymentSummary />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;