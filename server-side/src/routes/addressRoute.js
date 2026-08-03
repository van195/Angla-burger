import express from 'express';
import { registerAddress } from '../controller/addressController.js';
import { requireAuth } from '@clerk/express';
import { orderLimiter } from '../middleware/validation.js';

const router = express.Router();
router
   .post('/create-address',orderLimiter,requireAuth(),registerAddress)
   //.get('/',getAllCategory)

export default router;