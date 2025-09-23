import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { useTranslation } from "react-i18next";

export default function CityDropdown() {
  const [open, setOpen] = useState(false);
  const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
  const {t} = useTranslation();

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 border border-yellow-400 rounded-md px-2 py-0.5 text-gray-800 text-xs"
      >
        {t("Buttons.MoreCities")}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul className="absolute mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10">
          {cities.map((city, index) => (
            <li
              key={index}
              className="px-3 py-2 hover:bg-yellow-100 cursor-pointer"
              onClick={() => {
                setOpen(false);
                alert(`Selected: ${city}`);
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
