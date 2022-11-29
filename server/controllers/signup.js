import UserDetails from "../models/UserDetails.js"
import bcrypt from 'bcryptjs'

const signup = async (req, res) => {
  const { firstName, lastName, username, password } = req.body.body
  const encryptedPassword = await bcrypt.hash(password, 10)
  try {
    const existedUser = await UserDetails.findOne({ username })
    
    if(existedUser) {
      return res.send({ status:"error", error: "Account already exists. Try login." })
    }
    await UserDetails.create({
      firstName,
      lastName,
      username,
      password: encryptedPassword
    })
    res.send({ status: "ok" })
  } catch(e) {
    res.status(404).json({message: e.message});
  }
}

export default signup
