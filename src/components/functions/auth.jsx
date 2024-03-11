export async function loginUser(credentials) {
    let response = await fetch('http://127.0.0.1:5050/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    console.log(response)
    let data = await response.json()
    let status = false
    if (response.status === 200) {
        status = true
    }
    return [status, data]
}


export async function getUserInfo(token) {
    let response = await fetch("http://localhost:5050/auth/verify", {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    let data = await response.json()

    let status = false
    if (response.status === 200) {
        status = true
    }

    return [status, data]
}
