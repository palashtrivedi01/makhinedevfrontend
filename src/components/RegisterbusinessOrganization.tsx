import { useState } from "react";
import { Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import CountrySelect from "../ui/CountrySelect";
import OwnershipSelect from "../ui/OwnershipSelect";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

export default function RegisterbusinessOrganization() {
  const [country, setCountry] = useState<string>("");
  const [ownership, setOwnership] = useState<string>("");


  const { t } = useTranslation();

  const navigate = useNavigate();



  const handleSubmit = () => {
    // Handle form submission logic here
    navigate('/register-business-organization');
  };

  return (
    <div className="w-full flex flex-col gap-6 p-6 bg-white rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-medium text-gray-700">{t("main.firstBusinessRegister")}</h2>
        <Info className="w-8 h-8 pt-2 text-yellow-500" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-start gap-4 ">
        <CountrySelect country={country} setCountry={setCountry} />
        <OwnershipSelect ownership={ownership} setOwnership={setOwnership} />
        <Button className ="" label= {t("Buttons.Save&Continue")} onClick={handleSubmit} />
      </div>
    </div>
  );
}
