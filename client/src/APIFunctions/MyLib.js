import axios from 'axios'

export async function getAllBookInLibrary(token) {
  return await axios.get(`http://localhost:3030/mylibrary`, { params: { userToken: token } })
  .then( res => res.data)
  .catch(console.error)
}

// get book detail from DB
export async function getLibBookDetail(token, id) {
  return await axios.get(`http://localhost:3030/mylibrary/book-detail/`, { params: { userToken: token, bookId: id } })
  .then( res => {
    return res.data.updatedBook
  })
  .catch(console.error)
}

// update book detail
export async function updateBookDetail(userToken, bookId, rating, status, startDate, doneDate, comments) {
  let data
  return await axios.put('http://localhost:3030/mylibrary/book-detail/', {
    body: {
      userToken,
      bookId,
      rating,
      status,
      startDate,
      doneDate,
      comments
    }
  })
  .then(res => data = res)
  return data
}

// delete book from library
export async function deleteBook(token, bookId) {
  return await axios.delete('http://localhost:3030/mylibrary/book-detail/', { data: { userToken: token, id: bookId }})
  .then((res) => res)
}

export async function getReadBooks(token) {
  return await axios.get('http://localhost:3030/mylibrary/read-books', { params: { userToken: token} })
  .then((res) => res.data)
  .catch(console.error)
}