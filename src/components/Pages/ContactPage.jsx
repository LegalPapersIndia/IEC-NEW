// src/components/Pages/ContactPage.jsx
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock} from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We're here to help you with your IEC Registration, Modification, or Renewal. Reach out to us anytime!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-orange-100">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-6 mx-auto">
              <FaPhoneAlt size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
              Phone
            </h3>
            <p className="text-center text-gray-600 text-lg font-medium">
              +919211037448
            </p>
            <p className="text-center text-sm text-gray-500 mt-2">
              Available 10 AM – 6 PM (Mon-Sat)
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-orange-100">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
              <FaEnvelope size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
              Email
            </h3>
            <p className="text-center text-gray-600 text-lg font-medium break-all">
              info@india-iecregistration.org
            </p>
            <p className="text-center text-sm text-gray-500 mt-2">
              We usually reply within 24 hours
            </p>
          </div>

          {/* Address / Support Hours Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-orange-100 md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
              <FaClock size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
              Support Hours
            </h3>
            <p className="text-center text-gray-600 text-lg">
              Monday – Saturday: 10:00 AM – 6:00 PM
            </p>
            <p className="text-center text-gray-600 text-lg mt-4">
              Sunday: Closed
            </p>
            <p className="text-center text-sm text-gray-500 mt-4">
              For urgent queries, please call or email.
            </p>
          </div>
        </div>

        {/* Optional: Map or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Prefer to reach us instantly? Use the phone number or email above — our team is ready to assist you with IEC Registration, Modification, Renewal, or any related queries.
          </p>
          <p className="text-sm text-gray-500">
            We are a private consultancy helping businesses across India with hassle-free IEC services.
          </p>
        </div>
      </div>
    </div>
  );
}