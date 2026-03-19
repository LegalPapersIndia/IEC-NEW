import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Detail({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between py-3 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700 min-w-[180px]">{label}:</span>
      <span className="text-gray-900 font-medium break-words">{value || "—"}</span>
    </div>
  );
}

export default function PaymentSummary() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Payment page → reading sessionStorage");

    const saved = sessionStorage.getItem("iecSubmittedData");

    if (!saved) {
      setError("No submitted data found. Starting fresh...");
      setTimeout(() => {
        sessionStorage.removeItem("iecSubmittedData");
        navigate("/");
      }, 2500);
      return;
    }

    try {
      const parsed = JSON.parse(saved);

      const isTooOld = parsed._timestamp && Date.now() - parsed._timestamp > 30 * 60 * 1000; // 30 min
      if (isTooOld || !parsed.txtPanNo || !parsed.ddlApplicationType) {
        throw new Error("Session expired or incomplete data");
      }

      console.log("Loaded valid data:", parsed);
      setData(parsed);
    } catch (e) {
      console.error("Parse / validation error:", e);
      setError("Invalid or expired data found. Starting fresh...");
      sessionStorage.removeItem("iecSubmittedData");
      setTimeout(() => navigate("/"), 2500);
    }
  }, [navigate]);

  const handlePay = () => {
    window.location.href = "https://www.instamojo.com/@LegalPapersIndia/l52d2d917f393479baf14f1e829a0a65c/";
  };

  const handleEdit = () => {
    sessionStorage.setItem("iecEditFromPayment", "true");
    navigate("/"); // back to form
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-10 bg-white rounded-2xl shadow-xl max-w-md w-full">
          <p className="text-red-600 text-xl font-semibold mb-4">{error}</p>
          <p className="text-gray-600">Redirecting in a few seconds...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500"></div>
        <p className="ml-4 text-gray-600 text-lg">Loading your details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

        <div className="bg-gradient-to-r from-orange-500 to-blue-700 text-white py-12 px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">IEC Application Summary & Payment</h1>
          <p className="text-lg opacity-90">Please review before proceeding</p>
        </div>

        <div className="p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Your Application Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5 bg-gray-50 p-6 rounded-2xl">
              <Detail label="Application Type" value={data.ddlApplicationType} />
              <Detail label="Business Entity Name" value={data.txtBusinesEntity} />
              <Detail label="Constitution" value={data.ddlConstitution} />
              <Detail label="Business Activity" value={data.ddlBsinessActivity} />
              <Detail label="PAN Number" value={<span className="uppercase">{data.txtPanNo}</span>} />
              <Detail label="Email" value={data.txtemail} />
              <Detail label="Contact Number" value={data.txtphone} />
            </div>

            <div className="space-y-5 bg-gray-50 p-6 rounded-2xl">
              <Detail
                label="Address"
                value={[
                  data.txtpaddress,
                  data.txtpaddress2,
                  data.txtpcity,
                  data.txtpstate,
                  data.txtppincode ? ` - ${data.txtppincode}` : "",
                ].filter(Boolean).join(", ") || "—"}
              />
              <Detail label="Date of Incorporation" value={data.txtDate} />
              <Detail label="Has Branch" value={data.ddlEntityBranch === "true" ? "Yes" : "No"} />
              <Detail label="SEZ" value={data.firm === "yes" ? "Yes" : "No"} />
              {data.txtdescriptionbusiness && (
                <Detail label="Description" value={data.txtdescriptionbusiness} />
              )}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 bg-gray-50 border-t border-gray-200">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">IEC Processing Fee</h3>
            <p className="text-5xl font-extrabold text-orange-600 mb-6">₹ 1,950</p>
            <p className="text-gray-600 mb-8">One-time consultancy & processing fee</p>

            <button
              onClick={handlePay}
              className="w-full py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a5 5 0 00-10 0v2m-3 5a5 5 0 0110 0v2a5 5 0 01-10 0v-2z" />
              </svg>
              Pay Securely Now
            </button>

            <p className="text-sm text-gray-500 mt-6">Secure payment via Instamojo</p>

            <div className="text-center mt-10">
              <button
                onClick={handleEdit}
                className="px-12 py-4 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-full shadow-lg transition-all duration-300"
              >
                ← Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}