import express from 'express';
import { requireAuth } from '@clerk/express';
import { initializePayment, verifyPayment } from '../controller/paymentController.js';

const router = express.Router();
router
   .post('/create-payment',initializePayment)
   .get("/verify/:tx_ref", verifyPayment);
   //.get('/',getAllCategory)

export default router;