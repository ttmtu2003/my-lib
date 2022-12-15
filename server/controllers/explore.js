import UserDetails from "../models/UserDetails.js"
import { searchBooks } from "../models/Books.js"
import Library from "../models/Library.js"
import mongoose from "mongoose"


export const addToLibrary = async (req, res) => {
  const { userToken, bookId } = req.body.body
  try {
    const filter = { userToken: userToken, books: mongoose.Types.ObjectId(bookId) }

    const isInLibrary = await Library.exists(filter)
    if(isInLibrary)
      res.status(200).send({ message: "Book is already in library!" })
    else {
      await Library.create(filter)
      res.status(200).send({ message: "Successfully added book to library!" })
    }
  } catch (err) {
    res.status(404).json({message: err.message});
  }
}

// retrieve all books based on search keyword
export const getBooks = async (req, res) => {
  try {
    const details = await searchBooks(req.query.q)
    res.status(200).send({ booksData: details})
  } catch(e) {
    res.status(404).send({ message: e.message})
  }
}

