import Address from "../models/address.js";
import UserSchema from "../models/userSchema.js";

export const registerAddress = async (req,res,next)=>{
    const {name,phone,city,street} = req.body;
    const {userId} = req.auth();
    console.log(name,phone,city,street,userId);

    try {
      const findUserId = await UserSchema.findOne({
            where:{
                clerkId:userId
            }
        });
      if(!findUserId) return res.status(404).json({message:'user not found'});
      const register = await Address.create({
         userId : findUserId?.id,
         receiverName:name,
         phone,
         city,
         street
      });
      return res.status(201).json(register.id)
    } catch (error) {
      console.error(error);
      return res.status(500).json(error)
    }
}