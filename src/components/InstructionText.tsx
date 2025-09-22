import React from "react";

interface InstructionTextProps {
  content: string[];
  note?: string;
}

const InstructionText: React.FC<InstructionTextProps> = ({ content, note }) => {
  return (
    <div className="text-sm text-gray-700 flex flex-col gap-3">
      <p className="mb-2 font-medium">Prerequisites that User shall keep ready:</p>
      <ul className="list-decimal list-inside space-y-1 mb-3">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {note && <p className="text-gray-600">{`Note: ${note}`}</p>}
    </div>
  );
};

export default InstructionText;
