import axios from 'axios'

export async function searchBook(searchQuery) {
  return await axios.get(`http://localhost:3030/explore?q=${searchQuery}`)
  .then( res => {
    return res
  })
}

export async function addToLibrary(userToken, bookId) {
  let data
  await axios.post(`http://localhost:3030/explore/book-detail`, {
    mode: 'cors',
    crossDomain: true,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Accept: "appliction/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: {
      userToken,
      bookId
    }
  })
  .then(res => data = res)
  return data
}