import { Link, useNavigate } from 'react-router-dom';  // ← add useNavigate here
import { FaArrowUp, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Logo from "../../Assest/logo.png";
import azadi from "../../Assest/azadi.png";

export default function MainFooter() {
  const navigate = useNavigate();   // ← add this

  return (
    <footer className="bg-gradient-to-b from-[#0f244a] via-[#142e4f] to-[#0d1b3a] text-gray-300 pt-12 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-5">
            <h3 className="text-orange-400 font-bold text-xl tracking-wide">
              Important Notice
            </h3>
            <p className="text-sm leading-relaxed opacity-90">
              This is a <span className="font-semibold text-yellow-400">PRIVATE CONSULTANCY</span> portal, 
              not affiliated with DGFT or any Government body. We assist with IEC registration, 
              form filling, document preparation, and related services only.
            </p>
            <p className="text-xs opacity-80 mt-4">
              © {new Date().getFullYear()} IEC Registration India. All Rights Reserved.
            </p>
          </div>

          {/* ─────────────────────────────── Quick Links ─────────────────────────────── */}
          <div className="space-y-5">
            <h3 className="text-orange-400 font-bold text-xl tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Apply New IEC",        hash: "registration-form" },
                { name: "IEC Modification",      hash: "registration-form" },
                { name: "IEC Renewal / Update",  hash: "registration-form" },
                { name: "Procedure",             hash: "procedure"        },
                { name: "Benefits",              hash: "benefits"         },
                { name: "FAQs",                  hash: "faq"              },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate('/');   // First go to home

                      // Small delay → then add hash (triggers scroll)
                      setTimeout(() => {
                        navigate(`/#${item.hash}`, { replace: true });
                      }, 100);  // 80–150 ms → adjust if scroll feels early/late
                    }}
                    className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 hover:translate-x-1 text-left w-full bg-transparent border-none cursor-pointer p-0"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* ──────────────────────────────────────────────────────────────────────── */}

          <div className="space-y-5">
            <h3 className="text-orange-400 font-bold text-xl tracking-wide">
              Policies & Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Contact Us", path: "/contact" },
                { name: "Refund Policy", path: "/refund-policy" },
                { name: "Terms & Conditions", path: "/term-condition" },
                { name: "Disclaimer", path: "/disclaimer" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2.5 text-sm">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-orange-400 text-lg" />
                info@india-iecregistration.org
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-400 text-lg" />
                +91-9211037448
              </p>
            </div>
          </div>

          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h3 className="text-orange-400 font-bold text-xl tracking-wide md:self-start">
              Trusted By
            </h3>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
              <div className="relative group">
                <img
                  src={azadi}
                  alt="Azadi Ka Amrit Mahotsav"
                  className="h-20 w-20 sm:h-26 sm:w-26 md:h-30 md:w-30 lg:h-36 lg:w-36 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/15 to-transparent opacity-0 group-hover:opacity-70 transition-opacity rounded-full blur-sm"></div>
              </div>

              <div className="relative group">
                <img
                  src={Logo}
                  alt="IEC Certification"
                  className="h-20 w-20 sm:h-26 sm:w-26 md:h-30 md:w-30 lg:h-36 lg:w-36 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/15 to-transparent opacity-0 group-hover:opacity-70 transition-opacity rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-600/50 text-center text-sm opacity-80">
          <p>
            This is a private consultancy service Portal. All fees are for professional assistance only. 
            Not associated with any Government department.
          </p>
        </div>
      </div>
    </footer>
  );
}