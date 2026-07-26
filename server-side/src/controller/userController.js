import UserSchema from "../models/userSchema.js";
import { createClerkClient } from "@clerk/express";

const client = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
})
export const CreateAccount = async(req,res,next)=>{
    const {userId} = req.auth();
    const clerkUser = await client.users.getUser(userId);
    try {
        const email = clerkUser.emailAddresses?.[0]?.emailAddress;
        const existUser = await UserSchema.findOne({
            where:{
                clerkId:userId
            }
        });
        if(existUser) return res.status(401).json('this email exist please log in!')
        const createUser = await UserSchema.create({
            email:email,
            clerkId:userId
        });
        console.log('done');
        return res.status(201).json('done')
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message:'failed to create account!'
        });
    }
}