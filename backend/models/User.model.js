import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    email:{
        type :String,
        required: true,
        default:"arpit@abc.com"
    },
    Password:{
        type:String,
        required:true,
        default:"Simple@123"
    }
})

const UserModel = mongoose.Model("user",UserSchema)

export default UserModel