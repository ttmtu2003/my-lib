import express from 'express'
import {getBooksInLibrary, getBookDetail, updateBookDetail, deleteBook, getBookStats} from '../controllers/myLib.js'

const router = express.Router()

router.get('/', getBooksInLibrary)
router.get('/book-detail', getBookDetail)
router.put('/book-detail', updateBookDetail)
router.delete('/book-detail', deleteBook)
router.get('/read-books', getBookStats)

export default router