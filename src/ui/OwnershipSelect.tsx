import SelectField from "./SelectField";
import { useTranslation } from "react-i18next";

interface OwnershipSelectProps {
  ownership: string;
  setOwnership: (value: string) => void;
}

export default function OwnershipSelect({ ownership, setOwnership }: OwnershipSelectProps) {
  const ownershipOptions = [
    { value: "sole", label: "Sole Proprietorship" },
    { value: "partnership", label: "Partnership" },
    { value: "private_ltd", label: "Private Limited" },
    { value: "public_ltd", label: "Public Limited" },
  ];
    const { t } = useTranslation();

  return (
    <SelectField
      label={t("main.BusinessOwnershipUnit")}
      value={ownership}
      onChange={setOwnership}
      options={ownershipOptions}
    />
  );
}
