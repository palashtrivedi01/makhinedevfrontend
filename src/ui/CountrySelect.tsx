import SelectField from "./SelectField";

import { useTranslation } from "react-i18next";

import { getCountries } from "../services/third-party-api.ts"
import React,{ useEffect } from "react";


interface CountrySelectProps {
  country: string;
  setCountry: (value: string) => void;
}


export default function CountrySelect({ country, setCountry }:
CountrySelectProps) {
    const { t } = useTranslation();
  interface Country {
    value: string;
    country_code: string;
    name: string;
  }

  const [countries, setCountries] = React.useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountries();
        setCountries(await res.countries);
        
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);
  
  return (
    <SelectField
      label={t("main.BusinessRegisUnit")}   // ✅ fixed key spelling
      value={country}
      onChange={setCountry}
      options={countries.map((c) => ({
        value: c.value,
        label: `${c.name} - ${c.country_code}`,
      }))}
    />
  );
}
