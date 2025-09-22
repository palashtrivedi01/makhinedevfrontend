import React, { useState } from "react";

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

  const handleSelect = (din: string) => {
    setSelectedDIN(din);
    onSelect(din);
  };

  return (
    <table className="w-full border border-gray-200 mt-4 text-sm">
      <thead>
        <tr className="bg-orange-400 text-white text-left">
          <th className="p-2">Select</th>
          <th className="p-2">DIN Number</th>
          <th className="p-2">Director Name</th>
          <th className="p-2">Date of Joining</th>
          <th className="p-2">DIN Status</th>
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
  );
};

export default DirectorTable;
