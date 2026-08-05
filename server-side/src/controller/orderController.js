import sequelize from "../config/db.js";
import Address from "../models/address.js";
import OrderItem from "../models/orderItem.js";
import Orders from "../models/orders.js";
import Product from "../models/Product.js";
import UserSchema from "../models/userSchema.js";
import { Op } from "sequelize";
import { getSubtotalBill, getTaxBill, getTotalBill } from "../util/calculateTotal.js";

export const createOrder = async (req,res,next)=>{
    const transaction = await sequelize.transaction();
    const {FoodList,addressId}= req.body;
    console.log('we got both ',FoodList,addressId , );
    const { userId } = req.auth();
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
export const getSingleOrder = async (req,res,next)=>{
    const {id} = req.params;
   try {
    const orderDetail = await Orders.findOne({
        where:{
            id:id
        },
        include:{
            model:OrderItem,
            include: [
                {
                    model: Product,
                    attributes: ["id", "name", "price"], 
                },
            ]
        }
    });
    res.status(200).json(orderDetail)
   } catch (error) {
     console.log(error)
    res.status(500).json({ message: error.message }); 
   }

}
export const getAllOrders = async (req,res,next)=>{
   try {
    const orderDetail = await Orders.findAll({
        include: [
                {
                    model: OrderItem,
                    include: [
                        {
                            model: Product
                        }
                    ]
                },
                {
                    model: Address
                }
            ]
    });
    res.status(200).json(orderDetail)
   } catch (error) {
     console.log(error)
    res.status(500).json({ message: error.message }); 
   }

}
export const updateTheStatus = async (req,res,next)=>{
    const {id} = req.params;
   try {
    const TheOrder = await Orders.findByPk(id);
        await TheOrder.update(
        {
          showStatus:'complete',
        },
    );
    if(TheOrder === 0){
        return res.status(500).json('order not Found')
    }
    res.status(200).json(TheOrder)
   } catch (error) {
     console.log(error)
    res.status(500).json({ message: error.message }); 
   }

}


export const getMorningOrders = async (req, res) => {
    try {
        const today = new Date();

        // Today at 6:00 AM
        const start = new Date(today);
        const end = new Date(today);
        end.setHours(17, 0, 0, 0);
        start.setHours(6, 0, 0, 0);

        // Today at 1:00 PM
    
        const orders = await Orders.findAll({
            where: {
                paymentStatus: "paid",
                createdAt: {
                    [Op.between]: [start, end],
                },
            },
            include: [
                {
                    model: OrderItem,
                    include: [Product],
                },
                {
                    model: Address,
                },
            ],
            order: [["createdAt", "DESC"]],
        });
        res.status(200).json(orders);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};
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