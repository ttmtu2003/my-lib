import mongoose from 'mongoose' 

const UserDetailsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
},
{
  collection: "UserDetails"
}
)

const UserDetails = mongoose.model("UserDetails", UserDetailsSchema)

export default UserDetails