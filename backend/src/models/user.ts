import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    auth0Id:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        // required: true,
    },
    addressLine1:{
        type: String,
        // required: true,
    },
    city:{
        type: String,
        // required: true,
    },
    country:{
        type: String,
        // required: true,
    }
})

const User = mongoose.model('User',userSchema);
export default User;