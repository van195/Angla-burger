import express from 'express';
import { createProduct, getProducts, getSingleProducts } from '../controller/productController.js';

const router = express.Router();
router
   .post('/create-product',createProduct)
   .get('/list-product',getProducts)
   .get('/single-product',getSingleProducts)
   //.put('/edit-product',getSingleProducts)

export default router;