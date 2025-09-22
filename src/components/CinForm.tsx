import { useState } from "react"
import InputField from "../ui/InputField"
import CaptchaBox from "./CapchaBox"
import Button from "../ui/Button"


const CinForm = () => {
    const genCaptcha = () => {
        return Math.random().toString(36).substring(2, 10).toUpperCase();
    }

    
    const [cin, setCin] = useState("")
    const [captcha, setCaptcha] = useState(genCaptcha())
    const [enteredCaptcha, setEnteredCaptcha] = useState("")
    
    const refreshCaptcha = () => {
        const newCaptcha = genCaptcha();
        setCaptcha(newCaptcha);
    }

    const isCaptchaValid = () => {
        return enteredCaptcha === captcha;
    }

    const handleValidate = () => {
        if (isCaptchaValid()) {
            // Proceed with validation
        } else {
            alert("Captcha does not match. Please try again.");
            refreshCaptcha();
            setEnteredCaptcha("");
        }
    }

    return (
        <>
            <form className="p-4 flex flex-row gap-4 items-end">
                <InputField
                    label="CIN (Company Incorporation Number)"
                    placeholder="HGEUA9660T"
                    value={cin}
                    onChange={(e) => setCin(e.target.value)}
                    tooltip="Enter your 21-digit CIN"
                />

                <div>
                    <label className="text-sm font-medium text-gray-700">Captcha</label>
                    <CaptchaBox captcha={captcha} />
                </div>

                <InputField
                    label="Enter Captcha"
                    placeholder="HGEUA9660T"
                    value={enteredCaptcha}
                    onChange={(e) => setEnteredCaptcha(e.target.value)}
                />

                <Button label="Validate" onClick={handleValidate} />
            </form>
        </>
    )
}

export default CinForm