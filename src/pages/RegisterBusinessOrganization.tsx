import React from "react";
import InstructionText from "../components/InstructionText";
import CinForm from "../components/CinForm";


const RegisterForm: React.FC = () => {
  return (
    <div className="w-full h-fit min-h-screen flex flex-col gap-4 p-4 px-16">
      <h2 className="text-xl font-semibold text-center text-orange-500 mb-4">
        Register business organisation
      </h2>
      <InstructionText
        content={[
          "CIN number of the Company: CIN number assigned for company registration in India...",
          "DIN number of Director of the Company: DIN of an active Director of the Company..."
        ]}
        note="For Aadhaar Based Esigning, it is mandatory that your mobile number is linked to your Aadhaar number."
      />
      <CinForm />
    </div>
  );
};

export default RegisterForm;
