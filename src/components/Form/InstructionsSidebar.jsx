export default function InstructionsSidebar() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 sticky top-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center md:text-left">
        Important Instructions
      </h2>

      <ol className="space-y-5 text-sm md:text-base text-gray-800 list-decimal pl-6 leading-relaxed">
        <li>
          <strong>Requirement :</strong> Select <strong>New</strong> if you require a fresh IEC Code. Select <strong>Modify</strong> if you need changes in existing IEC Code.
        </li>

        <li>
          <strong>Name of Business Entity :</strong> Fill the Business Entity which will get printed on IEC Certificate.
        </li>

        <li>
          <strong>Constitution of Business :</strong> Select business type of the applicant in which name IEC requires to apply.
        </li>

        <li>
          <strong>Description of Business :</strong> Fill the name of Business / Enterprise which will get printed on IEC Certificate.
        </li>

        <li>
          <strong>Business Activity :</strong> Select main business activity to be conducted.
        </li>

        <li>
          <strong>Date of Incorporation / Date of Birth :</strong> Select your Date of Incorporation / Date of Birth.
        </li>

        <li>
          <strong>Owner's Residence Address (Same as Above) :</strong> Fill complete residential address of business owner.
        </li>

        <li>
          <strong>Have Any Branch :</strong> Do You Have Any Branch?
        </li>

        <li>
          <strong>PAN of Entity :</strong> Fill the correct PAN Number of Business Entity.
        </li>

        <li>
          <strong>E-Mail ID :</strong> Fill the correct Email ID of Applicant.
        </li>

        <li>
          <strong>Mobile No :</strong> Fill the correct Mobile Number of Applicant.
        </li>
      </ol>

      <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-600">
        <p className="italic">
          Note: This is a consultancy assisted form — not the official DGFT portal. Make sure all details match your official documents.
        </p>
      </div>
    </div>
  );
}