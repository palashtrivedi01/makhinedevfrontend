import React from "react";
import InstructionText from "../components/InstructionText";
import CinForm from "../components/CinForm";
import CompanyForm from "../components/CompanyForm";

const RegisterForm: React.FC = () => {


  return (
    <div className="w-full h-fit min-h-screen flex flex-col gap-4 p-4 px-16">
      <h2 className="text-xl font-semibold text-center text-orange-500 mb-4">
        Register business organisation
      </h2>
      <InstructionText
        content={[
          "CIN number of the Company: CIN number assigned for company registration in India...",
          "DIN number of Director of the Company: DIN of an active Director of the Company...",
        ]}
        note="For Aadhaar Based Esigning, it is mandatory that your mobile number is linked to your Aadhaar number."
      />
      <CinForm />
      <div className="border-t-2 border-gray-300 my-4"></div>
      <CompanyForm
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
    </div>
  );
};

export default RegisterForm;
