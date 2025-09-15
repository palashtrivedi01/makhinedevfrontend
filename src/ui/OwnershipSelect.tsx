import SelectField from "./SelectField";

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

  return (
    <SelectField
      label="Business Unit Ownership Mode"
      value={ownership}
      onChange={setOwnership}
      options={ownershipOptions}
    />
  );
}
