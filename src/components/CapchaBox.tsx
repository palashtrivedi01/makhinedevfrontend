import React from "react";
import InputField from "../ui/InputField";

interface CaptchaBoxProps {
  captcha: string;
}
const CaptchaBox: React.FC<CaptchaBoxProps> = ({ captcha }) => {
  return (
    <InputField
      label="Captcha"
      value={captcha}
      placeholder=""
      readonly={true}
    />
  );
};

export default CaptchaBox;
