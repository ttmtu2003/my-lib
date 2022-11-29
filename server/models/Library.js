import mongoose from 'mongoose'

const librarySchema = new mongoose.Schema({
  userToken: String,
  books: {
    type: mongoose.Schema.ObjectId,
    ref: 'Book'
  },
  rating: { type: Number, min: 0, max: 5 },
  status: String,
  startDate: { type: Date, default: Date.now },
  doneDate: { type: Date, default: Date.now },
  comment: String,
},
{
  collection: "Library"
})

const Library = mongoose.model("Library", librarySchema)

export default Library


