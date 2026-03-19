// src/components/Sections/FaqSection.jsx
export default function FaqSection() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-orange-100/70 to-orange-50/50"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 underline decoration-4 decoration-orange-400/80 underline-offset-8">
          Frequently Asked Questions (IEC)
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Left Column */}
          <div className="space-y-6">
            {[
              {
                title: "What is IEC (Import Export Code)?",
                content:
                  "IEC is a unique 10-digit code assigned by the Directorate General of Foreign Trade (DGFT), Government of India. It is required for individuals or businesses involved in the import or export of goods and services.",
              },
              {
                title: "Who needs an IEC?",
                content:
                  "Anyone—individuals or companies—planning to engage in cross-border trade must have an IEC. It is essential for customs clearance of import/export consignments.",
              },
              {
                title: "Is IEC mandatory for service exporters too?",
                content:
                  "Yes, IEC is necessary if you're offering services internationally and wish to avail benefits under foreign trade policies.",
              },
              {
                title: "Is my country a member of IEC?",
                content:
                  "India has been a member of the IEC's Standards Management Board (SMB) since 2015 and re-elected for 2018–2020. India holds participating status in 92 Technical Committees...",
              },
              {
                title: "What is IEC Young Professional Programme?",
                content:
                  "This program connects young engineers, managers, and technicians with the global standardization community...",
              },
              {
                title: "How can developing countries participate?",
                content:
                  "The IEC Affiliate Country Programme allows developing nations to take part in IEC's activities and Conformity Assessment Systems without membership fees...",
              },
              {
                title: "Is GST mandatory for IEC registration?",
                content:
                  "No, GST registration isn’t compulsory for obtaining IEC. However, if your business is GST-registered, the details must match with the DGFT database.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white/95 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-orange-200/60 backdrop-blur-[2px]"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-base md:text-lg text-gray-800 border-l-4 border-orange-500 group-open:bg-gradient-to-r group-open:from-orange-100/80 group-open:to-orange-50/60 transition-all duration-300">
                  {item.title}
                  <span className="text-3xl font-bold text-orange-600 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-3 text-gray-700 leading-relaxed">
                  {item.content}
                </div>
              </details>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {[
              {
                title: "How are standards developed?",
                content:
                  "Standards are created collaboratively by expert committees that include stakeholders from industry, academia, government, and public interest groups...",
              },
              {
                title: "What is an international standard?",
                content:
                  "International standards are globally recognized technical guidelines developed by organizations like Codex Alimentarius, WHO, or ITU...",
              },
              {
                title: "How can I purchase IEC Standards and other IEC publications?",
                content: (
                  <>
                    <p>To purchase IEC standards and publications:</p>
                    <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-700">
                      <li>Visit DGFT’s official website and click on ‘Online IEC Application’...</li>
                      <li>On the login page, enter your PAN number...</li>
                      <li>Pay the application fee of ₹500...</li>
                    </ol>
                  </>
                ),
              },
              {
                title: "What is conformity assessment?",
                content:
                  "Conformity assessment ensures that a product complies with relevant standards and regulations...",
              },
              {
                title: "What are horizontal standards?",
                content:
                  "Horizontal standards are broad regulations that apply across multiple sectors...",
              },
              {
                title: "Can I modify or update my IEC details?",
                content: "Yes, you can log in to the DGFT website and update your IEC information whenever necessary.",
              },
              {
                title: "Can individuals apply for IEC?",
                content:
                  "Yes, individuals can also apply for an IEC, even if they are not operating under a registered company.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white/95 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-orange-200/60 backdrop-blur-[2px]"
              >
                <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-base md:text-lg text-gray-800 border-l-4 border-orange-500 group-open:bg-gradient-to-r group-open:from-orange-100/80 group-open:to-orange-50/60 transition-all duration-300">
                  {item.title}
                  <span className="text-3xl font-bold text-orange-600 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-3 text-gray-700 leading-relaxed">
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