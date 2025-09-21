import SelectField from "./SelectField";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <SelectField
      label={t("main.BusinessRegisUnit")}   // ✅ fixed key spelling
      value={country}
      onChange={setCountry}
      options={countries.map((c) => ({
        value: c.value,
        label: `${c.flag} ${c.label}`,
      }))}
    />
  );
}
