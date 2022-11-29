import axios from 'axios'

export async function searchBook(searchQuery) {
  return await axios.get(`http://localhost:3030/explore?q=${searchQuery}`)
  .then( res => {
    console.log("SEARCH", res)
    return res.data
  })
}

export async function addToCollection(userToken, bookId) {
  console.log("USER", userToken)
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
  .then(res => {
    console.log("RES DATA IN APIFUNC", res.data)
    return res
  })
}