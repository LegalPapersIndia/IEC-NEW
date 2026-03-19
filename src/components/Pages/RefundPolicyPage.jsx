// src/components/Pages/RefundPolicyPage.jsx
export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Refund Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Last Updated: March 07, 2026
          </p>
        </div>

        {/* Important Summary Banner */}
        <div className="bg-gradient-to-r from-orange-100 to-blue-100 border-l-4 border-orange-500 p-6 md:p-8 rounded-xl mb-12 text-gray-800 shadow-md">
          <p className="text-lg font-semibold mb-3">
            Quick Summary
          </p>
          <p className="leading-relaxed mb-4">
            We offer a fair and transparent refund policy for our consultancy services. Refunds are processed only when we are unable to provide the committed service due to our fault.
          </p>
          <p className="leading-relaxed">
            You can reach our grievance/redressal team anytime. We aim to resolve refund requests within <strong>7 working days</strong> after assessment.
          </p>
        </div>

        {/* Main Policy Content */}
        <div className="space-y-10">
          {/* Refund Commitment */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Refund Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can easily reach us with your grievance. Our refund department will assess the matter and if it finds non-catering of services on our part, we'll gladly refund your payment within <strong>7 working days</strong> from the date of refund request.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have a <strong>money-back guarantee policy</strong> if we are unable to process the application as committed by us.
            </p>
          </section>

          {/* Important Notes */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Important Notes
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 text-xl font-bold mt-1">•</span>
                <span>
                  <strong>No refund shall be issued</strong> if you have already availed any complimentary service or discount offer attached to the paid service.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-600 text-xl font-bold mt-1">•</span>
                <span>
                  <strong>INR 300 (administrative charges)</strong> will be deducted if the application is unprocessable due to non-submission of required documents, non-cooperation, or any other reason restricting us from processing.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-600 text-xl font-bold mt-1">•</span>
                <span>
                  <strong>No refund</strong> if we processed the registration/application as per government guidelines but issuance is delayed by government authorities.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-600 text-xl font-bold mt-1">•</span>
                <span>
                  Any <strong>government fee, duty, or challan</strong> paid by us will be deducted from the refund amount.
                </span>
              </li>
            </ul>
          </section>

          {/* How to Request Refund */}
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How to Request a Refund
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you believe you are eligible for a refund based on the above policy:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>Contact us via email at <strong>info@india-iecregistration.org</strong> or call <strong>+91-9211037448</strong>.</li>
              <li>Clearly mention your order/reference number, date of payment, and reason for refund request.</li>
              <li>Our team will review your case within 2–3 working days.</li>
              <li>If approved, refund will be processed to your original payment method within <strong>7 working days</strong>.</li>
            </ol>
          </section>

          {/* Final Note */}
          <section className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8 text-center border border-orange-200">
            <p className="text-lg text-gray-800 font-medium">
              We value your trust and are committed to providing fair and transparent services. 
              Thank you for choosing us for your IEC registration needs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}