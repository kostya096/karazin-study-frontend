async function do_request(url, settings) {
    let response = await fetch(url, settings)
    console.log(response)
    let data = await response.json()
    let status = false
    if (response.status === 200) {
        status = true
    }
    return [status, data]
}


export async function loginUser(credentials) {
    return await do_request('http://127.0.0.1:5050/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
}


export async function getUserInfo(token) {
    return await do_request("http://localhost:5050/auth/verify", {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export async function registerUser(data) {
    return await do_request('http://127.0.0.1:5050/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
}