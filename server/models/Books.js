import mongoose from 'mongoose'
import axios from 'axios'
import _each from 'lodash'

const bookSchema = mongoose.Schema({
  id: String,
  title: {
    type: String,
    required: true,
    uppercase: true,
    text: true
  },
  authors: {
    type: [String],
    default: 'Unknown',
    text: true
  },
  publisher: {
    type: String,
    default: 'Unknown',
    text: true
  },
  publishedDate: {
    type: String,
    default: null,
    text: true
  },
  description: String,
  categories: [String],
  imageLinks: mongoose.Mixed
},
{
  collection: "Book"
})

let Book = mongoose.model("Book", bookSchema)
export default Book


const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes'

// every search results will be saved to the books db
export const searchBooks = async (q) => {
  const url = `${googleBooksAPI}?q=${q}`

  const data = (await axios.get(url)).data.items
  for (let book of data) {
    const bookObj = {
      id: book.id,
      title: book.volumeInfo?.title,
      authors: book.volumeInfo?.authors,
      publisher: book.volumeInfo?.publisher,
      publishedDate: book.volumeInfo?.publishedDate,
      description: book.volumeInfo?.description,
      categories: book.volumeInfo?.categories,
      imageLinks: book.volumeInfo?.imageLinks
    }
    
    const filter = { id: book.id }
    const options = {
      new: true,
      upsert: true
    }
    await Book.findOneAndUpdate(filter, bookObj, options)
  }
  // add index for all documents
  await Book.createIndexes({"$**": "text"})
  const regEx = new RegExp(q, "g")

  // return all documents that has any field that matches the search query
  return await Book.find({ $text: { $search: regEx } }) 
}
