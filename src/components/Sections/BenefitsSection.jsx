// src/components/Sections/BenefitsSection.jsx
export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-orange-50/80 to-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 md:mb-20 text-gray-800 underline decoration-4 decoration-orange-400 underline-offset-8">
          Benefits of Having an IEC Registration
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {[
              {
                title: "What is the Applicability of IEC?",
                content:
                  "IEC is mandatory for anyone importing or exporting goods commercially in India. It’s a lifetime 10-digit code issued by DGFT — your key to start an import/export business.",
              },
              {
                title: "Do you apply IEC earlier on same PAN?",
                content:
                  "Now linked to your PAN (post-GST). Proprietorships, partnerships, companies, LLPs, trusts, HUFs — all use the same PAN + bank + address.",
              },
              {
                title: "Procedure to Apply IEC Registration?",
                content:
                  "Super simple: Fill online form → Upload docs → Pay securely → Get expert help if needed → Receive your IEC certificate by email.",
              },
              {
                title: "Can you Apply for the Modification in IEC?",
                content: "Yes — easily update name, address, bank details etc. through the DGFT portal anytime.",
              },
              {
                title: "How to Apply for IEC Registration?",
                content:
                  "Fill the form here + pay online, or just email your documents to infoieccodeindia@gmail.com — we’ll take care of everything.",
              },
              {
                title: "What if you Don’t Know How to Fill this Form?",
                content:
                  "No stress! Send your documents + payment to us — our IEC experts will fill and submit everything correctly for you.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-base md:text-lg text-gray-800 border-l-4 border-orange-500 group-open:bg-gradient-to-r group-open:from-orange-100 group-open:to-orange-50 transition-colors">
                  {item.title}
                  <span className="text-3xl font-bold text-orange-600 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-3 text-gray-700 leading-relaxed text-[15px] md:text-base">
                  <p>{item.content}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {[
              {
                title: "How much time will take to obtain IEC?",
                content:
                  "Usually 2–7 working days after submission (most get it in 3–5 days now).",
              },
              {
                title: "What is the Full Form of IEC?",
                content:
                  "Importer Exporter Code — your unique 10-digit business passport for international trade in India.",
              },
              {
                title: "What is the validity of IEC?",
                content:
                  "Lifetime validity! No renewal needed unless you want to cancel or make changes.",
              },
              {
                title: "Documents Required in case of Partnership?",
                content: (
                  <>
                    <p>Partnership firm needs:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 text-gray-700">
                      <li>Firm PAN Card</li>
                      <li>Partnership Deed</li>
                      <li>PAN & Aadhaar of all partners</li>
                      <li>Cancelled cheque (firm account)</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Documents Required in case of Private Limited or LLP?",
                content: (
                  <>
                    <p>For Pvt Ltd / LLP:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 text-gray-700">
                      <li>Company PAN Card</li>
                      <li>Certificate of Incorporation</li>
                      <li>PAN & Aadhaar of directors</li>
                      <li>Cancelled cheque (company account)</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Documents Required in case of Proprietor?",
                content: (
                  <>
                    <p>For Proprietorship:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-1.5 text-gray-700">
                      <li>Your PAN Card</li>
                      <li>Aadhaar Card</li>
                      <li>Address proof (electricity bill / rent agreement)</li>
                      <li>Cancelled cheque</li>
                    </ul>
                  </>
                ),
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-base md:text-lg text-gray-800 border-l-4 border-orange-500 group-open:bg-gradient-to-r group-open:from-orange-100 group-open:to-orange-50 transition-colors">
                  {item.title}
                  <span className="text-3xl font-bold text-orange-600 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-3 text-gray-700 leading-relaxed text-[15px] md:text-base">
                  {item.content}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}