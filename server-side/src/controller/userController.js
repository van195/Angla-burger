import OrderItem from "../models/orderItem.js";
import Orders from "../models/orders.js";
import Product from "../models/Product.js";
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
export const getAllUsers =async (req,res)=>{
    try {
        const fetch = await UserSchema.findAll({});
        res.status(200).json(fetch);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}
export const getSingleUsers =async (req,res)=>{
    const {id}= req.params;
    try {
        const fetch = await UserSchema.findOne({
            where:{
                id
            },
            include:{
                model:Orders,
                include: [
                {
                    model: OrderItem,
                    include: [
                        {
                            model: Product,
                            attributes: ["id", "name", "price"], 
                        },
                    ] 
                },
            ]
            }
        });
        res.status(200).json(fetch);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);

    }
}


export const dashboardStats = async (req, res) => {
    try {
        const [users, orders, earnings] = await Promise.all([
            UserSchema.count(),
            Orders.count(),
            Orders.sum("total"),
        ]);

        res.json({
            users,
            orders,
            earnings: earnings || 0,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};