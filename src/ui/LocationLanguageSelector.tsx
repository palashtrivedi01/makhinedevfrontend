import React, { useState } from "react";
import { ChevronDown, MapPin, Languages } from "lucide-react";


export  const  LocationLanguageSelector = () => {
  const [language, setLanguage] = useState("English");
  const [country, setCountry] = useState("India");

  return (
    <div className="flex gap-3">
      <div className="flex items-center gap-2 border border-yellow-400 rounded-md px-3 py-1">
        <span className="text-sm">🇮🇳</span>
        <span className="text-xs font-medium">{country}</span>
        <MapPin className="w-3 h-3 text-red-500" />
      </div>

      <div className="flex items-center gap-2 border border-yellow-400 rounded-md px-3 py-1 cursor-pointer">
        <Languages className="w-3 h-3 text-black" />
        <span className="text-xs font-medium">{language}</span>
        <ChevronDown className="w-3 h-3" />
      </div>
    </div>
  );
}


export default LocationLanguageSelector;