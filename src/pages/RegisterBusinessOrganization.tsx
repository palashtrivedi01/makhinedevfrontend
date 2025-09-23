import React from "react";
import InstructionText from "../components/InstructionText";
import CinForm from "../components/CinForm";
import CompanyForm from "../components/CompanyForm";
import { useTranslation } from "react-i18next";

const RegisterForm: React.FC = () => {
  const {t} = useTranslation();


  return (
    <div className="w-full h-fit min-h-screen flex flex-col gap-4 p-4 px-16">
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
