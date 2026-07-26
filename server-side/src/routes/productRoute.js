import express from 'express';
import { createProduct, getProducts } from '../controller/productController.js';

const router = express.Router();
router
   .post('/create-product',createProduct)
   .get('/list-product',getProducts)

export default router;