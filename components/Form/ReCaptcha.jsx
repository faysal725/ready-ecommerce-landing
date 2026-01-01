import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { getRecaptchaKey } from '@/lib/exportVariables';


export default function ReCaptcha() {

    const recaptchaKey = getRecaptchaKey()
    const handleRecaptchaChange = (value) => {
        console.log("Captcha token:", value);
        // you can send `value` (the token) to your server to verify
    };
    return (
        <ReCAPTCHA sitekey={recaptchaKey}
            onChange={handleRecaptchaChange}
        />
    )
}
