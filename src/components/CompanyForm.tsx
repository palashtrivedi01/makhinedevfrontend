import React, { useState } from "react";
import InputField from "../ui/InputField";
import DirectorTable from "./DirectorTable";
import Button from "../ui/Button";

interface CompanyDetails {
  name: string;
  date: string;
  country: string;
  category: string;
  subCategory: string;
  status: string;
  address: string;
  email: string;
  classOfCompany: string;
  type: string;
}

interface CompanyFormProps {
  company: CompanyDetails;
  
}

const CompanyForm: React.FC<CompanyFormProps> = ({ company }) => {
  const [selectedDirector, setSelectedDirector] = useState<string>("");

  const directors = [
    { din: "9012345", name: "Rahul Raghuwanshi", joiningDate: "01-10-2017", status: "Active" },
    { din: "9012346", name: "Rahul Raghuwanshi", joiningDate: "01-10-2017", status: "Active" },
    { din: "9012347", name: "Rahul Raghuwanshi", joiningDate: "01-10-2017", status: "Active" },
    { din: "9012348", name: "Rahul Raghuwanshi", joiningDate: "01-10-2017", status: "Active" },
  ];

  const handleContinue = () => {
    if (!selectedDirector) {
      alert("Please select a director ❌");
      return;
    }
    alert(`✅ Company registered with director DIN: ${selectedDirector}`);
  };

  return (
    <div className="border border-gray-300 p-6 bg-white w-full">
      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField label="Company Name" placeholder="Enter company name" value={company.name} readonly />
        <InputField label="Date Of Incorporation" placeholder="DD-MM-YYYY" value={company.date} readonly />
        <InputField label="Country Of Incorporation" placeholder="Enter country" value={company.country} readonly />

        <InputField label="Company Category" placeholder="Enter category" value={company.category} readonly />
        <InputField label="Company Sub Category" placeholder="Enter sub category" value={company.subCategory} readonly />
        <InputField label="Company Status" placeholder="Enter status" value={company.status} readonly />

        <InputField label="Company Address" placeholder="Enter address" value={company.address} readonly />
        <InputField label="Registered Email Address" placeholder="Enter email" value={company.email} readonly />
        <InputField label="Class Of Company" placeholder="Enter class" value={company.classOfCompany} readonly   />

        <InputField label="Company Type" placeholder="Enter type" value={company.type} readonly />
      </div>

      {/* Note */}
      <p className="text-xs text-gray-600 mt-4">
        Please choose the Director, who is an Indian National. This DIN owner will do the Aadhaar Based Esigning of the Terms Agreement with Mcaikname.
        <br />
        <strong>Note:</strong> For Aadhaar Based Esigning, it is mandatory that your mobile number is linked to your Aadhaar number.
      </p>

      {/* Directors Table */}
      <DirectorTable directors={directors} onSelect={setSelectedDirector} />

      {/* Continue Button */}
      <div className="flex justify-end mt-4">
        <Button label="Continue" onClick={handleContinue} />
      </div>
    </div>
  );
};

export default CompanyForm;
