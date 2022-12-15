import UserDetails from "../models/UserDetails.js"
import bcrypt from "bcryptjs"

const login = async (req, res) => {
  const { username, password } = req.query
    const user = await UserDetails.findOne({ username })

    if(!user) return res.send({ status:"error", error: "Account not found." })

    if(await bcrypt.compare(password, user.password)) {

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