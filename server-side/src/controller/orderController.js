import sequelize from "../config/db.js";
import OrderItem from "../models/orderItem.js";
import Orders from "../models/orders.js";
import Product from "../models/Product.js";
import UserSchema from "../models/userSchema.js";
import { getSubtotalBill, getTaxBill, getTotalBill } from "../util/calculateTotal.js";

export const createOrder = async (req,res,next)=>{
    const transaction = await sequelize.transaction();
    const {FoodList,addressId}= req.body;
    console.log('we got both ',FoodList,addressId , );
    const {userId} = req.auth();
    console.log('and fucking id',userId);
    const subtotal = await getSubtotalBill(FoodList);
        console.log('the subtotal',subtotal);
    const tax = getTaxBill(subtotal);
       console.log('and fucking tax',tax);
    const total =  getTotalBill (subtotal,tax,100,0)
      console.log('and fucking total ',total);
    try {
        const findUserId = await UserSchema.findOne({
                    where:{
                        clerkId:userId
                    }
                });
                console.log('user not found');
        if(!findUserId) return res.status(404).json({message:'user not found'});
                console.log('and fucking user  found');
        const order = await Orders.create({
          userId:findUserId.id,
          subtotal:subtotal,
          deliveryFee: 100,
          tax:tax,
          discount:0,
          total:total,
          paymentMethod:'tele birr',
          addressId:addressId
        }, { transaction });
        console.log('and fucking order done');
        for (const item of FoodList) {
            const products = await Product.findByPk(item.id)
            if (!products) {
              throw new Error("Product not found");
            }
            await OrderItem.create(
                {
                    orderId: order.id,
                    productId: item.id,
                    quantity: item.quantity,
                    priceAtPurchase: products.price
                },
                { transaction }
            );
        }
        console.log('order item done')
        await transaction.commit();

        res.status(201).json(order);
    } catch (error) {
    await transaction.rollback();
     console.log(error)
    res.status(500).json({ message: error.message }); 
   }

}
/*const transaction = await sequelize.transaction();

try {
    const order = await Orders.create({...}, { transaction });

    for (const item of items) {
        await OrderItem.create(
            {
                orderId: order.id,
                productId: item.productId,
                quantity: item.quantity,
                priceAtPurchase: ...
            },
            { transaction }
        );
    }

    await transaction.commit();

    res.status(201).json(order);
} catch (err) {
    await transaction.rollback();

    res.status(500).json({ message: err.message });
}*/