import express from 'express';
import { createOrder } from '../controller/orderController.js';
import { requireAuth } from '@clerk/express';

const router = express.Router();
router
   .post('/create-order',requireAuth(),createOrder)
   ///.get('/list-product',getProducts)
   ///.get('/single-product',getSingleProducts)

export default router;