import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Product from "./Product.js";
 
const Category = sequelize.define('category',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    image:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});
Category.hasMany(Product,{
    foreignKey:'categoryId',
    as:'products'
});
Product.belongsTo(Category,{
    foreignKey:'categoryId',
    as:'category'
});
 
export default Category;