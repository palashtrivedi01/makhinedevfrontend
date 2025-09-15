import SelectField from "./SelectField";

interface CountrySelectProps {
  country: string;
  setCountry: (value: string) => void;
}

export default function CountrySelect({ country, setCountry }: CountrySelectProps) {
  const countries = [
    { value: "india", label: "India", flag: "🇮🇳" },
    { value: "usa", label: "USA", flag: "🇺🇸" },
    { value: "uk", label: "UK", flag: "🇬🇧" },
  ];

  return (
    <SelectField
      label="Business Unit Registration Country"
      value={country}
      onChange={setCountry}
      options={countries.map((c) => ({
        value: c.value,
        label: `${c.flag} ${c.label}`,
      }))}
    />
  );
}
