import axios from 'axios'

export async function loginUser(username, password) {
  return await axios.get(`http://localhost:3030/`, { params: { username: username, password: password } })
  .then( res => {
    return res.data
  })
  .catch(console.error)
}


export async function signupUser(firstName, lastName, username, password) {
  let status
  await axios.post('http://localhost:3030/register', {
      crossDomain: true,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: "appliction/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: {
        firstName,
        lastName,
        username,
        password
      }
    })
    .then((res) => status = res.data )
    return status
}
