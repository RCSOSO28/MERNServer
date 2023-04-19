import mongoose from "mongoose";
import moment from "moment-timezone";

const userSchema =  new mongoose.Schema(
    {
        firstName:{
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        lastName:{
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        email:{
            type: String,
            require: true,
            max: 50,
            unique: true,
        },
        password:{
            type: String,
            require: true,
            min: 5,
        },
        picturePath:{
            type: String,
            require: true,
            default: "",
        }
    },
    { timestamps: true}
);

const User = mongoose.model("User", userSchema);
export default User;