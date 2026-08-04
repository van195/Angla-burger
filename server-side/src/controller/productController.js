import Category from "../models/Category.js";
import Product from "../models/Product.js"
import { Op } from "sequelize";
export const createProduct = async(req,res,next)=>{
    try {
        const {name,description,price,categoryId}=req.body;
        const create = await Product.create({
            name,
            description,
            price,
            categoryId,
        })
        return res.status(201).json('done');
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}
export const getProducts = async(req,res,next)=>{
    try {
        const fetch = await Product.findAll({});
        return res.status(200).json(fetch);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}
export const getSingleProducts = async(req,res,next)=>{
     const {search}= req.query;
      
    try {
       const fetch = await Product.findAll({
        where: {
            name: {
                [Op.iLike]: `%${search}%`
            }
        }
       });       
       if(fetch.length === 0) return res.status(200).json([]);
        return res.status(200).json(fetch);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}
export const getSingleProductsById = async(req,res,next)=>{
     const {id}= req.params;
    try {
       const fetch = await Product.findOne({
        where:{
            id
        },
        include:{
            model:Category,
            as:'category'
        }
       })    
       if(fetch.length === 0) return res.status(200).json([]);
        return res.status(200).json(fetch);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}