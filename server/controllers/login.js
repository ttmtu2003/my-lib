import UserDetails from "../models/UserDetails.js"
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"

const login = async (req, res) => {
  const { username, password } = req.body.body
    const user = await UserDetails.findOne({ username })

    if(!user) return res.send({ status:"error", error: "Account not found." })
    console.log("user", user)
    if(await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({username: user.username}, process.env.JWT_SECRET)

      if(res.status(201)) {
        return res.send({ status: "ok", token: user.username })
      } else {
        return res.send({ status:"error" })
      }
    } else {
      return res.send({ status: 'error', error: 'Invalid login' })
    }
}

export default login