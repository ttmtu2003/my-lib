import Library from "../models/Library.js"
import mongoose from "mongoose"

// Get all books in library controller
export const getBooksInLibrary = async (req, res) => {
  const { userToken } = req.query
  try {
    const books = await Library.find({ userToken: userToken }).populate('books', 'id title authors imageLinks')
    
    if(books) {
      res.status(200).send({ books: books })
    } else {
      res.status(200).send([])
    }
  } catch(err) {
    res.status(404).send({ message: err })
  }
}

export const getBookDetail = async (req, res) => {
  // console.log("BOOK ID", )
  const { userToken, bookId } = req.query
  try {
    const book = await Library.findOne({ userToken: userToken, books: mongoose.Types.ObjectId(bookId) })
    if(book) {
      res.status(200).send({ updatedBook: book })
    } else {
      res.status(200).send('')
    }
  } catch(err) {
    res.status(404).send({ message: err })
  }
}

export const updateBookDetail = async (req, res) => {
  const { userToken, bookId, rating, status, startDate, doneDate, comments } = req.body.body
  try {
    // find book with matching bookId and update status field
    const filter = { userToken: userToken, books: mongoose.Types.ObjectId(bookId) }
    const obj = { rating: rating, status: status, startDate: startDate, doneDate: doneDate, comment: comments }
    const options = {
      new: true,
      upsert: true
    }
    await Library.findOneAndUpdate(filter, obj, options)
    res.status(200).send({ message: "Successfully updated book detail" })
  } catch(err) {
    res.status(404).send({ message: err })
  }
}

export const deleteBook = async (req, res) => {
  const { userToken, id } = req.body
  try {
    const filter = { userToken: userToken, books: mongoose.Types.ObjectId(id) }
    await Library.deleteOne(filter)
    res.status(200).send({ message: "Successfully removed book from library" })
  } catch(err) {
    res.status(404).send({ message: err })
  }
  
}

export const getBookStats = async (req, res) => {
  const { userToken } = req.query
  try {
    const filter = { userToken: userToken, status: 'Finished' }
    const books = await Library.find(filter).populate('books', 'categories')
    res.status(200).send({ booksRead: books })
  } catch(err) {
    console.error(err)
    res.status(404).send({ message: err })
  }
}