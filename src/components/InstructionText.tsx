import React from "react";
import { useTranslation } from "react-i18next";

interface InstructionTextProps {
  content: string[];
  note?: string;
}

const InstructionText: React.FC<InstructionTextProps> = ({ content, note }) => {
  const {t} = useTranslation();
  return (
    <div className="text-sm text-gray-700 flex flex-col gap-3">
      <p className="mb-2 font-medium">{t("RegBussOrg.PreReq")}</p>
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
