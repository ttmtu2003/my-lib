import express from 'express'
import { getBooks, addToLibrary } from '../controllers/explore.js'


const router = express.Router()

router.get('/', getBooks);
router.post('/book-detail', addToLibrary)

export default router