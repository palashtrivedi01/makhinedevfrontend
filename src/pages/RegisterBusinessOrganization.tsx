import React, { useState } from "react";
import InstructionText from "../components/InstructionText";
import CinForm from "../components/CinForm";
import CompanyForm from "../components/CompanyForm";
import { t } from "i18next";
import DirectorPANForm from "../components/DirectorPAN";
import DirectorAadhar from "../components/DirectorAdhar";



const RegisterForm: React.FC = () => {
  const [isCINValid, setIsCINValid] = useState<boolean>(false);
  const [isDirectorSelected, setIsDirectorSelected] = useState<boolean>(false);
  const [isPANVerified, setIsPANVerified] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1); // 1: CIN, 2: Company, 3: PAN, 4: Aadhar

  const handleCINValid = (valid: boolean) => {
    setIsCINValid(valid);
    if (valid) setStep(2);
  };

  const handleDirectorSelected = (selected: boolean) => {
    setIsDirectorSelected(selected);
    if (selected) setStep(3);
  };

  const handlePANVerified = () => {
    setIsPANVerified(!isPANVerified);
    setStep(4);
  };

  const handleChangeCIN = () => {
    setIsCINValid(false);
    setStep(1);
    setIsDirectorSelected(false);
    setIsPANVerified(false);
  };

  return (
    <div className="w-full h-fit min-h-screen flex flex-col gap-4 p-4 px-4 md:px-16 sm:px-4 sm:flex-col sm:gap-2 ">
      <h2 className="text-xl font-semibold text-center text-orange-500 mb-4">
        {t("RegBussOrg.Heading")}
      </h2>
      <InstructionText
        content={[
          t("RegBussOrg.Points1"),
          t("RegBussOrg.Points2"),
        ]}
        note={t("RegBussOrg.Note")}
      />

      {/* CIN Form is always visible */}
      <CinForm
        IsCINValid={isCINValid}
        setIsCINValid={handleCINValid}
        actionLabel={step === 1 ? "Validate" : "Change CIN"}
        onChangeCIN={step !== 1 ? handleChangeCIN : undefined}
      />

      {/* Step 2: Company Form */}
      {step === 2 && (
        <>
          <div className="border-t-2 border-gray-300 my-4"></div>
          <CompanyForm
            setIsDirectorSelected={handleDirectorSelected}
            isDirectorSelected={isDirectorSelected}
            company={{
              name: "HBRK Private Limited",
              date: "01-10-2016",
              country: "India",
              category: "Company Limited By Shares",
              subCategory: "Non Government",
              status: "Active",
              address: "XYZ Palasia Chouraha",
              email: "Xyz@gmail.com",
              classOfCompany: "Private",
              type: "Private",
            }}
          />
        </>
      )}

      {/* Step 3: Director PAN */}
      {step === 3 && (
        <>
          <div className="border-t-2 border-gray-300 my-4"></div>
          <DirectorPANForm onValidated={handlePANVerified} />
        </>
      )}

      {/* Step 4: Director Aadhar */}
      {step === 4 && (
        <>
          <div className="border-t-2 border-gray-300 my-4"></div>
          <DirectorAadhar />
        </>
      )}
    </div>
  );
};

export default RegisterForm;
