// src/components/Sections/ProcedureSection.jsx
import fill from "../../Assest/2.png";
import pay from "../../Assest/3.png";
import docu from "../../Assest/4.png";
import certi from "../../Assest/6.png";

export default function ProcedureSection() {
  const steps = [
    {
      number: "1",
      title: "Fill Application Form",
      description: "Enter your business & personal details in a simple online form.",
      imageSrc: fill,
      iconClass: "w-20 h-20 md:w-28 md:h-28",
    },
    {
      number: "2",
      title: "Make Secure Payment",
      description: "Pay conveniently via UPI, card, netbanking or wallet.",
      imageSrc: pay,
      iconClass: "w-20 h-20 md:w-28 md:h-28",
    },
    {
      number: "3",
      title: "Upload Documents",
      description: "Securely upload PAN, Aadhaar, bank proof & photos.",
      imageSrc: docu,
      iconClass: "w-20 h-20 md:w-28 md:h-28",
    },
    {
      number: "4",
      title: "Get IEC Certificate",
      description: "Receive your official IEC code & certificate via email.",
      imageSrc: certi,
      iconClass: "w-20 h-20 md:w-28 md:h-28",
    },
  ];

  return (
    <section
      id="procedure"
      className="py-16 md:py-24 bg-gradient-to-br from-orange-50/40 via-white to-blue-50/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Easy 4-Step IEC Registration
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Complete your Import Export Code registration online in just a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line – very light gradient */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1.5 bg-gradient-to-r from-orange-200 via-orange-300 to-blue-200 rounded-full transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative bg-white rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 border border-orange-100 overflow-hidden"
              >
                {/* Very subtle hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

                {/* Icon Circle – lighter gradient */}
                <div className="relative mx-auto mb-6 md:mb-8">
                  <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center shadow-xl mx-auto ring-8 ring-orange-100/60 ring-offset-2">
                    <img
                      src={step.imageSrc}
                      alt={`Step ${step.number} - ${step.title}`}
                      className={`${step.iconClass} object-contain drop-shadow-md`}
                    />
                  </div>

                  {/* Step Number – softer orange */}
                  <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-4 border-orange-400 flex items-center justify-center text-orange-500 font-extrabold text-xl md:text-2xl shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center text-base md:text-[17px] leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow – lighter */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-10 lg:-right-14 w-12 h-12 transform translate-y-1/2 z-20">
                    <div className="w-full h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg ring-2 ring-white/60">
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-700 text-lg md:text-xl font-medium">
            Most applications are processed in <span className="text-orange-500 font-bold">1–3 working days</span>.
          </p>
          <p className="mt-2 text-gray-500 text-base">
            100% online – No office visit required
          </p>
        </div>
      </div>
    </section>
  );
}