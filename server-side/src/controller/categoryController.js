import Category from "../models/Category.js"
import Product from "../models/Product.js";

export const createCategory = async(req,res,next)=>{
     const {name}= req.body;
    try {
        const create = await Category.create({
            name:name
        })
       return res.status(201).json('done');
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}
export const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.findAll({
            include: [
                {
                    model: Product,
                    as: "products"
                }
            ]
        });

        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};