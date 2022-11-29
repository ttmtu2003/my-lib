import express from 'express'
import { verifyToken, getBooks, addToCollection } from '../controllers/explore.js'


const router = express.Router()

// router.post('/', verifyToken)
router.get('/', getBooks);
router.post('/book-detail', addToCollection)

export default router