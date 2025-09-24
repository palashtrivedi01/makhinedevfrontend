import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface Director {
  din: string;
  name: string;
  joiningDate: string;
  status: string;
}

interface DirectorTableProps {
  directors: Director[];
  onSelect: (din: string) => void;
}

const DirectorTable: React.FC<DirectorTableProps> = ({ directors, onSelect }) => {
  const [selectedDIN, setSelectedDIN] = useState<string>("");
  const { t } = useTranslation();

  const handleSelect = (din: string) => {
    setSelectedDIN(din);
    onSelect(din);
  };

  return (
    <div className="overflow-x-auto">
    <table className="w-full border border-gray-200 mt-4 text-sm overflow-x-auto">
      <thead>
        <tr className="bg-orange-400 text-white text-left">
          <th className="p-2">{t("RegBussOrg.Select")}</th>
          <th className="p-2">{t("RegBussOrg.DINnumber")}</th>
          <th className="p-2">{t("RegBussOrg.DirectorName")}</th>
          <th className="p-2">{t("RegBussOrg.DateJoin")}</th>
          <th className="p-2">{t("RegBussOrg.DINStatus")}</th>
        </tr>
      </thead>
      <tbody>
        {directors.map((director, idx) => (
          <tr
            key={idx}
            className={`border-t ${
              selectedDIN === director.din ? "bg-orange-100" : "bg-white"
            }`}
          >
            <td className="p-2">
              <input
                type="radio"
                name="director"
                checked={selectedDIN === director.din}
                onChange={() => handleSelect(director.din)}
              />
            </td>
            <td className="p-2">{director.din}</td>
            <td className="p-2">{director.name}</td>
            <td className="p-2">{director.joiningDate}</td>
            <td className="p-2">{director.status}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
  );
};

export default DirectorTable;
