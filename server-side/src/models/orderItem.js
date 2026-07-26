import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Orders from "./orders.js";
import Product from "./Product.js";
 
const OrderItem = sequelize.define('orderItem',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    orderId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    priceAtPurchase:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
});
Orders.hasMany(OrderItem,{
    foreignKey:'orderId'
});
OrderItem.belongsTo(Orders,{
    foreignKey:'orderId'
})
Product.hasMany(OrderItem,{
    foreignKey:'productId'
});
OrderItem.belongsTo(Product,{
    foreignKey:'productId'
})
export default OrderItem;