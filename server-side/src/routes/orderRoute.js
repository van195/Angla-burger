import express from 'express';
import { createOrder, getAllOrders, getMorningOrders, getSingleOrder, updateTheStatus } from '../controller/orderController.js';
import { requireAuth } from '@clerk/express';
import { orderLimiter } from '../middleware/validation.js';

const router = express.Router();
router
   .post('/create-order',orderLimiter,requireAuth(),createOrder)
   .get('/today-orders',getMorningOrders)
   .get('/single-order/:id',getSingleOrder)
   .get('/getAllOrders',getAllOrders)
   .put('/change-status/:id',updateTheStatus)
   ///.get('/list-product',getProducts)

export default router;