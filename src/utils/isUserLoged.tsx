import Cookies from "js-cookie"

export const isUserLogeddin = (): boolean => {
    const token = Cookies.get('authtoken')
    return token ? true : false
}