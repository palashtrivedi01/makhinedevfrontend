import SelectField from "./SelectField";
import { useTranslation } from "react-i18next";

interface CountrySelectProps {
  country: string;
  setCountry: (value: string) => void;
}

export default function CountrySelect({ country, setCountry }:
CountrySelectProps) {
    const { t } = useTranslation();

  const countries = [
    { value: "india", label: t("main.Countries.india"), flag: "🇮🇳" },
    { value: "usa", label: t("main.Countries.usa"), flag: "🇺🇸" },
    { value: "uk", label: t("main.Countries.uk"), flag: "🇬🇧" },
  ];
 // const { t } = useTranslation();


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
