import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import DirectorTable from "./DirectorTable";

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
  setIsDirectorSelected: (isSelected: boolean) => void;
  isDirectorSelected: boolean;
  company: CompanyDetails;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ company }) => {
  const { t } = useTranslation();


  const [selectedDirector, setSelectedDirector] = useState<string>("");
  const [directorError, setDirectorError] = useState<string>(""); // <-- Add error state

  const directors = [
    { din: "9012345", name: "Rahul Raghuwanshi", joiningDate: "01-10-2017", status: "Active" },
    { din: "9012346", name: "Rahul Raghuwanshi", joiningDate: "01-10-2017", status: "Active" },
    { din: "9012347", name: "Rahul Raghuwanshi", joiningDate: "01-10-2017", status: "Active" },
    { din: "9012348", name: "Rahul Raghuwanshi", joiningDate: "01-10-2017", status: "Active" },
  ];

  const handleContinue = () => {
    if (!selectedDirector) {
      setDirectorError("Please select a director ❌");
      return;
    }
    setDirectorError(""); // Clear error
    setIsDirectorSelected(true); // This will trigger the next step
  };

  return (
    <div className="border border-gray-300 p-6 bg-white w-full">
      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label={t("RegBussOrg.CompanyDetails.ComName")}
          placeholder="Enter company name"
          value={company.name}
          readonly
        />
        <InputField
          label={t("RegBussOrg.CompanyDetails.DateOfIncorp")}
          placeholder="DD-MM-YYYY"
          value={company.date}
          readonly
        />
        <InputField
          label={t("RegBussOrg.CompanyDetails.CountryIncrop")}
          placeholder="Enter country"
          value={company.country}
          readonly
        />

        <InputField
          label={t("RegBussOrg.CompanyDetails.ComCategory")}
          placeholder="Enter category"
          value={company.category}
          readonly
        />
        <InputField
          label={t("RegBussOrg.CompanyDetails.ComSubCategory")}
          placeholder="Enter sub category"
          value={company.subCategory}
          readonly
        />
        <InputField
          label={t("RegBussOrg.CompanyDetails.Comstatus")}
          placeholder="Enter status"
          value={company.status}
          readonly
        />

        <InputField
          label={t("RegBussOrg.CompanyDetails.ComAddres")}
          placeholder="Enter address"
          value={company.address}
          readonly
        />
        <InputField
          label={t("RegBussOrg.CompanyDetails.RegEmail")}
          placeholder="Enter email"
          value={company.email}
          readonly
        />
        <InputField
          label={t("RegBussOrg.CompanyDetails.ClassOfCom")}
          placeholder="Enter class"
          value={company.classOfCompany}
          readonly
        />

        <InputField
          label={t("RegBussOrg.CompanyDetails.ComType")}
          placeholder="Enter type"
          value={company.type}
          readonly
        />
      </div>

      {/* Note */}
      <p className="text-xs text-gray-600 mt-4">
        {t("RegBussOrg.CompanyDetails.para")}
        <br />
        <strong>{t("RegBussOrg.CompanyDetails.Note1")}</strong>
      </p>

      {/* Directors Table */}
      <DirectorTable directors={directors} onSelect={setSelectedDirector} />

      {/* Validation Message */}
      {directorError && (
        <div className="text-red-500 text-sm mt-2">{directorError}</div>
      )}

      {/* Continue Button */}
      <div className="flex justify-end mt-4">
        <Button label={t("Buttons.Continue")} onClick={handleContinue} />
      </div>
    </div>
  );
};

export default CompanyForm;