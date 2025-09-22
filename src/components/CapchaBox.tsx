import React from "react";
import { RefreshCw } from "lucide-react";

interface CaptchaBoxProps {
  captcha: string;
  onRefresh: () => void;
}

const CaptchaBox: React.FC<CaptchaBoxProps> = ({ captcha, onRefresh }) => {
  return (
    <div className="flex items-center gap-2 border border-yellow-400 rounded-md px-3 py-2">
      <span className="font-mono text-gray-700">{captcha}</span>
      <button type="button" onClick={onRefresh}>
        <RefreshCw className="w-4 h-4 text-gray-500 hover:text-black" />
      </button>
    </div>
  );
};

export default CaptchaBox;
