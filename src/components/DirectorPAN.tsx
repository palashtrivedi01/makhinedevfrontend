import React, { useState } from "react";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";


interface DirectorPANProps {
  onValidated: () => void;
}

const DirectorPAN: React.FC<DirectorPANProps> = ({ onValidated }) => {
  const { t } = useTranslation();
  const [dob, setDob] = useState("");
  const [pan, setPan] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleValidate = () => {
    // Simple validation: DOB filled and PAN is 10 chars
    if (dob && pan.length === 10) {
      setIsValid(true);
      setIsInvalid(false);
    } else {
      setIsValid(false);
      setIsInvalid(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row border border-gray-300 bg-white overflow-hidden w-full pb-8">
      {/* Left Section */}
      <div className="md:w-1/3 p-6 flex flex-col justify-between border-r border-gray-300">
        <div>
          <h2 className="text-lg font-semibold mb-4">{t("RegBussOrg.DirectorPAN.Heading")}</h2>
          <p className="text-sm text-gray-700">
            <span className="font-medium">{t("RegBussOrg.DirectorPAN.DINNumberLabel")}:</span> 9012345
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">{t("RegBussOrg.DirectorPAN.FullNameLabel")}:</span> Rahul Raghuwanshi
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">{t("RegBussOrg.DirectorPAN.NationalityLabel")}:</span> India
          </p>
        </div>
        <button className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 w-fit rounded-3xl">
          {t("RegBussOrg.DirectorPAN.ChangeDirectorButton")}
        </button>


      </div>


      {/* Right Section */}
      <div className="md:w-2/3 p-6 flex flex-col md:flex-row items-top gap-6">
        {/* DOB Input */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("RegBussOrg.DirectorPAN.DOBLabel")}
          </label>
          <input
            type="date"
            className="w-full border rounded-md p-2 outline-none border-yellow-400"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        {/* PAN Input */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("RegBussOrg.DirectorPAN.PANLabel")}
          </label>
          <input
            type="text"
            placeholder={t("RegBussOrg.DirectorPAN.PANLabel")}
            className="w-full border rounded-md p-2 outline-none border-yellow-400"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
          />


          {/* Validate Button & Messages */}
          <div className="flex flex-col items-end mt-4 gap-2">
            <Button onClick={handleValidate} label={t("Buttons.Validate")} />

            {isValid && (
              <>
                <p className="text-green-600 text-sm">✅ {t("Validation Successful")}</p>
                <Button onClick={onValidated} label={t("Buttons.Continue")} />
              </>
            )}

            {isInvalid && <p className="text-red-500 text-sm">❌ {t("Please enter valid details")}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorPAN;
