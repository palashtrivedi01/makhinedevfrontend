import React, { useState } from "react";
import { Edit } from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

interface DirectorAadharProps {
  onCompleted?: () => void;
}

const DirectorAadhar: React.FC<DirectorAadharProps> = ({ onCompleted }) => {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [isValidAadhar, setIsValidAadhar] = useState(false);
  const [isInvalidAadhar, setIsInvalidAadhar] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState("");

  // const validateAadhar = (value: string) => /^\d{4}\s\d{4}$/.test(value);

  const handleValidate = () => {
    if (aadhar) {
      setIsValidAadhar(true);
      setIsInvalidAadhar(false);
      setOtpSent(true);
      setOtpVerified(false);
      setOtpError("");
      
    } else {
      setIsValidAadhar(false);
      setIsInvalidAadhar(true);
      setOtpSent(false);
    }
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      setOtpVerified(true);
      setOtpError("");
    } else {
      setOtpVerified(false);
      setOtpError("❌ " + t("RegBussOrg.DirectorPAN.AadhaarNumberLabel") + " " + t("Buttons.Validate"));
    }
  };

  const handleContinue = () => {
    if (otpVerified && onCompleted) onCompleted();
  };

  return (
    <div className="flex flex-col md:flex-row border border-gray-300 bg-white w-full p-6 rounded-md shadow-sm">

      {/* Left Section */}
      <div className="md:w-1/3 flex flex-col justify-between pr-6 border-r border-gray-300">
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
      <div className="md:w-2/3 flex flex-col gap-6 pl-6">

        {/* Aadhaar Row */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Full Name Input */}
          <div className="flex-1 flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              {t("RegBussOrg.DirectorPAN.FullNameAdhar")}
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-yellow-400 rounded-md p-2 outline-none"
            />
          </div>

          {/* Aadhaar Input */}
          <div className="flex-1 flex flex-col relative">
            <label className="text-sm font-medium text-gray-700 mb-1">
              {t("RegBussOrg.DirectorPAN.AadhaarNumberLabel")}
            </label>
            <input
              type="text"
              maxLength={8}
              placeholder="1234 5678"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              className="w-full border border-yellow-400 rounded-md p-2 pr-10 outline-none"
            />
            <Edit
              className="absolute right-3 top-[2.3rem] text-gray-500 cursor-pointer"
              size={20}
            />
            {isValidAadhar && <p className="text-green-600 text-sm mt-1">✅ {t("Buttons.Validate")}</p>}
            {isInvalidAadhar && <p className="text-red-500 text-sm mt-1">❌ {t("RegBussOrg.DirectorPAN.AadhaarNumberLabel")}</p>}
          </div>

          {/* Validate Button */}
          <div className="flex flex-col mt-4 justify-start">
            <Button onClick={handleValidate} label={t("Buttons.Validate")} />
          </div>

        </div>

        {/* OTP Section */}
        {otpSent && !otpVerified && (
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">{t("RegBussOrg.DirectorPAN.AadhaarNumberLabel")}</label>
              <input
                type="text"
                maxLength={6}
                placeholder={t("RegBussOrg.DirectorPAN.DOBPlaceholder")}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-yellow-400 rounded-md p-2 outline-none"
              />
              {otpError && <p className="text-red-500 text-sm mt-1">{otpError}</p>}
            </div>
            <Button onClick={handleVerifyOtp} label={t("Buttons.Validate")} />
          </div>
        )}

        {/* Success + Continue */}
        {otpVerified && (
          <div className="flex flex-col gap-2">
            <p className="text-green-600 text-sm">✅ {t("Buttons.Validate")} Successful</p>
            <Button onClick={handleContinue} label={t("Buttons.Continue")} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DirectorAadhar;
