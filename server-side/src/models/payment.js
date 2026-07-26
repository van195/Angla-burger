import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Orders from "./orders.js";
 
const  Payment= sequelize.define('payment',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    orderId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    provider:{
        type:DataTypes.STRING,
        defaultValue:'tele birr'
    },
    transactionId:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    status:{
       type:DataTypes.ENUM(
        "pending",
        "paid",
        "failed",
        "refunded"
        ),
       defaultValue:"pending"
    },
    amount:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
});
Orders.hasOne(Payment,{
    foreignKey:'orderId'
});
Payment.belongsTo(Orders,{
    foreignKey:'orderId'
})
export default Payment;