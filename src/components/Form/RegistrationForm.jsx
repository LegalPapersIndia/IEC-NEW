import { useState, useRef, useEffect } from "react";
import FormField from "./FormField";
import GradientButton from "../common/GradientButton";
import { useNavigate } from "react-router-dom";

const applicationTypes = [
  "IEC Registration",
  "IEC Modification",
  "IEC Renewal",
];

const constitutions = [
  "Proprietorship",
  "Partnership Firm",
  "Limited Liability Partnership",
  "Private Limited",
  "OPC",
  "Public Limited",
  "Govt. Undertaking",
  "Section 8 Company",
  "Registered Society",
  "Trust",
  "HUF",
];

const businessActivities = [
  "Merchant Exporter",
  "Manufacturer Exporter",
  "Merchant cum Manufacturer Exporter",
  "Service Provider",
  "Merchant cum Service Provider",
  "Manufacturer cum Service Provider",
  "Merchant cum Manufacturer cum Service Provider",
  "Others",
];

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep",
];

const initialFormData = {
  application_type: "",
  business_entity: "",
  constitution: "",
  description_business: "",
  business_activity: "",
  date_of_incorporation: "",
  address_line1: "",
  address_line2: "",
  city: "",
  state: "",
  pincode: "",
  has_branch: "",
  pan_no: "",
  email: "",
  contact_no: "",
  sez: "No",
};

export default function RegistrationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [formAlert, setFormAlert] = useState(null);

  const firstErrorRef = useRef(null);
  const navigate = useNavigate();

  // Handle input changes + formatting
  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === "pan_no") processedValue = value.toUpperCase().trim();
    if (name === "contact_no") processedValue = value.replace(/\D/g, "").slice(0, 10);
    if (name === "pincode") processedValue = value.replace(/\D/g, "").slice(0, 6);

    setFormData((prev) => ({ ...prev, [name]: processedValue }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (formAlert) setFormAlert(null);
  };

  // Clean up very old submitted data
  useEffect(() => {
    const saved = sessionStorage.getItem("iecSubmittedData");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed._timestamp && Date.now() - parsed._timestamp > 30 * 60 * 1000) {
          sessionStorage.removeItem("iecSubmittedData");
        }
      } catch {}
    }
  }, []);

  // Load draft (unsaved changes)
  useEffect(() => {
    const draft = sessionStorage.getItem("iecFormDraft");
    if (draft) {
      try {
        setFormData((prev) => ({ ...prev, ...JSON.parse(draft) }));
      } catch (e) {
        console.warn("Invalid draft data", e);
      }
    }
  }, []);

  // Auto-save draft
  useEffect(() => {
    sessionStorage.setItem("iecFormDraft", JSON.stringify(formData));
  }, [formData]);

  // Restore submitted data when coming from Edit button
  useEffect(() => {
    const isEditMode = sessionStorage.getItem("iecEditFromPayment") === "true";

    if (isEditMode) {
      const submitted = sessionStorage.getItem("iecSubmittedData");
      if (submitted) {
        try {
          const parsed = JSON.parse(submitted);

          // Optional: reject very old data
          if (parsed._timestamp && Date.now() - parsed._timestamp > 60 * 60 * 1000) { // 1 hour
            throw new Error("Edit session expired");
          }

          setFormData({
            application_type: parsed.ddlApplicationType || "",
            business_entity: parsed.txtBusinesEntity?.trim() || "",
            constitution: parsed.ddlConstitution || "",
            description_business: parsed.txtdescriptionbusiness?.trim() || "",
            business_activity: parsed.ddlBsinessActivity || "",
            date_of_incorporation: parsed.txtDate
              ? parsed.txtDate.split("-").reverse().join("-")  // DD-MM-YYYY → YYYY-MM-DD
              : "",
            address_line1: parsed.txtpaddress?.trim() || "",
            address_line2: parsed.txtpaddress2?.trim() || "",
            city: parsed.txtpcity?.trim() || "",
            state: parsed.txtpstate || "",
            pincode: parsed.txtppincode || "",
            pan_no: parsed.txtPanNo?.trim().toUpperCase() || "",
            email: parsed.txtemail?.trim() || "",
            contact_no: parsed.txtphone || "",
            has_branch: parsed.ddlEntityBranch === "true" ? "Yes" : "No",
            sez: parsed.firm === "yes" ? "Yes" : "No",
          });

          // Clean up
          sessionStorage.removeItem("iecEditFromPayment");
          sessionStorage.removeItem("iecFormDraft"); // prevent draft conflict

          setFormAlert({
            type: "success",
            message: "Previous details loaded for editing.",
          });

        } catch (e) {
          console.warn("Failed to restore edit data", e);
          setFormAlert({
            type: "error",
            message: "Could not load previous data. Please start fresh.",
          });
        }
      }
    }
  }, []);

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setFormAlert(null);
    setSubmitStatus({ type: "", message: "" });
    sessionStorage.removeItem("iecFormDraft");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.application_type) newErrors.application_type = "Required";
    if (!formData.business_entity.trim()) newErrors.business_entity = "Required";
    if (!formData.constitution) newErrors.constitution = "Required";
    if (!formData.business_activity) newErrors.business_activity = "Required";
    if (!formData.address_line1.trim()) newErrors.address_line1 = "Required";
    if (!formData.state) newErrors.state = "Required";

    if (!formData.pan_no) newErrors.pan_no = "Required";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan_no))
      newErrors.pan_no = "Invalid format (ABCDE1234F)";

    if (!formData.email) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";

    if (!formData.contact_no) newErrors.contact_no = "Required";
    else if (!/^[6-9]\d{9}$/.test(formData.contact_no))
      newErrors.contact_no = "10 digits starting with 6-9";

    if (formData.pincode && !/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "6 digits required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const first = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${first}"]`);
      if (el) firstErrorRef.current = el;
    }

    return Object.keys(newErrors).length === 0;
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";
    return `${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${d.getFullYear()}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormAlert(null);

    if (!validateForm()) {
      setFormAlert({
        type: "error",
        message: "Please fill all required fields correctly.",
      });
      setTimeout(() => {
        if (firstErrorRef.current) {
          firstErrorRef.current.focus();
          firstErrorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 150);
      return;
    }

    setLoading(true);

    const payload = {
      serviceCategory: "iecReg",
      leadSource: "india-iecregistration.org",
      ddlApplicationType: formData.application_type || "",
      txtBusinesEntity: formData.business_entity.trim() || "",
      ddlConstitution: formData.constitution || "",
      txtdescriptionbusiness: formData.description_business?.trim() || "",
      ddlBsinessActivity: formData.business_activity || "",
      txtDate: formatDate(formData.date_of_incorporation),
      txtpaddress: formData.address_line1?.trim() || "",
      txtpaddress2: formData.address_line2?.trim() || "",
      txtpcity: formData.city?.trim() || "",
      txtpstate: formData.state || "",
      txtppincode: formData.pincode || "",
      txtPanNo: formData.pan_no?.trim().toUpperCase() || "",
      txtemail: formData.email?.trim() || "",
      txtphone: formData.contact_no?.trim() || "",
      firm: formData.sez === "Yes" ? "yes" : "no",
      ddlEntityBranch: formData.has_branch === "Yes" ? "true" : "false",
      _timestamp: Date.now(),
      _formVersion: "2025-03",
    };

    try {
      const res = await fetch("https://legalpapers.konceptsoftwaresolutions.com/leadRoutes", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload).toString(),
      });

      const text = await res.text();

      if (text.toLowerCase().includes("error") || !res.ok) {
        throw new Error("API error");
      }

      sessionStorage.setItem("iecSubmittedData", JSON.stringify(payload));
      sessionStorage.removeItem("iecFormDraft");

      setSubmitStatus({
        type: "success",
        message: "Application submitted successfully! Redirecting...",
      });

      setTimeout(() => {
        navigate("/payment-summary");
      }, 1200);
    } catch (err) {
      console.error("Submission failed:", err);

      sessionStorage.setItem("iecSubmittedData", JSON.stringify(payload));
      sessionStorage.removeItem("iecFormDraft");

      setSubmitStatus({
        type: "success",
        message: "Submitted (with warning)! Redirecting...",
      });

      setTimeout(() => {
        navigate("/payment-summary");
      }, 1800);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="registration-form" className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/80 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-orange-600 to-blue-900 text-white py-6 text-center text-2xl md:text-3xl font-bold tracking-wide shadow-md">
        IEC REGISTRATION FORM
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-10 lg:p-12 space-y-8">
        {formAlert && (
          <div className={`p-5 rounded-xl border-l-4 shadow-sm ${
            formAlert.type === "success" 
              ? "bg-green-50 border-green-500 text-green-800" 
              : "bg-red-50 border-red-500 text-red-800"
          }`}>
            <strong className="block mb-1">{formAlert.type === "success" ? "Success!" : "Error!"}</strong>
            {formAlert.message}
          </div>
        )}

        {submitStatus.message && (
          <div
            className={`p-5 rounded-xl border-l-4 text-center shadow-sm ${
              submitStatus.type === "success" ? "bg-green-50 border-green-500 text-green-800" : "bg-red-50 border-red-500 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <FormField
          label="1. Application Type"
          name="application_type"
          type="select"
          options={applicationTypes}
          value={formData.application_type}
          onChange={handleChange}
          required
          error={errors.application_type}
        />

        <FormField
          label="2. Name of Business Entity"
          name="business_entity"
          value={formData.business_entity}
          onChange={handleChange}
          required
          error={errors.business_entity}
        />

        <FormField
          label="3. Constitution"
          name="constitution"
          type="select"
          options={constitutions}
          value={formData.constitution}
          onChange={handleChange}
          required
          error={errors.constitution}
        />

        <FormField
          label="4. Description of Business"
          name="description_business"
          type="textarea"
          value={formData.description_business}
          onChange={handleChange}
          rows={3}
        />

        <FormField
          label="5. Business Activity"
          name="business_activity"
          type="select"
          options={businessActivities}
          value={formData.business_activity}
          onChange={handleChange}
          required
          error={errors.business_activity}
        />

        <FormField
          label="6. Date of Incorporation"
          name="date_of_incorporation"
          type="date"
          value={formData.date_of_incorporation}
          onChange={handleChange}
        />

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-6">
          <label className="block text-lg font-semibold text-gray-800">7. Principal Place of Business</label>
          <p className="text-sm text-gray-600">State is mandatory</p>

          <FormField
            name="address_line1"
            placeholder="Address Line 1 *"
            value={formData.address_line1}
            onChange={handleChange}
            required
            error={errors.address_line1}
          />
          <FormField
            name="address_line2"
            placeholder="Address Line 2"
            value={formData.address_line2}
            onChange={handleChange}
          />

          <div className="grid md:grid-cols-3 gap-5">
            <FormField
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <FormField
              name="state"
              type="select"
              options={indianStates}
              value={formData.state}
              onChange={handleChange}
              required
              error={errors.state}
            />
            <FormField
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              maxLength={6}
              error={errors.pincode}
            />
          </div>
        </div>

        <FormField
          label="8. Do you have any branch?"
          name="has_branch"
          type="select"
          options={["Yes", "No"]}
          value={formData.has_branch}
          onChange={handleChange}
          error={errors.has_branch}
        />

        <FormField
          label="9. PAN No."
          name="pan_no"
          value={formData.pan_no}
          onChange={handleChange}
          required
          maxLength={10}
          className="uppercase"
          error={errors.pan_no}
        />

        <FormField
          label="10. Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          error={errors.email}
        />

        <FormField
          label="11. Contact No."
          name="contact_no"
          value={formData.contact_no}
          onChange={handleChange}
          required
          maxLength={10}
          error={errors.contact_no}
        />

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <label className="block text-lg font-semibold text-gray-800 mb-3">Special Economic Zone (SEZ)?</label>
          <div className="flex gap-10">
            {["Yes", "No"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sez"
                  value={opt}
                  checked={formData.sez === opt}
                  onChange={handleChange}
                  className="w-5 h-5 text-orange-600"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className="pt-8 flex justify-center">
          <GradientButton type="submit" disabled={loading} className="text-lg py-4 px-20">
            {loading ? "Processing..." : "Submit Application"}
          </GradientButton>
        </div>
      </form>
    </div>
  );
}