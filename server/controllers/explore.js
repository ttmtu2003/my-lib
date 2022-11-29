import UserDetails from "../models/UserDetails.js"
import jwt from 'jsonwebtoken'
import { searchBooks } from "../models/Books.js"
import Library from "../models/Library.js"
import mongoose from "mongoose"

export const verifyToken = async (req, res) => {
  const { token } = req.body.body
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    const username = user.username
    await UserDetails.findOne({ username: username })
    .then((data) =>
      res.send({ status: "ok", data: data })
    )
  } catch(e) {
    res.send({ status: "error" })
  }
}

export const addToCollection = async (req, res) => {
  const { userToken, bookId} = req.body.body
  try {
    const filter = { userToken: userToken, books: mongoose.Types.ObjectId(bookId) }
    const options = {
      new: true,
      upsert: true
    }

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
    res.send({ status: "ok", booksData: details})
  } catch(e) {
    res.send({ status: "error", message: e.message})
  }
}

