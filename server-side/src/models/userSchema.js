import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';
const UserSchema = sequelize.define('user',{
   id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
   },
   clerkId:{
        type:DataTypes.STRING,
        allowNull:false
   },
   email:{
        type:DataTypes.TEXT,
        unique:true,
        allowNull:false
   },
   loyalCustomer:{
       type:DataTypes.BOOLEAN,
       defaultValue:false
   },
   role: {
        type:DataTypes.ENUM("customer","admin"),
        defaultValue:"customer"
  }
});
export default UserSchema;
