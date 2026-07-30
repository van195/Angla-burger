import express from 'express';
import { createOrder, getSingleOrder } from '../controller/orderController.js';
import { requireAuth } from '@clerk/express';

const router = express.Router();
router
   .post('/create-order',requireAuth(),createOrder)
   .get('/single-order/:id',getSingleOrder)
   ///.get('/list-product',getProducts)

export default router;