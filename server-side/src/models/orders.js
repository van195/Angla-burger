import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import UserSchema from "./userSchema.js";
 
const Orders = sequelize.define('order',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    subtotal:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    deliveryFee:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    tax:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    discount:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    total:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    showStatus: {
        type:DataTypes.ENUM("complete","pending","cancel"),
        defaultValue:"pending"
    },
    paymentMethod:{
        type:DataTypes.STRING,
        allowNull:false
    },
    paymentStatus:{
        type:DataTypes.ENUM('paid','unpaid','failed'),
        defaultValue:'unpaid'
    },
    addressId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

});
UserSchema.hasMany(Orders,{
    foreignKey:'userId'
});
Orders.belongsTo(UserSchema,{
    foreignKey:'userId'
})
export default Orders;
