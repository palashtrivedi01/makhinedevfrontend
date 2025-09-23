import React, { useState } from "react";
import Button from "../ui/Button";

interface DirectorPANProps {
  onValidated: () => void;
}

const DirectorPAN: React.FC<DirectorPANProps> = ({ onValidated }) => {
  const [dob, setDob] = useState("");
  const [pan, setPan] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const validatePan = (pan: string) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;
    return panRegex.test(pan);
  };

  // Check validation
  const handleValidate = () => {
    if (dob && validatePan(pan)) {
      setIsValid(true);
      setIsInvalid(false);
    } else {
      setIsValid(false);
      setIsInvalid(true);
    }
  };

  const handleContinue = () => {
    if (isValid) {
      onValidated();
    }
  };

  return (
    <div className="flex flex-col md:flex-row border border-gray-300 bg-white overflow-hidden w-full pb-8">
      {/* Left Section */}
      <div className="md:w-1/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-4">Director Details</h2>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Director DIN Number:</span> 9012345
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Director Full Name:</span> Rahul
            Raghuwanshi
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Nationality:</span> India
          </p>
        </div>
        <button className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 w-fit rounded-3xl">
          Change Director
        </button>
      </div>

      {/* Divider */}
      <div className="w-[1px] bg-gray-300 my-6" />

      {/* Right Section */}
      <div className="md:w-2/3 p-6 flex flex-col md:flex-row items-top gap-6">
        {/* DOB Input */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Date Of Birth Of DIN Holder
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
            Enter PAN Number Of DIN Holder
          </label>
          <input
            type="text"
            placeholder="Enter PAN Number"
            className="w-full border rounded-md p-2 outline-none border-yellow-400"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
          />
        </div>

        {/* Validate Button */}
        <div className="flex flex-col gap-2 mt-4">
          <Button onClick={handleValidate} label="Validate" />

          {isValid && (
            <>
              <p className="text-green-600 text-sm">✅ Validation Successful</p>
              <Button onClick={handleContinue} label="Continue" />
            </>
          )}

          {isInvalid && (
            <p className="text-red-500 text-sm">❌ Please enter valid details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectorPAN;
