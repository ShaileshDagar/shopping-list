export async function loginUser(creds) {
    const email = creds.email
    const password = creds.password
    if(email !== "dagar.shailesh@gmail.com" && password !== "password")
        throw {
            message: "Invalid Credentials!"
    }
    return creds
}

export async function getUserList() {
    
}