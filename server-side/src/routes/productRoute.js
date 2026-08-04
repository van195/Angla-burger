import express from 'express';
import { createProduct, getProducts, getSingleProducts, getSingleProductsById } from '../controller/productController.js';

const router = express.Router();
router
   .post('/create-product',createProduct)
   .get('/list-product',getProducts)
   .get('/single-product',getSingleProducts)
   .get('/withOut-SearchSingle-product/:id',getSingleProductsById)
   //.put('/edit-product',getSingleProducts)

export default router;