

export function fullBaseUrl() {

    return process.env.NEXT_PUBLIC_API_BASE_URL + '/api'
}

export function getRecaptchaKey() {

    return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
}