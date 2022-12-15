import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import loginRoutes from './routes/login.js'
import signupRoutes from './routes/signup.js'
import exploreRoutes from './routes/explore.js'
import myLibRoutes from './routes/mylib.js'

import dotenv from 'dotenv'
dotenv.config(); 

mongoose.connect(process.env.DATABASE_URL)

const app = express();

app.use(express.json())

app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/', loginRoutes)
app.use('/register', signupRoutes)
app.use('/explore', exploreRoutes)
app.use('/mylibrary', myLibRoutes)


app.listen(process.env.PORT, () => {
  // eslint-disable-next-line
  console.log(`Listening at http://localhost:${process.env.PORT}`)
})