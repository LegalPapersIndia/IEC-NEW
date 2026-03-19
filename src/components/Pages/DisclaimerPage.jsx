// src/components/Pages/DisclaimerPage.jsx
export default function DisclaimerPage() {
  return (

      <div>
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Page Header */}
          <div className="bg-gradient-to-r from-orange-500 to-blue-900 text-white py-8 px-6 md:px-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Disclaimer Policy
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Important Information About Our Services
            </p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 lg:p-12 prose prose-lg max-w-none text-gray-700">
            <p className="mb-6 text-lg leading-relaxed">
              <strong className="text-orange-600">Fee charged by us on this portal is purely consultancy in nature.</strong>
            </p>

            <p className="mb-8 font-medium text-xl text-blue-900 border-l-4 border-orange-500 pl-4 py-1">
              www.india-iecregistration.org IS A PRIVATELY OWNED ONLINE PORTAL AND IN NO WAY REPRESENTS 
              ANY RELATION WITH ANY GOVERNMENT AUTHORITY OR BODY.
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                This portal is owned and operated by a private consultancy firm and in no way represents 
                any affiliation, association, or connection with the Directorate General of Foreign Trade (DGFT) 
                or any other Government authority of India.
              </p>

              <p>
                This is <strong>not</strong> an official Government-run website. The registration form 
                available on this portal is <strong>not</strong> the official Government application form. 
                It is solely designed to collect preliminary information from prospective clients so that 
                our consultants can better understand their business requirements and provide appropriate 
                guidance and assistance.
              </p>

              <p>
                We provide professional consultancy services to assist clients in the process of:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>IEC (Importer Exporter Code) Registration</li>
                <li>IEC Modification / Amendment</li>
                <li>IEC Renewal / updation</li>
                <li>Form filling and document preparation guidance</li>
                <li>Submission support and follow-up assistance</li>
              </ul>

              <p className="pt-4 italic text-gray-600 border-t border-gray-200 mt-6">
                All fees charged through this portal are towards professional consultancy services only. 
                They do <strong>not</strong> include any official Government fees, which may be payable 
                separately through official channels if applicable.
              </p>
            </div>
          </div>
        </div>
      </main>
      </div>
  );
}