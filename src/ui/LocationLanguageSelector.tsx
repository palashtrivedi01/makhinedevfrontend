
import { ChevronDown, MapPin, Languages } from "lucide-react";
import { useState } from "react";

import { ChevronDown, Languages, MapPin } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export const LocationLanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "hn", label: "हिंदी", flag: "🇮🇳" },
  ];

  // Find the active language details
  const currentLang =
    languages.find((lng) => lng.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="flex gap-3 relative">
      {/* Country selector (static for now) */}
      <div className="flex items-center gap-2 border border-yellow-400 rounded-md px-3 py-1">
        <span className="text-sm">🇮🇳</span>
        <MapPin className="w-3 h-3 text-red-500" />
      </div>

      {/* Language dropdown */}
      <div
        className="flex items-center gap-2 border border-yellow-400 rounded-md px-3 py-1 cursor-pointer relative"
        onClick={() => setOpen(!open)}
      >
        <Languages className="w-3 h-3 text-black" />
        <span className="text-xs font-medium">
          {currentLang.flag} {currentLang.label}
        </span>
        <ChevronDown className="w-3 h-3" />

        {open && (
          <div className="absolute top-10 right-0 bg-white shadow-md rounded-md border border-gray-200 z-10">
            {languages.map((lng) => (
              <button
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
                className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                <span>{lng.flag}</span>
                {lng.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationLanguageSelector;
