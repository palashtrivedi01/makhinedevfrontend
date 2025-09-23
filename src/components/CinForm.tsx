import { useState, useEffect } from "react"
import InputField from "../ui/InputField"
import CaptchaBox from "./CapchaBox"
import Button from "../ui/Button"

interface CinFormProps {
    IsCINValid: boolean;
    setIsCINValid: (isValid: boolean) => void;
    actionLabel?: string;
    onChangeCIN?: () => void;
}

const CinForm = ({ IsCINValid, setIsCINValid, actionLabel = "Validate", onChangeCIN }: CinFormProps) => {
    const genCaptcha = () => {
        return Math.random().toString(36).substring(2, 10).toUpperCase();
    }

    const [cin, setCin] = useState("")
    const [captcha, setCaptcha] = useState(genCaptcha())
    const [enteredCaptcha, setEnteredCaptcha] = useState("")
    const [captchaError, setCaptchaError] = useState<string>("")

    // Reset form if CIN is changed
    useEffect(() => {
        if (!IsCINValid) {
            setCin("");
            setEnteredCaptcha("");
            setCaptcha(genCaptcha());
            setCaptchaError("");
        }
    }, [IsCINValid]);

    const refreshCaptcha = () => {
        const newCaptcha = genCaptcha();
        setCaptcha(newCaptcha);
    }

    const isCaptchaValid = () => {
        return enteredCaptcha === captcha;
    }

    const handleValidate = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (actionLabel === "Change CIN" && onChangeCIN) {
            onChangeCIN();
            return;
        }
        if (isCaptchaValid()) {
            setCaptchaError("");
            setIsCINValid(true);
        } else {
            setCaptchaError("❌ Captcha does not match. Please try again.");
            refreshCaptcha();
            setEnteredCaptcha("");
        }
    }

    const handleCaptchaInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredCaptcha(e.target.value);
        if (e.target.value === captcha && captchaError) {
            setCaptchaError("");
        }
    };

    return (
        <>
            <form className="p-4 flex flex-row gap-4 items-end" onSubmit={handleValidate}>
                <InputField
                    label="CIN (Company Incorporation Number)"
                    placeholder="HGEUA9660T"
                    value={cin}
                    onChange={(e) => setCin(e.target.value)}
                    tooltip="Enter your 21-digit CIN"
                    readonly={IsCINValid}
                />

                <div>
                    <label className="text-sm font-medium text-gray-700">Captcha</label>
                    <CaptchaBox captcha={captcha} />
                </div>

                <InputField
                    label="Enter Captcha"
                    placeholder="HGEUA9660T"
                    value={enteredCaptcha}
                    onChange={handleCaptchaInput}
                    readonly={IsCINValid}
                />

                <Button label={actionLabel} onClick={handleValidate} />
            </form>
            {captchaError && (
                <div className="text-red-500 text-sm px-4">{captchaError}</div>
            )}
        </>
    )
}

export default CinForm