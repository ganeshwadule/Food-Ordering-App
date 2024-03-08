import { Request , Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response)=>{

    try{

        const {auth0Id} = req.body;
        const existingUser = await User.findOne({auth0Id});


        if(existingUser){
            return res.status(200).send({"message":"User already exists"});
        }

        const newUser = new User(req.body);

        await newUser.save();

        res.status(201).json(newUser.toObject());

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Error while creating user"});
    }
}

export default {
    createCurrentUser,
}