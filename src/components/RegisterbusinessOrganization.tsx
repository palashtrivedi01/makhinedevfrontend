import { useState } from "react";
import { Info } from "lucide-react";
import CountrySelect from "../ui/CountrySelect";
import OwnershipSelect from "../ui/OwnershipSelect";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

export default function RegisterbusinessOrganization() {
  const [country, setCountry] = useState<string>("");
  const [ownership, setOwnership] = useState<string>("");

  const navigate = useNavigate();


  const handleSubmit = () => {
    navigate('register-business-organization');
  };

  return (
    <div className="w-full flex flex-col gap-6 p-6 bg-white rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-medium text-gray-700">First Register Business Organization</h2>
        <Info className="w-8 h-8 pt-2 text-yellow-500" />
      </div>

      <div className="flex items-end gap-4">
        <CountrySelect country={country} setCountry={setCountry} />
        <OwnershipSelect ownership={ownership} setOwnership={setOwnership} />
        <Button label="Save And Continue" onClick={handleSubmit} />
      </div>
    </div>
  );
}
