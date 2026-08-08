import express from 'express';
import { createProduct, getProducts, getSingleProducts, getSingleProductsById } from '../controller/productController.js';
import { imageKitAuth } from '../middleware/imageAuth.js';
import { requireAdmin, verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();
router
   .post('/create-product',verifyToken,requireAdmin,createProduct)
   .get("/imagekit/auth", verifyToken, requireAdmin, imageKitAuth)
   .get('/list-product',getProducts)
   .get('/single-product',getSingleProducts)
   .get('/withOut-SearchSingle-product/:id',getSingleProductsById)
   //.put('/edit-product',getSingleProducts)

export default router;