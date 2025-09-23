import React, { useState } from "react";
import { Edit } from "lucide-react";

const DirectorAadhar: React.FC = () => {
  const [fullName] = useState();
  const [aadhar, setAadhar] = useState("");
  const [isValidAadhar, setIsValidAadhar] = useState(false);
  const [isInvalidAadhar, setIsInvalidAadhar] = useState(false);

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState("");

  const validateAadhar = (value: string) => {
    const aadharRegex = /^\d{4}\s\d{4}$/; // matches "1234 5678"
    return aadharRegex.test(value);
  };

  const handleValidate = () => {
    if (validateAadhar(aadhar)) {
      setIsValidAadhar(false);
      setIsInvalidAadhar(true);
      setOtpSent(false);
      setOtpError("");
      alert("OTP sent to your registered mobile number");
    } else {
      setIsValidAadhar(true);
      setIsInvalidAadhar(false);
      setOtpSent(true);
      setOtpVerified(false);
    }
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      setOtpVerified(true);
      setOtpError("");
    } else {
      setOtpVerified(false);
      setOtpError("❌ Invalid OTP");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-6">
      <div className="flex flex-col md:flex-row border border-gray-300 bg-white max-w-6xl w-full p-6 rounded-md shadow-sm">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col justify-between pr-6 border-r border-gray-300">
          <div>
            <h2 className="text-lg font-semibold mb-4">Director Details</h2>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Director DIN Number:</span> 9012345
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Director Full Name:</span> Rahul Raghuwanshi
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Nationality:</span> India
            </p>
          </div>
          <button className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 w-fit rounded-3xl">
            Change Director
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 flex flex-col gap-6 pl-6">
          {/* Aadhaar Row */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Full Name Input */}
            <div className="flex-1 flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Full Name Of Aadhaar Holder
              </label>
              <input
                type="text"
                value={fullName}
                className="w-full border border-yellow-400 rounded-md p-2 outline-none bg-gray-100"
              />
            </div>

            {/* Aadhaar Input */}
            <div className="flex-1 flex flex-col relative">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Enter First 8 Digits Of Aadhaar Number
              </label>
              <input
                type="text"
                placeholder="1234 5678"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                className="w-full border border-yellow-400 rounded-md p-2 pr-10 outline-none"
              />
              <Edit
                className="absolute right-3 top-[2.3rem] text-gray-500 cursor-pointer"
                size={20}
              />

              {/* Aadhaar Validation Messages */}
              {isValidAadhar && (
                <p className="text-green-600 text-sm mt-1">✅ Aadhaar verified, OTP sent</p>
              )}
              {isInvalidAadhar && (
                <p className="text-red-500 text-sm mt-1">❌ Please enter valid Aadhaar</p>
              )}
            </div>

            {/* Validate Button */}
            <div className="flex flex-col justify-start">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-3xl mt-6 md:mt-0"
                onClick={handleValidate}
              >
                Validate
              </button>
            </div>
          </div>

          {/* OTP Input Section */}
          {otpSent && !otpVerified && (
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full border border-yellow-400 rounded-md p-2 outline-none"
                />
                {otpError && <p className="text-red-500 text-sm mt-1">{otpError}</p>}
              </div>

              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-3xl mt-6 md:mt-0"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </div>
          )}

          {/* Success + Continue */}
          {otpVerified && (
            <div className="flex flex-col gap-2">
              <p className="text-green-600 text-sm">✅ Aadhaar OTP verification Successful</p>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-3xl w-fit"
                onClick={() => alert("Continue clicked")}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectorAadhar;
