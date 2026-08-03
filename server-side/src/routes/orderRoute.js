import express from 'express';
import { createOrder, getSingleOrder } from '../controller/orderController.js';
import { requireAuth } from '@clerk/express';
import { orderLimiter } from '../middleware/validation.js';

const router = express.Router();
router
   .post('/create-order',orderLimiter,requireAuth(),createOrder)
   .get('/single-order/:id',getSingleOrder)
   ///.get('/list-product',getProducts)

export default router;