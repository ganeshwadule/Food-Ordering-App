import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName : {
            type: 'string',
            require : true
        }
        ,
        email : {
            type: 'string',
            require : true
        }
        ,

        Contact : {
            type:"Number",
            require: true

        },

        orders : {
            type:Array,
            require:true
        }
    }
);