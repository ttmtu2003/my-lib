import express from 'express'
import login from '../controllers/login.js'

const router = express.Router()

router.get('/', login)

export default router