// src/components/Pages/TermsAndConditionsPage.jsx
export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Last Updated: March 07, 2026
          </p>
        </div>

        {/* Important Notice / Disclaimer Banner */}
        <div className="bg-gradient-to-r from-orange-100 to-blue-100 border-l-4 border-orange-500 p-6 rounded-xl mb-12 text-gray-800">
          <p className="text-lg font-semibold mb-2">
            Important Notice
          </p>
          <p className="leading-relaxed">
            This is a <span className="font-bold text-orange-700">private consultancy self-registration portal</span> for obtaining Import Export Code (IEC). 
            All portal fees are <span className="font-bold text-orange-700">consultancy in nature</span> and are not government fees.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Welcome to <span className="font-semibold">india-iecregistration.org</span>. These Terms and Conditions govern your use of our website and the services we provide. 
            By accessing or using this portal, you agree to be bound by these terms. If you do not agree, please do not use the website.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This portal is operated by a <strong>private consultancy firm</strong> and is <strong>not affiliated with, endorsed by, or part of any government authority</strong>, including the Directorate General of Foreign Trade (DGFT).
          </p>
        </section>

        {/* Main Sections */}
        <div className="space-y-12">
          {/* 1. Ownership of Content */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              1. Ownership of Content
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of the portal or its content suppliers and is protected by applicable intellectual property laws. All trademarks and registered trademarks are the property of their respective owners.
            </p>
          </section>

          {/* 2. Third-Party Information */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              2. Third-Party Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Some information or content on this portal may be sourced from third-party providers or external government websites such as DGFT or other government agencies. Such content is provided for informational purposes only and remains the property of the respective owners. We do not guarantee the accuracy, completeness, or timeliness of third-party information.
            </p>
          </section>

          {/* 3. Disclaimer of Liability */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              3. Disclaimer of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The portal and its operators shall not be held liable for any direct, indirect, incidental, special, or consequential damages that result from the use or inability to use the website, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Errors, interruptions, defects, or delays in operation</li>
              <li>Computer viruses, malware, or unauthorized access</li>
              <li>Loss of data, profits, or business opportunities</li>
              <li>Any damages or injury caused by performance failure, error, omission, or any other cause related to website use</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Users understand and agree that use of the portal is at their own risk.
            </p>
          </section>

          {/* 4. User Conduct */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              4. User Conduct
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using the website, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Engage in any activity that may harm, disrupt, or interfere with the integrity, functionality, or availability of the website</li>
              <li>Use automated tools, bots, or scripts without permission</li>
              <li>Submit false, misleading, or fraudulent information or documents</li>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
            </ul>
          </section>

          {/* 5. Limitation of Warranty */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              5. Limitation of Warranty
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All services, tools, and information provided through this portal are offered on an “as-is” and “as-available” basis without any warranties of any kind, either express or implied.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We do not warrant the accuracy, completeness, reliability, or timeliness of any information or services</li>
              <li>We do not guarantee uninterrupted, secure, or error-free access to the site</li>
              <li>We disclaim any warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
              <li>We make no guarantees about the outcomes, approval, or success of IEC registration, modification, or renewal applications submitted through our assistance</li>
            </ul>
          </section>

          {/* 6. Service Usage and Modifications */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              6. Service Usage and Modifications
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide assistance, consultancy, and information related to IEC registration, modification, renewal, and related services. By using our services, you agree to comply with applicable Indian laws and regulations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of the service at our sole discretion without prior notice or liability.
            </p>
          </section>

          {/* 7. Legal Compliance */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              7. Legal Compliance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All users agree to use this portal in full compliance with the Foreign Trade Policy, DGFT regulations, and all applicable Indian laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any misuse of the platform, submission of false documents, or fraudulent activity may result in immediate suspension of access and possible legal action.
            </p>
          </section>

          {/* 8. Changes to Terms */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              8. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions may be updated from time to time without prior notice. Your continued use of the portal after any changes constitutes acceptance of the revised terms. It is your responsibility to review these terms periodically.
            </p>
          </section>

          {/* 9. Contact */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              9. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For any queries regarding these Terms and Conditions, or for support related to IEC services, please reach out to our team:
            </p>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-3">
                <span className="font-semibold">Email:</span> 
                <a href="mailto:info@india-iecregistration.org" className="text-orange-600 hover:underline">
                  info@india-iecregistration.org
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-semibold">Mobile:</span> +91-9211037448
              </p>
            </div>
          </section>
        </div>

        {/* Final Acceptance Note */}
        <div className="mt-16 text-center text-gray-700 text-lg font-medium bg-orange-50 p-6 rounded-xl border border-orange-200">
          By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
        </div>
      </div>
    </div>
  );
}