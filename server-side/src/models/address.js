import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import UserSchema from "./userSchema.js";
 
const Address = sequelize.define('address',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userId:{
        type:DataTypes.UUID,
        allowNull:false
    },
    receiverName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    street:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});
UserSchema.hasMany(Address,{
    foreignKey:'userId'
});
Address.belongsTo(UserSchema,{
    foreignKey:'userId'
})
export default Address;