import { redirect } from "react-router-dom"

export function requireAuth(request) {
    const redirectUrl = new URL(request.url).pathname
    const loggedIn = Boolean(localStorage.getItem("loggedIn"))
    if(!loggedIn)
        throw redirect(`/login?message=YoU must log in first&redirectTo=${redirectUrl}`)
}