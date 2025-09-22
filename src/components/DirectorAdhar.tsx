import React, { useState } from "react";
import { Edit } from "lucide-react"; // <-- import from lucide-react

const DirectorAadhar: React.FC = () => {
    const [fullName, setFullName] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const validateAadhar = (value: string) => {
        const aadharRegex = /^\d{4}\s\d{4}$/;
        return aadharRegex.test(value);
    };

    const handleValidate = () => {
        if (validateAadhar(aadhar)) {
            setIsValid(false);
            setIsInvalid(true);
        } else {
            setIsValid(true);
            setIsInvalid(false);
        }
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center p-6">
            <div className="flex flex-col md:flex-row border border-gray-300 bg-white max-w-5xl w-full p-6">
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
                <div className="md:w-2/3 flex flex-col md:flex-row gap-6 items-start pl-6">
                    {/* Full Name Input */}
                    <div className="flex-1 flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Full Name Of Aadhar Holder
                        </label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full border border-yellow-400 rounded-md p-2 outline-none"
                            disabled
                        />
                    </div>

                    {/* Aadhar Input */}
                    <div className="flex-1 flex flex-col relative">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Enter First 8 Digits Of Aadhar Number
                        </label>
                        <input
                            type="text"
                            placeholder="1234 5678"
                            value={aadhar}
                            onChange={(e) => setAadhar(e.target.value)}
                            className="w-full border border-yellow-400 rounded-md p-2 pr-10 outline-none"
                        />
                        <Edit className="absolute right-3 top-[2.3rem] text-gray-500 cursor-pointer" size={20} />

                        {/* Validation Message */}
                        {isValid && <p className="text-green-600 text-sm mt-1">Aadhar OTP verification Successful</p>}
                        {isInvalid && <p className="text-red-500 text-sm mt-1">❌ Please enter valid details</p>}
                    </div>



                    <div className="flex flex-col justify-between h">
                    {/* Validate Button */}
                    <div className="flex flr items-center mt-6 md:mt-0">
                        <button
                            className={`${isValid ? "bg-gray-400" : "bg-orange-500"} text-white px-4 py-2 rounded-3xl`}
                            onClick={handleValidate}
                        >
                            Validate
                        </button>
                    </div>
                    {isValid && (
                        <div className="flex items-center mt-6 md:mt-0">
                            <button
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-3xl"
                                onClick={() => alert("Continue clicked")}
                            >
                                Continue
                            </button>
                        </div>
                    )}
                    </div>
                </div>

            </div>
        </div>

    );
};

export default DirectorAadhar;
