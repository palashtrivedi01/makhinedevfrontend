import React from "react";

interface CaptchaBoxProps {
  captcha: string;
}
const CaptchaBox: React.FC<CaptchaBoxProps> = ({ captcha }) => {
  return (
    <div className="flex items-center gap-2 border border-yellow-400 rounded-md px-3 py-2">
      <span className="font-mono text-gray-700">{captcha}</span>
    </div>
  );
};

export default CaptchaBox;
