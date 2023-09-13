const loginUser = async (email: string, password: string) => {
    console.log("loginUser", email, password)
    const payload = { user: { email, password } }

    const resp = await fetch("http://localhost:3001/users/sign_in", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        }
    })

    if (!resp.ok) {
        console.log("this wasnt ok", resp.statusText)
        return {
            error: resp.statusText
        }
    }

    const authorizationHeader = resp.headers.get("Authorization")

    if (!authorizationHeader) {
        return {
            error: "No user found"
        }
    }

    const token = authorizationHeader.replace("Bearer ", "")
    console.log("Token", token)

    /* const userData = await resp.json(); */

    // const jwtUser = {
    //     id: userData.id,
    //     email: userData.email
    // }

    return { token }
}

export { loginUser }
