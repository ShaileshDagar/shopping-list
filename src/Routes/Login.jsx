import { Form, redirect, useActionData, useLoaderData, useNavigation } from "react-router-dom"
import {loginUser} from '../api'

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const redirectUrl = new URL(request.url).searchParams.get("redirectTo") || "/list"

    try {
        const user = await loginUser({email, password})
        localStorage.setItem("loggedIn", true)
        redirect(redirectUrl)
    } catch(err) {
        return err.message || "There was an error signing in"
    }
}

export function loader({request}) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    
    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()

    return <div>
        {errorMessage && <p>{errorMessage}</p>}
        {message && <p>{message}</p>}
        <h2>Sign in to view your List</h2>
        <Form method="post" replace>
            <input type="email" name="email" placeholder="abc@abc.com"></input>
            <input type="password" name="password" placeholder="*********"></input>
            <button disabled={navigation.state === "submitting"}>{navigation.state === "submitting" ? "Logging in..." : "Login"}</button>
        </Form>
    </div>
}